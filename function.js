window.function = async function (prompt, apiKey, model, temperature, maxTokens) {
	// DYNAMIC VALUES
	prompt = prompt?.value ?? "";
	apiKey = apiKey?.value ?? "";
	model = model?.value ?? "gpt-4o-mini"; // OpenAI default
	temperature = temperature?.value ? parseFloat(temperature.value) : 0.7;
	maxTokens = maxTokens?.value ? parseInt(maxTokens.value) : 500;
	
	// Validate inputs
	if (!prompt || prompt.trim() === "") {
		return "Error: Prompt is required";
	}
	
	if (!apiKey || apiKey.trim() === "") {
		return "Error: API Key is required";
	}
	
	// Determine which API to use based on model
	const isAnthropic = model.startsWith("claude") || model.startsWith("anthropic");
	const isOpenAI = !isAnthropic;
	
	let apiUrl = "";
	let headers = {};
	let body = {};
	
	if (isAnthropic) {
		// Anthropic Claude API
		apiUrl = "https://api.anthropic.com/v1/messages";
		headers = {
			"Content-Type": "application/json",
			"x-api-key": apiKey,
			"anthropic-version": "2023-06-01"
		};
		body = {
			model: model,
			max_tokens: maxTokens,
			temperature: temperature,
			messages: [
				{
					role: "user",
					content: prompt
				}
			]
		};
	} else {
		// OpenAI API
		apiUrl = "https://api.openai.com/v1/chat/completions";
		headers = {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${apiKey}`
		};
		body = {
			model: model,
			messages: [
				{
					role: "user",
					content: prompt
				}
			],
			temperature: temperature,
			max_tokens: maxTokens
		};
	}
	
	try {
		const response = await fetch(apiUrl, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(body)
		});
		
		if (!response.ok) {
			const errorData = await response.json().catch(() => ({ error: { message: response.statusText } }));
			return `Error: ${errorData.error?.message || `HTTP ${response.status}`}`;
		}
		
		const data = await response.json();
		
		// Extract response based on API
		if (isAnthropic) {
			// Anthropic response format
			return data.content?.[0]?.text || data.content?.[0] || "No response generated";
		} else {
			// OpenAI response format
			return data.choices?.[0]?.message?.content || data.choices?.[0]?.text || "No response generated";
		}
	} catch (error) {
		return `Error: ${error.message || "Failed to call AI API"}`;
	}
};

