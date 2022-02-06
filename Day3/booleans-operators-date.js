// boolean veri türü true ya da false değerini alır.

//Operators 
// = atama opetarörüdür  
  let firstname = 'Beyza'

//operators            examples                 same as
// +=                    x+=y                    x=x+y
// -=                    x-=y                    x=x-y
// *=                    x*=y                    x=x*y
// /=                    x/=y                    x=x/y
// %=                    x%=y                    x=x%y
// **=                   x**=y                   x=x**y  

//Arithmetic Operators
//Addition(+): a+b
//Substraction(-): a-b
//Multiplication(*): a*b
//Division(/): a/b
//Modules(%): a%b 
//Exponential(**): a**b

//Comparison Operators
//== , != , < , > , <= , >= 
// === : hem türün hem değerin eşit olup olmadığına bakıyor
// !== : hem türün eşit olmama durumunu hem de değrin eşit olmama durumunda true, denk değildir

console.log('mango'.length == 'avocado'.length)      //false
console.log('mango'.length != 'avocado'.length)      //true
console.log('mango'.length < 'avocado'.length)       //true
console.log('mango'.length === 'avocado'.length)     //false
console.log('milk'.length == 'meat'.length)          //true
console.log('milk'.length !== 'meat'.length)         //false

//Logical Operators
// &&(ampersand): ve
let check = 4 > 3 && 10 > 5
console.log(check)      // true && true --> true 
let a = 4 > 3 && 10 < 5
console.log(a)          // true && false -->false
// ||(pipe): ya da    sadece her iki durum false olduğu zaman false değeri döndürür.
let b = 4 > 3 || 10 > 5
console.log(b)          // true || true --> true
let c = 4 > 3 || 10 < 5
console.log(c)          // true || false --> true
let d = 4 < 3 || 10 < 5 
console.log(d)          // false || false --> false
// !(negation): değilse
let n = !(4 > 3)
console.log(n)        // false true olanı false döndürme gibi ya da true olanı false 

//incremet operatör: arttırma operatörü (++)
//decrement operatör: azaltma operatörü (--)
//ternary operatör: bir koşul yazmamızı sağlar
let f = 5 > 4
? console.log('5 büyüktür 4 ten')
: console.log('4 küçüktür 5 ten')  

let number = 5
number > 0
  ? console.log('positive number')
  : console.log('negative number')
number = -5
number > 0
  ? console.log('positive number')
  : console.log('negative number')
  
//WINDOW METHODS
//alert(): mesaj kutusu uyarı getiriyor.
//prompt(mesaj,varsayılan değeri): kullanıcıda bir input almak için kullanıyor.
let sayi = prompt('bir sayı girin', '5')
let result = sayi*2
console.log(result)
//confirm(): onay kutusu
let isDelete = confirm('silmek istediğine emin misin?')
console.log(isDelete ? 'Silme işlemi başarılı' : 'Silme işlemi iptal edildi')

//DATE OBJECT
const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getDate())
console.log(now.getDay())   //pazar 0 dan başlıyor
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())


const date = new Date()
let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()
    
let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül','Ekim', 'Kasım', 'Aralık']
let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`
console.log(humanReadableDate)
   