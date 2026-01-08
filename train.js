/// MIT task: Task E:
/*
Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

// Solution:
function getReverse(morrisbek) {
  let letters = morrisbek.split("");
  let reverseLetters = letters.reverse();
  let result = reverseLetters.join("");

  return result;
}
console.log(getReverse("morrisbek"));

/// MIT task: Task D:
/* Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true; */

// Solution:

// function checkContent(amazon, nazoma) {
//   if (amazon.length !== nazoma.length) {
//     return false;
//   }

//   let array1 = amazon.split("");
//   let array2 = nazoma.split("");

//   for (let letter of array1) {
//     if (array2.includes(letter) === false) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkContent("amazon", "nazoma"));

///////////////////////////////////////////////////////////////////////////////////////////

/// MIT task: Task C:
/* Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */

// Solution for Task C

// class Wawa {
//   constructor(lays, sut, cola) {
//     this.lays = lays;
//     this.sut = sut;
//     this.cola = cola;
//   }

//   getVaqt() {
//     const hozir = new Date();
//     const minut =
//       hozir.getMinutes() < 10 ? "0" + hozir.getMinutes() : hozir.getMinutes();
//     return `${hozir.getHours()}:${minut}`;
//   }

//   qoldiq() {
//     console.log(
//       `hozir ${this.getVaqt()}da ${this.lays}ta lays, ${this.sut}ta sut va ${
//         this.cola
//       }ta cola mavjud!`
//     );
//   }

//   sotish(nomi, soni) {
//     if (nomi === "lays") {
//       this.lays -= soni;
//     } else if (nomi === "sut") {
//       this.sut -= soni;
//     } else if (nomi === "cola") {
//       this.cola -= soni;
//     }
//     console.log(`${this.getVaqt()}da ${soni}ta ${nomi} sotildi`);
//   }

//   qabul(mahsulot, miqdor) {
//     if (mahsulot === "lays") this.lays += miqdor;
//     if (mahsulot === "sut") this.sut += miqdor;
//     if (mahsulot === "cola") this.cola += miqdor;

//     console.log(`${this.getVaqt()}da ${miqdor}ta ${mahsulot} qabul qilindi`);
//   }
// }

// const myShop = new Wawa(2, 4, 3);

// myShop.qoldiq();
// myShop.sotish("lays", 3);
// myShop.qabul("cola", 4);
// myShop.qoldiq();

////////////////////////////////////////////////////////////////////////////////////

/// MIT task: Task B

// function countDigits(password) {
//   let numbers = 0;
//   let index = 0;

//   while (index < password.length) {
//     if (password[index] > 1 && password[index] <= 9) {
//       numbers++;
//     }
//     index++;
//   }

//   return numbers;
// }

// console.log(countDigits("Pa$$w0rd_2026_Hacker99"));

/// MIT task: Task A

// function countLetter(letter, word) {
//   let count = 0;
//   let i = 0;

//   while (i <= word.length - 1) {
//     if (word[i] == letter) {
//       count = count + 1;
//     }
//     i = i + 1;
//   }
//   return count;
// }
// console.log(countLetter("n", "pennsylvania"));

////////=========================================/////////////////////

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talabboling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20=30
//   "uzingizga ishlashni boshlang ", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[3]);
//   else if (a > 40 && a <= 50) callback(null, list[4]);
//   else if (a > 50 && a <= 60) callback(null, list[5]);
//   else {
//     // callback(null, list[5]);

//     setInterval(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

/////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talabboling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20=30
//   "uzingizga ishlashni boshlang ", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling", // 60
// ];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[3];
//   else if (a > 40 && a <= 50) return list[4];
//   else if (a > 50 && a <= 60) return list[5];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talabboling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20=30
//   "uzingizga ishlashni boshlang ", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling", // 60
// ];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[3];
//   else if (a > 40 && a <= 50) return list[4];
//   else if (a > 50 && a <= 60) return list[5];
//   else {
//     return list[5];
//   }
// }

////// call via then catch:

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

////// call via async/await

// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

/////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talabboling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20=30
//   "uzingizga ishlashni boshlang ", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[3]);
//   else if (a > 40 && a <= 50) callback(null, list[4]);
//   else if (a > 50 && a <= 60) callback(null, list[5]);
//   else {
//     // callback(null, list[5]);

//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// maslahatBering(39, (err, data) => {
//   if (err) console.log(`ERROR:`, err);
//   console.log(`javob:`, data);
// });
