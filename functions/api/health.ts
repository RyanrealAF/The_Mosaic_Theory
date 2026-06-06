export const onRequestGet: PagesFunction = async () => {
  return new Response(
    JSON.stringify({ status: "alive", runtime: "cloudflare-pages" }),
    { 
      status: 200, 
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      } 
    }
  );
};
