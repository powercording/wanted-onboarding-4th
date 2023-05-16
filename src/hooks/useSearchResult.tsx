import { useState } from 'react';
import getSearchList from '../api/search.tsx';

interface SearchResultState {
  result: string[];
  total: number;
}

export const INITIAL_STATE = {
  result: [],
  total: 0,
};

export default function useSearchResult() {
  const [searchResult, setSearchResult] = useState<SearchResultState>(INITIAL_STATE);
  const [searchLoading, setSearchLoading] = useState(false);
  const { result, total } = searchResult;

  const getSearch = async (text: string, index: number) => {
    if (result.length && result.length >= total) return;
    setSearchLoading(() => true);

    try {
      const response = await getSearchList(text, index);

      setSearchResult((prev: SearchResultState) => ({
        ...prev,
        result: [...prev.result, ...response.result],
        total: response.total,
      }));
    } catch (error) {
      throw new Error('API getSearchList error');
    } finally {
      setSearchLoading(() => false);
    }
  };
  return {
    getSearch,
    setSearchResult,
    result,
    searchLoading,
    total,
  };
}
