import useSWR from 'swr';
import API from './base';

const fetcher = (url) => API.get(url).then((res) => res.data);

// eslint-disable-next-line import/prefer-default-export
export const getDockerImages = () => useSWR(`/dockerImages`, fetcher);
