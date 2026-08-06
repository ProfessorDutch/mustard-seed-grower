/**
 * Reads a server env var across runtimes.
 *
 * Netlify's Node/Deno function runtimes expose values through the global
 * `Netlify.env` store; some builds populate that but not `process.env`.
 * Cloudflare Workers and Node populate `process.env` normally.
 */
export function readServerEnv(name: string): string | undefined {
  const fromProcess =
    typeof process !== "undefined" ? process.env?.[name] : undefined;
  if (fromProcess) return fromProcess;

  const netlify = (globalThis as { Netlify?: { env?: { get?: (k: string) => string | undefined } } })
    .Netlify;
  const fromNetlify = netlify?.env?.get?.(name);
  if (fromNetlify) return fromNetlify;

  return undefined;
}
