// === Prefetching and predictor OFF ===
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// === Speculative connections OFF ===
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// === Extra privacy ===
user_pref("network.dns.disableIPv6", true);
user_pref("network.early-hints.enabled", false);
user_pref("network.early-hints.preconnect.enabled", false);

// === Disable pipelining HTTP ===
user_pref("network.http.pipelining", false);
user_pref("network.http.pipelining.ssl", false);
user_pref("network.http.pipelining.maxrequests", 0);

// === (Optional) Anti-tracking protection ===
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
