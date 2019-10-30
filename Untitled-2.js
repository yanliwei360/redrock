let str1 ="I LOVE REDROCK";
let arr = str1.toLowerCase().split(" ");
let newArr =[];
for(let i=0;i<=arr.length;i++)
{
    newArr.push(arr[i][0].toUpperCase() + arr[i].substr(1));

}
console.log(newArr)//这道题tql
