const $userObject = JSON.parse(localStorage.getItem("form1"));
const $userObject2 = JSON.parse(localStorage.getItem("form2"));

fetch($userObject, $userObject2)
   .then((res) => res.json())
   .then((data) => { 
      let info = document.querySelector(".info");
      Object.keys(data.value)
      info.insertAdjacentHTML(
         'afterbegin',
         ``
      )
   })









const result = {
		form1: $userObject,
		form2: $userObject2,
 };
console.log(result);