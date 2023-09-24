interface Flags {
    png: string;
    svg: string;
    alt?: string;
}

interface Name {
    common: string;
}

interface CountryDetailName {
    common: string;
    nativeName?: {
        [key: string]: {
            official: string;
        };
    };
}

type Currency = Record<string, { name: string }>;

interface Languages {
    [key: string]: string;
}

export interface Country {
    flags: Flags;
    name: Name;
    capital?: string[];
    region: string;
    population: number;
}

export interface CountryDetail {
    flags: Flags;
    name: CountryDetailName;
    population: number;
    region: string;
    subregion?: string;
    capital?: string[];
    tld?: string[];
    currencies?: Currency;
    languages?: Languages;
    borders?: string[];
}
