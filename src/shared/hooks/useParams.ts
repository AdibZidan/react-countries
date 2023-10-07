import { useParams as useParamsFromReactRouterDOM } from 'react-router-dom';

export const useParams = <
    T extends string | Record<string, string | undefined>
>() => useParamsFromReactRouterDOM<T>();
