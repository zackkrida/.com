# zackkrida.com

[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100)](https://github.com/ebidel/lighthouse-badge)

my personal site. no tests, no ci, deploy with scp. rarely updated :) i need to focus on production code!

still, this site is emblematic of modern best-practices for performance, including things like:

- Using the webp image format with a `<picture>` based jpg fallback
- Code splitting and prefetching for application routes JavaScript
- Seperate JavaScript bundles for modern ecosystems and legacy systems with built-in detection
- HTTP/2, gzip compresssion, and long cache expiry on static assets via NGINX
