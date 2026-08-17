import { experimental_getFontFileURL, fontData } from "astro:assets";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
	const fontPath = fontData["--font-inter"][0]?.src[0]?.url;
	if (!fontPath) throw new Error("Font not found");
  const font_url = experimental_getFontFileURL(fontPath, url);

  return new Response(font_url)
};
