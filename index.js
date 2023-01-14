let counth =0
let countg=0
let savedEl = document.getElementById("saved-El")


let HscoreEl = document.getElementById("homeScore")
let GscoreEl = document.getElementById("guestScore")

function add1h()
{
    counth+=1
    HscoreEl.innerText = counth
}

function add2h()
{
    counth+=2
    HscoreEl.innerText = counth
}

function add3h()
{
    counth+=3
    HscoreEl.innerText = counth
}

function add1g()
{
    countg+=1
    GscoreEl.innerText = countg
}

function add2g()
{
    countg+=2
GscoreEl.innerText = countg
}

function add3g()
{
    countg+=3
    GscoreEl.innerText = countg
}


function save()
{
    let savedText = "Home: "+ counth + " Guest: "+ countg + " , "
    savedEl.textContent += savedText
    counth=0;
    countg = 0;
    HscoreEl.innerText = 0
    GscoreEl.innerText = 0
    
}

function reset()
{
    counth=0;
    countg = 0;
    HscoreEl.innerText = 0
    GscoreEl.innerText = 0
    savedEl.textContent = "SCOREBOARD: "
    
}