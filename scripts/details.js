//country code (External)
const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    }
);

const form = document.querySelector('form');
const contbtn = document.getElementById("contbtn");

//retriving previous form data
const json = localStorage.getItem("form");
const obj = JSON.parse(json);


document.getElementById("outdate").innerHTML = obj.date;
document.getElementById("outduration").innerHTML = obj.time;
document.getElementById("hour").innerHTML = obj.duration;
document.getElementById("outsladults").innerHTML = `${obj.sladults} SL Adults`;
document.getElementById("outslchild").innerHTML = `${obj.slchild} SL Children`;
document.getElementById("outfadults").innerHTML = `${obj.fadults} Foreign Adults`;
document.getElementById("outfchild").innerHTML = `${obj.fchild} Foreign Children`;
document.getElementById("outinfants").innerHTML = `${obj.infants} Infants`;

document.getElementById("amountsladults").innerHTML = `$ ${localStorage.parsetotslAdult}`;
document.getElementById("amountslchild").innerHTML = `$ ${localStorage.parsetotslChild}`;
document.getElementById("amountfadults").innerHTML = `$ ${localStorage.parsetotfAdult}`;
document.getElementById("amountfchild").innerHTML = `$ ${localStorage.parsetotfChild}`;
document.getElementById("amountinfants").innerHTML = `$ 0`;
document.getElementById("amounttot").innerHTML = `$ ${localStorage.parsetotal}`;

form.addEventListener("submit", function(e){

    e.preventDefault();

    const formData2 = new FormData(form);
    const obj2 = Object.fromEntries(formData2);
    const json2 = JSON.stringify(obj2);
    localStorage.setItem("form2", json2);
    
    const para = document.createElement("button");
    const head = document.createElement("h2");
    const node = document.createTextNode("   Continue Purchase   ");
    if (obj2.email == obj2.conemail){
        para.appendChild(node);
        para.appendChild(head);
        head.appendChild(node);
        const element = document.getElementById("divbtn");
        const child = document.getElementById("enablebtn");
        element.insertBefore(para, child).classList.add("button1");
        contbtn.disabled = true;
    } else if (obj2.email != obj2.conemail) {
        alert('Email and Confirm Email should be same');
    }
})
