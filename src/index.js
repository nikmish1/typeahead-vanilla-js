



import { getSearchResult, debounce } from "./utils"


const divSugg = document.getElementById("suggestion");


export const showSuggestions = (res) => {
  divSugg.innerHTML = ""

  const fregment = document.createDocumentFragment();

  const ul = document.createElement("ul");

  for (let i = 0; i < res.length; i++) {
    const li = document.createElement("li");
    li.textContent = res[i];
    fregment.appendChild(li);
  }
  
  ul.appendChild(fregment);
  divSugg.appendChild(ul);
};



const inputValue = (e) => {
  const searchValues = e.target.value

  const searchRes = getSearchResult(searchValues)
  

  if(searchRes) {   
    showSuggestions(searchRes)
}
   
};

const inputEle = document.getElementById("input");

if (inputEle) {
  inputEle.addEventListener("input", debounce(inputValue));
}
