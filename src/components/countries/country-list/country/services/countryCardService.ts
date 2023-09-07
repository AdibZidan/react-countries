export const composeCountryCardAlt = (
    countryName: string,
    alt = ''
): string => {
    if (alt === '') {
        return `The flag of ${countryName}.`;
    }

    return alt;
};

export const composeCountryCardValue = (value: string | number): string => {
    if (typeof value === 'number') {
        return new Intl.NumberFormat().format(value);
    }

    return value;
};
