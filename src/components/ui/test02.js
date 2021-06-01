import React from 'react'
import { useAsyncHook } from '../../hooks/useAsyncHook';

export const test02 = (searchText) => {
    const [heroes, loading] = useAsyncHook(searchText, 3);
    return [heroes, loading];
}
