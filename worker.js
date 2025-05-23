export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname === "/" ? "/index.html" : url.pathname;

    try {
      const file = await env.ASSETS.get(path.slice(1), { type: "stream" });

      if (!file) {
        return new Response("404 Not Found", { status: 404 });
      }

      const contentType = getContentType(path);
      return new Response(file, {
        headers: {
          "Content-Type": contentType,
        },
      });
    } catch (err) {
      return new Response("Error: " + err.message, { status: 500 });
    }
  }
}

function getContentType(path) {
  if (path.endsWith(".html")) return "text/html";
  if (path.endsWith(".css")) return "text/css";
  if (path.endsWith(".js")) return "application/javascript";
  if (path.endsWith(".json")) return "application/json";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  if (path.endsWith(".gif")) return "image/gif";
  return "application/octet-stream";
}
