list = [1,2,3,4,5,6]
console.log(list.length)

while(true){
    try{
        console.log(list);
        list.pop()
        if (list.length == 0) {
            break;
        }
    }
    catch(e){
        console.log("smetjhing went wrong");
    }
    console.log("in the loop");
}