var x = pascals(4)
console.log(x)

function pascals(rows){
    if(rows < 0){
        return []
    }
    let  list = []
    var i
    for(i = 0; i <= rows; i++){
        if(i === 0 || i === rows){
            list[i] = 1
        }
        else{
            var y = nCr(rows, i)
            list[i] = y
        }
    }
    
    return list
    console.log(list)
}


function factorial(n){
    if(n === 1){
      return n
    }
    else{
        return n * factorial(n-1)
    }
}

function nCr(n, r){
    return (factorial(n) / (factorial(r) * factorial(n-r)))
}

