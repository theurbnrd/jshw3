function develop() {
    let theFun = document.getElementById('hdiv');
    theFun.style.backgroundColor='green';
    theFun.style.color='white';
    theFun.style.textAlign='center';
}

function design1() {
    let theFun = document.getElementById('ptag');
    let p = document.createElement('p');
    p.innerText = 'Welcome to URBNRD';
    theFun.appendChild(p);
}

function fashion() {
    var element = document.getElementById('nerd1');
    element.classList.add('nerd');
}