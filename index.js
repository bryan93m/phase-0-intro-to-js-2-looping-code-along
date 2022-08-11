function writeCards(name, ename){
    let newArray = [];
    for(let i = 0; i < name.length; i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(number){
    let count = number;
    while(count >= 0){
        console.log(count--)
    }
}