let s=20
Number.prototype.say=function(data){
    return 30+data;
}
console.log(s.say(30));

Number.prototype.say=function(){
    return this+30;
}
console.log(s.say());

/*
60
50
*/ 
