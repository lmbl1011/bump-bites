# Bump Bites

This folder is the hosting-ready static web app version.

## Files
- `index.html` → app shell
- `styles.css` → styling
- `app.js` → app logic
- `manifest.json` → install metadata
- `vercel.json` → simple Vercel config
- `netlify.toml` → simple Netlify config

## Fast deploy options

### Vercel
1. Make a free Vercel account.
2. Create a new project.
3. Drag this entire folder into the deploy area, or upload the zip contents.
4. Wait for deployment.
5. Open the public link in Safari.
6. Tap Share → Add to Home Screen.

### Netlify
1. Make a free Netlify account.
2. Go to Add new site → Deploy manually.
3. Drag this folder into the upload area.
4. Wait for the public link.
5. Open the link in Safari.
6. Tap Share → Add to Home Screen.

### GitHub Pages
1. Create a GitHub repo.
2. Upload all files in this folder.
3. In repo settings, enable Pages from the main branch root.
4. Open the Pages URL in Safari.
5. Tap Share → Add to Home Screen.

## Notes
- Data is saved in localStorage on the device/browser being used.
- If you clear browser storage, the logged data will be removed.
- Photo entries save the photo locally in browser storage, so very large photo usage may eventually fill storage.
