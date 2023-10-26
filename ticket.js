
let puli = prompt("Hurmatli foydalanuvchi, sayohat uchun qancha puliz bor ? ")
let dollarKursi = Number(prompt("Iltimos hozirgi dollar kursini kiriting"));
let yevroKursi = Number(prompt("Iltimos hozirgi yevro kursini kiriting"));
let ticket = 350 * dollarKursi; 
let living = 500 * dollarKursi
let picnic = 300 * yevroKursi;
let jami = ticket + living + picnic;

if((jami - puli) > 0 ){
    alert(' Afsuski pulingiz yetmas ekan')
}else if((jami - puli) < 0){
    alert("Pulingiz yetar ekan. Qachonga ketmoqchisiz ?")
}else{
    alert("Biror xatolik kuzatilyapti")
}

// 7 chi vazifaning javobi bajarildi va tugadi **************
// *******************************************************************
// *******************************************************************
// *******************************************************************

