import { baseColor } from "../consts";

interface IMorphArrayProps {
    pixelArray: string[][];
    newWidth?: number;
    newHeight?: number;
}

const removeColumnsFromArray = (pixelArray: string[][], newLength: number): string[][] => {
    pixelArray.length = newLength;
    return pixelArray;
}

const addColumnsToArray = (pixelArray: string[][], changeOfRows: number): string[][] => {
    const sizeOfRow = pixelArray[0].length;
    const generateRow = [...Array(sizeOfRow)].map(i => baseColor);
    const newColumns = [...Array(changeOfRows)].map(i => generateRow)
    
    console.log(changeOfRows);
    console.log([...pixelArray, ...newColumns]);
    
    return [...pixelArray, ...newColumns];
};


export const morphPixelArray = ({
    pixelArray, newWidth, newHeight
  }:IMorphArrayProps):string[][] => {
    let newPixelArray = pixelArray;

    if(newHeight) {
        const columnsDifference = newHeight - pixelArray.length; 
        
        if(columnsDifference > 0) newPixelArray = addColumnsToArray(newPixelArray, columnsDifference);
        if(columnsDifference < 0) newPixelArray = removeColumnsFromArray(newPixelArray, newHeight);
    } else if(newWidth) {

    }
    
    return newPixelArray;
} 