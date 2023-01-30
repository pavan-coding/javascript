process.on('uncaughtException',function(e) {
    console.log("errror has occured")
})
throw "demo"