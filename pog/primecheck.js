const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let c=0
rl.question("Enter any no:",function(n){
    for(i=1;i<=n;i++){
        if(n%i==0){
            c++
        }
    }
    if(c==2){
        console.log(`${n} is prime number`)
    }
    else{
        console.log(`${n} is not a prime number`)
    }
    rl.close()
})
rl.on("close",function(){
    process.exit()
})