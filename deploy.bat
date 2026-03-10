@echo off
echo ============================================
echo   Sai Steel - GitHub + Vercel Deploy Script  
echo ============================================
echo.

:: ─── Step 1: Ensure images are in public/assets ───────────────
echo [1/5] Checking product images...
if not exist "public\assets\jindal-pipes.png" (
  echo   Copying images from brain folder...
  node -e "const fs=require('fs'),path=require('path');const b='C:/Users/amanr/.gemini/antigravity/brain/a1f3af61-3e49-4b40-a470-7e227eb9ff3b';fs.mkdirSync('public/assets',{recursive:true});[['media__1773157144790.png','jindal-pipes.png'],['media__1773157309595.jpg','decorative-pillars.jpg'],['media__1773157348219.png','sai-steel-logo.png'],['media__1773157570661.png','staircase-railing.png'],['media__1773157586828.png','steel-door.png']].forEach(([s,d])=>fs.copyFileSync(path.join(b,s),'public/assets/'+d));console.log('Images ready!')"
) else (
  echo   Images already present. OK.
)
echo.

:: ─── Step 2: Git commit ──────────────────────────────────────
echo [2/5] Staging and committing all files...
git add -A
git commit -m "Sai Steel website v1 - SEO, real product photos, updated hours, community-driven content"
echo.

:: ─── Step 3: Add GitHub remote ──────────────────────────────
echo [3/5] Setting up GitHub remote...
echo.
echo   Please enter your GitHub repository URL.
echo   (Create an empty repo at https://github.com/new first)
echo   Example: https://github.com/amanraj/sai-steel.git
echo.
set /p REPO_URL="  GitHub repo URL: "
git remote add origin %REPO_URL%
echo   Remote added: %REPO_URL%
echo.

:: ─── Step 4: Push to GitHub ──────────────────────────────────
echo [4/5] Pushing to GitHub...
git push -u origin main
if errorlevel 1 (
  echo   Push failed on 'main'. Trying 'master'...
  git push -u origin master
)
echo.

:: ─── Step 5: Deploy with Vercel ──────────────────────────────
echo [5/5] Deploying to Vercel...
where vercel >nul 2>&1
if errorlevel 1 (
  echo   Installing Vercel CLI...
  npm install -g vercel
)
vercel --prod --yes
echo.
echo ============================================
echo   Deploy complete! Check Vercel dashboard.
echo ============================================
pause
