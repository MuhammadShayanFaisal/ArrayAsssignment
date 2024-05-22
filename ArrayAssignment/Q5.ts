function Calculator(num:number,num1:number,operation:string){
    if(operation=='+')
        return num+num1;
    else if(operation=='-')
        return num-num1;
}
let num:number=10;
let num1=20;
let operator:string='+';
console.log("The answer is: ",Calculator(num,num1,operator));

num=30;
num1=40;
operator="-";
console.log("The answer is: ",Calculator(num,num1,operator));

