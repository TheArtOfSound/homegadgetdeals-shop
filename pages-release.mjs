// Build: replace the quoted __HGD_CATALOG_HTML__ marker with JSON.stringify(index.html).
// Replace the quoted release marker with the source commit hash. Deploy as Pages advanced mode.
const catalog = "__HGD_CATALOG_HTML__";
const release = "__HGD_RELEASE_SHA__";
const supplierPhotos = {"sunset-lamp":{"listingId":"1005009414632625","listingUrl":"https://www.aliexpress.com/item/1005009414632625.html","seller":"Stone's Store","variant":"16-color RGB with remote","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S86a58163dd83479eabeb953c29c03332P.png","alt":"Supplier gallery: Projection lamp and remote"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S069ea485f3244bb88c7f9ef51dae2e28a.jpg","alt":"Supplier gallery: Sunset lighting effect"}]},"glowbar-motion-light":{"listingId":"1005007010512397","listingUrl":"https://www.aliexpress.com/item/1005007010512397.html","seller":"Stone's Store","variant":"Length (20/30/40/50 cm) and white/black finish not pinned","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S1d58bfa2e70a4d6fb805089640f5eff5H.jpg","alt":"Supplier gallery: Cabinet lighting and listed size options"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sac6c2b8af3a2457d9198caca08409c19E.jpg","alt":"Supplier gallery: Light bar controls"}]},"spinscrub-pro":{"listingId":"1005007476603690","listingUrl":"https://www.aliexpress.com/item/1005007476603690.html","seller":"Stone's Store","variant":"5-in-1 set with five heads","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S84cb95c5a7eb44479c56cd42780c27433.jpg","alt":"Supplier gallery: Electric scrubber in use"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sb437147876894bfca0919a7e09fd6f0eO.jpg","alt":"Supplier gallery: Scrubber and five heads"}]},"chopbox-vegetable-chopper":{"listingId":"3256813067086417","listingUrl":"https://www.aliexpress.com/item/3256813067086417.html","seller":"Shop1105362449 Store","variant":"14-function fulfillment set not confirmed; listing advertises 14/16","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S3c494be841694f06af16bf37b2753a452.jpg","alt":"Supplier gallery: Chopper in use"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S74f34dbf4f224ab99a75fa292d161367V.jpg","alt":"Supplier gallery: Chopper being rinsed"}]},"drydeck-faucet-mat":{"listingId":"3256811597674717","listingUrl":"https://www.aliexpress.com/item/3256811597674717.html","seller":"Shop1103180836 Store","variant":"Single-hole faucet configuration","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sadc9d00aaed74a2e801658732030d295d.jpg","alt":"Supplier gallery: Single-hole faucet splash guard"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S9ed672ac4d3749dbbb60bb2856d719c1i.jpg","alt":"Supplier gallery: Flexible splash guard"}]},"sinkcaddy-pro":{"listingId":"1005010706623798","listingUrl":"https://www.aliexpress.com/item/1005010706623798.html","seller":"Stone's Store","variant":"Hanging-hook rack","pinned":true,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S0fd5139efe7e4a4ab89f4e69dd5c3f98G.jpg","alt":"Supplier gallery: Sink organizer with sponges"},{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S08f6a31c653346ca9a2a2317daf06642n.jpg","alt":"Supplier gallery: Hanging sink rack in use"}]},"dreamlight-sleep-mask":{"listingId":"1005012655626469","listingUrl":"https://www.aliexpress.com/item/1005012655626469.html","seller":"Stone's Store","variant":"Pack quantity and fulfillment color not confirmed; retail assumes one mask","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/S559c75bfb6ea445b9509ab9922156f5b7.jpg","alt":"Supplier gallery: Contoured sleep mask being worn"}]},"microfiber-cleaning-cloths":{"listingId":"1005011763025596","listingUrl":"https://www.aliexpress.com/item/1005011763025596.html","seller":"Shop1105267073 Store","variant":"Pack size not confirmed","pinned":false,"photos":[{"url":"https://ae-pic-a1.aliexpress-media.com/kf/Sd4119bf7890b4daf9aeb5f97d3b7f0a82.jpg","alt":"Supplier gallery: Microfiber cloth being wrung out"}]}};
const retail = {"sunset-lamp":{"name":"Sunset Glow Projection Lamp","price":"16.99","url":"https://buy.stripe.com/bJe8wPblcccafxj9a77kc0h"},"astronaut-projector":{"name":"Astronaut Galaxy Star Projector","price":"19.99","url":"https://buy.stripe.com/9B628r8907VUetf3PN7kc0i"},"galaxy-projector":{"name":"Galaxy Star Projector, USB","price":"14.99","url":"https://buy.stripe.com/6oUfZhdtk6RQ4SF5XV7kc0j"},"mini-humidifier":{"name":"Mini USB Humidifier, 180 ml","price":"17.99","url":"https://buy.stripe.com/8x24gz74Wcca2Kxdqn7kc0k"},"glowbar-motion-light":{"name":"GlowBar Motion Sensor LED Cabinet Light Bar","price":"13.99","url":"https://buy.stripe.com/aFabJ1890gsq1Gtfyv7kc0l"},"spinscrub-pro":{"name":"SpinScrub Pro Cordless Electric Spin Scrubber","price":"24.99","url":"https://buy.stripe.com/cNi9AT60Seki4SF9a77kc0m"},"chopbox-vegetable-chopper":{"name":"ChopBox 14-in-1 Vegetable Chopper & Slicer Set","price":"19.99","url":"https://buy.stripe.com/eVq00jah84JI3OB9a77kc0n"},"drydeck-faucet-mat":{"name":"DryDeck Silicone Faucet Splash Guard Mat","price":"12.99","url":"https://buy.stripe.com/9B67sLblc6RQ84R9a77kc0o"},"sinkcaddy-pro":{"name":"SinkCaddy Pro Sponge Holder Drain Rack","price":"12.99","url":"https://buy.stripe.com/cNi28r1KC4JIcl79a77kc0p"},"doorpocket-organizer":{"name":"DoorPocket Organizer","price":"16.99","url":"https://buy.stripe.com/7sY6oH0Gyfom0Cp3PN7kc0q"},"dreamlight-sleep-mask":{"name":"Dreamlight 3D Sleep Mask","price":"14.99","url":"https://buy.stripe.com/dRm4gz2OGccagBn8637kc0r"},"microfiber-cleaning-cloths":{"name":"Microfiber Cleaning Cloths","price":"7.99","url":"https://buy.stripe.com/7sYfZh9d47VU3OBcmj7kc0s"},"flameglow-aroma-diffuser":{"name":"FlameGlow Aroma Diffuser","price":"16.99","url":"https://buy.stripe.com/bJe00jgFw4JI2Kx8637kc0t"}};
const origin = "https://shop.homegadgetdeals.com";
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
  },
  {
    "slug": "flameglow-aroma-diffuser",
    "title": "Flame aroma diffuser buying guide",
    "intro": "A 200ml flame-effect diffuser turns water and a few drops of essential oil into cool mist and a warm flickering glow, scenting a room without a real flame.",
    "sections": [
      [
        "Check the tank and the light",
        "A 200ml tank runs a few hours between refills, which fits a bedroom or desk. The flame effect should look like a soft flicker, not a harsh lamp, and the 7-color light should let you pick one steady color or cycle through them."
      ],
      [
        "Oil is separate, water is yours",
        "Essential oil is not included with this diffuser, so budget a small bottle of the scent you like. Add water to the fill line first, then a few drops of oil, and never run it dry."
      ],
      [
        "Place it where the mist can breathe",
        "Set it on a flat surface with open air around it, away from papers and electronics. A bedroom nightstand or a desk corner works well; a closed shelf traps the mist."
      ]
    ],
    "different": "For plain cool mist without scent or light, compare the mini USB humidifier.",
    "related": "mini-humidifier"
  }
];

