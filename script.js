function styleElement(element,color1,bgcolor,name) {
    element.style.color= color1;
    element.style.fontSize = 'xx-large'
    element.style.margin = "10px 10px"
    element.style.padding = '5px'
    element.innerHTML = name;
    element.style.width = '8%';
    element.style.backgroundColor = bgcolor;
    element.style.position='relative';
}
var redLight = document.getElementById('red')
var amberLight = document.getElementById('yellow')
var greenLight = document.getElementById('green')
var timer = document.getElementById('timer')

// let btn = document.createElement('button');
// btn.innerHTML = 'clickMe'
// document.body.appendChild(btn);
// btn.onclick = ()=> {
//     redLight.innerHTML = "RED"
//     redLight.color = 'red'
// }

function lightTimer(seconds,light,lightcolor) {
    let counter = seconds;
    light.style.backgroundColor= lightcolor;
    light.style.boxShadow = "0 0 20px 5px lightcolor";

    const interval = setInterval(()=> {
        timer.innerHTML = counter;
        counter --;
        if(counter < 0) {
            light.style.backgroundColor='lightgrey';
            clearInterval(interval);
            
        }
    },1000);
}



// lightTimer(20,amberLight,'orange');

setTimeout(()=>{
    lightTimer(10,amberLight,'orange');
},11000)

setTimeout(()=>{
    lightTimer(10,redLight,'red');
},22000)

function ongreenLight() {
    lightTimer(10,greenLight,'green');
    setInterval(move,500);
    // clearInterval(move,0);
}

ongreenLight();



// setTimeout(myfunction,20000)

// function myfunction() {
//     alert('Hi');
// }
// setTimeout(lightTimer(20,amberLight,'orange'),20000)
// setTimeout(lightTimer(20,redLight,'red'),40000)
// lightTimer(20,amberLight,'orange');



// function redlightTimer(seconds) {
//         let counter = seconds;
//         redLight.style.backgroundColor= 'red';
//         const interval = setInterval(()=> {
//             counter --;
//             if(counter < 0) {
//                 clearInterval(interval);
//                 redLight.style.backgroundColor='lightgrey';
//             }
//         },1000);
//     }

// redlightTimer(20);




// btn.addEventListener("click", ()=> {
//     alert('Hi')
// })

let para1 = document.createElement("p");
styleElement(para1,'white','aqua','myCar1');
document.body.appendChild(para1);

let para2 = document.createElement("p");
styleElement(para2,'white','brown','myCar2');
document.body.appendChild(para2);
para2.style.right = '-500px'


rightPos = -500;
function moveTwo () {
para2.innerHTML = 'onMove'
rightPos += 10;
para2.style.right = rightPos+'px';
}

// setInterval(moveTwo,500);

topPos = 0
function move () {
para1.innerHTML = 'carOnmove'
topPos += 10;
para1.style.top = topPos+'px';
}

// 


