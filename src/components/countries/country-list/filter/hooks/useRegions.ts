import { Region } from '../types';

interface HookResult {
    regions: Region[];
}

export const useRegions = (): HookResult => ({
    regions: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
});
