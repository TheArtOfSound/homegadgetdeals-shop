// Build: replace the quoted __HGD_CATALOG_HTML__ marker with JSON.stringify(index.html).
// Replace the quoted release marker with the source commit hash. Deploy as Pages advanced mode.
const catalog = "__HGD_CATALOG_HTML__";
const release = "__HGD_RELEASE_SHA__";
const origin = "https://homegadgetdeals.pages.dev";
const guides = [
  {
    "slug": "sunset-lamp",
    "title": "Sunset projection lamp buying guide",
    "intro": "A sunset projection lamp is intended to cast a concentrated colored patch onto a wall. Choose it for an accent effect, not general room illumination.",
    "sections": [
      [
        "Choose the projection setup",
        "A movable head and stable base let you aim the patch at the wall. Check the available wall distance and whether the head can tilt without the stand tipping. A small room may need a different placement than a wide blank wall."
      ],
      [
        "Compare the controls",
        "Look for the actual color modes in the selected variant, whether a remote is included, and what power source is required. USB power does not necessarily mean a wall adapter is included."
      ],
      [
        "Before paying",
        "Compare the selected variant against the listing photos and description. Check cable length, stand dimensions, seller reviews for that variant, total delivered price and the return window."
      ]
    ],
    "different": "If you want moving stars across a ceiling rather than a focused wall glow, compare the galaxy projectors.",
    "related": "galaxy-projector"
  },
  {
    "slug": "astronaut-projector",
    "title": "Astronaut galaxy projector buying guide",
    "intro": "An astronaut-shaped projector combines decorative housing with a ceiling or wall lighting effect. It is a useful category to compare when the object itself matters as much as the light.",
    "sections": [
      [
        "Compare projection modes",
        "Check whether stars and nebula effects can be controlled independently, whether motion can be stopped, and which modes the selected version offers. Listing illustrations may exaggerate coverage."
      ],
      [
        "Check the physical controls",
        "Look for a stable base, adjustable head, timer behavior, remote inclusion and the correct power adapter. Confirm the dimensions rather than judging scale from staged images."
      ],
      [
        "Safety and buying checks",
        "If the device uses a laser, verify its safety classification and instructions. Never aim beams at eyes. Confirm seller information, reviews for the exact variant, delivery cost and return terms before ordering."
      ]
    ],
    "different": "For a more understated housing, compare the compact USB galaxy projector.",
    "related": "galaxy-projector"
  },
  {
    "slug": "galaxy-projector",
    "title": "Compact USB galaxy projector buying guide",
    "intro": "A compact galaxy projector is an option for people who prefer a low-profile gadget rather than a sculptural night-light. Housing size and projection coverage are separate considerations.",
    "sections": [
      [
        "Measure your available space",
        "Measure the surface where the projector will sit, leaving space for the power cable and any adjustment mechanism. Check dimensions in the actual listing."
      ],
      [
        "Decide which effects matter",
        "Compare color selection, motion settings, brightness adjustment, timer and controls. Check whether a remote and suitable power adapter are supplied. A USB cable alone does not guarantee compatibility with every port."
      ],
      [
        "Review the trade-offs",
        "Check reviews for noise, coverage and ease of use, rather than relying on promotional imagery. If lasers are used, check the safety classification and never aim at eyes. Confirm the exact variant and return conditions."
      ]
    ],
    "different": "If the design of the gadget is a major part of the appeal, compare the astronaut projector.",
    "related": "astronaut-projector"
  },
  {
    "slug": "mini-humidifier",
    "title": "Mini USB humidifier buying guide",
    "intro": "A small USB humidifier is designed for nearby personal spaces rather than an entire room. A 180 ml tank is a target specification to compare, not a verified capacity for every listing.",
    "sections": [
      [
        "Check tank and maintenance",
        "Compare the actual reservoir size, cleaning instructions and whether replacement wicks are needed and obtainable. A smaller tank generally means more frequent refilling, depending on mist output."
      ],
      [
        "Choose a suitable location",
        "Use a stable, water-resistant surface away from electronics and avoid allowing surrounding surfaces to become damp. Follow the manufacturer’s instructions for water type, cleaning and operation."
      ],
      [
        "Verify the selected model",
        "Look for the power requirements, mist settings, automatic shutoff behavior and included parts. Do not assume a pictured feature is present in the cheapest variant. Review total price, seller terms and return conditions."
      ]
    ],
    "different": "If you mainly want a decorative desk atmosphere rather than mist, compare the sunset lamp.",
    "related": "sunset-lamp"
  }
];
const escape = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const link = slug => "/guides/"+slug+"/";
const css = catalog.match(/<style>([\s\S]*?)<\/style>/)[1];
function cardFor(slug){return [...catalog.matchAll(/<article class="product" id="([^"]+)">[\s\S]*?<\/article>/g)].find(m=>m[1]===slug)?.[0]||"";}
function guide(g){const url=origin+link(g.slug);const card=cardFor(g.slug);const art=card.match(/<div class="art">[\s\S]*?<\/svg><span>[\s\S]*?<\/span><\/div>/)?.[0]||"";const retailer=card.match(/<a class="source"[^>]*>[\s\S]*?<\/a>/)?.[0]||"";const schema={"@context":"https://schema.org","@type":"WebPage",name:g.title,url,description:g.intro,isPartOf:{"@type":"WebSite",name:"Home Gadget Deals",url:origin+"/"}};return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f7f6f1"><title>'+escape(g.title)+' | Home Gadget Deals</title><meta name="description" content="'+escape(g.intro)+'"><link rel="canonical" href="'+url+'"><meta property="og:type" content="website"><meta property="og:title" content="'+escape(g.title)+'"><meta property="og:description" content="'+escape(g.intro)+'"><meta property="og:url" content="'+url+'"><meta name="twitter:card" content="summary"><script type="application/ld+json">'+JSON.stringify(schema)+'</script><style>'+css+'.guide-page{max-width:850px;margin:auto;padding:24px 0 42px}.guide-page h1{font-size:clamp(2rem,5vw,3.4rem);max-width:22ch;margin:16px 0}.guide-page .intro{font-size:1.05rem;color:var(--muted);max-width:65ch}.guide-page .art{margin:22px 0;border-radius:9px;max-height:380px}.guide-body{max-width:68ch}.guide-body section{border-top:1px solid var(--line);padding:22px 0}.guide-body h2{font-size:1.35rem;margin-bottom:9px}.guide-body p{color:var(--muted)}.guide-cta{background:white;border:1px solid var(--line);padding:18px;border-radius:8px}.guide-cta .source{margin:12px 0 6px;max-width:340px}.guide-related{padding:22px 0}.crumb{display:flex;flex-wrap:wrap;gap:10px;font-size:.88rem;align-items:center}.crumb a{display:inline-flex;min-height:44px;align-items:center}.guide-page .header-inner{min-height:0}.guide-page a{overflow-wrap:anywhere}</style></head><body><a class="skip" href="#main">Skip to content</a><header class="header"><div class="wrap header-inner"><a class="brand" href="/">Home Gadget Deals</a><nav aria-label="Main navigation"><a href="/#products">Gadgets</a><a href="/#how">How to shop</a><a href="/#contact">Contact</a></nav></div></header><main class="wrap" id="main"><article class="guide-page"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/#products">Gadget collection</a><span aria-hidden="true">/</span><span>Buying guide</span></nav><p class="eyebrow">Buying guide · product category</p><h1>'+escape(g.title)+'</h1><p class="intro">'+escape(g.intro)+'</p>'+art+'<div class="guide-body">'+g.sections.map(([h,p])=>'<section><h2>'+escape(h)+'</h2><p>'+escape(p)+'</p></section>').join("")+'<div class="guide-cta"><h2>Find matching listings</h2><p>Prices, stock, seller claims and exact models are not independently verified. Compare the selected listing and its terms before paying.</p>'+retailer+'<p class="small">Retailer search, not a verified offer. No payment is collected here.</p></div><div class="guide-related"><h2>Compare another option</h2><p>'+escape(g.different)+'</p><p><a href="'+link(g.related)+'">'+escape(guides.find(x=>x.slug===g.related).title)+'</a></p></div><a class="primary" href="/#'+g.slug+'">Back to gadget collection</a></div></article></main><footer><div class="wrap footer-inner"><span>Home Gadget Deals · Qira LLC</span><a href="/#shipping">Shipping and returns guidance</a></div></footer></body></html>';}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[origin+"/",...guides.map(g=>origin+link(g.slug))].map(u=>'<url><loc>'+u+'</loc></url>').join("")+'</urlset>';
const favicon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="13" fill="#284d3d"/><path d="m13 29 19-15 19 15v21H13z M27 50V36h10v14" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Pass VI. Only fixed categories are collected; no raw URLs, referrers, IDs, IPs or user agents.
const sources=["direct","google","bing","reddit","facebook","instagram","threads","linkedin","x","tiktok","youtube","email","pinterest","other","qa"];
const mediums=["none","organic","social","email","referral","paid","other","qa"];
const campaigns=["none","hgd-launch","hgd-lighting","hgd-desk","hgd-sunset","hgd-astronaut","hgd-galaxy","hgd-humidifier","other","release-qa"];
const products=guides.map(g=>g.slug);
const categories={sources,mediums,campaigns,products};
function browserAnalytics(c){
  if(navigator.globalPrivacyControl===true||navigator.doNotTrack==="1"||window.doNotTrack==="1")return;
  const normalize=(v,list,fallback)=>{v=String(v||"").toLowerCase().trim();return !v?fallback:list.includes(v)?v:"other";};
  const params=new URLSearchParams(location.search);
  const hasTags=["utm_source","utm_medium","utm_campaign"].some(k=>params.has(k));
  let attr;
  if(hasTags){
    attr={source:normalize(params.get("utm_source"),c.sources,"other"),medium:normalize(params.get("utm_medium"),c.mediums,"other"),campaign:normalize(params.get("utm_campaign"),c.campaigns,"none")};
  } else {
    try { const v=JSON.parse(sessionStorage.getItem("hgd-attribution-v1")||"null");if(v&&c.sources.includes(v.source)&&c.mediums.includes(v.medium)&&c.campaigns.includes(v.campaign))attr=v; }catch{}
    if(!attr){
      let host="";try{host=new URL(document.referrer).hostname.toLowerCase();}catch{}
      const matches=(base)=>host===base||host.endsWith("."+base);
      const social=[["reddit.com","reddit"],["facebook.com","facebook"],["instagram.com","instagram"],["threads.net","threads"],["linkedin.com","linkedin"],["x.com","x"],["t.co","x"],["twitter.com","x"],["tiktok.com","tiktok"],["youtube.com","youtube"],["pinterest.com","pinterest"]].find(([domain])=>matches(domain));
      attr=matches("google.com")?{source:"google",medium:"organic",campaign:"none"}:matches("bing.com")?{source:"bing",medium:"organic",campaign:"none"}:social?{source:social[1],medium:"social",campaign:"none"}:host&&host!==location.hostname?{source:"other",medium:"referral",campaign:"none"}:{source:"direct",medium:"none",campaign:"none"};
    }
  }
  try{sessionStorage.setItem("hgd-attribution-v1",JSON.stringify(attr));}catch{}
  const path=location.pathname;
  const guide=c.products.find(p=>path==="/guides/"+p+"/");
  const page=guide||"home";
  function send(event,product){
    const body=JSON.stringify({event,page,product,...attr});
    try{if(navigator.sendBeacon&&navigator.sendBeacon("/events",body))return;}catch{}
    try{fetch("/events",{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body,keepalive:true,credentials:"omit"}).catch(()=>{});}catch{}
  }
  send("page_view",guide||"none");
  function handle(e){
    if(!e.isTrusted||(e.type==="auxclick"&&e.button!==1))return;
    const a=e.target instanceof Element?e.target.closest("a.source"):null;
    if(!a)return;
    let dest;try{dest=new URL(a.href);}catch{return;}
    if(dest.protocol!=="https:"||dest.hostname!=="www.aliexpress.com")return;
    const p=guide||a.closest("article.product")?.id;
    if(c.products.includes(p))send("retailer_click",p);
  }
  document.addEventListener("click",handle,true);
  document.addEventListener("auxclick",handle,true);
}
const privacyDisclosure='<div class="wrap" style="margin-top:12px;font-size:.78rem;color:var(--muted)"><strong>Measurement:</strong> We count daily aggregate page views and retailer-link clicks using broad campaign categories. No advertising cookies or visitor IDs are used. Campaign categories may be kept in this browser tab until it closes. Global Privacy Control and Do Not Track are respected. Retailer websites have separate privacy practices.</div>';
function measured(html){
  return html.replace("</footer>",privacyDisclosure+"</footer>").replace("</body>",'<script>('+browserAnalytics.toString()+')('+JSON.stringify(categories)+');</script></body>');
}
async function collect(request,env,u,preview){
  const noStore={"Cache-Control":"no-store"};
  const reply=(status)=>new Response(null,{status,headers:noStore});
  if(request.method!=="POST")return new Response(null,{status:405,headers:{...noStore,Allow:"POST"}});
  if(request.headers.get("Origin")!==u.origin||request.headers.get("Sec-Fetch-Site")==="cross-site")return reply(403);
  if(request.headers.get("Sec-GPC")==="1"||request.headers.get("DNT")==="1")return reply(204);
  if(!(request.headers.get("Content-Type")||"").toLowerCase().startsWith("text/plain"))return reply(415);
  if(Number(request.headers.get("Content-Length")||0)>1024)return reply(413);
  if(!request.body)return reply(400);
  let raw="",bytes=0;const reader=request.body.getReader(),decoder=new TextDecoder();
  try{while(true){const {value,done}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>1024){await reader.cancel();return reply(413);}raw+=decoder.decode(value,{stream:true});}raw+=decoder.decode();}catch{return reply(400);}
  let d;try{d=JSON.parse(raw);}catch{return reply(400);}
  if(!d||typeof d!=="object"||Array.isArray(d))return reply(400);
  const pages=["home",...products];
  if(!["page_view","retailer_click"].includes(d.event)||!pages.includes(d.page)||!["none",...products].includes(d.product)||!sources.includes(d.source)||!mediums.includes(d.medium)||!campaigns.includes(d.campaign))return reply(400);
  if(d.event==="retailer_click"&&(!products.includes(d.product)||(d.page!=="home"&&d.page!==d.product)))return reply(400);
  if(d.event==="page_view"&&d.product!==(d.page==="home"?"none":d.page))return reply(400);
  const isQA=preview||d.source==="qa"||d.medium==="qa"||d.campaign==="release-qa";
  try{
    if(!env.HGD_DB)return reply(503);
    const day=new Date().toISOString().slice(0,10);
    const result=await env.HGD_DB.prepare("INSERT INTO daily_events (day,event,page,product,source,medium,campaign,stream,count) VALUES (?,?,?,?,?,?,?,?,1) ON CONFLICT(day,event,page,product,source,medium,campaign,stream) DO UPDATE SET count=count+1").bind(day,d.event,d.page,d.product,d.source,d.medium,d.campaign,isQA?"qa":"live").run();
    if(!result.success)return reply(503);
    return reply(204);
  }catch{return reply(503);}
}

export default {async fetch(request,env){const u=new URL(request.url);const preview=u.origin!==origin;if(u.pathname==="/events")return collect(request,env,u,preview);const headers={"x-content-type-options":"nosniff","x-hgd-release":release};if(preview)headers["x-robots-tag"]="noindex, nofollow";function response(body,type,status=200,extra={}){return new Response(request.method==="HEAD"?null:body,{status,headers:{...headers,"content-type":type,...extra}});}if(!["GET","HEAD"].includes(request.method))return response("Method not allowed","text/plain; charset=utf-8",405,{Allow:"GET, HEAD"});if(u.pathname==="/index.html")return response(null,"text/plain",308,{Location:"/"+u.search});if(u.pathname==="/")return response(measured(catalog),"text/html; charset=utf-8");if(u.pathname==="/robots.txt")return response(preview?"User-agent: *\nDisallow: /\n":"User-agent: *\nAllow: /\nSitemap: "+origin+"/sitemap.xml\n","text/plain; charset=utf-8");if(u.pathname==="/sitemap.xml")return response(sitemap,"application/xml; charset=utf-8");if(u.pathname==="/favicon.svg"||u.pathname==="/favicon.ico")return response(favicon,"image/svg+xml");const g=guides.find(g=>link(g.slug)===u.pathname);if(g)return response(measured(guide(g)),"text/html; charset=utf-8");const redirect=guides.find(g=>link(g.slug).slice(0,-1)===u.pathname);if(redirect)return response(null,"text/plain",308,{Location:link(redirect.slug)+u.search});return response('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>Page not found | Home Gadget Deals</title></head><body><main><h1>Page not found</h1><p><a href="/">Return to Home Gadget Deals</a></p></main></body></html>',"text/html; charset=utf-8",404);}};
