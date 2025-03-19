// console.dir(document)
// let h1 = document.getElementById("demo-id")
// console.log(h1);
// let tagList = document.getElementsByClassName("demo-class");
// console.log(tagList);
// for(let i = 0; i < tagList.length; i++){
//     console.log(tagList[i]);
// }
let li = document.getElementsByClassName("demo-class")[1];
console.dir(li);
console.log(li.innerHTML);
console.log(li.innerText);
console.log(li.textContent);

let p = document.getElementById("demo-inner");
console.log(p)
console.log(p.innerHTML);
console.log(p.innerText)
console.log(p.textContent)

p.style.width = "200px";
p.style.height = "200px";
p.style.borderRadius = "50%";
p.style.backgroundColor = "skyblue";
p.style.color = "pink";
p.style.border = "10px solid black";


let abbr = document.getElementsByClassName("class-01")[0];
console.log(abbr)
// console.log(abbr.classList)
abbr.classList.add("circle")