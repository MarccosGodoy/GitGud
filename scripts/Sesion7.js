

let win = 0;
let loss = 0;
let i = 0;
let state = false;
let wr = 0;



const wined = ()=>{
    win = win + 1
    i = i +1
    state = true
    Board()
    winrate()
    Results()
}

const lossed = ()=>{
    loss = loss + 1
    i = i +1
    state = false
    Board()
    winrate()
    Alerting()
    Results()
}



const winrate = () =>{
    wr = win/i *100
    wr = ~~wr
    console.log(wr)
}

const Alerting = ()=>{
    if(loss ==2 && win ==0){
        alert('Deberias parar')
    }
}

const Results = ()=>{
    if(i ==7){
        if(wr > 61){
            window.open("./Aproved.html","_self")
            saveData()
        }
        else if(wr > 39){
            window.open("./Intermediate.html","_self")
            saveData()
        }
        else{
            window.open("./Reproved.html","_self")
            saveData()
        }
    }  
    
}

const saveData = ()=>{
    localStorage.setItem('win', win)
    localStorage.setItem('winrate', wr)
    localStorage.setItem('loss', loss)
}
const Board = () =>{
    if(i == 1){
        if(state == true){
            document.querySelector('#one').innerHTML = '✓'
        }
        else if(state == false){
            document.querySelector('#one').innerHTML = '✗'
        }
        
    }
    else if(i == 2){
        if(state == true){
            document.querySelector('#two').innerHTML = '✓'
        }
        else if(state == false){
            document.querySelector('#two').innerHTML = '✗'
        }
        
    }
    else if(i == 3){
        if(state == true){
            document.querySelector('#three').innerHTML = '✓'
        }
        else if(state == false){
            document.querySelector('#three').innerHTML = '✗'
        }
        
    }
    else if(i == 4){
        if(state == true){
            document.querySelector('#four').innerHTML = '✓'
        }
        else if(state == false){
            document.querySelector('#four').innerHTML = '✗'
        }
        
    }
    else if(i == 5){
        if(state == true){
            document.querySelector('#five').innerHTML = '✓'
        }
        else if(state == false){
            document.querySelector('#five').innerHTML = '✗'
        }
        
    }
    else if(i == 6){
        if(state == true){
            document.querySelector('#six').innerHTML = '✓'
        }
        else if(state == false){
            document.querySelector('#six').innerHTML = '✗'
        }
        
    }
    else if(i == 7){
        if(state == true){
            document.querySelector('#seven').innerHTML = '✓'
        }
        else if(state == false){
            document.querySelector('#seven').innerHTML = '✗'
        }
        
    }
}
