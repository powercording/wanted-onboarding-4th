import apiRequest from './index.tsx';

const URL = '/api/search';

interface SearchList {
  q: string;
  page: number;
  limit: number;
  result: string[];
  qty: number;
  total: number;
}

export default async function getSearchList(text: string, page?: number) {
  const result = await apiRequest.get<SearchList>(`${URL}?q=${text}?page=${page || ''}`);

  return result.data;
}
const dummySearchList: SearchList = {
  q: 'test',
  page: 1,
  limit: 10,
  result: [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
    'test9',
    'test10',
    'test11',
    'test12',
    'test13',
    'test14',
    'test15',
    'test16',
    'test17',
    'test18',
    'test19',
    'test20',
    'test21',
    'test22',
  ],
  qty: 10,
  total: 22,
};
export function testSearchList(page: number) {
  const startIndex = page * 10;
  const endIndex = startIndex + 10;
  const result = dummySearchList.result.slice(startIndex, endIndex);
  console.log(result);

  return { result, total: dummySearchList.total };
}
