"use strict";
/*let word ="Some";
switch(word){
    case "new":
        console.log("woed is new");
        break;
    case "Some":
        console.log("word is Some");
        console.log("yep");
        break;
    case "not":
        console.log("word is not");
        break;
    default:console.log("word dont have");
        
        
            
        
    

}
let data = [];

data = [2, 4, 5];

data = [3, 2, 6, "string"];
let a = 1;

let matrix = [];
matrix = [["Some", "Any"], [5, 4, 6], false];
Array.isArray;
for (let i = 0; ; i++) {
  for (let j = 0; ; j++) {
    if (matrix[i] == undefined) {
      break;
    }
    if (Array.isArray(matrix[i]) == false) {
      console.log(matrix[i]);
      break;
    }
    if (matrix[i][j] == undefined) {
      break;
    }
    console.log(matrix[i][j]);
  }
  if (matrix[i] == undefined) {
    console.log("all");
    break;
  }
}
let max = [2, 3, 4, 5];
console.log(max);

let block = document.getElementById("bloc_text");
block.innerHTML = "hello <b>World</b>";
block.style.color = "red";
block.style.background = "#333";
block.className = "block";

let spans = document.getElementsByTagName('span');
for (let i = 0; i < spans.length; i++) {
  spans[i].style.fontSize="24px"
  spans[i].title = spans[i].innerText + "!";

}
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let elements = document.getElementById("form");
  let errors = document.getElementById("error");
  if (elements.username.value.length < 2) {
    errors.innerText = "Введіть більше слів";
  } else if (elements.width.value.length == 0 || elements.width.value == "0") {
    errors.innerText = "Введіть масу ";
  } else if (elements.tall.value.length == 0 || elements.tall.value == "0") {
    errors.innerText = "Введіть ріст ";
  } else {
    errors.innerText = "";
  }
  if (errors.innerText == "") {
    let index =
      elements.width.value / (elements.tall.value * elements.tall.value);
    alert(
      "Hello ," + elements.username.value + " yor index mass's body: " + index
    );
    if(index<18.5){
      alert("не достатня вага");
    }else if(index<24.5){
      alert("Норма")
    }else if (index< 29.9){
      alert("Надмірна вага")
    }else if(index>=30){
      alert("Ожиріння ")
    }
  }
});
let id = setInterval(my_fyn, 1000);

counter = 0;
function my_fyn() {
  document.getElementById("title").innerHTML = "Counter: " + counter;
  counter++;
}
function stopInterval(){
 //clearInterval(id);
  clearTimeout(timerid); 
}

let timerid =setTimeout(function(){
 alert("Message") 
},7000)
let Arrays=['js/Без назви.jpg','js/Без назви1.jpg','js/Без назви2.jpg'];
let id= setInterval(function(){
  console.log(Arrays[Math.floor(Math.random() * 3)]);
  
document.getElementById('img').src=Arrays[Math.floor(Math.random()*3)];
},3000)
*/
// class Car {
//   Brand;
//   Model;
//   Year;

//   constructor(Brand, Model, Year) {
//     this.Brand = Brand;
//     this.Model = Model;
//     this.Year = Year;
//   }
//   getInfo() {
//     console.log(`Brand ${this.Brand} Model ${this.Model} Year ${this.Year}`);
//   }
//   get Age() {
//     return `Year : ${Number(this.Year) - new Date().getFullYear()}`;
//   }
//   set setYear(value) {
//     if (Number(value) > new Date().getFullYear()) {
//       console.log("За Великий рік");

//       return;
//     }
//     this.Year = value;
//   }
//   static compareAge(car1, car2) {
//     if (Number(car1.Year) < Number(car2.Year)) {
//       car1.getInfo();
//     } else car2.getInfo();
//   }
// sort(callBack){
// //   if(callBack==0){
// //     console.log("залишаємо");

// //   }else if(callBack==1){
// //     console.log("міняємо 1");
// //   }else if(callBack==-1){
// //     console.log("міняємо 2");

// //   }

