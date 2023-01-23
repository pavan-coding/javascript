let s="demo"
String.prototype.say=function(data){
    return "hello"+data;
}
console.log(s.say("world"));

String.prototype.say=function(){
    return this+"hello";
}
console.log(s.say());

/*
helloworld
demohello
*/ 