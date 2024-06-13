import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const readFile = (filepath) => {
    const pathF = path.resolve(process.cwd(), filepath)
    return JSON.parse(fs.readFileSync(pathF, 'utf-8'));
}

const gendiff = (filepath1, filepath2) => {
    const data1 = readFile(filepath1);
    const data2 = readFile(filepath2);

    const keys =(_.union(_.keys(data1), _.keys(data2))).sort();
    const diffObj = keys.map((key) => {
        //если в первом, но не во втором
        if(_.has(data1, key) && !_.has(data2, key)) {
            return `  - ${key}: ${data1[key]}`;
        }
        //если во втором, но не в первом
        if(_.has(data2, key) && !_.has(data1, key)) {
            return `  + ${key}: ${data2[key]}`;
        }
        //есть и в первом, и во втором, но разные значения
        if (data1[key] !== data2[key]) {
            return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
        }
        //есть и в первом, и во втором, но значения одинаковые
        return `    ${key}: ${data1[key]}`;
    })

    return `{\n${diffObj.join('\n')}\n}`;
}

export default gendiff;

//file1.json => directory/file1.json
//из первого нужно сделать второе
//directiry - текущая папка
//состоит из file1.json - файл в текущей папке