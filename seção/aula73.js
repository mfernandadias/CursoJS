function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) +  
    min; 
    return Math.floor(num);
}

console.log(rand());

function f1(callback) {
    setTimeout(function(){
     console.log('f1');  
    }, 500);
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
    }, 1000);
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand()); 
}

f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3callback() {
    console.log('Olá Mundo!');
}

