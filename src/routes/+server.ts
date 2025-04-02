import { json, type RequestEvent } from "@sveltejs/kit";

export const GET = async (_request: RequestEvent) => {
  // const response = await fetch(``);
  // const data = await response.json();
  const results = [...Array.from({length: 50}).map((_, index) => {
    return {
      id: index,
      name: `item_${index}`
    }
  })]
  return json({
    results,
  });
}