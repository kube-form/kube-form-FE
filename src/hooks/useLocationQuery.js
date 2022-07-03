import { useMemo } from 'react';
import { useLocation } from 'react-router';

export default function useLocationQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}
