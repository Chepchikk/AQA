// 1.

const byte = 0;
const Kb = byte / 1024;
const Mb = Kb / 1024;
const Gb = Mb / 1024;
const Tb = Gb / 1024;

switch (true) {  // добавить метод .toFixed для округления значений
    case byte !== Number(byte):
        console.log('Please enter numbers');
        break;
    case byte >= 0 && byte < 1024:
        console.log(`${byte} byte = ${byte} byte`);
        break;
    case Kb > 0 && Kb < 1024:
        console.log(`${byte} byte = ${Kb} Kb`);
        break;
    case Mb > 0 && Mb < 1024:
        console.log(`${byte} byte = ${Mb} Mb`);
        break;
    case Gb > 0 && Gb < 1024:
        console.log(`${byte} byte = ${Gb} Gb`);
        break;
    case Tb > 0 && Tb < 1024:
        console.log(`${byte} byte = ${Tb} Tb`);
        break;

}