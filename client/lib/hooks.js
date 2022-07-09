import fetcher from './fetcher.js';
import useSWR from 'swr';

export const me = (id) => {
  if (id) {
    const { data, error } = useSWR('user/' + id, fetcher);

    return {
      user: data,
      isLoading: !data && !error,
      isError: error,
    };
  }
  return {
    user: null,
    isLoading: false,
    isError: true,
  };
};
