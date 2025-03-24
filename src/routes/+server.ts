import { json } from "@sveltejs/kit";

export const GET = async () => {
  return json({
    data: 'API response',
  });
}