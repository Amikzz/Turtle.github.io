const form = document.querySelector('form');
const contbtn = document.getElementById("contbtn");

//retriving previous form data
const json = localStorage.getItem("form");
const obj = JSON.parse(json);

const json2 = localStorage.getItem("form2");
const obj2 = JSON.parse(json2);

document.getElementById("outname").innerHTML = obj2.name;
document.getElementById("outdate").innerHTML = obj.date;
document.getElementById("outduration").innerHTML = obj.time;
document.getElementById("hour").innerHTML = obj.duration;
document.getElementById("outphnum").innerHTML = obj2.phone;
document.getElementById("outemail").innerHTML = obj2.email;
document.getElementById("outgender").innerHTML = obj2.gender;
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
