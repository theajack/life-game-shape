<!--
 * @Author: theajack
 * @Date: 2023-05-09 22:31:06
 * @Description: Coding something
-->
# [Life-Game Shapes](https://github.com/theajack/life-game-shape)

This is a repository used to store the graphics of the Game of Life.

```
npm i life-game-shape
```

```js
import {getShapeNameList, parseShape, findShapeWithName, getShapeList} from 'life-game-shape';

const names = getShapeNameList();

const shapes = getShapeList();

const shape = findShapeWithName(names[10]);

const points = parseShape({map: shape.map});

console.log(
    names,
    shapes,
    shape,
    points,
);
```