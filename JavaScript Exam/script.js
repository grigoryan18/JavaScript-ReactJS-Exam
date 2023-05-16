// 1. Գրել ֆունկցիա, որը կվերադարձնի true եթե տրված արժեքը սիմետրիկ է, հակառակ դեպքում կվերադարձնի false: Խնդիրը գրել երկու տարբեր եղանակներով, առաջին եղանակում առանց մեթոդների բացառությամբ length մեթոդի և երկրորդ եղանակում միայն մեթոդներով։

// let text = "Sleeeepppppp"
// let newText = text.split("").reverse().join("")
// console.log(text===newText);

// let text = "aba"
// function newText (text) {
//   let newText = ""
//   for(let i = text.length - 1; i >= 0; i--) {
//     newText += text[i]
//   }
//   return text === newText
// }
// console.log(newText(text));

// 2. Գրել ռեկուրսիվ ֆունկցիա որը կստանա թվերի զանգված և կվերադարձնի նոր զանգված, որի մեջ կլինեն տրված զանգվածից զույգերը։

// let arr = [23, 4, 5, 667, 64, 5, 7, 99];
// let newArr = [];
// function newArr(arr) {
//   if (arr < 0) {
//     return 1;
//   }
//   if (arr % 2 === 0) {
//     newArr.push();
//   }
//   return;
// }
// console.log(newArr(newArr))

// 3. Ունենք տեքստ որի մեջ կան բաց թողնված բառեր որոնց փոխարեն դրված է "_" նշանը և ունեն զանգված որի մեջ կան բառեր։ Գրել ֆունկցիա որը կստանա հետևյալ փոփոխականները որպես արգումենտ և կվերադարձնի տեքստի վերջնական արդյունքը։
// Փոփոխականները`

// let words = ["first", "succeed", "again"];
// let sentence = "If at _ you don’t _, try, try _.";
// function newText (words, sentence) {
//   for(let i = 0; i < words.length; i++) {

//     for(let j = 0; j < sentence.length; j++) {
//       if(sentence[j] === "_") {
//         sentence = sentence.replace("_", words[i])
//       }
//     }
//   }
//   return sentence
// }
// console.log(newText(words, sentence));

// 4. Ունենք հետևյալ բազմաչափ զանգվածը` [4, -2, 3, 9, 2, 6, -8, 12]։ Գրել ֆունկցիա, որը տրված զանգվածից կհեռացնի բացասականները և կսորտավորի դրականները։ Վերադարցնել սորտավորված զանգվածը և այն տարրերը, որոնք հեռացվել են զանգվածից։ Պատասխան՝
// Sorted array: [2,3,4,6,9,12]
// Removed numbers: [-2,-8]

// let arr = [4, -2, 3, 9, 2, 6, -8, 12];
// function newArr (arr) {
//   for(let i = 1; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//       if(arr[i] < arr[j]){
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//     }
//   }
//   return arr
// }
// console.log(newArr(arr));

// 5․ Ունենք հետևյալ զանգվածը՝ [6, 9, -5, 12, 3, -1, 6, 9, -2, 64, 15, -3, 36]; Գրել class, որը կունենա arr պարամետր, կունենա getRoots մեթոդ, որը կվերադարձնի նոր զանգված, որի մեջ կլինեն այն թվերը, որոնք ունեն արմատ, կունենա arithmeticAverage մեթոդ, որը կվերադարձնի զանգվածի միջին թվաբանականը, կունենա ascendingSortExceptNegitves մեթոդ, որը կվերադարձնի նույն զանգվածը սորտավորված ըստ աճման կարգի, բայց բացասականները պետք է մնան նույն ինդեքսում։

// class NewArr {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   arithmeticAverage() {
//     let num = 0;
//     for (let i = 0; i < this.arr.length; i++) {
//       num += this.arr[i];
//     }
//     return num / this.arr.length;
//   }

//   getRoots() {
//     let newArr = [];
//     for (let i = 0; i < this.arr.length; i++) {
//       if (this.arr[i] ** 0.5 % 1 === 0) {
//         newArr.push(this.arr[i]);
//       }
//     }
//     return newArr;
//   }

//   ascendingSortExceptNegitves() {
//     for (let i = 1; i < this.arr.length; i++) {
//       for (let j = 0; j < this.arr.length; j++) {
//         if (this.arr[i] < 0) {
//           continue;
//         }
//         if (this.arr[i] < this.arr[j]) {
//           [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
//         }
//       }
//     }
//     return this.arr;
//   }
// }

// const newArr = new NewArr([5, 7, 16, -34, 81, 0, -5]);
// console.log(newArr.getRoots());

// 6. Գրել ֆունկցիա, որը որպես պարամետրեր կստանա k բնական թիվ և divisor, ֆունկցիան պետք է վերադարձնի k-ից մեծ ամենամոտ թիվը, որը բազմապատիկ է divisor-ին:

// const divisorNumber = (x, y) => {
//   for (let i = x + 1; i < x * y; i++) {
//     if (i % y === 0) {
//       return i
//     }
//   }
// }

// console.log(divisorNumber(72, 9));
