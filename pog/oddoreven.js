const readline=require("readline")
const rl=readline.createInterface({
input:process.stdin,
output:process.stdout
})
rl.question("Enter Any no:",function(value)
{
    const n=parseInt(value);
    if(n%2==0)
    {
        console.log("even number")
    }
    else
    {
        console.log("odd number")

    }
    rl.close()
})
rl.on("close",function()
{
    process.exit()
})