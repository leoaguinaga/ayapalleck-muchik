export function withProtocol(url?: string) {
  if (!url) return "https://api-production-2748.up.railway.app";
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
}

export function trimEndSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}