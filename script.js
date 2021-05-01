const cells = document.getElementsByClassName('num');
const main = document.getElementById('main');
const expression = document.getElementById('expression');

const clear = document.getElementById('clear');
clear.addEventListener('click', clearAll);
const sum = document.getElementById('add');
sum.addEventListener('click', add);
const sub = document.getElementById('sub');
sub.addEventListener('click', subtract);
const multi = document.getElementById('multi');
multi.addEventListener('click', multiply);
const div = document.getElementById('div');
div.addEventListener('click', divide);
const equal = document.getElementById('equal');
equal.addEventListener('click', operator);
const erase = document.getElementById('del');
erase.addEventListener('click', del);
const point = document.getElementById('point');
point.addEventListener('click', addPoint);

let val = document.getElementById('main').getAttribute('data-value');
let sign = "";
let first = "";
let second = "";
let results = "";
let chain = "";


for(i = 0; i < 10; i++) {
    cells[i].addEventListener('click', function(e) {
        val += e.currentTarget.getAttribute('data-value');
        main.innerHTML = val;
    })
}

function del() {
    main.textContent = main.textContent.toString().slice(0, -1);
    val = main.textContent;
}

function clearValue() {
    val = "";
    main.innerHTML = `0`;
}

function clearAll() {
    val = "";
    first = "";
    second = "";
    results = "";
    chain = "";
    main.innerHTML = `0`;
    expression.innerHTML = `0`;
}

function addPoint() {
    if(main.textContent.includes('.')) {
        return;
    } else if (val == "") {
        main.textContent = '0.';
        val = main.textContent;
        return;
    }
    main.textContent += '.'
    val = main.textContent;
}

function add() {
    if(results != "" && chain == "" && val != "") {
        first = results;
        sign = '+';
        clearValue();
        expression.innerHTML = `${results} ${sign}`;
        return;               
    } else if(first != "" && val != "") {
        chaining();
        sign = '+';
        expression.innerHTML = `${chain} ${sign}`;
        clearValue();
        return;
    } else if(val != "") {
        first = val;
        sign = '+';
        expression.innerHTML = `${first} ${sign}`;
        clearValue();
    }
    sign = '+';
}

function subtract() {
    if(results != "" && chain == "" && val != "") {
        first = results;
        sign = '-';
        clearValue();
        expression.innerHTML = `${results} ${sign}`;
        return;               
    } else if(first != "" && val != "") {
        chaining();
        sign = '-';
        expression.innerHTML = `${chain} ${sign}`;
        clearValue();
        return;
    } else if(val != "") {
        first = val;
        sign = '-';
        expression.innerHTML = `${first} ${sign}`;
        clearValue();
    }
    sign = '-';
}

function multiply() {
    if(results != "" && chain == "" && val != "") {
        first = results;
        sign = '*';
        clearValue();
        expression.innerHTML = `${results} ${sign}`;
        return;               
    } else if(first != "" && val != "") {
        chaining();
        sign = '*';
        expression.innerHTML = `${chain} ${sign}`;
        clearValue();
        return;
    } else if(val != "") {
        first = val;
        sign = '*';
        expression.innerHTML = `${first} ${sign}`;
        clearValue();
    }
    sign = '*';
}

function divide() {
    if(results != "" && chain == "" && val != "") {
        first = results;
        sign = '/';
        clearValue();
        expression.innerHTML = `${results} ${sign}`;
        return;               
    } else if(first != "" && val != "") {
        chaining();
        sign = '/';
        expression.innerHTML = `${chain} ${sign}`;
        clearValue();
        return;
    } else if(val != "") {
        first = val;
        sign = '/';
        expression.innerHTML = `${first} ${sign}`;
        clearValue();
    }
    sign = '/';
}

function chaining() {
    if(chain == "") {
        chain = first;
        if(sign == '+') {
            chain = Number(chain) + Number(val);
        } else if(sign == '-') {
            chain = Number(chain) - Number(val);
        } else if(sign == '*') {
            chain = Number(chain) * Number(val);
        } else if(sign == '/'){
            chain = Number(chain) / Number(val);
        }
    } else {
        if(sign == '+') {
            chain = Number(chain) + Number(val);
        } else if(sign == '-') {
            chain = Number(chain) - Number(val);
        } else if(sign == '*') {
            chain = Number(chain) * Number(val);
        } else if(sign == '/'){
            chain = Number(chain) / Number(val);
        }
    }
}


function operator() {
    second = val;
    if(chain == "") {
        if(sign == '+') {
            results = Number(first) + Number(second);
        } else if(sign == '-') {
            results = Number(first) - Number(second);
        } else if(sign == '*') {
            results = Number(first) * Number(second);
        } else if(sign == '/'){
            results = Number(first) / Number(second);
        }
        expression.innerHTML = `${first} ${sign} ${second}`;   
    } else if(chain != "") {
        if(sign == '+') {
            results = Number(chain) + Number(second);
        } else if(sign == '-') {
            results = Number(chain) - Number(second);
        } else if(sign == '*') {
            results = Number(chain) * Number(second);
        } else if(sign == '/'){
            results = Number(chain) / Number(second);
        }
        expression.innerHTML = `${chain} ${sign} ${second}`;
    }
    main.innerHTML = results;   
}