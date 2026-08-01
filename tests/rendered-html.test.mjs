import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(
    html,
    /<title>Lareina Yang — Software Engineer<\/title>/i,
  );
  assert.match(html, /LAREINA YANG/);
  assert.match(html, /TaskMosaic/);
  assert.match(html, /AI Art Detector/);
  assert.match(html, /CORE/);
  assert.match(html, /STRENGTHS/);
  assert.match(html, /LET(?:&#x27;|')S BUILD/);
  assert.match(html, /SOMETHING THOUGHTFUL/);
  assert.match(html, /MORE PROJECTS/);
  assert.match(html, /2\+/);
  assert.match(html, /INTERNSHIPS INCLUDED/);
});

test("renders accessible portfolio navigation and contact links", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /href="#about"/);
  assert.match(html, /href="\/projects"/);
  assert.match(html, /href="#experience"/);
  assert.match(html, /href="#contact"/);
  assert.match(html, /mailto:shiwen\.y@outlook\.com/);
  assert.match(html, /https:\/\/github\.com\/Lareina-Y/);
  assert.match(html, /https:\/\/linkedin\.com\/in\/shiwen-lareina-yang/);
  assert.match(html, /BACK TO TOP/);
  assert.match(html, /DESIGNED &amp; BUILT WITH CODEX/);
  assert.match(html, /@ (?:<!-- -->)?2026(?:<!-- -->)? LAREINA YANG/);
});
