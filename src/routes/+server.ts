import { json, normalizeUrl, type RequestEvent } from "@sveltejs/kit";
const homeWorldCache: Record<number, string> = {};

export const GET = async (request: RequestEvent) => {
  const searchTerm = request.url.searchParams.get('search') ?? '';
  const page = request.url.searchParams.get('page') ?? '';
  const response = await fetch(`https://swapi.dev/api/people?search=${searchTerm}&page=${page}`);
  const data = await response.json();
  const count = data.count;
  const next = normalizeUrl(data.next).url.searchParams.get('page');
  const prev = normalizeUrl(data.previous).url.searchParams.get('page');
  const results = data.results.map(res => {
    return {
      name: res.name,
      gender: res.gender,
      homeworld: res.homeworld
    }
  });
  const homeworldNamesPromises = await Promise.allSettled(results.map(r => getHomeworldName(r.homeworld)));
  homeworldNamesPromises.forEach((res, index) => {
    if (res.status === 'fulfilled') {
      results[index].homeworld = res.value;
      // TODO parse homeworld link to get index and set each to cache
      // then get from cache when retreieving data
    } else {
      results[index].homeworld = 'n/a';
    }
  });
  return json({
    count,
    next,
    prev, 
    results,
  });
}

const getHomeworldName = async (homeworldLink: string) => {
  const response = await fetch(homeworldLink);
  const data = await response.json();
  return data?.name ?? 'n/a';
}