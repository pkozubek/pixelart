import { baseColor } from "../consts";

export const copyTwoDimenisonalArray = (pixelArray: string[][]) => {
    const copyOfPixelArray = [];
    for (let i = 0; i < pixelArray.length; i++) copyOfPixelArray[i] = pixelArray[i].slice();
    return copyOfPixelArray;
}

const generateColumns = (columnsNumber:number, color: string):string[] => [...Array(columnsNumber)].map(() => color);
const generateRows = (rowNumber: number, column: string[]) => [...Array(rowNumber)].map(() => column);
const addColumnsToArray = (pixelArray: string[][], changeOfRows: number):string[][]=> pixelArray.map(array => [...array, ...generateColumns(changeOfRows, baseColor)]);

const addRowsToArray = (pixelArray: string[][], changeOfColumns: number): string[][] => {
    const sizeOfColumn = pixelArray[0].length;
    const newRows = generateRows(changeOfColumns, generateColumns(sizeOfColumn, baseColor))
    return [...pixelArray, ...newRows];
};

export const generatePixelArray = (row:number, column:number) => {
  return generateRows(column, generateColumns(row, baseColor))
}

const removeColumnsFromArray = (pixelArray: string[][], columnsLength: number):string[][] => pixelArray.map(array => array.slice(0,columnsLength));
const removeRowsFromArray = (pixelArray: string[][], newLength: number): string[][] => {
    pixelArray.length = newLength;
    return pixelArray;
}

export const morphPixelArrayWidth = (pixelArray:string[][], newWidth:number) => {
    let newPixelArray = copyTwoDimenisonalArray(pixelArray);

    const columnsDifference = newWidth - pixelArray[0].length; 
    if(columnsDifference > 0) newPixelArray = addColumnsToArray(newPixelArray, columnsDifference);
    if(columnsDifference < 0) newPixelArray = removeColumnsFromArray(newPixelArray, newWidth);

    return newPixelArray;
}

export const morphPixelArrayHeight = (pixelArray: string[][], newHeight: number) => {
    const rowsDifference = newHeight - pixelArray.length;
    let newPixelArray = copyTwoDimenisonalArray(pixelArray);

    if(rowsDifference > 0) newPixelArray = addRowsToArray(newPixelArray, rowsDifference);
    if(rowsDifference < 0) newPixelArray = removeRowsFromArray(newPixelArray, newHeight);
    
    return newPixelArray;
}

export const fillPixelArrayWithColor = (pixelArray:string[][], newColor:string,rowIndex:number, columnIndex:number) => {
    const copyOfPixelArray = copyTwoDimenisonalArray(pixelArray);
    const current = copyOfPixelArray[rowIndex][columnIndex];

    if(current === newColor) return copyOfPixelArray;

    fill(copyOfPixelArray, rowIndex, columnIndex, newColor, current);
    return copyOfPixelArray;
}

const fill = (image:string[][], sr:number, sc:number, newColor:string, current:string) => {
    if(sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[sr].length - 1 || image[sr][sc] !== current){
        return;
    }

    image[sr][sc] = newColor;
    fill(image, sr - 1, sc, newColor, current);
    fill(image, sr + 1, sc, newColor, current);
    fill(image, sr, sc - 1, newColor, current);
    fill(image, sr, sc + 1, newColor, current);
}