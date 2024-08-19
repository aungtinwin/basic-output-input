// selector
const root = document.querySelector("#root");
root.classList.add("p-5");

// create H1 element with js//

const heading = document.createElement("h1");
heading.innerText = "I'm Heading";
// console.log(heading);

// adding classes to heading
heading.className = "font-bold text-3xl font-serif mb-5";

// adding title attribute to heading
heading.title = "This is heading";
heading.id = "heading";
heading.setAttribute("atw", "aungtinwin"); //custom attribute

// create image element with Js
//====================

const imgDiv = document.createElement("div");
imgDiv.classList.add("flex", "gap-3", "mb-5");

const poeImg = document.createElement("img");
poeImg.src = "./images/poe-mamhe-thar-7.jpg";
poeImg.classList.add("h-32");
// console.log(poeImg);

const poeImg2 = document.createElement("img");
poeImg2.src = "./images/poe-mamhe-thar-8.jpg";
poeImg2.classList.add("h-32");
// console.log(poeImg2);
imgDiv.append(poeImg);
imgDiv.append(poeImg2);

const para = document.createElement("p");
para.innerText =
  "Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est excepturi earum corporis necessitatibus eum adkd kjk l la ll  aafd aug tin win paragraphy  akdkfjf.";
para.className = "mb-5"

const listGroup = document.createElement("ul");


const createList = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  li.classList.add("border","mb-2","p-2")
  return li;
}


listGroup.append(createList("apple"));
listGroup.append(createList("orange"));
listGroup.append(createList("banana"));
listGroup.append(createList("lemon"));

// prepend--> နောက်ဆုံးထည့်ရေ data က အယင်ဆုံး လာတယ်။
// listGroup.prepend(createList("apple"));
// listGroup.prepend(createList("orange"));
// listGroup.prepend(createList("banana"));
// listGroup.prepend(createList("lemon"));
console.log(listGroup);

// add heading elements to main
//=======================

// before , after methods 
// ===========
// root.append(heading);
// heading.before(imgDiv);
// heading.after(para)
// imgDiv.after(para);
// para.after(listGroup)

//from js, with append()method, can add elements to html.
root.append(heading);
root.append(imgDiv);
root.append(para);
root.append(listGroup);

// remove(), removeChild() methods
//==========================

// heading.remove();
// para.remove();

// listGroup.remove(); // remove children in the parents
// listGroup.removeChild(listGroup.children[1])
