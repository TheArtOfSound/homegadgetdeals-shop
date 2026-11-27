// Build: replace the quoted __HGD_CATALOG_HTML__ marker with JSON.stringify(index.html).
// Replace the quoted release marker with the source commit hash. Deploy as Pages advanced mode.
const catalog = "__HGD_CATALOG_HTML__";
const release = "__HGD_RELEASE_SHA__";
const supplierPhotos = {"sunset-lamp":{"listingId":"1005009414632625","listingUrl":"https://www.aliexpress.com/item/1005009414632625.html","seller":"Stone's Store","variant":"16-color RGB with remote","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S86a58163dd83479eabeb953c29c03332P.png","alt":"Supplier gallery: Projection lamp and remote"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S069ea485f3244bb88c7f9ef51dae2e28a.jpg","alt":"Supplier gallery: Sunset lighting effect"}]},"glowbar-motion-light":{"listingId":"1005007010512397","listingUrl":"https://www.aliexpress.com/item/1005007010512397.html","seller":"Stone's Store","variant":"Length (20/30/40/50 cm) and white/black finish not pinned","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S1d58bfa2e70a4d6fb805089640f5eff5H.jpg","alt":"Supplier gallery: Cabinet lighting and listed size options"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sac6c2b8af3a2457d9198caca08409c19E.jpg","alt":"Supplier gallery: Light bar controls"}]},"spinscrub-pro":{"listingId":"1005007476603690","listingUrl":"https://www.aliexpress.com/item/1005007476603690.html","seller":"Stone's Store","variant":"5-in-1 set with five heads","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S84cb95c5a7eb44479c56cd42780c27433.jpg","alt":"Supplier gallery: Electric scrubber in use"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sb437147876894bfca0919a7e09fd6f0eO.jpg","alt":"Supplier gallery: Scrubber and five heads"}]},"chopbox-vegetable-chopper":{"listingId":"3256813067086417","listingUrl":"https://www.aliexpress.com/item/3256813067086417.html","seller":"Shop1105362449 Store","variant":"14-function fulfillment set not confirmed; listing advertises 14/16","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S3c494be841694f06af16bf37b2753a452.jpg","alt":"Supplier gallery: Chopper in use"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S74f34dbf4f224ab99a75fa292d161367V.jpg","alt":"Supplier gallery: Chopper being rinsed"}]},"drydeck-faucet-mat":{"listingId":"3256811597674717","listingUrl":"https://www.aliexpress.com/item/3256811597674717.html","seller":"Shop1103180836 Store","variant":"Single-hole faucet configuration","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sadc9d00aaed74a2e801658732030d295d.jpg","alt":"Supplier gallery: Single-hole faucet splash guard"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S9ed672ac4d3749dbbb60bb2856d719c1i.jpg","alt":"Supplier gallery: Flexible splash guard"}]},"sinkcaddy-pro":{"listingId":"1005010706623798","listingUrl":"https://www.aliexpress.com/item/1005010706623798.html","seller":"Stone's Store","variant":"Hanging-hook rack","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S0fd5139efe7e4a4ab89f4e69dd5c3f98G.jpg","alt":"Supplier gallery: Sink organizer with sponges"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S08f6a31c653346ca9a2a2317daf06642n.jpg","alt":"Supplier gallery: Hanging sink rack in use"}]},"dreamlight-sleep-mask":{"listingId":"1005012655626469","listingUrl":"https://www.aliexpress.com/item/1005012655626469.html","seller":"Stone's Store","variant":"Pack quantity and fulfillment color not confirmed; retail assumes one mask","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S559c75bfb6ea445b9509ab9922156f5b7.jpg","alt":"Supplier gallery: Contoured sleep mask being worn"}]},"microfiber-cleaning-cloths":{"listingId":"1005011763025596","listingUrl":"https://www.aliexpress.com/item/1005011763025596.html","seller":"Shop1105267073 Store","variant":"Pack size not confirmed","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sd4119bf7890b4daf9aeb5f97d3b7f0a82.jpg","alt":"Supplier gallery: Microfiber cloth being wrung out"}]}};
const retail = {"sunset-lamp":{"name":"Sunset Glow Projection Lamp","price":"16.99","url":"https://buy.stripe.com/bJe8wPblcccafxj9a77kc0h"},"astronaut-projector":{"name":"Astronaut Galaxy Star Projector","price":"19.99","url":"https://buy.stripe.com/9B628r8907VUetf3PN7kc0i"},"galaxy-projector":{"name":"Galaxy Star Projector, USB","price":"14.99","url":"https://buy.stripe.com/6oUfZhdtk6RQ4SF5XV7kc0j"},"mini-humidifier":{"name":"Mini USB Humidifier, 180 ml","price":"17.99","url":"https://buy.stripe.com/8x24gz74Wcca2Kxdqn7kc0k"},"glowbar-motion-light":{"name":"GlowBar Motion Sensor LED Cabinet Light Bar","price":"13.99","url":"https://buy.stripe.com/aFabJ1890gsq1Gtfyv7kc0l"},"spinscrub-pro":{"name":"SpinScrub Pro Cordless Electric Spin Scrubber","price":"24.99","url":"https://buy.stripe.com/cNi9AT60Seki4SF9a77kc0m"},"chopbox-vegetable-chopper":{"name":"ChopBox 14-in-1 Vegetable Chopper & Slicer Set","price":"19.99","url":"https://buy.stripe.com/eVq00jah84JI3OB9a77kc0n"},"drydeck-faucet-mat":{"name":"DryDeck Silicone Faucet Splash Guard Mat","price":"12.99","url":"https://buy.stripe.com/9B67sLblc6RQ84R9a77kc0o"},"sinkcaddy-pro":{"name":"SinkCaddy Pro Sponge Holder Drain Rack","price":"12.99","url":"https://buy.stripe.com/cNi28r1KC4JIcl79a77kc0p"},"doorpocket-organizer":{"name":"DoorPocket Organizer","price":"16.99","url":"https://buy.stripe.com/7sY6oH0Gyfom0Cp3PN7kc0q"},"dreamlight-sleep-mask":{"name":"Dreamlight 3D Sleep Mask","price":"14.99","url":"https://buy.stripe.com/dRm4gz2OGccagBn8637kc0r"},"microfiber-cleaning-cloths":{"name":"Microfiber Cleaning Cloths","price":"7.99","url":"https://buy.stripe.com/7sYfZh9d47VU3OBcmj7kc0s"}};
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
  },
  {
    "slug": "glowbar-motion-light",
    "title": "Motion sensor cabinet light bar buying guide",
    "intro": "A rechargeable motion sensor light bar is a stick-on fix for dark counters, closets and hallways. It lights up when you walk up and switches off on its own, with no wiring.",
    "sections": [
      [
        "Measure the space first",
        "Compare the bar lengths on offer (commonly 20, 30, 40 or 50 cm) against the cabinet, shelf or hallway where it will sit. A bar that is too short leaves dark patches; one that is too long will not sit flat."
      ],
      [
        "Check battery and sensor behavior",
        "Look for the actual battery life, charging method and sensor range in the selected variant. Some bars stay on for a fixed time after motion stops, so check the run time rather than assuming it."
      ],
      [
        "Confirm the mount and finish",
        "Most bars mount with magnets or adhesive. Check the mounting hardware, the color options and whether the listing photos match the variant you select. Confirm total price, delivery and return terms before paying."
      ]
    ],
    "different": "If you want a decorative glow rather than task light, compare the sunset lamp.",
    "related": "sunset-lamp"
  },
  {
    "slug": "spinscrub-pro",
    "title": "Cordless electric spin scrubber buying guide",
    "intro": "An electric spin scrubber is a rechargeable brush that does the scrubbing for you, aimed at shower grout, tile and tubs that are hard work by hand.",
    "sections": [
      [
        "Match the heads to the job",
        "Compare the five head shapes against the surfaces you actually clean: flat heads for tile, pointed heads for grout lines, soft heads for tubs and sinks. A head that does not fit the surface will not clean it."
      ],
      [
        "Check power and run time",
        "Look for the real battery life and charging time in the selected variant. A scrubber that dies halfway through a shower clean is worse than a manual brush."
      ],
      [
        "Verify the waterproof claim",
        "Do not assume a scrubber is safe to rinse or submerge. Check the listing for a waterproof rating and read buyer reviews for the exact variant before paying. Confirm total price, delivery and return terms."
      ]
    ],
    "different": "For a passive sink-area fix that needs no charging, compare the faucet splash guard.",
    "related": "drydeck-faucet-mat"
  },
  {
    "slug": "chopbox-vegetable-chopper",
    "title": "Vegetable chopper and slicer set buying guide",
    "intro": "A multifunction chopper is one container set that dices, slices, grates and shreds, aimed at faster weeknight prep with less washing up.",
    "sections": [
      [
        "Count the functions you will use",
        "Compare the blade set against what you actually prep. Fourteen functions sounds generous, but only the blades you reach for weekly earn their space in the drawer."
      ],
      [
        "Check the container and blades",
        "Look for the catch container capacity, blade sharpness and whether parts separate for washing. A container that is too small means emptying it mid-prep."
      ],
      [
        "Confirm the exact set",
        "Listings vary the blade count and accessories by variant. Compare the photos against the variant you select, read reviews for the exact set, and confirm total price, delivery and return terms."
      ]
    ],
    "different": "For the sink area rather than the chopping board, compare the sponge holder drain rack.",
    "related": "sinkcaddy-pro"
  },
  {
    "slug": "drydeck-faucet-mat",
    "title": "Faucet splash guard mat buying guide",
    "intro": "A silicone splash guard sits behind the faucet and catches the water that would otherwise pool on the counter, draining it back toward the sink.",
    "sections": [
      [
        "Check the fit first",
        "Measure the faucet base and the space behind it. Most mats are made for standard single-hole faucets; a wide or unusual base may not sit flat."
      ],
      [
        "Look at the drainage design",
        "Compare the slope and drain channels. A mat that holds water instead of draining it back to the sink just moves the puddle."
      ],
      [
        "Confirm the material and size",
        "Check the silicone thickness, the listed dimensions and buyer photos for the exact variant. Confirm total price, delivery and return terms before paying."
      ]
    ],
    "different": "Pair it with a drain rack and the whole sink area stays dry; compare the sponge holder drain rack.",
    "related": "sinkcaddy-pro"
  },
  {
    "slug": "sinkcaddy-pro",
    "title": "Sponge holder drain rack buying guide",
    "intro": "A drain rack gives sponges and dish cloths a place to dry over the sink instead of sitting in water on the counter edge.",
    "sections": [
      [
        "Check the mounting",
        "Compare the hook and hanging style against your sink. Some racks hang over the sink edge, others hook onto the faucet; the wrong style will not stay put."
      ],
      [
        "Size it to your sponge",
        "Look for the rack dimensions and how many sponges and cloths it holds. A rack that is too small gets ignored and the sponge goes back on the counter."
      ],
      [
        "Confirm the drainage",
        "Check that water drips into the sink rather than onto the counter. Read reviews for the exact variant and confirm total price, delivery and return terms before paying."
      ]
    ],
    "different": "For the counter behind the faucet, compare the silicone splash guard mat.",
    "related": "drydeck-faucet-mat"
  },
  {
    "slug": "doorpocket-organizer",
    "title": "DoorPocket Organizer buying guide",
    "intro": "A door organizer can make use of space that otherwise goes unused. Check the fit and intended storage before ordering.",
    "sections": [
      [
        "Measure the door",
        "Confirm the door dimensions and the space needed for it to open and close."
      ],
      [
        "Check mounting and clearance",
        "Ask us to confirm the mounting style and compatibility if you are unsure. Do not overload the organizer."
      ],
      [
        "Choose what to store",
        "Use it for appropriate everyday items and follow the supplier’s installation and care instructions."
      ]
    ],
    "different": "For organization near the sink, compare the sponge holder drain rack.",
    "related": "sinkcaddy-pro"
  },
  {
    "slug": "dreamlight-sleep-mask",
    "title": "3D sleep mask buying guide",
    "intro": "A 3D contoured sleep mask blocks out light without pressing on your eyes, which makes it a cheap fix for bright bedrooms, shift work and travel.",
    "sections": [
      [
        "Check the contoured fit",
        "The cups should sit over your eyes with space to blink. A flat mask presses on your lashes; a 3D cup leaves room and blocks light from the sides and the nose bridge."
      ],
      [
        "Look at the strap and material",
        "Check the strap adjusts without slipping and the fabric breathes. A mask that slides off at 3 a.m. does not help anyone sleep."
      ],
      [
        "Confirm what is in the box",
        "Some listings sell one mask, others sell a pair. Check the pack quantity, the listed dimensions and buyer photos for the exact variant, and confirm total price, delivery and return terms before paying."
      ]
    ],
    "different": "For a dark room with a warm glow instead of total darkness, compare the sunset lamp.",
    "related": "sunset-lamp"
  },
  {
    "slug": "microfiber-cleaning-cloths",
    "title": "Microfiber cleaning cloths buying guide",
    "intro": "Thick lint-free microfiber towels wipe glass and counters without streaks, rinse clean, and hold up to repeated washing, so one set replaces rolls of paper towels.",
    "sections": [
      [
        "Check the weave and thickness",
        "Thick, dense microfiber absorbs more and leaves less lint than thin flat cloths. Buyer photos showing the cloth folded and in use are a better signal than the listed GSM number alone."
      ],
      [
        "Confirm the pack quantity",
        "Listings sell these in different pack sizes, and the price only makes sense against the count. Check how many cloths are in the box and what size each one is before paying."
      ],
      [
        "Wash them right",
        "Rinse after use and machine wash without fabric softener, which coats the fibers and cuts absorption. Air dry or tumble dry low to keep them working for months."
      ]
    ],
    "different": "For powered scrubbing instead of hand wiping, compare the cordless spin scrubber.",
    "related": "spinscrub-pro"
  }
];
const escape = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const link = slug => "/guides/"+slug+"/";
const css = catalog.match(/<style>([\s\S]*?)<\/style>/)[1];
function cardFor(slug){return [...catalog.matchAll(/<article class="product" id="([^"]+)">[\s\S]*?<\/article>/g)].find(m=>m[1]===slug)?.[0]||"";}
function guide(g){const url=origin+link(g.slug);const card=cardFor(g.slug);const evidence=supplierPhotos[g.slug];const art=evidence?'<div class="guide-gallery">'+evidence.photos.map(p=>'<figure class="supplier-photo"><img src="'+escape(p.url)+'" alt="'+escape(p.alt)+'" loading="lazy" decoding="async" referrerpolicy="no-referrer"><figcaption>'+escape(p.alt)+'</figcaption></figure>').join('')+'</div><p class="guide-gallery-note">Supplier listing photos. '+escape(evidence.variant)+'. '+(evidence.pinned?'':'Confirm the fulfillment variant with us before ordering; photos do not guarantee a particular configuration.')+'</p>':"";const retailer=card.match(/<a class="source"[^>]*>[\s\S]*?<\/a>/)?.[0]||"";const schema={"@context":"https://schema.org","@type":"WebPage",name:g.title,url,description:g.intro,mainEntity:{"@type":"Product",name:retail[g.slug].name,offers:{"@type":"Offer",price:retail[g.slug].price,priceCurrency:"USD",url:retail[g.slug].url}},isPartOf:{"@type":"WebSite",name:"Home Gadget Deals",url:origin+"/"}};return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f7f6f1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>'+escape(g.title)+' | Home Gadget Deals</title><meta name="description" content="'+escape(g.intro)+'"><link rel="canonical" href="'+url+'"><meta property="og:type" content="website"><meta property="og:title" content="'+escape(g.title)+'"><meta property="og:description" content="'+escape(g.intro)+'"><meta property="og:url" content="'+url+'"><meta name="twitter:card" content="summary"><script type="application/ld+json">'+JSON.stringify(schema)+'</script><style>'+css+'.guide-page{max-width:850px;margin:auto;padding:24px 0 42px}.guide-page h1{font-size:clamp(2rem,5vw,3.4rem);max-width:22ch;margin:16px 0}.guide-page .intro{font-size:1.05rem;color:var(--muted);max-width:65ch}.guide-page .art{margin:22px 0;border-radius:9px;max-height:380px}.guide-body{max-width:68ch}.guide-body section{border-top:1px solid var(--line);padding:22px 0}.guide-body h2{font-size:1.35rem;margin-bottom:9px}.guide-body p{color:var(--muted)}.guide-cta{background:white;border:1px solid var(--line);padding:18px;border-radius:8px}.guide-cta .source{margin:12px 0 6px;max-width:340px}.guide-related{padding:22px 0}.crumb{display:flex;flex-wrap:wrap;gap:10px;font-size:.88rem;align-items:center;width:auto;max-width:100%;min-width:0}.crumb a{display:inline-flex;min-height:44px;align-items:center}.guide-page .header-inner{min-height:0}.guide-page a{overflow-wrap:anywhere;min-width:0;max-width:100%}</style></head><body><a class="skip" href="#main">Skip to content</a><header class="header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Home Gadget Deals home"><span class="mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-7 9 7v9H3z"/><path d="M9 20v-6h6v6"/></svg></span>Home Gadget Deals</a><nav aria-label="Main navigation"><a href="/#products">Gadgets</a><a href="/#how">How to shop</a><a href="/#shipping">Shipping</a><a href="/#contact">Contact</a></nav></div></header><main class="wrap" id="main"><article class="guide-page"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/#products">Gadget collection</a><span aria-hidden="true">/</span><span>Buying guide</span></nav><p class="eyebrow">Buying guide · product category</p><h1>'+escape(g.title)+'</h1><p class="intro">'+escape(g.intro)+'</p><a class="quick-jump" href="#retailer">Jump to checkout ↓</a>'+art+'<div class="guide-body">'+g.sections.map(([h,p])=>'<section><h2>'+escape(h)+'</h2><p>'+escape(p)+'</p></section>').join("")+'<div class="guide-cta" id="retailer"><h2>Order from Home Gadget Deals</h2><p class="availability">$'+retail[g.slug].price+'</p><p>Ships directly from our supplier. Delivery typically takes 5 to 10 business days.</p>'+retailer+'<p class="small">Secure Stripe checkout · review your final total before paying.</p></div><div class="guide-related"><h2>Compare another option</h2><p>'+escape(g.different)+'</p><p><a href="'+link(g.related)+'">'+escape(guides.find(x=>x.slug===g.related).title)+'</a></p></div><a class="primary" href="/#'+g.slug+'">Back to gadget collection</a></div></article></main><footer><div class="wrap footer-inner"><span>Home Gadget Deals · Qira LLC</span><a href="/#shipping">Shipping and returns guidance</a></div></footer></body></html>';}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[origin+"/",...guides.map(g=>origin+link(g.slug))].map(u=>'<url><loc>'+u+'</loc></url>').join("")+'</urlset>';
const favicon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="13" fill="#284d3d"/><path d="m13 29 19-15 19 15v21H13z M27 50V36h10v14" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Pass VI. Only fixed categories are collected; no raw URLs, referrers, IDs, IPs or user agents.
const sources=["direct","google","bing","reddit","facebook","instagram","threads","linkedin","x","tiktok","youtube","email","pinterest","other","qa"];
const mediums=["none","organic","social","email","referral","paid","other","qa"];
const campaigns=["none","hgd-launch","hgd-lighting","hgd-desk","hgd-sunset","hgd-astronaut","hgd-galaxy","hgd-humidifier","other","release-qa"];
const products=guides.map(g=>g.slug);
const categories={sources,mediums,campaigns,products};
function browserAnalytics(c){
  const signalOff=navigator.globalPrivacyControl===true||navigator.doNotTrack==="1"||window.doNotTrack==="1";
  let off=false;try{off=localStorage.getItem("hgd-measurement-off")==="1";}catch{}
  let enabled=!signalOff&&!off;
  const toggle=document.querySelector("[data-measurement-toggle]");
  const status=document.querySelector("[data-measurement-status]");
  function renderPreference(){
    if(!toggle||!status)return;
    toggle.hidden=false;status.hidden=false;toggle.disabled=signalOff;
    toggle.textContent=signalOff?"Measurement disabled by browser":enabled?"Disable measurement":"Enable measurement";
    status.textContent=signalOff?"Your browser privacy signal is respected.":enabled?"Measurement is enabled on this browser.":"Measurement is disabled on this browser.";
  }
  renderPreference();
  if(toggle)toggle.addEventListener("click",()=>{
    if(signalOff)return;
    enabled=!enabled;
    try{if(enabled)localStorage.removeItem("hgd-measurement-off");else localStorage.setItem("hgd-measurement-off","1");}catch{}
    if(!enabled)try{sessionStorage.removeItem("hgd-attribution-v1");}catch{}
    renderPreference();
  });
  if(signalOff){try{sessionStorage.removeItem("hgd-attribution-v1");}catch{}return;}
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
  if(enabled)try{sessionStorage.setItem("hgd-attribution-v1",JSON.stringify(attr));}catch{}
  const path=location.pathname;
  const guide=c.products.find(p=>path==="/guides/"+p+"/");
  const page=guide||"home";
  function send(event,product){
    if(!enabled)return;
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
    if(dest.protocol!=="https:"||dest.hostname!=="buy.stripe.com")return;
    const p=guide||a.closest("article.product")?.id;
    if(c.products.includes(p))send("checkout_click",p);
  }
  document.addEventListener("click",handle,true);
  document.addEventListener("auxclick",handle,true);
}
const privacyDisclosure='<div class="wrap measurement"><p><strong>Measurement:</strong> We count daily aggregate page views and checkout-link clicks using broad campaign categories. No advertising cookies or visitor IDs are used. Campaign categories may be kept in this browser tab until it closes. Global Privacy Control and Do Not Track are respected. Stripe has separate privacy practices. You can disable measurement below; the preference is saved in this browser when storage is available.</p><button type="button" data-measurement-toggle hidden>Disable measurement</button><p class="measurement-status" data-measurement-status aria-live="polite" hidden></p></div>';
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
  if(!["page_view","checkout_click"].includes(d.event)||!pages.includes(d.page)||!["none",...products].includes(d.product)||!sources.includes(d.source)||!mediums.includes(d.medium)||!campaigns.includes(d.campaign))return reply(400);
  if(d.event==="checkout_click"&&(!products.includes(d.product)||(d.page!=="home"&&d.page!==d.product)))return reply(400);
  if(d.event==="page_view"&&d.product!==(d.page==="home"?"none":d.page))return reply(400);
  const isQA=preview||d.source==="qa"||d.medium==="qa"||d.campaign==="release-qa";
  try{
    if(!env.HGD_DB)return reply(503);
    const day=new Date().toISOString().slice(0,10);
    const result=await env.HGD_DB.prepare("INSERT INTO "+(d.event==="checkout_click"?"daily_checkout_events":"daily_events")+" (day,event,page,product,source,medium,campaign,stream,count) VALUES (?,?,?,?,?,?,?,?,1) ON CONFLICT(day,event,page,product,source,medium,campaign,stream) DO UPDATE SET count=count+1").bind(day,d.event,d.page,d.product,d.source,d.medium,d.campaign,isQA?"qa":"live").run();
    if(!result.success)return reply(503);
    return reply(204);
  }catch{return reply(503);}
}

export default {async fetch(request,env){const u=new URL(request.url);const preview=u.origin!==origin;if(u.pathname==="/events")return collect(request,env,u,preview);const headers={...{"x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin","x-frame-options":"DENY","permissions-policy":"camera=(), microphone=(), geolocation=()","content-security-policy":"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://ae-pic-a1.aliexpress-media.com; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'"},"x-hgd-release":release};if(preview)headers["x-robots-tag"]="noindex, nofollow";function response(body,type,status=200,extra={}){return new Response(request.method==="HEAD"?null:body,{status,headers:{...headers,"content-type":type,...extra}});}if(!["GET","HEAD"].includes(request.method))return response("Method not allowed","text/plain; charset=utf-8",405,{Allow:"GET, HEAD"});if(u.pathname==="/index.html")return response(null,"text/plain",308,{Location:"/"+u.search});if(u.pathname==="/")return response(measured(catalog),"text/html; charset=utf-8");if(u.pathname==="/robots.txt")return response(preview?"User-agent: *\nDisallow: /\n":"User-agent: *\nAllow: /\nSitemap: "+origin+"/sitemap.xml\n","text/plain; charset=utf-8");if(u.pathname==="/sitemap.xml")return response(sitemap,"application/xml; charset=utf-8");if(u.pathname==="/favicon.svg"||u.pathname==="/favicon.ico")return response(favicon,"image/svg+xml");const g=guides.find(g=>link(g.slug)===u.pathname);if(g)return response(measured(guide(g)),"text/html; charset=utf-8");const redirect=guides.find(g=>link(g.slug).slice(0,-1)===u.pathname);if(redirect)return response(null,"text/plain",308,{Location:link(redirect.slug)+u.search});return response('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>Page not found | Home Gadget Deals</title></head><body><main><h1>Page not found</h1><p><a href="/">Return to Home Gadget Deals</a></p></main></body></html>',"text/html; charset=utf-8",404);}};