// // }
// // }
// // class ElectricCar extends Car {
// //   batteryCapacity;
// //   constructor(Brand, Model, Year, batteryCapacity) {
// //     super(Brand, Model, Year);
// //     this.batteryCapacity = batteryCapacity;
// //   }
// //   getInfo() {
// //     console.log(
// //       `Brand ${this.Brand} Model ${this.Model} Year ${this.Year} Battery Capacity ${this.batteryCapacity} kWh`
// //     );
// //   }
// // }
// // let firstCar = new Car("Toyota", "Camry", "2002");
// // firstCar.getInfo();
// // let secondElectricCar = new ElectricCar("BMW", "X20", "2000", "75");
// // let cars = [
// //   new Car("Toyota", "Camry", 2020),
// //   new Car("Honda", "Civic", 2019),
// //   new Car("Ford", "Focus", 2021),
// //   new Car("Tesla", "Model 3", 2022),
// //   new Car("BMW", "X5", 2018)
// // ];

// let getInfo = (CarInform) => {
//   console.log(
//     `Brand; ${CarInform.Brand}`,
//     `Model ${CarInform.Model}`,
//     `Owner ${CarInform.Owner ??"Не вказаний"}`
//   );
// };
// const { Year = "25" } = secondElectricCar;
// console.log(Year);
let i = 0;
const audio = new Audio("1701853380_-struna.mp3");
const audio1 = new Audio("okean-elzy-yak-nikoli-(meloua.com).mp3");
const audio2 = new Audio("the-weeknd-blinding-lights.mp3");
const audio3 = new Audio("1704263886_elzi-na-neb.mp3");
const audio4 = new Audio("Бумбокс - Дитина.mp3");
const audio5 = new Audio("audio_2025-03-08_00-46-57.mp3");



let mistakes = [
  "Я вшоці ☕, маленька зберися зі своїми думками!!",
  "Women☕",
  "Маленька зберися, не позор мене😡",
  "Срака буде битта, за такі відповіді  !!!",
  "",
];
let bodyId = document.getElementById("bodyId");
let elem = document.getElementsByClassName("click");
bodyId.style.backgroundColor = "rgb(33, 33, 33)";
console.log(bodyId.style.backgroundColor);
function change() {
  i++;
  if (i % 2 == 0 && bodyId.style.backgroundColor == "rgb(33, 33, 33)") {
    bodyId.style.backgroundColor = "rgb(232, 232, 232)";
    bodyId.style.transition = "background-color 2s";
  } else if (i % 2 == 0) {
    bodyId.style.backgroundColor = "rgb(33, 33, 33)";
  }
}

function showPopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  // Спочатку робимо елементи видимими
  popup.style.display = "block";
  overlay.style.display = "block";

  // Через мінімальну затримку додаємо клас для анімації
  setTimeout(() => {
    popup.classList.add("show");
    overlay.classList.add("show");
  }, 30);
}

function hidePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  // Видаляємо клас show для запуску анімації зникнення
  popup.classList.remove("show");
  overlay.classList.remove("show");

  // Прибираємо елементи після завершення анімації
  setTimeout(() => {
    popup.style.display = "none";
    overlay.style.display = "none";
  }, 300); // 300мс = тривалість анімації
}

function openVideo() {
  const modal = document.getElementById("videoModal");
  const video = modal.querySelector("video");
  modal.style.display = "block"; // Показуємо модальне вікно
  video.play(); // Автоматично запускаємо відео (якщо браузер дозволяє)
}

// Функція для закриття відео
function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = modal.querySelector("video");
  video.pause(); // Зупиняємо відео
  video.currentTime = 0; // Скидаємо на початок
  modal.style.display = "none"; // Ховаємо модальне вікно
}

