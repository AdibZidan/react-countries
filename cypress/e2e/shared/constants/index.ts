const SYRIA_DETAIL = {
    name: {
        common: 'Syria',
        official: 'Syrian Arab Republic',
        nativeName: {
            ara: {
                official: 'الجمهورية العربية السورية',
                common: 'سوريا'
            }
        }
    },
    tld: ['.sy', 'سوريا.'],
    currencies: {
        SYP: {
            name: 'Syrian pound'
        }
    },
    capital: ['Damascus'],
    region: 'Asia',
    languages: {
        ara: 'Arabic'
    },
    borders: ['IRQ', 'ISR', 'JOR', 'LBN', 'TUR'],
    population: 17_500_657,
    flags: {
        png: 'https://flagcdn.com/w320/sy.png',
        svg: 'https://flagcdn.com/sy.svg',
        alt: 'The flag of Syria is composed of three equal horizontal bands of red, white and black. At the center of the white band are two small five-pointed green stars arranged in a horizontal line.'
    }
};
const SYRIA_DETAIL_BORDERS = ['Jordan', 'Lebanon', 'Iraq', 'Israel', 'Turkey'];
const UKRAINE_DETAIL = {
    name: {
        common: 'Ukraine',
        official: 'Ukraine',
        nativeName: {
            ukr: {
                official: 'Україна',
                common: 'Україна'
            }
        }
    },
    tld: ['.ua', '.укр'],
    currencies: {
        UAH: {
            name: 'Ukrainian hryvnia',
            symbol: '₴'
        }
    },
    capital: ['Kyiv'],
    region: 'Europe',
    languages: {
        ukr: 'Ukrainian'
    },
    borders: ['BLR', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK'],
    population: 44134693,
    flags: {
        png: 'https://flagcdn.com/w320/ua.png',
        svg: 'https://flagcdn.com/ua.svg',
        alt: 'The flag of Ukraine is composed of two equal horizontal bands of blue and yellow.'
    }
};
const UKRAINE_DETAIL_BORDERS = [
    'Moldova',
    'Hungary',
    'Belarus',
    'Russia',
    'Romania',
    'Poland',
    'Slovakia'
];
const AUSTRIA_DETAIL = {
    name: {
        common: 'Austria',
        official: 'Republic of Austria',
        nativeName: {
            bar: {
                official: 'Republik Österreich',
                common: 'Österreich'
            }
        }
    },
    tld: ['.at'],
    currencies: {
        EUR: {
            name: 'Euro',
            symbol: '€'
        }
    },
    capital: ['Vienna'],
    region: 'Europe',
    languages: {
        de: 'German'
    },
    borders: ['CZE', 'DEU', 'HUN', 'ITA', 'LIE', 'SVK', 'SVN', 'CHE'],
    population: 8917205,
    flags: {
        png: 'https://flagcdn.com/w320/at.png',
        svg: 'https://flagcdn.com/at.svg',
        alt: 'The flag of Austria is composed of three equal horizontal bands of red, white and red.'
    }
};
const AUSTRIA_DETAIL_BORDERS = [
    'Hungary',
    'Slovenia',
    'Switzerland',
    'Czechia',
    'Germany',
    'Liechtenstein',
    'Italy',
    'Slovakia'
];

export const SYRIA = {
    flags: {
        png: 'https://flagcdn.com/w320/sy.png',
        svg: 'https://flagcdn.com/sy.svg',
        alt: 'The flag of Syria is composed of three equal horizontal bands of red, white and black. At the center of the white band are two small five-pointed green stars arranged in a horizontal line.'
    },
    name: {
        common: 'Syria',
        official: 'Syrian Arab Republic',
        nativeName: {
            ara: {
                official: 'الجمهورية العربية السورية',
                common: 'سوريا'
            }
        }
    },
    capital: ['Damascus'],
    region: 'Asia',
    population: 17500657
};
export const UKRAINE = {
    flags: {
        png: 'https://flagcdn.com/w320/ua.png',
        svg: 'https://flagcdn.com/ua.svg',
        alt: 'The flag of Ukraine is composed of two equal horizontal bands of blue and yellow.'
    },
    name: {
        common: 'Ukraine',
        official: 'Ukraine',
        nativeName: {
            ukr: {
                official: 'Україна',
                common: 'Україна'
            }
        }
    },
    capital: ['Kyiv'],
    region: 'Europe',
    population: 44134693
};
export const AUSTRIA = {
    flags: {
        png: 'https://flagcdn.com/w320/at.png',
        svg: 'https://flagcdn.com/at.svg',
        alt: 'The flag of Austria is composed of three equal horizontal bands of red, white and red.'
    },
    name: {
        common: 'Austria',
        official: 'Republic of Austria',
        nativeName: {
            bar: {
                official: 'Republik Österreich',
                common: 'Österreich'
            }
        }
    },
    capital: ['Vienna'],
    region: 'Europe',
    population: 8917205
};

export const COUNTRY_DETAIL = {
    Syria: SYRIA_DETAIL,
    Ukraine: UKRAINE_DETAIL,
    Austria: AUSTRIA_DETAIL
};

export const COUNTRY_DETAIL_BORDER = {
    Syria: SYRIA_DETAIL_BORDERS,
    Ukraine: UKRAINE_DETAIL_BORDERS,
    Austria: AUSTRIA_DETAIL_BORDERS
};
