const $userObject = JSON.parse(localStorage.getItem("form1"));
const $userObject2 = JSON.parse(localStorage.getItem("form2"));

const result = {
		form1: $userObject,
		form2: $userObject2,
 };
console.log(result);