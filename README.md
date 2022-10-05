# Turnstile-verifier: Workers

A simple turnstile-verifier backend using Cloudflare Workers.

## Setup

```sh
$ npm install
up to date, audited 103 packages in 585ms

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Local testing

```sh
npm run dev

> dev
> wrangler dev index.mjs --local

 ⛅️ wrangler 2.1.7
-------------------
⎔ Starting a local server...
╭────────────────────────────────────────────────────────────────────────────────────────────────╮
│ [b] open a browser, [d] open Devtools, [l] turn off local mode, [c] clear console, [x] to exit │
╰────────────────────────────────────────────────────────────────────────────────────────────────╯
```

Then press `b` to open the demo page in your browser.

## Deploy

```sh
$ npm run deploy

> deploy
> wrangler publish index.mjs

 ⛅️ wrangler 2.1.7
-------------------
Total Upload: 2.94 KiB / gzip: 1.33 KiB
Uploaded turnstile-verifier (2.07 sec)
Published turnstile-verifier (1.66 sec)
  https://turnstile-verifier....workers.dev

```
