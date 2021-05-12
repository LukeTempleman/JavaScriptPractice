//Parsing string to JSON
const strParse = `
{
     "name":"Luke" ,
     "colour":"Blue"
}
`;
const obj = JSON.parse(strParse)


console.log(obj)
alert(obj.name)

//Converting JSON to a string
const obj2 = {
    game : "assassins creed",
    model : "Ezio"
};

const stringified = JSON.stringify(obj2);

console.log(obj2);
alert(obj2.game);
alert(stringified);