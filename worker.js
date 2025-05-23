export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname === "/" ? "/index.html" : url.pathname;

    try {
      const asset = await env.ASSETS.fetch(request);
      return asset;
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};
