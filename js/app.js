// console.log(window);
// console.log(document);
// console.log(console);

// console.log("AAA");
// console.log("BBB");

// const x = 5;
// const y = 10;

// console.log(x+y);

// Note:
// window obj- prompt method --> input data
// window obj- alert method ---> output data

// const x = window.prompt("Input first number");
// const y = window.prompt("Input second number");

// console.log(x + y);

// console.log(typeof x);
// console.log(typeof y);

// const result = parseFloat(x) + parseFloat(y);
// parseInt ထက် parseFloat  ပိုပြီး Safe ဖြစ်တယ်။

// console.log(result);

// window.alert(`Your result is ${result}`);

//=============

// How old are you?
// answer your birth year.

// const age = window.prompt("How old are you?");
// const birthYear = 2024-parseInt(age);

// window.alert(`You was born in ${birthYear}`);

// confirm() method --> Ok , Cancel
// Are you finish dinner?

// const answer = window.confirm("Are you finish dinner?")
// console.log(answer ? "Yes,I'm finish.": "Not,not yet.");

//==============
// document obj ---> getElementById() method

// write an app
// change title

// 1. select an element
// id နဲ့ ထုတ်ရင် Element တစ်ခါတည်းထွက်တယ်။
// className, TagName နဲ့ထုတ်ရင် html collection ဘဲထွက်တယ်။

// const heading = document.getElementById("heading");

// const textInput = document.getElementById("textInput");
// const button = document.getElementById("btn");
// const listGroup = document.getElementById("listGroup");

// const paragraphs = document.getElementsByTagName("p");
// // console.log(paragraphs);
// // console.dir(paragraphs[0]);
// // console.dir(paragraphs[1]);
// const lists = document.getElementsByClassName("list")
// console.log(lists);
// console.dir(lists[0]);
// console.dir(lists[0].innerText);
// console.dir(lists[1].innerHTML);

// querySelectorAll ကအများကြီး ကိုဖမ်းရင် သုံးမယ်။ Notelist ထွက်တယ်။
// querySelector က တစ်ခုတည်း ကို ဖမ်းမယ်။  Element ထွက်တယ်။

const paragraphs = document.querySelectorAll("p"); // tag select
// console.log(paragraphs);/

const lists = document.querySelectorAll(".list"); // class select
// console.log(lists);
// console.dir(lists[0].innerText);

const heading = document.querySelector("#heading"); // id select

const headingLarger = document.querySelector("#headingLarger");
const headingSmaller = document.querySelector("#headingSmaller");


// css id control
const btn = document.querySelector("#btn");
btn.onclick = () => {
  heading.style.color = "red";
  heading.style.backgroundColor = "yellow";
  heading.style.textAlign = "left";
  heading.style.padding = "20px 40px";
};

// css style control

headingLarger.onclick = () => {
  const current = parseInt(heading.style.fontSize);
  heading.style.fontSize = `${current + 5}px`;
};

headingSmaller.onclick = () => {
  const current = parseInt(heading.style.fontSize);
  heading.style.fontSize = `${current - 5}px`;
};

// console.log(heading.className);
// console.log(heading.classList);
// console.log(heading.classList[0]);
// console.log(heading.classList.value);

// console.dir(heading);
// console.log(heading.classList);
// console.log(heading.className);
// console.log(heading.id);
// console.log(heading.title);
// console.log(heading.style);
// console.log(heading.style.color);
// console.log(heading.style.textAlign);

// console.log(heading.innerText);

// console.log(document.querySelector(".list").innerText);

// 2. set

// function changeTitle() {
//   heading.innerText = textInput.value;

//   // 3. clear
//   textInput.value = "";
// }

// 4. event listen
// button.onclick = changeTitle;
// button.addEventListener("click",changeTitle) // ဒီလိုရေးရန်

// // event --> onclick(1) , ondbclick(2)
// button.onclick = function(){
//     console.log("U Click");
// }

// console.log(heading.innerText);
// heading.innerText = "Min Ga Lar Par";
// console.log(heading.innerText);

// console.log(heading);
// console.log(textInput);
// console.log(button);
// console.log(listGroup);

// heading obj---> innerText, innerHTML--> get data.
// console.dir(heading);
// console.log(heading.innerHTML);
// console.log(heading.innerText);

// console.dir(button);
// console.log(button.innerHTML);
// console.log(button.innerText);

// console.dir(listGroup);
// console.log(listGroup.innerHTML);
// console.log(listGroup.innerText);
//===============================

// class ကို javaScript မှ ပြုပြင်ရနိုင်တဲ့  DOMTokenList methods များ
//===============================================
// 1. add() --add new class in css
// 2. remove() - remove class in css
// 3. replace() - replace class in css
// 4. toggle() - class ဖြုတ်လိုက် တပ်လိုက် လုပ်နိုင်
