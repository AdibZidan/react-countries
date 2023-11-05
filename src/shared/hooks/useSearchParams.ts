import { useSearchParams as useSearchParamsFromReactRouterDOM } from 'react-router-dom';

interface HookResult {
    paramName: string;
    updateParam: (paramValue: string) => void;
    resetParam: () => void;
}

export const useSearchParams = (paramName: string): HookResult => {
    const [searchParams, setSearchParams] = useSearchParamsFromReactRouterDOM();

    return {
        paramName: searchParams.get(paramName) ?? '',
        updateParam: (paramValueToUpdate: string) =>
            setSearchParams(() => ({
                [paramName]: paramValueToUpdate
            })),
        resetParam: () => {
            searchParams.delete(paramName);

            setSearchParams(searchParams);
        }
    };
};
