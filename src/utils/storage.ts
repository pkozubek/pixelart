interface ISavedPixelArt {
    pixelArray: string[][];
    columns: number;
    rows: number;
    pixelSize: number;
}

export const savePixelArray = (savedItem: ISavedPixelArt) => {
    localStorage.setItem('pixelart', JSON.stringify(savedItem));
}

export const loadPixelArray = () => {
    const storageItem = localStorage.getItem('pixelart');
    return storageItem ? JSON.parse(storageItem) : null;
}