// Product photography release gate. Do not bypass on automated catalog updates.
const legacyTextOnly = ["astronaut-projector","galaxy-projector","mini-humidifier","doorpocket-organizer","flameglow-aroma-diffuser"];
function validateProductPhotography(){
 const cards=[...catalog.matchAll(/<article class="product" id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)];
 const seen=new Set();
 for(const [,id,body] of cards){if(seen.has(id))throw new Error("Duplicate product: "+id);seen.add(id);if(/<svg\b|class="art"|<picture\b|<source\b|background-image\s*:/i.test(body))throw new Error("Unapproved product artwork: "+id);const evidence=supplierPhotos[id];const imgs=[...body.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(m=>m[1]);if(!evidence){if(imgs.length||!legacyTextOnly.includes(id))throw new Error("Supplier photo evidence required: "+id);continue;}if(!/^\d+$/.test(evidence.listingId)||evidence.listingUrl!=="https://www.aliexpress.com/item/"+evidence.listingId+".html"||!evidence.photos.length||evidence.photos.some(p=>!/^https:\/\/ae-pic-a1\.aliexpress-media\.com\/kf\//.test(p.url)))throw new Error("Invalid supplier provenance: "+id);if(imgs.length!==1||imgs[0]!==evidence.photos[0].url)throw new Error("Thumbnail must match approved supplier photo: "+id);}
 if(seen.size!==guides.length||guides.some(g=>!seen.has(g.slug)))throw new Error("Product / guide mismatch");
}
validateProductPhotography();
function validateFeaturedPhotography(){
 const features=[...catalog.matchAll(/<div class="feature-pick" data-feature="([^"]+)"[^>]*>([\s\S]*?)<div class="feature-bottom"><strong>\$([^<]+)<\/strong>/g)];
 const seen=new Set();
 for(const [,id,body,price] of features){
  const evidence=supplierPhotos[id],item=retail[id],imgs=[...body.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(m=>m[1]);
  if(seen.has(id)||!evidence||!item||imgs.length!==1||imgs[0]!==evidence.photos[0].url||String(item.price)!==price||!body.includes('href="/guides/'+id+'/"'))throw Error("Featured evidence or price mismatch: "+id);
  seen.add(id);
 }
 if(features.length!==2||seen.size!==2)throw Error("Featured collection mismatch");
}
validateFeaturedPhotography();
const escape = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const link = slug => "/guides/"+slug+"/";
const css = catalog.match(/<style>([\s\S]*?)<\/style>/)[1];
function cardFor(slug){return [...catalog.matchAll(/<article class="product" id="([^"]+)"[^>]*>[\s\S]*?<\/article>/g)].find(m=>m[1]===slug)?.[0]||"";}
function guide(g){
 const item=retail[g.slug],card=cardFor(g.slug),evidence=supplierPhotos[g.slug],url=origin+link(g.slug),related=retail[g.related];
 const take=re=>card.match(re)?.[0]||"";
 const retailer=take(/<a class="source"[^>]*>[\s\S]*?<\/a>/),fit=take(/<dl class="fit">[\s\S]*?<\/dl>/),spec=take(/<p class="spec">[\s\S]*?<\/p>/);
 if(!retailer||!fit||!spec)throw Error("Incomplete guide source: "+g.slug);
 const category=card.match(/<p class="category">([\s\S]*?)<\/p>/)?.[1]||"Home essentials";
 const tone=card.match(/data-category="(light|kitchen|clean|comfort|organize)"/)?.[1]||"organize";
 const header=catalog.match(/<header class="header">[\s\S]*?<\/header>/)[0].replace(/href="#([^"]+)"/g,'href="/#$1"');
 const gallery=evidence?'<div class="pdp-gallery"><div class="pdp-gallery-top" hidden><span class="pdp-photo-count" aria-live="polite"></span><button type="button" class="pdp-enlarge">Enlarge photo <span aria-hidden="true">↗</span></button></div><div class="pdp-frames">'+evidence.photos.map((p,i)=>'<figure class="supplier-photo pdp-frame"><img src="'+escape(p.url)+'" alt="'+escape(p.alt)+'" '+(i===0?'fetchpriority="high"':'loading="lazy"')+' decoding="async" referrerpolicy="no-referrer"><figcaption>'+escape(p.alt)+'</figcaption></figure>').join('')+'</div><div class="pdp-gallery-controls" hidden role="group" aria-label="Choose product photograph">'+evidence.photos.map((p,i)=>'<button type="button" aria-pressed="'+(i===0)+'" aria-label="Photo '+(i+1)+': '+escape(p.alt)+'"><span class="pdp-thumb"><img src="'+escape(p.url)+'" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer"></span><span class="pdp-thumb-label"><small>0'+(i+1)+'</small> '+(i===0?'Overview':'Detail '+i)+'</span></button>').join('')+'</div><div class="pdp-gallery-nav" hidden><button type="button" class="pdp-prev" aria-label="Previous photograph">←</button><span>Supplier gallery</span><button type="button" class="pdp-next" aria-label="Next photograph">→</button></div><dialog class="pdp-lightbox" aria-label="Enlarged supplier photograph"><div class="pdp-lightbox-bar"><span class="pdp-lightbox-count"></span><button type="button" class="pdp-lightbox-close" aria-label="Close enlarged photograph">×</button></div><img alt="" referrerpolicy="no-referrer"><p class="pdp-lightbox-caption"></p><div class="pdp-lightbox-nav"><button type="button" class="pdp-lightbox-prev">← Previous</button><button type="button" class="pdp-lightbox-next">Next →</button></div></dialog><p class="guide-gallery-note">Supplier listing photography. Images do not guarantee the fulfillment configuration.</p></div>':'<div class="pdp-no-photo"><div class="pdp-abstract" aria-hidden="true"><i></i><i></i><i></i><span>HGD / STUDIO</span></div><p class="eyebrow">The everyday edit</p><h2>Product details, first.</h2><p>Supplier photography is not published for this item. Contact us to confirm the appearance and configuration before ordering.</p></div>';
 const purchaseNotes='<div class="order-note"><div class="order-note-title"><span class="order-lock" aria-hidden="true"></span><strong>Know what happens next.</strong></div><ol><li><strong>Review your order</strong><span>Stripe shows the final total and collects shipping information.</span></li><li><strong>Keep your confirmation</strong><span>Save the receipt for any questions about your order.</span></li><li><strong>Supplier delivery</strong><span>Typically 5–10 business days; timing can vary.</span></li></ol><p>Need to confirm a variant, availability or return terms? <a href="/#contact">Contact us before paying.</a></p></div>';
 const productActions='<div class="pdp-product-actions" hidden><button type="button" id="pdp-save" aria-pressed="false"><span class="heart-glyph" aria-hidden="true"></span><span>Save this find</span></button><button type="button" id="pdp-copy"><span class="pdp-link-glyph" aria-hidden="true"></span><span>Copy product link</span></button></div><p id="pdp-action-status" class="pdp-action-status" role="status" aria-live="polite"></p>';
 const sticky='<aside class="pdp-purchase-dock" hidden aria-label="Product purchase shortcut"><div><strong>$'+item.price+'</strong><span>'+escape(item.name)+'</span></div><a href="#purchase-panel" class="pdp-dock-cta">Review &amp; buy <span class="ui-arrow" aria-hidden="true"></span></a></aside>';
 const variant='<div class="pdp-variant"><strong>'+(evidence?.pinned?'Supplier listing configuration':'Confirm before ordering')+'</strong><p>'+(evidence?escape(evidence.variant)+'. '+(evidence.pinned?'Check the final order details before paying.':'Contact us to confirm the fulfillment variant.'): 'Exact supplier configuration and photography have not been published.')+'</p></div>';
 const schema={"@context":"https://schema.org","@type":"WebPage",name:g.title,url,description:g.intro,mainEntity:{"@type":"Product",name:item.name,offers:{"@type":"Offer",price:item.price,priceCurrency:"USD",url:item.url}},isPartOf:{"@type":"WebSite",name:"Home Gadget Deals",url:origin+"/"}};
 const style=`
/* X / product atelier detail surfaces */
.pdp{--edit-tone:#a5b79b;--edit-paper:#e8ebdf;--edit-ink:#315545;--edit-shadow:#36514318}
.pdp .pdp-title{border-left:3px solid var(--edit-tone);padding:5px 0 5px 17px}
.pdp .pdp-title .eyebrow{color:var(--edit-ink);font-weight:800;font-size:.71rem;letter-spacing:.12em}
.pdp .pdp-title h1{font-size:clamp(2.3rem,4.25vw,4.4rem);line-height:1.025;letter-spacing:-.055em;text-wrap:balance}
.pdp .pdp-title .availability{font-size:2.18rem;line-height:1.1;margin-top:13px}
.pdp .pdp-gallery-top{background:var(--edit-paper);padding:8px 12px;border:1px solid #192f2718;border-radius:10px;margin-bottom:10px}
.pdp .pdp-gallery-top .pdp-photo-count{color:var(--edit-ink);font-size:.74rem;letter-spacing:.1em}
.pdp .pdp-gallery-top button{background:#fffdf8;border-color:#192f2724}
.pdp .pdp-frame{background:var(--edit-paper);border:1px solid #192f2718;padding:12px 12px 0;border-radius:12px;box-shadow:0 10px 30px var(--edit-shadow);overflow:hidden}
.pdp .pdp-frame img{border:1px solid #192f2711;border-radius:7px;background:white;padding:9px;object-fit:contain}
.pdp .pdp-frame figcaption{background:transparent;border:0;color:var(--muted);padding:10px 2px;font-size:.78rem}
.pdp .pdp-gallery-controls{display:flex;gap:9px;flex-wrap:wrap;align-items:stretch}
.pdp .pdp-gallery-controls button{display:flex;flex-direction:column;align-items:stretch;gap:5px;padding:5px 5px 7px;min-height:74px;width:94px;background:#fffdf8;color:var(--ink);border:1px solid #cdd5c5;border-radius:9px;transition:background var(--motion-fast),border-color var(--motion-fast),transform var(--motion-fast)}
.pdp .pdp-gallery-controls button[aria-pressed=true]{background:var(--edit-paper);color:var(--ink);border-color:var(--edit-ink);box-shadow:0 0 0 1px var(--edit-ink)}
.pdp .pdp-gallery-controls button[aria-pressed=true] small{color:var(--edit-ink)}
.pdp .pdp-gallery-controls button:hover{border-color:var(--edit-ink)}
.pdp .pdp-gallery-controls button:active{transform:scale(.97)}
.pdp-thumb{display:block;width:100%;height:62px;overflow:hidden;background:#fff;border:1px solid #192f2712;border-radius:5px}
.pdp-thumb img{display:block;width:100%;height:100%;object-fit:contain}
.pdp-thumb-label{display:flex;align-items:center;justify-content:center;gap:3px;font-size:.65rem;line-height:1.3;white-space:nowrap}
.pdp-thumb-label small{margin:0;font-size:.58rem}
.pdp .pdp-gallery-nav{padding:9px 0;border-bottom:1px solid var(--line)}
.pdp .pdp-gallery-nav span{font-size:.72rem;letter-spacing:.09em;text-transform:uppercase;color:var(--edit-ink);font-weight:750}
.pdp .guide-gallery-note{font-size:.77rem;line-height:1.55}
.pdp .pdp-no-photo{position:relative;isolation:isolate;background:var(--edit-paper);border:1px solid #192f2720;border-radius:12px 64px 12px 12px;overflow:hidden;box-shadow:0 10px 30px var(--edit-shadow)}
.pdp .pdp-no-photo>p,.pdp .pdp-no-photo>h2{position:relative;z-index:1}
.pdp .pdp-no-photo .eyebrow{color:var(--edit-ink)}
.pdp-abstract{position:relative;height:142px;overflow:hidden;margin-bottom:24px;border-bottom:1px solid #192f2720;background:radial-gradient(ellipse at 66% 45%,var(--edit-tone),transparent 70%)}
.pdp-abstract i{position:absolute;left:50%;top:50%;width:115px;height:115px;border:1px solid var(--edit-ink);border-radius:50%;transform:translate(-30%,-55%);opacity:.26}
.pdp-abstract i:nth-child(2){width:83px;height:83px;transform:translate(-70%,-30%)}
.pdp-abstract i:nth-child(3){width:155px;height:155px;transform:translate(-25%,-50%);border-style:dashed}
.pdp-abstract span{position:absolute;left:10px;bottom:8px;font-size:.6rem;letter-spacing:.14em;font-weight:750;color:var(--edit-ink)}
.pdp .pdp-checklist section{background:linear-gradient(155deg,#fffdf8,var(--edit-paper));border-color:#192f271a;box-shadow:var(--shadow-rest);padding:22px;border-radius:13px}
.pdp .pdp-checklist section .pdp-step{color:var(--edit-ink);border-bottom:1px solid #192f2720;padding-bottom:12px;margin-bottom:13px}
.pdp .pdp-checklist h3{font:normal 1.35rem/1.15 Georgia,serif;letter-spacing:-.035em}
.pdp .pdp-related{background:var(--edit-paper);border-color:#192f2720}
.pdp .pdp-related .eyebrow{color:var(--edit-ink)}
@media(max-width:680px){.pdp .pdp-title{padding-left:12px;border-left-width:2px}.pdp .pdp-title h1{font-size:clamp(2.15rem,8vw,2.85rem)}.pdp .pdp-title .availability{font-size:1.85rem}.pdp .pdp-gallery-top{padding:6px 9px}.pdp .pdp-frame{padding:8px 8px 0}.pdp .pdp-frame img{padding:5px}.pdp .pdp-frame figcaption{font-size:.73rem;padding:8px 2px}.pdp .pdp-gallery-controls button{width:84px}.pdp-thumb{height:55px}.pdp-abstract{height:100px;margin-bottom:16px}.pdp .pdp-no-photo{border-radius:10px 45px 10px 10px;padding:20px}.pdp .pdp-checklist section{padding:17px}}
@media(prefers-reduced-motion:reduce){.pdp .pdp-gallery-controls button{transition:none!important}}

/* VIII / purchase confidence and continuity */
.pdp-product-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.pdp-product-actions button{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:44px;padding:8px 12px;border:1px solid #c8d3c3;border-radius:8px;background:#fffdf8;color:var(--green);font-size:.82rem;font-weight:700;transition:background var(--motion-fast),border-color var(--motion-fast),transform var(--motion-fast)}.pdp-product-actions button:hover{background:#e7ebde;border-color:var(--green)}.pdp-product-actions button:active{transform:scale(.98)}.pdp-product-actions button[aria-pressed=true]{background:#f4e6d9;color:#86441e;border-color:#c39173}.pdp-product-actions button[aria-pressed=true] .heart-glyph:after{display:none}.pdp-link-glyph{width:20px;height:16px;position:relative;transform:rotate(-38deg);flex:none}.pdp-link-glyph:before,.pdp-link-glyph:after{content:"";position:absolute;top:3px;width:11px;height:8px;border:1.6px solid currentColor;border-radius:6px}.pdp-link-glyph:before{left:0}.pdp-link-glyph:after{right:0}.pdp-action-status{color:var(--muted);font-size:.76rem;min-height:0;margin-top:5px}.pdp-action-status:empty{display:none}.pdp-purchase-panel{margin:16px 0 24px;padding:16px;border:1px solid #c6d2c0;border-radius:14px;background:#fffdf8;box-shadow:var(--shadow-rest);scroll-margin-top:24px}.pdp-purchase-panel .pdp-variant{margin-top:0}.pdp-purchase-panel .source{margin-top:14px;box-shadow:inset 0 1px 0 #ffffff18,0 3px 0 #173b2c}.pdp-purchase-panel .pdp-support{justify-content:space-between}.pdp-purchase-panel .pdp-support a{font-size:.81rem}.order-note{border-top:1px solid var(--line);margin-top:4px;padding-top:16px}.order-note-title{display:flex;align-items:center;gap:10px;color:var(--ink);font-size:.9rem}.order-lock{width:16px;height:13px;border:1.6px solid var(--green);border-radius:3px;position:relative;flex:none;margin-top:5px}.order-lock:before{content:"";position:absolute;left:3px;right:3px;height:8px;border:1.6px solid var(--green);border-bottom:0;border-radius:6px 6px 0 0;top:-8px}.order-note ol{counter-reset:orderstep;list-style:none;padding:0;margin:14px 0 0;display:grid;gap:10px}.order-note li{counter-increment:orderstep;display:grid;grid-template-columns:26px 1fr;column-gap:10px;color:var(--muted);font-size:.79rem;line-height:1.45}.order-note li:before{content:"0" counter(orderstep);grid-row:1/3;align-self:start;display:grid;place-items:center;width:26px;height:26px;border:1px solid #cdd7c7;border-radius:50%;font-size:.65rem;font-weight:750;color:var(--green);background:#eef0e5}.order-note li strong{color:var(--ink);font-size:.82rem;font-weight:700}.order-note li span{grid-column:2}.order-note>p{font-size:.76rem;margin-top:12px;color:var(--muted)}.order-note>p a{font-weight:650;text-underline-offset:3px}.pdp-purchase-dock{display:none}
@media(max-width:680px){.pdp-title .pdp-product-actions{margin-top:12px}.pdp-product-actions button{font-size:.78rem;padding:7px 10px}.pdp-purchase-panel{padding:13px;margin:12px 0 18px}.pdp-purchase-dock:not([hidden]){position:fixed;z-index:14;bottom:0;left:0;right:0;padding:9px 12px calc(9px + env(safe-area-inset-bottom));background:#f7f3e9fa;border-top:1px solid #cbd5c6;box-shadow:0 -6px 22px #192f271a;display:flex;align-items:center;gap:10px;animation:dock-in .2s ease-out}.pdp-purchase-dock>div{flex:1;min-width:0;display:grid;gap:2px}.pdp-purchase-dock strong{font-size:1.2rem;letter-spacing:-.04em;color:var(--ink);font-variant-numeric:tabular-nums}.pdp-purchase-dock>div span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--muted);font-size:.73rem}.pdp-dock-cta{display:inline-flex;align-items:center;gap:8px;min-height:46px;flex:none;background:var(--green);color:#fffdf8;padding:9px 12px;border-radius:8px;font-size:.83rem;text-decoration:none;font-weight:700}.pdp-dock-cta:hover{background:#173b2c}.pdp-dock-cta:active{transform:translateY(1px)}body:has(.pdp-purchase-dock:not([hidden])){padding-bottom:84px}body:has(dialog[open]) .pdp-purchase-dock{visibility:hidden}}@media(max-width:350px){.pdp-dock-cta{font-size:.76rem;padding:8px}.pdp-dock-cta .ui-arrow{display:none}}@media(prefers-reduced-motion:reduce){.pdp-purchase-dock{animation:none!important}.pdp-product-actions button{transition:none!important}}

.pdp-gallery-top,.pdp-gallery-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:9px;color:var(--muted);font-size:.8rem}.pdp-gallery-nav{margin:12px 0 0}.pdp-gallery-top button,.pdp-gallery-nav button,.pdp-lightbox button{min-height:44px;padding:8px 14px;border:1px solid #c4d0be;border-radius:8px;background:#fffdf8;color:var(--green);font-weight:700;font-size:.83rem;transition:background .18s,transform .18s}.pdp-gallery-nav button{width:48px;font-size:1.15rem}.pdp-gallery-top button:hover,.pdp-gallery-nav button:hover,.pdp-lightbox button:hover{background:#e3ead9}.pdp-gallery-top button:active,.pdp-gallery-nav button:active{transform:scale(.97)}.pdp-photo-count{font-variant-numeric:tabular-nums;font-weight:700;letter-spacing:.08em}.pdp-frame:not(.photo-failed) img{cursor:zoom-in}.pdp-frame[hidden]{display:none!important}.pdp-lightbox{padding:16px;border:1px solid #c3cdbd;border-radius:15px;background:#f7f3e9;color:var(--ink);width:min(920px,calc(100% - 24px));max-height:92dvh;overflow:auto;box-shadow:0 24px 65px #132e2850}.pdp-lightbox::backdrop{background:#132e28ce;backdrop-filter:blur(4px)}.pdp-lightbox-bar,.pdp-lightbox-nav{display:flex;align-items:center;justify-content:space-between;gap:10px}.pdp-lightbox-bar{margin-bottom:10px}.pdp-lightbox-count{font-size:.84rem;font-weight:750;color:var(--green)}.pdp-lightbox .pdp-lightbox-close{width:44px;padding:0;font-size:1.5rem}.pdp-lightbox img{display:block;width:100%;height:min(65vh,620px);object-fit:contain;background:white;border:1px solid var(--line);border-radius:8px}.pdp-lightbox-caption{font-size:.86rem;color:var(--muted);margin:10px 0}.pdp-lightbox[open]{animation:gallery-open .22s ease-out}@keyframes gallery-open{from{opacity:0;transform:translateY(9px)}to{opacity:1;transform:translateY(0)}}body:has(.pdp-lightbox[open]){overflow:hidden}.pdp-gallery button:disabled,.pdp-lightbox button:disabled{opacity:.5;cursor:not-allowed}@media(max-width:680px){.pdp-lightbox{padding:12px}.pdp-lightbox img{height:min(56dvh,500px)}.pdp-gallery-top button{font-size:.78rem;padding:8px 10px}}@media(prefers-reduced-motion:reduce){.pdp-lightbox[open]{animation:none!important}}

.pdp{padding:22px 0 56px}.pdp-crumb{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:.82rem;color:var(--muted);margin-bottom:18px}.pdp-crumb a{display:inline-flex;align-items:center;min-height:44px;font-weight:650;text-decoration:none}.pdp-crumb a:hover{text-decoration:underline}.pdp-crumb span{overflow-wrap:anywhere}.pdp-grid{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:clamp(20px,4vw,52px);align-items:start}.pdp-gallery,.pdp-info{min-width:0}.pdp-frame{border:1px solid #d6dbcd;border-radius:18px;overflow:hidden;margin:0 0 12px}.pdp-frame img{aspect-ratio:4/3;padding:18px}.pdp-frame figcaption{padding:12px 16px;font-size:.79rem}.pdp-gallery-controls{display:flex;gap:8px;flex-wrap:wrap}.pdp-gallery-controls button{min-height:46px;border:1px solid #cbd5c7;border-radius:8px;padding:8px 14px;background:#fffdf8;color:var(--ink);font-weight:650;font-size:.82rem;transition:background .18s,border-color .18s}.pdp-gallery-controls small{color:var(--muted);margin-right:4px}.pdp-gallery-controls button[aria-pressed=true]{background:var(--green);border-color:var(--green);color:white}.pdp-gallery-controls button[aria-pressed=true] small{color:#e0ebde}.pdp-gallery-controls button:hover{border-color:var(--green)}.pdp-frame.photo-failed img{display:none}.pdp-frame.photo-failed figcaption{padding:24px}.pdp-no-photo{min-height:320px;display:flex;flex-direction:column;justify-content:center;padding:clamp(22px,4vw,48px);border:1px solid #c6d0bc;border-radius:70px 14px 14px 14px;background:radial-gradient(circle at 90% 0,#e8d4a5,transparent 65%),repeating-linear-gradient(135deg,#e4e9d9,#e4e9d9 9px,#e0e6d5 9px,#e0e6d5 10px)}.pdp-monogram{font:normal 4.4rem/1 Georgia,serif;letter-spacing:-.12em;color:#315545;margin-bottom:22px}.pdp-monogram span{font-size:.55em;vertical-align:middle;color:#a04b24;padding:0 8px}.pdp-no-photo h2{font:normal 2.2rem/1.08 Georgia,serif;margin:10px 0}.pdp-no-photo p:last-child{max-width:35ch;color:var(--muted)}.pdp-info{padding:8px 0}.pdp-title h1{font:normal clamp(2.25rem,4.3vw,4.1rem)/1.02 Georgia,serif;letter-spacing:-.06em;max-width:18ch;margin:12px 0 16px;overflow-wrap:anywhere}.pdp-intro{font-size:1.03rem;color:var(--muted);line-height:1.65}.pdp-title .availability{font-size:2.1rem;margin:20px 0 8px}.pdp-price-note{font-size:.78rem;color:var(--muted)}.pdp-info .source{margin:18px 0 10px;min-height:56px;padding:14px 18px;font-size:1rem}.pdp-info .fit{margin:24px 0 0;gap:14px;padding-top:18px}.pdp-info .fit dt{font-size:.78rem}.pdp-info .fit dd{font-size:.93rem}.pdp-info .spec{border-bottom:0;margin:12px 0;padding:12px 0}.pdp-variant{border:1px solid #d9d1ba;border-radius:10px;background:#f5ecda;padding:13px 15px;margin-top:16px}.pdp-variant strong{font-size:.79rem;color:#70401e}.pdp-variant p{font-size:.83rem;color:#5d5340;margin-top:5px}.pdp-support{display:flex;flex-wrap:wrap;gap:8px 18px;align-items:center;font-size:.82rem}.pdp-support a{min-height:44px;display:inline-flex;align-items:center;font-weight:650}.pdp-divider{border-top:1px solid var(--line);margin:38px 0 28px}.pdp-detail-head{display:flex;align-items:end;justify-content:space-between;gap:16px;margin-bottom:18px}.pdp-detail-head h2,.pdp-related h2{font:normal clamp(1.9rem,3.2vw,2.8rem)/1.07 Georgia,serif;letter-spacing:-.04em}.pdp-detail-head p{font-size:.88rem;color:var(--muted);max-width:35ch}.pdp-checklist{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.pdp-checklist section{border:1px solid var(--line);border-radius:12px;padding:20px;background:#fffdf8}.pdp-step{display:block;font-size:.72rem;font-weight:800;color:#496b4d;letter-spacing:.12em;margin-bottom:15px}.pdp-checklist h3{font-size:1.15rem;margin-bottom:10px}.pdp-checklist p{font-size:.91rem;color:var(--muted);line-height:1.65}.pdp-related{margin-top:34px;border:1px solid #cdd8c6;border-radius:14px;padding:22px;background:#e7ebde;display:flex;align-items:center;justify-content:space-between;gap:20px}.pdp-related p{margin-top:8px;max-width:60ch;color:var(--muted)}.pdp-related a{display:flex;align-items:center;gap:12px;min-height:48px;padding:10px 14px;background:#fffdf8;border:1px solid #a6b8a0;border-radius:8px;font-weight:650;text-decoration:none;max-width:38ch}.pdp-related a:hover{border-color:var(--green)}.pdp-back{display:inline-flex;min-height:44px;align-items:center;margin-top:18px;font-weight:650}
.pdp-grid{grid-template-areas:"gallery title" "gallery info";column-gap:clamp(20px,4vw,52px);row-gap:18px;align-content:start}.pdp-title{grid-area:title;min-width:0;padding-top:8px}.pdp-gallery,.pdp-no-photo{grid-area:gallery}.pdp-info{grid-area:info;padding:0}.pdp-title .availability{margin:18px 0 6px}.pdp-support{gap:2px 16px}.pdp-title h1{margin-bottom:12px}@media(max-width:850px){.pdp-grid{gap:22px}.pdp-checklist{grid-template-columns:1fr}.pdp-related{align-items:flex-start;flex-direction:column}}@media(max-width:680px){.pdp{padding-top:12px}.pdp-crumb{font-size:.75rem;margin-bottom:8px;gap:6px}.pdp-grid{grid-template-columns:1fr;grid-template-areas:"title" "gallery" "info";gap:12px}.pdp-title{padding:0}.pdp-title h1{margin-top:8px;margin-bottom:8px}.pdp-title .availability{margin:10px 0 4px}.pdp-info{padding:0}.pdp-title h1{font-size:2.55rem;max-width:none}.pdp-info .availability{font-size:1.9rem}.pdp-frame{border-radius:12px}.pdp-frame img{padding:10px}.pdp-no-photo{min-height:220px;border-radius:40px 10px 10px 10px}.pdp-monogram{font-size:3rem;margin-bottom:10px}.pdp-detail-head{display:block}.pdp-detail-head p{margin-top:8px}.pdp-checklist section{padding:17px}.pdp-info .source{min-height:54px}.pdp-related{padding:16px}.pdp-related a{width:100%;max-width:none}.pdp-divider{margin:26px 0 20px}}`;
 const script="<script>(function galleryInteraction(){const frames=[...document.querySelectorAll(\".pdp-frame\")],controls=document.querySelector(\".pdp-gallery-controls\");if(!frames.length)return;const q=x=>document.querySelector(x),btns=[...(controls?.querySelectorAll(\"button\")||[])],top=q(\".pdp-gallery-top\"),nav=q(\".pdp-gallery-nav\"),dialog=q(\".pdp-lightbox\"),enlarge=q(\".pdp-enlarge\");let current=0,lastFocus=null;const ready=()=>!frames[current].classList.contains(\"photo-failed\");const updateZoom=()=>{if(!dialog?.open)return;const img=frames[current].querySelector(\"img\"),out=dialog.querySelector(\"img\");out.hidden=!ready();if(ready()){out.src=img.src;out.alt=img.alt}else{out.removeAttribute(\"src\");out.alt=\"\"}dialog.querySelector(\".pdp-lightbox-caption\").textContent=ready()?frames[current].querySelector(\"figcaption\").textContent:\"Supplier photo unavailable.\";dialog.querySelector(\".pdp-lightbox-count\").textContent=\"Photo \"+(current+1)+\" of \"+frames.length};const show=i=>{current=(i+frames.length)%frames.length;frames.forEach((f,n)=>f.hidden=n!==current);btns.forEach((b,n)=>b.setAttribute(\"aria-pressed\",String(n===current)));q(\".pdp-photo-count\").textContent=\"PHOTO \"+String(current+1).padStart(2,\"0\")+\" / \"+String(frames.length).padStart(2,\"0\");enlarge.disabled=!ready();updateZoom()};const zoom=()=>{if(!ready()||!dialog||typeof dialog.showModal!==\"function\")return;lastFocus=enlarge;dialog.showModal();updateZoom();q(\".pdp-lightbox-close\").focus()};for(const f of frames){const img=f.querySelector(\"img\");const fail=()=>{if(f.classList.contains(\"photo-failed\"))return;f.classList.add(\"photo-failed\");const cap=f.querySelector(\"figcaption\");cap.textContent=\"Supplier photo unavailable. \"+cap.textContent;enlarge.disabled=!ready();updateZoom()};img.addEventListener(\"error\",fail,{once:true});if(img.complete&&!img.naturalWidth)fail();img.addEventListener(\"click\",zoom)}btns.forEach((b,i)=>b.addEventListener(\"click\",()=>show(i)));q(\".pdp-prev\").addEventListener(\"click\",()=>show(current-1));q(\".pdp-next\").addEventListener(\"click\",()=>show(current+1));enlarge.addEventListener(\"click\",zoom);q(\".pdp-lightbox-close\").addEventListener(\"click\",()=>dialog.close());q(\".pdp-lightbox-prev\").addEventListener(\"click\",()=>show(current-1));q(\".pdp-lightbox-next\").addEventListener(\"click\",()=>show(current+1));dialog.addEventListener(\"close\",()=>{if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true})});dialog.addEventListener(\"keydown\",e=>{if(e.key===\"ArrowLeft\"||e.key===\"ArrowRight\"){e.preventDefault();show(current+(e.key===\"ArrowRight\"?1:-1))}});let x=null;q(\".pdp-frames\").addEventListener(\"touchstart\",e=>{x=e.touches.length===1?e.touches[0].clientX:null},{passive:true});q(\".pdp-frames\").addEventListener(\"touchend\",e=>{if(x!==null&&frames.length>1){const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>65)show(current+(d<0?1:-1))}x=null},{passive:true});top.hidden=false;controls.hidden=nav.hidden=frames.length<2;for(const b of dialog.querySelectorAll(\".pdp-lightbox-nav button\"))b.disabled=frames.length<2;show(0)})();</script>";
 return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f7f3e9"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>'+escape(item.name)+' | Home Gadget Deals</title><meta name="description" content="'+escape(g.intro)+'"><link rel="canonical" href="'+url+'"><meta property="og:type" content="website"><meta property="og:title" content="'+escape(item.name)+'"><meta property="og:description" content="'+escape(g.intro)+'"><meta property="og:url" content="'+url+'"><meta name="twitter:card" content="summary"><script type="application/ld+json">'+JSON.stringify(schema)+'</script><style>'+css+style+'</style></head><body><a class="skip" href="#main">Skip to content</a>'+header+'<main class="wrap pdp" id="main" data-category="'+tone+'"><nav class="pdp-crumb" aria-label="Breadcrumb"><a href="/">Shop</a><span aria-hidden="true">/</span><a href="/#products">Collection</a><span aria-hidden="true">/</span><span aria-current="page">'+escape(item.name)+'</span></nav><article aria-labelledby="product-title"><div class="pdp-grid"><div class="pdp-title"><p class="eyebrow">'+category+'</p><h1 id="product-title">'+escape(item.name)+'</h1><p class="availability">$'+item.price+'</p><p class="pdp-price-note">USD · Review final total at Stripe checkout.</p>'+productActions+'</div>'+gallery+'<div class="pdp-info"><p class="pdp-intro">'+escape(g.intro)+'</p><section class="pdp-purchase-panel" id="purchase-panel" aria-label="Purchase information">'+variant+retailer+'<div class="pdp-support"><a href="/#shipping">Delivery &amp; returns</a><a href="/#contact">Ask a question</a></div>'+purchaseNotes+'</section>'+fit+spec+'</div></div><div class="pdp-divider"></div><div class="pdp-detail-head"><h2>Before you bring it home.</h2><p>Three practical checks to help you choose the right gadget for your space.</p></div><div class="pdp-checklist">'+g.sections.map(([h,p],i)=>'<section><span class="pdp-step">CHECK / 0'+(i+1)+'</span><h3>'+escape(h)+'</h3><p>'+escape(p)+'</p></section>').join("")+'</div><section class="pdp-related"><div><p class="eyebrow">THE NEXT FIND / RELATED</p><h2>Compare your options.</h2><p>'+escape(g.different)+'</p></div><a href="'+link(g.related)+'">'+escape(related.name)+' · $'+related.price+' <span aria-hidden="true">→</span></a></section><a class="pdp-back" href="/#'+g.slug+'">← Back to collection</a></article></main>'+sticky+'<footer><div class="wrap footer-inner"><span class="footer-brand">home gadget deals<span class="brand-dot">.</span><small>Operated by Qira LLC</small></span><a href="/#shipping">Shipping and returns</a><a href="/#guides">Buying guides →</a></div></footer>'+script+'<script>('+"function purchaseExperience(slug,canonical){const q=s=>document.querySelector(s),actions=q(\".pdp-product-actions\"),save=q(\"#pdp-save\"),copy=q(\"#pdp-copy\"),status=q(\"#pdp-action-status\"),dock=q(\".pdp-purchase-dock\"),panel=q(\"#purchase-panel\"),source=panel?.querySelector(\"a.source\");let saved=new Set();const read=()=>{try{const d=JSON.parse(localStorage.getItem(\"hgd-saved-v1\")||\"[]\");if(Array.isArray(d))saved=new Set(d.filter(x=>typeof x===\"string\"))}catch{}};read();const sync=()=>{const on=saved.has(slug);save.setAttribute(\"aria-pressed\",String(on));save.lastElementChild.textContent=on?\"Saved to your finds\":\"Save this find\";save.firstElementChild.classList.toggle(\"is-filled\",on)};save.addEventListener(\"click\",()=>{read();if(saved.has(slug))saved.delete(slug);else saved.add(slug);let persisted=true;try{localStorage.setItem(\"hgd-saved-v1\",JSON.stringify([...saved]))}catch{persisted=false}sync();status.textContent=persisted?(saved.has(slug)?\"Added to your saved finds.\":\"Removed from saved finds.\"):\"Browser storage unavailable; this selection may not persist.\"});window.addEventListener(\"storage\",e=>{if(e.key===\"hgd-saved-v1\"){read();sync()}});window.addEventListener(\"pageshow\",()=>{read();sync()});copy.addEventListener(\"click\",async()=>{try{await navigator.clipboard.writeText(canonical);status.textContent=\"Product link copied.\"}catch{status.textContent=\"Copy unavailable in this browser. Use the address bar to share this page.\"}});if(!navigator.clipboard?.writeText)copy.hidden=true;actions.hidden=false;sync();if(!dock||!source)return;const update=()=>{const rect=source.getBoundingClientRect(),title=q(\".pdp-title\").getBoundingClientRect();dock.hidden=!(matchMedia(\"(max-width:680px)\").matches&&title.bottom<80&&(rect.bottom<0||rect.top>innerHeight-85))};window.addEventListener(\"scroll\",update,{passive:true});window.addEventListener(\"resize\",update);update();dock.querySelector(\"a\").addEventListener(\"click\",()=>{panel.setAttribute(\"tabindex\",\"-1\");panel.focus({preventScroll:true})})}"+')('+JSON.stringify(g.slug)+','+JSON.stringify(url)+');</script>'+'</body></html>';
}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[origin+"/",...guides.map(g=>origin+link(g.slug))].map(u=>'<url><loc>'+u+'</loc></url>').join("")+'</urlset>';
const favicon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M15 3h34a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12H3V15A12 12 0 0 1 15 3Z" fill="#234f3d"/><path d="m12 29 20-16 20 16M19 26v25h26V26M25 38h14m-7-7v14" fill="none" stroke="#fffdf8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

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
