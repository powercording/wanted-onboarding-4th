import apiRequest from './index.tsx';

const URL = '/search';

interface SearchList {
  q: string;
  page: number;
  limit: number;
  result: string[];
  qty: number;
  total: number;
}

export default async function getSearchList(text: string, page?: number) {
  try {
    const result = await apiRequest.get<SearchList>(`${URL}?q=${text}&page=${page || ''}`);
    return result.data;
  } catch (error) {
    throw new Error('API getSearchList error');
  }
}
