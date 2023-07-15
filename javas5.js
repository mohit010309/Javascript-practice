function add(num1,num2)
{
    return num1+num2;
}
function sub(num1,num2)
{
    return num1-num2;
}
function mul(num1,num2)
{
    return num1*num2;
}
function div(num1,num2)
{
    return num1/num2;
}
function mod(num1,num2)
{
    return num1%num2;
}
function func(num1,num2,fun)
{
    return fun(num1,num2);
}
console.log(func(7,3,add));
console.log(func(7,3,sub));
console.log(func(7,3,mul));
console.log(func(7,3,div));
console.log(func(7,5,mod));