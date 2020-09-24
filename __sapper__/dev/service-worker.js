(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1600918969321;

	const files = [
		"service-worker-index.html",
		".DS_Store",
		"about-scrapbook-1.png",
		"about-scrapbook.png",
		"falling/0.png",
		"falling/1.png",
		"falling/2.png",
		"falling/3.png",
		"falling/4.png",
		"falling/5.png",
		"falling/6.png",
		"falling/7.png",
		"favicon.png",
		"fonts/Brume.woff2",
		"fonts/Cognace-Regular.woff2",
		"fonts/UglyShapesFont-Normal.woff2",
		"fonts/skandinavia.woff2",
		"global.css",
		"hamburger.png",
		"hero-scrapbook.png",
		"home-bike.png",
		"logo-192.png",
		"logo-512.png",
		"manifest.json",
		"parallax/parallax0.png",
		"parallax/parallax1.png",
		"parallax/parallax2.png",
		"parallax/parallax3.png",
		"parallax/parallax4.png",
		"parallax/parallax5.png",
		"parallax/parallax6.png",
		"parallax/parallax7.png",
		"parallax/parallax8.png",
		"run-dance.png"
	];

	const shell = [
		"client/client.e14c0cd6.js",
		"client/index.4aa897de.js",
		"client/sapper-dev-client.1e7a4a5e.js",
		"client/client.dde14ba5.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
	  event.waitUntil(
	    caches
	      .open(ASSETS)
	      .then(cache => cache.addAll(to_cache))
	      .then(() => {
	        self.skipWaiting();
	      })
	  );
	});

	self.addEventListener('activate', event => {
	  event.waitUntil(
	    caches.keys().then(async keys => {
	      // delete old caches
	      for (const key of keys) {
	        if (key !== ASSETS) await caches.delete(key);
	      }

	      self.clients.claim();
	    })
	  );
	});

	self.addEventListener('fetch', event => {
	  if (event.request.method !== 'GET' || event.request.headers.has('range'))
	    return;

	  const url = new URL(event.request.url);

	  // don't try to handle e.g. data: URIs
	  if (!url.protocol.startsWith('http')) return;

	  // ignore dev server requests
	  if (
	    url.hostname === self.location.hostname &&
	    url.port !== self.location.port
	  )
	    return;

	  // always serve static files and bundler-generated assets from cache
	  if (url.host === self.location.host && cached.has(url.pathname)) {
	    event.respondWith(caches.match(event.request));
	    return;
	  }

	  // for pages, you might want to serve a shell `service-worker-index.html` file,
	  // which Sapper has generated for you. It's not right for every
	  // app, but if it's right for yours then uncomment this section
	  /*
	  if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
	    event.respondWith(caches.match('/service-worker-index.html'));
	    return;
	  }
	  */

	  if (event.request.cache === 'only-if-cached') return;

	  // for everything else, try the network first, falling back to
	  // cache if the user is offline. (If the pages never change, you
	  // might prefer a cache-first approach to a network-first one.)
	  event.respondWith(
	    caches.open(`offline${timestamp}`).then(async cache => {
	      try {
	        const response = await fetch(event.request);
	        cache.put(event.request, response.clone());
	        return response;
	      } catch (err) {
	        const response = await cache.match(event.request);
	        if (response) return response;

	        throw err;
	      }
	    })
	  );
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYwMDkxODk2OTMyMTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCIuRFNfU3RvcmVcIixcblx0XCJhYm91dC1zY3JhcGJvb2stMS5wbmdcIixcblx0XCJhYm91dC1zY3JhcGJvb2sucG5nXCIsXG5cdFwiZmFsbGluZy8wLnBuZ1wiLFxuXHRcImZhbGxpbmcvMS5wbmdcIixcblx0XCJmYWxsaW5nLzIucG5nXCIsXG5cdFwiZmFsbGluZy8zLnBuZ1wiLFxuXHRcImZhbGxpbmcvNC5wbmdcIixcblx0XCJmYWxsaW5nLzUucG5nXCIsXG5cdFwiZmFsbGluZy82LnBuZ1wiLFxuXHRcImZhbGxpbmcvNy5wbmdcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImZvbnRzL0JydW1lLndvZmYyXCIsXG5cdFwiZm9udHMvQ29nbmFjZS1SZWd1bGFyLndvZmYyXCIsXG5cdFwiZm9udHMvVWdseVNoYXBlc0ZvbnQtTm9ybWFsLndvZmYyXCIsXG5cdFwiZm9udHMvc2thbmRpbmF2aWEud29mZjJcIixcblx0XCJnbG9iYWwuY3NzXCIsXG5cdFwiaGFtYnVyZ2VyLnBuZ1wiLFxuXHRcImhlcm8tc2NyYXBib29rLnBuZ1wiLFxuXHRcImhvbWUtYmlrZS5wbmdcIixcblx0XCJsb2dvLTE5Mi5wbmdcIixcblx0XCJsb2dvLTUxMi5wbmdcIixcblx0XCJtYW5pZmVzdC5qc29uXCIsXG5cdFwicGFyYWxsYXgvcGFyYWxsYXgwLnBuZ1wiLFxuXHRcInBhcmFsbGF4L3BhcmFsbGF4MS5wbmdcIixcblx0XCJwYXJhbGxheC9wYXJhbGxheDIucG5nXCIsXG5cdFwicGFyYWxsYXgvcGFyYWxsYXgzLnBuZ1wiLFxuXHRcInBhcmFsbGF4L3BhcmFsbGF4NC5wbmdcIixcblx0XCJwYXJhbGxheC9wYXJhbGxheDUucG5nXCIsXG5cdFwicGFyYWxsYXgvcGFyYWxsYXg2LnBuZ1wiLFxuXHRcInBhcmFsbGF4L3BhcmFsbGF4Ny5wbmdcIixcblx0XCJwYXJhbGxheC9wYXJhbGxheDgucG5nXCIsXG5cdFwicnVuLWRhbmNlLnBuZ1wiXG5dO1xuZXhwb3J0IHsgZmlsZXMgYXMgYXNzZXRzIH07IC8vIGxlZ2FjeVxuXG5leHBvcnQgY29uc3Qgc2hlbGwgPSBbXG5cdFwiY2xpZW50L2NsaWVudC5lMTRjMGNkNi5qc1wiLFxuXHRcImNsaWVudC9pbmRleC40YWE4OTdkZS5qc1wiLFxuXHRcImNsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiLFxuXHRcImNsaWVudC9jbGllbnQuZGRlMTRiYTUuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBjYWNoZWQgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzXG4gICAgICAub3BlbihBU1NFVFMpXG4gICAgICAudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gICAgICB9KVxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG4gICAgICAvLyBkZWxldGUgb2xkIGNhY2hlc1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jbGllbnRzLmNsYWltKCk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpXG4gICAgcmV0dXJuO1xuXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG4gIC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG4gIGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG4gIC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG4gIGlmIChcbiAgICB1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiZcbiAgICB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0XG4gIClcbiAgICByZXR1cm47XG5cbiAgLy8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcbiAgaWYgKHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgY2FjaGVkLmhhcyh1cmwucGF0aG5hbWUpKSB7XG4gICAgZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXG4gIC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuICAvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cbiAgLypcbiAgaWYgKHVybC5vcmlnaW4gPT09IHNlbGYub3JpZ2luICYmIHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdHRlcm4udGVzdCh1cmwucGF0aG5hbWUpKSkge1xuICAgIGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gICovXG5cbiAgaWYgKGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09ICdvbmx5LWlmLWNhY2hlZCcpIHJldHVybjtcblxuICAvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xuICAvLyBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLiAoSWYgdGhlIHBhZ2VzIG5ldmVyIGNoYW5nZSwgeW91XG4gIC8vIG1pZ2h0IHByZWZlciBhIGNhY2hlLWZpcnN0IGFwcHJvYWNoIHRvIGEgbmV0d29yay1maXJzdCBvbmUuKVxuICBldmVudC5yZXNwb25kV2l0aChcbiAgICBjYWNoZXMub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApLnRoZW4oYXN5bmMgY2FjaGUgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgY2FjaGUucHV0KGV2ZW50LnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsV0FBVztDQUNaLENBQUMsdUJBQXVCO0NBQ3hCLENBQUMscUJBQXFCO0NBQ3RCLENBQUMsZUFBZTtDQUNoQixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsZUFBZTtDQUNoQixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsZUFBZTtDQUNoQixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxhQUFhO0NBQ2QsQ0FBQyxtQkFBbUI7Q0FDcEIsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQyxtQ0FBbUM7Q0FDcEMsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyxZQUFZO0NBQ2IsQ0FBQyxlQUFlO0NBQ2hCLENBQUMsb0JBQW9CO0NBQ3JCLENBQUMsZUFBZTtDQUNoQixDQUFDLGNBQWM7Q0FDZixDQUFDLGNBQWM7Q0FDZixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FB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
