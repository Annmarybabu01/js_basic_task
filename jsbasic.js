document.getElementById("helloWorld").innerHTML='"Hello World!"';
const x=2;
const y=3;
document.getElementById("constDataType").innerHTML=x+y;
let a="hello";
let b="world";
document.getElementById("letDataType").innerHTML=a+" "+b;
var c=4;
var d=5;
document.getElementById("varDataType").innerHTML=(c>d);
function add(m,n){
    return m+n;
}
document.getElementById("addition").innerHTML="addition operation : "+add(1,2);
function sub(m,n){
    return m-n;
}
document.getElementById("substraction").innerHTML="substraction operation: "+sub(9,5);
function mul(m,n){
    return m*n;
}
document.getElementById("multiplication").innerHTML="multiplication operation: "+mul(2,3);
function div(m,n){
    return m/n;
}
document.getElementById("division").innerHTML="division operation: "+div(8,2);
let result="";
function oddEvenFind(n){
    if(n%2==0) {
        result="even number";
    }
    else {
        result="odd number";
    }
}
oddEvenFind(4);
document.getElementById("oddEven").innerHTML="the number 4 is "+result;
oddEvenFind(5);
document.getElementById("evenOdd").innerHTML="the number 5 is "+result;
let number="";
for(let i=1;i<=100;i++) {
    number+=i+"<br>";
}
document.getElementById("printNumbers").innerHTML=number;

