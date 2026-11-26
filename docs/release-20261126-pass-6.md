# Pass VI — Conversion measurement

Production deployment: d6ea73ac-49c7-4973-aaa8-b74809ccdb62. Deployed source: 715a3d22e066bd7ce236e91e478f2ab133d19fb1. Preview: 22b6e133-1a6e-4753-a4cf-8a8d2ebb84fb. Rollback: 887b84ad-6dad-4951-89a6-498077000c4a.

## Storage and limits
Cloudflare D1 database homegadgetdeals-analytics; binding HGD_DB. Daily aggregate counts keyed by UTC day, event, page, product, source, medium, campaign and stream. No unique visitors, raw referrers, stored IPs, user agents or personal identifiers in the application table. Cloudflare may process network metadata. Session storage retains category attribution. DNT/GPC respected. Preview and explicitly tagged QA events excluded from live reporting. Counts may include bots or repeats and may miss blocked or lost events. A click is not a purchase. No affiliate conversion reporting.

## Campaign contract
utm_source: google, bing, reddit, facebook, instagram, threads, linkedin, x, tiktok, youtube, email, pinterest, other.
utm_medium: organic, social, email, referral, paid, other.
utm_campaign: hgd-launch, hgd-lighting, hgd-desk, hgd-sunset, hgd-astronaut, hgd-galaxy, hgd-humidifier.
Unknown tags collapse to other. QA: utm_source=qa&utm_medium=qa&utm_campaign=release-qa.
Example: https://homegadgetdeals.pages.dev/guides/sunset-lamp/?utm_source=reddit&utm_medium=social&utm_campaign=hgd-sunset

## Owner reporting
Run in D1 console (not a public reporting endpoint):

```sql
SELECT day,event,page,product,source,medium,campaign,SUM(count) AS total
FROM daily_events WHERE stream='live'
GROUP BY day,event,page,product,source,medium,campaign
ORDER BY day DESC,total DESC;
```

Verification: six QA events stored (four page views and two retailer clicks), three from production and three from preview. No live events at snapshot. Invalid product/campaign rejected. Initial Analytics Engine implementation returned 204 but SQL showed no records; replaced by D1 and confirmed persisted writes. New D1 usage subject to current account allowances and billing; no plan change made.
