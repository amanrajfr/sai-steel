#!/usr/bin/env pwsh
# Sai Steel — One-click GitHub + Vercel Deploy
# Double-click to run, or run in PowerShell

$ErrorActionPreference = "Continue"
$ProjectDir = $PSScriptRoot

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Sai Steel - GitHub + Vercel Deploy    " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $ProjectDir

# ─── Step 1: Git commit ────────────────────────────────────────
Write-Host "[1/4] Committing all files to git..." -ForegroundColor Yellow
git add -A
$commitResult = git commit -m "Sai Steel v1: SEO, real product photos, 9AM-7:30PM hours, 8 products, community-driven content" 2>&1
Write-Host $commitResult
Write-Host "  ✓ Committed!" -ForegroundColor Green
Write-Host ""

# ─── Step 2: Create GitHub repo ────────────────────────────────
Write-Host "[2/4] Setting up GitHub repository..." -ForegroundColor Yellow
$ghInstalled = Get-Command gh -ErrorAction SilentlyContinue
if ($ghInstalled) {
    Write-Host "  GitHub CLI found. Creating repo..." -ForegroundColor Gray
    $repoResult = gh repo create sai-steel --public --description "Sai Steel and Engineering Works - Premium steel distributor in Patna, Bihar" --source=. --remote=origin --push 2>&1
    Write-Host $repoResult
    Write-Host "  ✓ Repo created and pushed!" -ForegroundColor Green
} else {
    Write-Host "  GitHub CLI not found." -ForegroundColor Gray
    Write-Host ""
    Write-Host "  Please:" -ForegroundColor White
    Write-Host "  1. Go to https://github.com/new" -ForegroundColor White
    Write-Host "  2. Create repo named 'sai-steel' (public, no README)" -ForegroundColor White
    Write-Host "  3. Copy the HTTPS URL (e.g. https://github.com/yourname/sai-steel.git)" -ForegroundColor White
    Write-Host ""
    $repoUrl = Read-Host "  Paste your GitHub repo URL here"
    git remote remove origin 2>$null
    git remote add origin $repoUrl
    git branch -M main
    git push -u origin main
    Write-Host "  ✓ Pushed to GitHub!" -ForegroundColor Green
}
Write-Host ""

# ─── Step 3: Deploy to Vercel ──────────────────────────────────
Write-Host "[3/4] Deploying to Vercel..." -ForegroundColor Yellow
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "  Installing Vercel CLI..." -ForegroundColor Gray
    npm install -g vercel
}
Write-Host "  Running Vercel deploy..." -ForegroundColor Gray
vercel --prod --yes
Write-Host ""
Write-Host "  ✓ Deployed to Vercel!" -ForegroundColor Green
Write-Host ""

# ─── Done! ─────────────────────────────────────────────────────
Write-Host "========================================" -ForegroundColor Green
Write-Host "  All done! Your site is live.          " -ForegroundColor Green
Write-Host "  Check https://vercel.com/dashboard    " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
