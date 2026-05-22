# PermitIQ Boston

AI-powered Boston building permit advisor. Helps residents and contractors identify zoning variances, navigate the ZBA process, and appeal ISD permit denials — without needing a lawyer or consultant for every question.

---

## What it does

**Plan Analysis tab** — Upload construction or addition plans (PDF, images). The AI checks every Boston zoning standard (FAR, setbacks, height, lot coverage, parking, use), identifies every variance required with the specific Zoning Code article, and generates a step-by-step ZBA action plan with hardship arguments.

**Denial Appeal tab** — Upload an ISD refusal letter and original plans. The AI breaks down every violation, determines which can be cured by redesign (no ZBA needed), drafts the ZBA appeal language, and produces a complete hearing strategy.

---

## Tech stack

- **Backend**: Node.js + Express, Anthropic Claude API, pdf-parse for text extraction, multer for file uploads
- **Frontend**: React (Create React App)
- **AI**: Claude claude-opus-4-5 with vision — reads both digital PDFs and image-based plans/letters

---

## Local development

### 1. Prerequisites

- Node.js 18+ installed
- An Anthropic API key from https://console.anthropic.com/settings/keys

### 2. Install

```bash
npm install
npm run install:all
```

### 3. Configure API key

```bash
npm run setup
# Then open server/.env and replace the placeholder with your real key:
# ANTHROPIC_API_KEY=sk-ant-api03-...
```

### 4. Run

```bash
npm run dev
```

Opens at **http://localhost:3000** (frontend) with backend at **http://localhost:3001**.

---

## Production deployment

### Option A — Render.com (recommended, free tier available)

Render is the easiest way to deploy this. Takes about 10 minutes.

**Deploy the backend (Web Service):**
1. Push this repo to GitHub
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repo
4. Settings:
   - **Root directory**: `server`
   - **Build command**: `npm install`
   - **Start command**: `node index.js`
   - **Environment**: Node
5. Add environment variable: `ANTHROPIC_API_KEY` = your key
6. Also add: `NODE_ENV` = `production`
7. Deploy — Render gives you a URL like `https://permitiq-server.onrender.com`

**Deploy the frontend (Static Site):**
1. New → Static Site on Render
2. Same repo, **Root directory**: `client`
3. **Build command**: `npm install && npm run build`
4. **Publish directory**: `build`
5. Add environment variable: `REACT_APP_API_URL` = your backend URL from step 6 above
6. Deploy — get a URL like `https://permitiq.onrender.com`

Done. Share the frontend URL with the City.

---

### Option B — Single server deployment (VPS / DigitalOcean / AWS EC2)

Build the React app and serve it from the Express server:

```bash
# On your server:
git clone <your-repo>
cd permitiq
npm run install:all

# Set your API key
echo "ANTHROPIC_API_KEY=sk-ant-..." > server/.env
echo "NODE_ENV=production" >> server/.env
echo "PORT=3001" >> server/.env

# Build React
npm run build

# Start (serves both API and frontend from port 3001)
npm start
```

Point a domain at port 3001 with nginx or Caddy as a reverse proxy.

---

### Option C — Vercel (frontend) + Railway (backend)

**Backend on Railway:**
1. https://railway.app → New Project → Deploy from GitHub
2. Set root to `/server`
3. Add `ANTHROPIC_API_KEY` env variable
4. Railway auto-detects Node and deploys

**Frontend on Vercel:**
1. https://vercel.com → New Project → Import from GitHub
2. Set root to `/client`
3. Add `REACT_APP_API_URL` = your Railway backend URL
4. Deploy

---

## Environment variables

### Server (`server/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | ✅ Yes | Your Anthropic API key |
| `PORT` | No | Server port (default: 3001) |
| `NODE_ENV` | No | Set to `production` for prod builds |

### Client (`client/.env` or hosting env vars)

| Variable | Required | Description |
|----------|----------|-------------|
| `REACT_APP_API_URL` | In prod | URL of your backend server |

In development, the React proxy in `package.json` routes API calls to `localhost:3001` automatically — no env var needed locally.

---

## API endpoints

### `POST /api/analyze-plans`
Multipart form data:
- `files[]` — Plan files (PDF, JPG, PNG, TXT) — up to 5
- `neighborhood` — Boston neighborhood name
- `propertyType` — Property type
- `description` — Project description

Returns: `{ result: string }` — Formatted analysis text

### `POST /api/analyze-denial`
Multipart form data:
- `denialFiles[]` — ISD denial letter files — up to 2
- `planFiles[]` — Plan/drawing files — up to 5
- `denialText` — Manual denial text (if files are scanned)
- `planNotes` — Additional plan notes
- `neighborhood` — Neighborhood
- `projectType` — Project type

Returns: `{ result: string }` — Formatted analysis text

---

## Selling to the City of Boston

**Who to contact:**
1. **Boston Emerging Technology Office** — boston.gov/departments/emerging-technology — They have active AI permitting initiatives
2. **ISD Commissioner's Office** — isd@boston.gov / 617-635-5300 — The department that uses it
3. **Department of Innovation & Technology (DoIT)** — evaluates and champions new tech

**Pitch framing:**
Don't pitch this as a "denial helper" — pitch it as a constituent self-service tool that reduces ISD's 2,000–3,000 weekly call volume, cuts ZBA hearing backlogs, and reduces incomplete application submissions. The savings in staff time are measurable.

**Demo approach:**
Run the app live. Upload a real (anonymized) denial letter. Show the analysis in real time. No slides needed.

---

## Cost estimates

Anthropic API pricing (as of mid-2025):
- Claude claude-opus-4-5: ~$3 per million input tokens, ~$15 per million output tokens
- Each analysis call: ~2,000–4,000 input tokens + ~1,500–2,000 output tokens
- Estimated cost per analysis: **$0.04–$0.08**
- 1,000 analyses/month ≈ **$40–80/month**

Hosting (Render free tier): $0 (with 15-minute spin-down) or $7/month for always-on.

---

## License

Built for the City of Boston permitting ecosystem. Not legal advice.
