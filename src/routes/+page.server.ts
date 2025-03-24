import type { PageServerLoad } from "./$types";
import type { RequestEvent } from "@sveltejs/kit";

export const load: PageServerLoad = async (event: RequestEvent) => {
  const res = await event.fetch('/');
  const pageData = await res.json();
  return pageData;
};
