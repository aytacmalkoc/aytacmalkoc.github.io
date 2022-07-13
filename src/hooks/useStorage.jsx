import { useState, useEffect } from 'react'

export const useStorage = key => {
    const [value, setValue] = useState(() => {
        const json = localStorage.getItem(key);
        return json ? JSON.parse(json) : null;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}