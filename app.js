 //JS masalalar

 /*1. Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.
 // Example
   'To be or not to be', 'not'  => 'To be or to be'
   'I like legends', 'end' => 'I like legs',
   'ABABAB','BA' => 'ABAB'
*/
 
//  function removeFirstOccurrences(str, value) {
//     let string = str;
//     let wordToRemove = value;
//     string = string.replace(wordToRemove, "");
//     return string;
// }

// console.log(removeFirstOccurrences("Hello my name is Alisher Uzoqov", "sher"));
//==========================================================================================================================================



/*2. Birinchi va so’ngi burchali qavslarni olib tashlang.
// example:
   '<div>' => 'div'
   '<span>' => 'span'
   '<a>' => 'a'
*/

// function unbracketTag(str) {
//     let string = str;
//     string = string.slice(1,-1);
//     return string;
// } 

// console.log(unbracketTag('<span>'));
//========================================================================================================================================



/*3.Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin: 
Example:  
   4 => false
   5 => true
   6 => false
   7 => true
   11 => true
   12 => false
   16 => false
   17 => true
*/

// function isPrime(n) {
//     for(i=2; i<n; i++){
//       if(n%i==0){
//         return false;
//       }
//     }
//    return true;
// }

// console.log(isPrime(5));
//========================================================================================================================================



/*4.Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.
// Example:
[	
	{ country: 'Belarus', city: 'Brest' },
	{ country: 'Russia', city: 'Omsk' },
	{ country: 'Russia', city: 'Samara' },
	{ country: 'Belarus', city: 'Grodno' },
	{ country: 'Belarus', city: 'Minsk' },
	{ country: 'Poland', city: 'Lodz' }
]

// output

	{
	  belarus : ["Brest", "Grodno", "Minsk"],
	  russia  : ["Omsk", "Samara"], 
	  poland  : ["Lodz"]
	}
*/


// let countries = [	
// 	{ country: 'Belarus', city: 'Brest' },
// 	{ country: 'Russia', city: 'Omsk' },
// 	{ country: 'Russia', city: 'Samara' },
// 	{ country: 'Belarus', city: 'Grodno' },
// 	{ country: 'Belarus', city: 'Minsk' },
// 	{ country: 'Poland', city: 'Lodz' },
// 	{ country: 'Russia', city: 'Moskow' }
// ];

// function group(array, keySelector, valueSelector) {
//     const result = {}; 
//     array.forEach(obj => { 
//         const key = keySelector(obj); 
//         const value = valueSelector(obj); 
//         if (!result[key]) { 
//             result[key] = [];
//         }
//         result[key].push(value); 
//     });
//     return result; 
// }



// const result = group(countries, obj => obj.country, obj => obj.city); 
// console.log(result);
//======================================================================================================================================= 




/*5. n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.
// Example
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/

// function getSumBetweenNumbers(n1, n2) {
// 	let sum = 0;
//     for(i=n1; i<=n2;i++){
//      sum+=i;
// 	}
// 	return sum;
// }

// console.log(getSumBetweenNumbers(5,10));
//========================================================================================================================================



/*6. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
Example:
 Input: [1, 5, 6, 1, 5, 7, 2]

 Output: [6, 7, 2]
*/

// let arr = [1, 5, 6, 1, 5, 7, 2];

// function getElementsOneTime(arr) {
//     return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
// }

// console.log(getElementsOneTime(arr)); 
//========================================================================================================================================



/*7. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing.*/

// let array = [1,2,3,3,4,4,5,5,6,7,8];

// function removeNextNumber(arr){
// 	return arr.filter((item,index)=> item !== arr[index+1]);
// }
// console.log(removeNextNumber(array));
//========================================================================================================================================



/*8. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let m = 5;

// function removeElementsInRange(arr, k, m) {
//     if (k < 0 || m >= arr.length || k >= m) {
//         return "k va m qiymatlari notogri berilgan";
//     }
//     arr.splice(k, m - k + 1); 
//     return arr;
// }

// let newArray = removeElementsInRange(array, k, m);

// console.log("k dan m gacha bo'lgan elementlar o'chilidi:", newArray)
//========================================================================================================================================



/*9.Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.*/

// const books = [
// 	{
// 	  title: "Atom Odatlari",
// 	  author: "James Clear",
// 	  alreadyRead: true,
// 	},
// 	{
// 	  title: "Raqamli qal'a",
// 	  author: "Den Brown",
// 	  alreadyRead: true,
// 	},
// 	{
// 	  title: "Iskanja",
// 	  author: "Omina Shengakugli",
// 	  alreadyRead: false,
// 	},
//   ];

//   let information = books.map((element,ind)=>{
// 	if(element.alreadyRead){
// 		return `${ind + 1}. ${element.author}ning "${element.title}" kitobi o'qilgan\n`;
// 	}else{
// 		return `${ind + 1}. ${element.author}ning "${element.title}" kitobi o'qilmagan\n`;
// 	}
//   });

// console.log(information.join(''));
//========================================================================================================================================



/*10.Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
Example:
const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];
*/

// const products = [
// 	{ name: "Product 1", price: 20000, discount: 10, quantity: 5 },
// 	{ name: "Product 2", price: 10000, discount: 20, quantity: 4 },
// 	{ name: "Product 3", price: 15000, discount: 8, quantity: 10 },
// 	{ name: "Product 4", price: 18000, discount: 5, quantity: 6 },
// 	{ name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];

//   let sum = products.map((element)=>{
// 	 return ` ${element.name} ${element.quantity}ta umumiy summasi chegirma bilan hisoblaganda: ${(element.price-element.discount)*element.quantity} ga teng\n`
//   });

//   console.log(sum.join(''));