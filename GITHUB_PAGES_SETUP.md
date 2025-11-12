# GitHub Pages Setup - Almost Done! 🚀

Your files are committed and ready! You just need to authenticate and push to GitHub.

## Step 1: Push to GitHub

You have two options:

### Option A: Use GitHub Desktop (Easiest)

1. Download [GitHub Desktop](https://desktop.github.com/) if you don't have it
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select `/Users/xaviigna/html2pdf`
5. Click "Publish repository"
6. Make sure it's set to your repository: `xaviigna/-glide-location-tracker`
7. Click "Publish repository"

### Option B: Use Personal Access Token (Command Line)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it: "Glide Location Tracker"
4. Select scope: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)

Then run:
```bash
cd /Users/xaviigna/html2pdf
git push -u origin main
```

When prompted:
- Username: `xaviigna`
- Password: Paste your personal access token (not your GitHub password)

### Option C: Use SSH (Recommended for future)

1. Generate SSH key (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. Add SSH key to GitHub:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste your key and save

3. Update remote to use SSH:
   ```bash
   git remote set-url origin git@github.com:xaviigna/-glide-location-tracker.git
   git push -u origin main
   ```

## Step 2: Enable GitHub Pages

Once your code is pushed:

1. Go to your repository: https://github.com/xaviigna/-glide-location-tracker
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub Pages to build

## Step 3: Access Your Plugin

Your plugin will be available at:
```
https://xaviigna.github.io/-glide-location-tracker/
```

⚠️ **Note**: The repository name has a dash prefix (`-glide-location-tracker`), which might cause issues. The GitHub Pages URL will be:
```
https://xaviigna.github.io/-glide-location-tracker/
```

If you want a cleaner URL, you could rename the repository to `glide-location-tracker` (without the dash prefix).

## Step 4: Use in Glide

1. In Glide, create an **Experimental Code Column**
2. Paste your GitHub Pages URL:
   ```
   https://xaviigna.github.io/-glide-location-tracker/
   ```
3. Configure parameters:
   - `enableTracking`: "true"
   - `updateInterval`: "1000"
   - `mapZoom`: "16"
   - `showHistory`: "false"
4. Add a **Web Embed** component
5. Select the code column as the source

## Files Ready

✅ `index.html` - Entry point  
✅ `driver.js` - Communication bridge  
✅ `function.js` - Location tracking logic  
✅ `glide.json` - Plugin configuration  
✅ `readme.md` - Documentation  
✅ `.gitignore` - Git ignore file  

All files are committed and ready to push!

## Troubleshooting

### Authentication Failed?
- Use GitHub Desktop (easiest)
- Or set up a Personal Access Token
- Or use SSH authentication

### 404 Error on GitHub Pages?
- Wait a few minutes after enabling
- Check that files are in the root directory
- Verify GitHub Pages is enabled in Settings → Pages

### Repository Name with Dash?
- The dash prefix (`-glide-location-tracker`) works but creates a longer URL
- Consider renaming the repository to `glide-location-tracker` for a cleaner URL
- GitHub Pages will update automatically after renaming

## Next Steps

1. ✅ Authenticate and push to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Test your plugin URL
4. ✅ Use in Glide!

Your plugin is almost ready! Just push to GitHub and enable Pages! 🚀

