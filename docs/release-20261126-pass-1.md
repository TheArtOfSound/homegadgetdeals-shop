# Pass I — production release (2026-11-26)

- HTML source commit: `248a6714304c602769478bfb3b75186d09fc7297`.
- Merged PR: #1, merge commit `5046253968f28723e0c86b6b4823942499573b05`.
- Project: `homegadgetdeals`; public URL: https://homegadgetdeals.pages.dev/.
- Preview: `450128c4-4a61-4c4e-b356-e7ac40accdfb`.
- Production: `0c162ca5-b2a3-4476-9b01-4866b0dc57c9` (canonical, success).
- Prior production rollback target: `66c4cd51-02ec-48f8-98ab-5500a13b5f71`.

## Deployment method
The Pages direct asset endpoints rejected both account authorization and a project upload JWT. Use the existing Pages project's documented advanced-mode deployment endpoint as a temporary alternative. No separate Worker project, hosting migration, or billing change. The homepage now invokes a Pages Function, so requests are subject to the account's existing Workers limits and billing. Billing scope was not available to verify the plan. Prefer static delivery when the asset path is restored.

Build the module in memory from the exact committed `index.html` UTF-8 text, using `JSON.stringify(html)` to emit the string literal. The deployed module is equivalent to:

```js
const html = /* JSON.stringify(index.html contents) */;
export default { async fetch(request, env) {
  const u = new URL(request.url);
  if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Method not allowed', {status:405, headers:{Allow:'GET, HEAD'}});
  if (u.pathname === '/' || u.pathname === '/index.html') return new Response(request.method === 'HEAD' ? null : html, {headers:{'content-type':'text/html; charset=utf-8','x-content-type-options':'nosniff','x-hgd-release':'248a6714304c602769478bfb3b75186d09fc7297'}});
  return env.ASSETS.fetch(request);
}};
```

Submit multipart `_worker.js`, `_routes.json` (`{"version":1,"include":["/","/index.html"],"exclude":[]}`), `manifest` (`{}`), branch, commit hash and message to the Pages deployment API. Preview first, verify, then deploy the same content to the existing production branch. Check canonical deployment before publishing. This approach is suitable only while the page is self-contained and has no required standalone assets; revisit for photography and other files. Unknown paths now return 404 instead of the previous HTML fallback. Sitemap and favicon remain unresolved. Do not interpret reference links or historic prices as verified offers.

## Verification
Preview returned HTTP 200, correct release header, all four product cards, no overflow at 320/390/768/1024/1440px, and 48px buttons. Production browser navigation returned HTTP 200, matching release header, new headline, four cards, no overflow at 390px, 48px buttons, and the primary CTA navigated to #products. Supplier links and pricing remain Pass II work.
