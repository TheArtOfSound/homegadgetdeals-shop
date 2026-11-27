// The main domain is a reversible entry point to the canonical storefront.
// Previous editorial landing page remains recoverable in Git history.
const release="__HGD_MAIN_RELEASE__";
const shop="https://shop.homegadgetdeals.com";
const aliases={"/":"/","/index.html":"/","/shop":"/","/shop/":"/","/discover":"/#products","/discover/":"/#products","/categories":"/#categories","/categories/":"/#categories","/guides":"/#guides","/guides/":"/#guides","/robots.txt":"/robots.txt","/sitemap.xml":"/sitemap.xml","/favicon.svg":"/favicon.svg","/favicon.ico":"/favicon.svg"};
const products=new Set(["sunset-lamp","astronaut-projector","galaxy-projector","mini-humidifier","glowbar-motion-light","spinscrub-pro","chopbox-vegetable-chopper","drydeck-faucet-mat","sinkcaddy-pro","doorpocket-organizer","dreamlight-sleep-mask","microfiber-cleaning-cloths","flameglow-aroma-diffuser"]);
export default {async fetch(req){
 const u=new URL(req.url);
 const headers={"x-hgd-main-release":release,"x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin","cache-control":"no-store","content-security-policy":"default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'","x-frame-options":"DENY"};
 if(!["homegadgetdeals.com","www.homegadgetdeals.com"].includes(u.hostname))headers["x-robots-tag"]="noindex, nofollow";
 const reply=(body,status,extra={})=>new Response(req.method==="HEAD"?null:body,{status,headers:{...headers,...extra}});
 if(!["GET","HEAD"].includes(req.method))return reply("Method not allowed",405,{Allow:"GET, HEAD","content-type":"text/plain; charset=utf-8"});
 let path=Object.prototype.hasOwnProperty.call(aliases,u.pathname)?aliases[u.pathname]:null;
 const m=u.pathname.match(/^\/guides\/([a-z0-9-]+)\/?$/);
 if(m&&products.has(m[1]))path="/guides/"+m[1]+"/";
 if(path){const dest=new URL(path,shop);dest.search=u.search;return reply(null,302,{Location:dest.href});}
 return reply('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | Home Gadget Deals</title><meta name="robots" content="noindex"><style>body{margin:0;padding:48px 24px;background:#f7f3e9;color:#192f27;font:16px/1.6 system-ui}main{max-width:620px;margin:auto}h1{font:normal 2.5rem/1.1 Georgia,serif}a{display:inline-block;padding:12px 18px;background:#234f3d;color:#fffdf8;border-radius:8px;text-decoration:none;font-weight:700}</style><main><p>HOME GADGET DEALS</p><h1>This corner is empty.</h1><p>Find your way back to the collection.</p><a href="'+shop+'/">Explore the shop →</a></main></html>',404,{"content-type":"text/html; charset=utf-8","x-robots-tag":"noindex"});
}};
