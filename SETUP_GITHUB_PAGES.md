# Setup GitHub Pages for Location Tracker Plugin

## Option 1: Create a New Repository (Recommended)

Since your current repo is connected to Loqode's repository, you should create your own:

### Step 1: Create New GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"+"** → **"New repository"**
3. Repository name: `glide-location-tracker` (or your preferred name)
4. Description: "Real-Time Location Tracker plugin for Glide Apps"
5. Make it **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Update Git Remote

In your terminal, run:

```bash
cd /Users/xaviigna/html2pdf

# Remove the old remote
git remote remove origin

# Add your new repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/glide-location-tracker.git

# Verify the remote
git remote -v
```

### Step 3: Commit and Push

```bash
# Add all files
git add .

# Commit changes
git commit -m "Real-Time Location Tracker plugin for Glide"

# Push to your repository
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/glide-location-tracker`
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub Pages to build

### Step 5: Access Your Plugin

Your plugin will be available at:
```
https://YOUR_USERNAME.github.io/glide-location-tracker/
```

For example:
- Username: `xaviigna`
- Repository: `glide-location-tracker`
- URL: `https://xaviigna.github.io/glide-location-tracker/`

## Option 2: Fork and Rename (Alternative)

If you want to keep the connection to the original:

1. **Fork** the Loqode repository on GitHub
2. **Rename** the fork to your preferred name
3. Enable GitHub Pages in your fork's settings
4. Use your fork's GitHub Pages URL

## Use in Glide

1. In Glide, create an **Experimental Code Column**
2. Paste your GitHub Pages URL:
   ```
   https://YOUR_USERNAME.github.io/glide-location-tracker/
   ```
3. Configure parameters:
   - `enableTracking`: "true"
   - `updateInterval`: "1000"
   - `mapZoom`: "16"
   - `showHistory`: "false"
4. Add a **Web Embed** component
5. Select the code column as the source

## Quick Commands

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual values:

```bash
# Remove old remote
git remote remove origin

# Add your repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git add .
git commit -m "Real-Time Location Tracker plugin"
git push -u origin main
```

## Verify Files

Make sure these files are in your repository:
- ✅ `index.html`
- ✅ `driver.js`
- ✅ `function.js`
- ✅ `glide.json`
- ✅ `readme.md`
- ✅ `.gitignore`

## Test Your Plugin

1. Open your GitHub Pages URL in a browser
2. You should see: "Real-Time Location Tracker for Glide Apps by @xaviigna"
3. Check browser console for any errors
4. Test in Glide by adding the URL to an Experimental Code Column

## Update Your Plugin

When you make changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

GitHub Pages will automatically update (takes 1-2 minutes).

## Troubleshooting

### 404 Error?
- Wait a few minutes after enabling GitHub Pages
- Check that files are in the root directory
- Verify GitHub Pages is enabled in Settings → Pages

### Plugin Not Loading?
- Check browser console for errors
- Verify all file paths are correct
- Ensure `index.html` is in the root

### Location Not Working?
- Requires HTTPS (GitHub Pages provides this)
- User must grant location permission
- Check browser compatibility (modern browsers only)

---

That's it! Your plugin is now live on GitHub Pages! 🚀

