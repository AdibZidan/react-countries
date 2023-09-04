interface Flags {
    png: string;
    svg: string;
    alt?: string;
}

interface Name {
    common: string;
}

export interface Country {
    flags: Flags;
    name: Name;
    capital?: string[];
    region: string;
    population: number;
}
