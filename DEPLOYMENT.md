# Deploying to GitHub Pages

This guide will help you deploy your Real-Time Location Tracker plugin to GitHub Pages, just like Marco's HTML to PDF plugin at https://loqode.github.io/html2pdf/

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right, then select **"New repository"**
3. Name your repository (e.g., `realtime-location-tracker` or `glide-location-tracker`)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have files)
6. Click **"Create repository"**

## Step 2: Initialize Git and Push Files

Open your terminal in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Real-Time Location Tracker plugin"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select **"main"** branch and **"/ (root)"** folder
6. Click **"Save"**
7. Wait a few minutes for GitHub Pages to build

## Step 4: Access Your Plugin

Your plugin will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

For example:
- If your username is `xaviigna` and repo is `location-tracker`
- URL would be: `https://xaviigna.github.io/location-tracker/`

## Step 5: Use in Glide

1. In your Glide app, create an **Experimental Code Column**
2. Paste your GitHub Pages URL: `https://YOUR_USERNAME.github.io/REPO_NAME/`
3. Configure the parameters:
   - **enableTracking**: "true" or "false"
   - **updateInterval**: "1000" (milliseconds)
   - **mapZoom**: "16" (1-19)
   - **showHistory**: "true" or "false"
4. Add a **Web Embed** component to your layout
5. Select the code column as the source

## File Structure

Your repository should have these files:
```
├── index.html      (Entry point)
├── driver.js       (Communication bridge)
├── function.js     (Main logic)
├── glide.json      (Plugin configuration)
└── readme.md       (Documentation)
```

## Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS records in your domain provider
3. Update GitHub Pages settings to use custom domain

## Updating Your Plugin

To update your plugin:

```bash
# Make changes to your files
# Then commit and push
git add .
git commit -m "Update: description of changes"
git push
```

GitHub Pages will automatically update (may take a few minutes).

## Troubleshooting

### Plugin not loading?
- Check that all files are in the root directory
- Verify `index.html` loads correctly in browser
- Check browser console for errors
- Ensure GitHub Pages is enabled

### Location not working?
- Requires HTTPS (GitHub Pages provides this)
- User must grant location permission
- Check browser compatibility

### CORS errors?
- GitHub Pages should handle CORS automatically
- If issues persist, check file paths are correct

## Example Repository Structure

```
your-repo/
├── .gitignore
├── index.html
├── driver.js
├── function.js
├── glide.json
└── readme.md
```

That's it! Your plugin is now live on GitHub Pages and ready to use in Glide! 🚀

