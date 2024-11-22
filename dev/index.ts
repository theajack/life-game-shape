/*
 * @Author: chenzhongsheng
 * @Date: 2024-08-12 17:51:34
 * @Description: Coding something
 */
// import {getShapeNameList, parseShape, findShapeWithName, getShapeList} from '../src';
import {getShapeNameList, parseShape, findShapeWithName, getShapeList} from '../npm';

const names = getShapeNameList();

const shapes = getShapeList();

const shape = findShapeWithName(names[10]);

const points = parseShape({map: shape.map});
const points2 = parseShape({map: 'bob$2bo$3o'});

console.log(
    names,
    shapes,
    shape,
    points,
    points2
);
