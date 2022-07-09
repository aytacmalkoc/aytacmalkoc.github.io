const getContrastYIQ = (hexColor) => {
    hexColor = hexColor.replace('#', '');

    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return (yiq >= 128) ? '#000000' : '#ffffff';
}

const getContrast50 = (hexcolor) => {
    return (parseInt(hexcolor, 16) > 0xffffff / 2) ? '#000000' : '#ffffff';
}

export {
    getContrastYIQ,
    getContrast50
}