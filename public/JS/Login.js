
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const page3 = document.getElementById("page3");
const back = document.getElementById("back");

const next = document.getElementById("next");

// var i = 0 ;
// function dooo(){
//   // console.log(i+1)
//   page1.style.backgroundColor=="red"?document.body.style="red":document.body.style="blue" ;

const page0 = document.getElementById("page0");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page5 = document.getElementById("page5");
const back = document.getElementById("back");
const next = document.getElementById("next");   
const sbmt = document.getElementById("sbmt");   
const indam = document.getElementById("indam");   
const Choix = document.getElementById('Choix').value;
const error = document.getElementById('error');
// const annee = document.getElementById('annee').value;

function hidefirstpage0(){
if (page0.style.display === "block") {
page0.style.display = "none";
page1.style.display = "block";
next.style.display = "block";
back.style.display = "block";
next.style.marginLeft = "0px";
} 
}

function nxt(){
const firstname = document.getElementById('telonee').value;
const lastname = document.getElementById('teltwoo').value;
const tlf = document.getElementById('telfourr').value.trim();
const email = document.getElementById('titleemail').value.trim();

const Choix = document.getElementById('Choix').value;    
const annee = document.getElementById('annee').value;
const MatrecuL = document.getElementById('MatrecuL').value;



while (firstname === "" || lastname === "" || tlf === "" || email === "") {
error.style.display = "block";
error.innerHTML = "Input all information";
setTimeout(() => {
error.style.display = 'none'; // تأكد من استخدام العنصر الصحيح هنا
}, 2000);
return;
}


while (!(email.includes('@gmail.com') || email.includes('@GMAIL.COM'))) {
error.style.display = "block";
error.innerHTML="البريد الإلكتروني يجب أن يحتوي على gmail.com@";
setTimeout(() => {
error.style.display = "none";
}, 2000);
return;
}

while (tlf.length !== 10 || isNaN(tlf)) {
error.style.display = "block";
error.innerHTML="ادخل 10 ارفام كاملة في خانة الهاتف  : ";
setTimeout(() => {
error.style.display = "none";
}, 2000);
return;
}

while (( MatrecuL.length != 12 ) &&(page2.style.display === "block")) {
error.style.display = "block";
error.innerHTML="ادخل الرقم الجامعي كاملا ..";
setTimeout(() => {m 
error.style.display = "none";
}, 2000);
return;
}

while ((Choix ==="choose") &&(page2.style.display === "block")) {
error.style.display = "block";
error.innerHTML="select choix .";
setTimeout(() => {
error.style.display = "none";
}, 2000);
return;
}
while ((annee ==="choose") &&(page2.style.display === "block")) {
error.style.display = "block";
error.innerHTML="select annee .";
setTimeout(() => {
error.style.display = "none";
}, 2000);
return;
}






if (back.style.display === "none"){
back.style.display = "block";

}else if (page1.style.display === "block"){
page1.style.display = "none";
page2.style.display = "block";
next.style.marginLeft = "0px";
}else if (page2.style.display === "block"){

page2.style.display = "none";
page3.style.display = "block";
next.style.display = "none";
sbmt.style.display = "block";
}


}


function bck(){
    if ( page3.style.display === "block"){
        sbmt.style.display="none";
        page3.style.display ="none";
        page2.style.display ="block";
        next.style.display="block";
        next.style.marginLeft = "0px";
    }else if (page2.style.display == "block") {
        page2.style.display ="none";
        page1.style.display ="block";
        next.style.display="block";
    } else if(page1.style.display === "block"){
        page1.style.display ="none";
        page0.style.display = "block";
        next.style.marginLeft="93%";
        back.style.display="none";
        next.style.display="none"
    } 
    
}

function fnish() {
if (page3.style.display === "block"){
page3.style.display === "none";
page5.style.display === "block";
}
}

function fniish() {
if (page5.style.display === "block") {
location.reload();
}
}

