export const savePixelArray = (arr) => {
    localStorage.setItem('test-item', JSON.stringify(arr));
}

export const loadPixelArray = () => {
    const storageItem = localStorage.getItem('test-item');
    return JSON.parse(storageItem);
}