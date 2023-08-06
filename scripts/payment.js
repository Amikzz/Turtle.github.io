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

const paybtn = document.getElementById("paybtn");
const form = document.querySelector('form');
form.addEventListener("submit", function(e){

    e.preventDefault();

    //storing card details
    const formData3 = new FormData(form);
    const obj3 = Object.fromEntries(formData3);
    const json3 = JSON.stringify(obj3);
    localStorage.setItem("form3", json3);

    const para = document.createElement("button");
    const head = document.createElement("h2");
    const node = document.createTextNode(` Pay $ ${localStorage.parsetotal} `);
        para.appendChild(node);
        para.appendChild(head);
        head.appendChild(node);
        const element = document.getElementById("divbtn");
        const child = document.getElementById("enablebtn");
        element.insertBefore(para, child).classList.add("button1");
    paybtn.disabled = true;
})