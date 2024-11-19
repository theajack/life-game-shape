/*
 * @Author: chenzhongsheng
 * @Date: 2024-11-14 08:01:47
 * @Description: Coding something
 */

export interface IPos {
    x: number,
    y: number,
}
 
// 2o3b$obo2b2$2bobo$3b2o

export function parseShape ({
    map,
    pos = {x: 0, y: 0},
    max,
}: {
    map: string, pos?: IPos, max?: IPos
}): {
    cells: IPos[],
    width: number,
    height: number,
} {
    const cells: IPos[] = [];

    const addCells = (x: number, y: number) => {
        if (x < 0 || y < 0) return;
        if (max?.x && x >= max.x) return;
        if (max?.y && y >= max.y) return;
        cells.push({x, y});
    };

    let y = 0;
    let width = 0;
    map.split('$').forEach((str, index) => {
        const length = str.length;
        let offset = 0;
        for (let i = 0; i < length; i++) {
            const s = str[i];

            if (/^\d$/.test(s)) {
                const n = parseInt(s);

                if (i === length - 1) {
                    // 末尾数字
                    y += (n - 1);
                } else {
                    const state = str[i + 1];
                    if (state === 'o') {
                        for (let j = 0; j < n; j++) {
                            addCells(pos.x + offset + j, pos.y + y);
                        }
                    }
                    offset += (n - 1);
                    i ++;
                }
                if (index === 0) width += n;
            } else {
                if (s === 'o') {
                    addCells(pos.x + offset, pos.y + y);
                }
                if (index === 0) width += 1;
            }
            offset ++;
        }
        y += 1;
    });
    // console.log(JSON.stringify(results, null, 2));
    // console.log(`width=${width}; height=${y}`);
    return {
        cells,
        width,
        height: y,
    };
}