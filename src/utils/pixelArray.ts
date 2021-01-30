import { baseColor } from "../consts";

interface IMorphArrayProps {
    pixelArray: string[][];
    newWidth?: number;
    newHeight?: number;
}

const generateRows = (sizeOfRow:number, color: string):string[] => [...Array(sizeOfRow)].map(() => color);
const generateColumns = (sizeOfColumns: number, row: string[]) => [...Array(sizeOfColumns)].map(() => row);

const addRowsToArray = (pixelArray: string[][], changeOfRows: number):string[][]=> pixelArray.map(array => [...array, ...generateRows(changeOfRows, baseColor)]);
const addColumnsToArray = (pixelArray: string[][], changeOfColumns: number): string[][] => {
    const sizeOfRow = pixelArray[0].length;
    const newColumns = generateColumns(changeOfColumns, generateRows(sizeOfRow, baseColor))
    return [...pixelArray, ...newColumns];
};

const removeRowsFromArray = (pixelArray: string[][], rowsLength: number):string[][] => pixelArray.map(array => array.slice(0,rowsLength));
const removeColumnsFromArray = (pixelArray: string[][], newLength: number): string[][] => {
    pixelArray.length = newLength;
    return pixelArray;
}

export const morphPixelArray = ({
    pixelArray, newWidth, newHeight
  }:IMorphArrayProps):string[][] => {
    let newPixelArray = pixelArray;
    if(newHeight) {
        const columnsDifference = newHeight - pixelArray.length; 
        if(columnsDifference > 0) newPixelArray = addColumnsToArray(newPixelArray, columnsDifference);
        if(columnsDifference < 0) newPixelArray = removeColumnsFromArray(newPixelArray, newHeight);
    } else if(newWidth) {
        const rowsDifference = newWidth - pixelArray[0].length;
        if(rowsDifference > 0) newPixelArray = addRowsToArray(newPixelArray, rowsDifference);
        if(rowsDifference < 0) newPixelArray = removeRowsFromArray(newPixelArray, newWidth);
    }
    
    return newPixelArray;
}