// Закриття при кліку поза модальним вікном
window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideo();
  }
};
function buttonClick() {
  let lable = document.getElementById("inputtext");
  if (lable.value.replace(" ", "") == "06.08.2024") {
    audio.play();
    alert("Моя маленька умнічка❤️❤️❤️❤️ ");
    window.location.href = "index2.html";
  } else {
    lable.value = mistakes[Math.floor(Math.random() * 4)];
    lable.style.width = lable.scrollWidth + "px";
  }
}
function buttonClick1() {
  let lable = document.getElementById("inputtext");
  if (lable.value.toLowerCase().replace(" ",'') == "якніколи") {
    audio1.play();
    alert("Ні на секунду не сумнівався ❤️❤️❤️❤️ ");
    window.location.href = "index3.html";
  } else {
    lable.value = mistakes[Math.floor(Math.random() * 4)];
    lable.style.width = lable.scrollWidth + "px";
  }
}
function buttonClick2() {
  let lable = document.getElementById("inputtext");
  if (lable.value.toLowerCase().replace(" ",'') == "графмонте-крісто") {
    audio2.play();
    alert("Моя дівчинка ❤️❤️❤️❤️ ");
    window.location.href = "index4.html";
  } else {
    lable.value = mistakes[Math.floor(Math.random() * 4)];
    lable.style.width = lable.scrollWidth + "px";
  }
}
function May() {
  audio5.play();
}

function buttonClick3() {
    let lable = document.getElementById("inputtext");
    if (lable.value.toLowerCase().replace(" ",'') == "blindinglights") {
      audio3.play();
      alert("Моє котинятко молодець ❤️❤️❤️❤️");
         alert("Я на небі коли ти поруч❤️❤️❤️❤️");
      window.location.href = "index5.html";
    } else {
      lable.value = mistakes[Math.floor(Math.random() * 4)];
      lable.style.width = lable.scrollWidth + "px";
    }

}
function buttonClick4() {
  let lable = document.getElementById("inputtext");
  
  if (lable.value.toLowerCase().replace(" ", "") == "японія") {
    audio4.play();
    alert("Ти моя умнічка ❤️❤️❤️❤️");
   
    window.location.href = "qr-code-DESKTOP-I86ELE7.png";
  } else {
    lable.value = mistakes[Math.floor(Math.random() * 4)];
    lable.style.width = lable.scrollWidth + "px";
  }
}


// let arr = [];

// function buttonClick() {
//   let lable = document.getElementById("inputtext");
//   if (lable.value == "done") {
//     document.getElementById("but1").remove();
//   } else arr.push(+lable.value);

//   console.log("Max number" + Math.max(...arr));
//   console.log("Min number" + Math.min(...arr));
//   console.log(
//     "Sum number " +
//       arr.reduce((a, b) => {
//         return a + b;
//       }, 0)
//   );

//   console.log("___________________________");
//   lable.value = "";
// }

// const userProfile1 = {
//   name: "Олександр Коваленко",

//   age: 30,
//   role: "Розробник",

//   contacts: {
//     email: "oleksandr.kovalenko@example.com",
//     phone: "+380123456789",
//     socialMedia: {
//       twitter: "@alex_dev",
//       linkedin: "linkedin.com/in/oleksandr-kovalenko",
//     },
//   },
//   year: 4,
//   aontact: {
//     email: "oleksandr.kovalenko@example.com",
//     phone: "+380123456789",
//     socialMedia: {
//       twitter: "@alex_dev",
//       linkedin: "linkedin.com/in/oleksandr-kovalenko",
//     },
//   },
// };

// const userProfile2 = {
//   name: "Олександр Коваленко",
//   year: 4,
//   role: "Розробник",
//   age: 30,
//   contacts: {
//     email: "oleksandr.kovalenko@example.com",
//     phone: "+380123456789",
//     socialMedia: {
//       twitter: "@alex_dev",
//       linkedin: "linkedin.com/in/oleksandr-kovalenko",
//     },
//   },
//   aontacts: {
//     email: "oleksandr.kovalenko@example.com",
//     phone: "+380123456789",
//     socialMedia: {
//       twitter: "@alex_dev",
//       linkedin: "linkedin.com/in/oleksandr-kovalenko",
//     },
//   },
//   year: 4,
// };

// const comparison=(user2,user1)=>{
//   for (let key in user1){
//       console.log(key);
//     if (typeof user1[key] == "object" && typeof user2[key] == "object"){
//     if(!comparison(user1[key], user2[key])){
//       return false;

//     }

//     }else if (user1[key] != user2[key]) {
//         return false;
//       }

//   }

//   return true;

// }
// console.log(comparison(userProfile1, userProfile2));
// console.log(userProfile1);
// console.log(userProfile2);
