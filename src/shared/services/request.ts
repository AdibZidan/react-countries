const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, { method: 'GET' });

    return await response.json();
};

export const request = {
    get
};
