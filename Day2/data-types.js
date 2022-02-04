let numOne = 3
let numTwo = 3

console.log( numOne == numTwo)

let js = 'Javascript'
let py ='Python'

console.log( js == py )

let lightOn = true
let lightOff = false

console.log( lightOn == lightOff )

let nums = [1, 2, 3] //Non-Primitive data types

nums[0] // 1
nums[1] // 2
nums[2] // 3

nums[0] = 10

console.log(nums)

let nums1 = [1, 2, 3]
 //let nums2 = [1, 2, 3]
let nums2 = nums1      //referansları eşit olduğu için true       
console.log( nums1 == nums2 ) //true
  //Non-primitivede değerleri karşılaştıramıyoruz, aynı değerler olmasına rağmen false çıktısı verilir

let user1 = {
  name: 'Beyza',
  surname: 'Akyol'
}                     // {.....} object (nesne)
let user2 = {
  name: 'Beyza',
  surname: 'Akyol'
}
console.log( user1 == user2 ) //false

//Number Data Types
let age = 35
const gravity = 9.81 //değişmeyen değerler için const değişkeni kullanılır
let mass = 72
//const PI = 3.14
const boilingPoint = 100
const bodyTemp = 37
console.log(age, gravity, mass, boilingPoint, bodyTemp)

//Math Object
const PI = Math.PI
console.log(PI)

//Rounding en yakın sayıya yuvarlama 
console.log(Math.round(9.5))
console.log(Math.round(9.49))
console.log(Math.floor(PI))   //floor taban sayısını gösterir aşağı yuvarlar 3
console.log(Math.ceil(PI))    //ceil tavan sayısını gösterir yukarı yuvarlar 4
console.log(Math.min(-5, 3, 20, 4, 5, 10))  //en düşük sayıyı çıktı olarak verir
console.log(Math.max(-5, 3, 20, 4, 5, 10))  //en yüksek sayıyı çıktı olarak verir

const randNum = Math.random()
console.log(randNum)     //0 ile 0.999999 arasında rastgele bir sayıyı çıktı olarak verir

const num = Math.floor(Math.random () * 11)   //0 ile 10 arasında rastgele sayılar çıktı alabilmek için 11 ile çarpılır 
console.log(num)

//Absolute value (mutlak değer)
console.log(Math.abs(-10))  //10

//Square root (karekök)
console.log(Math.sqrt(100))  //10

//Power (üssü)
console.log(Math.pow(3, 2))   //9   3**2 şeklinde de yazılabilir

//Logarithm
console.log(Math.log(2)) 
console.log(Math.log(10))

//Trigonometry
Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)

//Strings
let firstName = 'Beyza'
let lastName = 'Akyol'
let language = 'Javascript'
let job = 'Öğrenci'
let yas = 21
//let country = 'Turkey'

//String Concatenation (Stringleri birleştirme)
let fullname = firstName + ' ' + lastName   //Beyza Akyol
console.log(fullname)

//let personInfoOne = fullname + '. I am ' + yas + '. I live in ' + country
//console.log(personInfoOne)

let paragraph = "Benim\nadım\nBeyza\nAkyol"    //  \n yeni alt satıra geçiriyor yazdıklarımızı ayırıyor
console.log(paragraph)

let paragraf = "Benim\tadım\tBeyza\tAkyol"    //  \t bir tab boşluk bırakır
console.log(paragraf)

let day = "2\\02\\2022"
console.log(day)

let room = "Beyza Akyol\'un odası"   //  \' kesme işaretiyle ayırmak için kullanılır
console.log(room)

console.log("Merhaba, Dünya! \"Hello, World!\"")   //   \\" string içerisinde tırnak içinde bi yazı kullanmamız gerektiğinde kullanırız.


//String Methods
let java = "Javascript"
console.log(js.length)   //kelimenin uzunluğunu verir, boşlukta bir karakterdir sayılır 10
                                       
let firstname = "Beyza"
console.log(firstname.length)   //5

let string = 'JavaScript'

let firstLetter = string[0]     // J   index 0 dan başlar
console.log(firstLetter)
let secondLetter = string[1]
console.log(secondLetter)        // a

let lastIndex = string.length - 1         //string uzunluğu(10) - 1 
console.log(lastIndex)        // 9 
console.log(string[lastIndex])     // t

console.log(string.toUpperCase())     //toUpperCase --> harflerin hepsini büyük harfe çevirir.  JAVASCRIPT

console.log(string.toLowerCase())     //toLowerCase --> harflerin hepsini küçük harfe çevirir. javascript

console.log(string.substr(4,6))    //substr 4 ten başlasın ve 6 karakter daha alsın. Script

console.log(string.substring(4,6))    //substring başlangıç ve bitiş değeri arasındaki harfleri alır. Sc

let strings = '30 Days of JavaScript'
console.log(strings.split())      //split dizi halinde yazdırıyor. --> ['30 Days of JavaScript']
console.log(strings.split(' '))    //split(bölme) boşluk koyduğumuzda her kelimeyi bir dizi elemenı olarak ayırıyor. --> ['30', 'Days', 'of', 'JavaScript']

console.log(string.split(''))    //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

let str = "   30 Days of JavaScript   "
console.log(str.trim(' '))       //trim başlangıçtaki ve sondaki gereksiz boşlukları kaldırıyor.

console.log(str.includes('Days'))    //includes içerisinde bu kelimeyi içeriyor mu diye kontrol ediyor, bize boolean değer döndürür. --> true
console.log(str.includes('days'))    //false

console.log(strings.replace('JavaScript', 'Python'))  //replace(değiştirme) -->30 Days of Python

console.log(strings.indexOf('D'))  //indexOf kaçıncı indexte D var   -->3
console.log(strings.indexOf('days'))    //indexOf eğer yazılanı içerimiyorsa her zaman -1 değerini döndürür.

let a = 'I love you JavaScript. If you do not love JavaScript what else can you love.'
console.log(a.lastIndexOf('love'))   //lastIndexOf en son yazan kelimenin indexini alır -->71
console.log(a.lastIndexOf('JavaScript'))  // -->42

let country = 'Fin'
console.log(country.concat("land"))  //concat (birleştirme)  -->Finland

let b = 'Finland'
console.log(b.startsWith('Fin'))   //startsWith eğer Fin ile başlıyorsa true değer döndürür. -->true
console.log(b.startsWith('fin'))   // -->false

console.log(b.endsWith('land'))    //endsWith land ile bitiyor mu diye bakıyor -->true
console.log(b.endsWith('Fin'))     //false

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))   // -->['2019', '30', '2020']

let c = 'love'
console.log(c.repeat(5))   //repeat tekrar etmek -->lovelovelovelovelove

//Checking Data Types and Casting (veri tiplerinin kontrolü ve değiştirilmesi)

let number = '10'
let numberInt = parseInt(number)
console.log(numberInt)    //string olan sayıyı integera çevirme parseInt  -->10   

let d = '9.81'
let numfloat = parseFloat(d)
console.log(d)   // parseFloat stringi floata çevirme -->9.81

let e = 9.81
let numInt = parseInt(e)
console.log(numInt)      //parseInt float bir sayıyı integera çevirme  -->9

