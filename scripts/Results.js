

const Update = () =>{
    let win = localStorage.getItem('win')
    let winrate = localStorage.getItem('winrate')
    let loss = localStorage.getItem('loss')
    console.log(win)
    document.querySelector('#win').innerHTML = win
    document.querySelector('#winrate').innerHTML = winrate + '%'
    document.querySelector('#loss').innerHTML = loss
    
}

Update()


const clearData =()=>{
    localStorage.clear()
}
