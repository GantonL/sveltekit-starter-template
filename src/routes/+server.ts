import { API_URL } from "$env/static/private";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const response = await fetch(`${API_URL}/data`);
  const data = await response.json();
  return json({data});
}