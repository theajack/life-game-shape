/*
 * @Author: chenzhongsheng
 * @Date: 2024-08-18 10:23:17
 * @Description: Coding something
 */
import data from './data.json';

export interface IShapeInfo {map: string, width: number, height: number, name: string}

export const ShapeList = data;

export const SinglePoint = 'single cell';
const SinglePointShape = {map: 'o', width: 1, height: 1, name: SinglePoint};

export * from './parse-shape';

export function getShapeNameList (mapSize?: number) {
    const nameList: string[] = [SinglePoint];
    filterShape((item, key) => {
        const value = `${key}-${item.name}`;
        nameList.push(value);
    }, mapSize);
    return nameList;
}

export function getShapeList (mapSize?: number) {
    const nameList: IShapeInfo[] = [SinglePointShape];
    filterShape(item => {
        nameList.push(item);
    }, mapSize);
    return nameList;
}

function filterShape (callback: (v: IShapeInfo, key: string)=>void, mapSize?: number) {
    for (const k in data) {
        data[k].forEach(item => {
            if (typeof mapSize === 'number' && (item.width > mapSize || item.height > mapSize)) {
                return;
            }
            callback(item, k);
        });
    }
}

export function findShapeWithName (name: string): {map: string, width: number, height: number } {
    if (name === SinglePoint) {
        return SinglePointShape;
    }
    const [ kind, key ] = name.split('-');
    return data[kind].find(item => item.name === key);
}