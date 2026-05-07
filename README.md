# Hantavirus Watch

Next.js starter page for a source-led hantavirus outbreak tracker.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content model

The page treats WHO, PAHO, and CDC as primary sources for counts, risk
assessment, symptoms, and prevention. News links are included as operational
context only and should not override official epidemiology.

The default production URL is `https://hantavir.us`. Override
`NEXT_PUBLIC_SITE_URL` only if deploying a preview or alternate domain.

Typography uses Satoshi via Fontshare's ITF Free Font License. Satoshi is free
for commercial web use, but it is not an open-source font. If a strictly
open-source Swiss-style substitute is required, use Inter or Source Sans 3.
