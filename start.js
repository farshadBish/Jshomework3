//ex1
function area(l1,l2){
    console.log(l1*l2);
}
area(5,2);
//ex2
function crazySum(x,y){
    if(x===y){
        console.log((x+y)*3)
    }else{
        console.log(x+y)
    }
}
crazySum(2,3);
//ex3
function crazyDiff(x){
    if(x>19){
        console.log(3*(x-19));
    }else if(x<=19){
        console.log(x-19);
    }
}
crazyDiff(17);
//ex4
function boundary(n){
    if(20<=n && n<=100){
        return true;
    }else if(n===400){
        return true;
}else{
    return false;
}
}
console.log(boundary(500));
//ex5
function strivify(x){
    if(x==="Strive"){
        console.log(x);
    }else{
        console.log(`${x} Strive`);
    }
}
strivify("Striving")
//ex6
function check3and7(x){
    if(x%3===0 && x%7===0){
        console.log("your number is multiple of 7 and 3")
    }else if(x%3===0){
        console.log("your number is multiple of 3")
    }else if(x%7===0){
        console.log("your number is multiple of 7");
    }else if(x<0){
        console.log("put a positive number");
    }else if(x%3!==0 && x%7!==0){
        console.log("your number isnt multiple of 3 or 7")
    }
}
check3and7(21);
//ex7
function reverseString(x){
    for(let i=x.length-1;i>=0;i--){
        console.log(x[i]);
    }
}
reverseString("as");
//ex8
function upperFirst(x){
let separate = x.toLowerCase().split(' ');
for(let i=0; i<separate.length; i++){
    separate[i] = separate[i].charAt(0).toUpperCase(); 
}
console.log(separate)
}
upperFirst("hello boys");
//ex9
function cutString(x){
    x.splice(0,1)
    x.splice(x.length-1,1)
    return x;
}
console.log(cutString("Hello"));
//ex10
function giveMeRandom(n){
    for(let i=0; i<=n ; i++){
        
    }
}