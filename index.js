import path from 'path';
import fs from 'fs';

const gendiff = (filepath1, filepath2) => {
    const [path1, path2] = [path.resolve(process.cwd(), filepath1),
path.resolve(process.cwd(), filepath2)]
    const data1 = JSON.parse(fs.readFileSync(path1, 'utf-8'));
    const data2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));
    return [data1, data2];
}

export default gendiff;

//file1.json => directory/file1.json
//из первого нужно сделать второе
//directiry - текущая папка
//состоит из file1.json - файл в текущей папке