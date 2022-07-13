const form = document.querySelector('#form1');

const infoUser = () => {
   const user = {};
   for (let i = 0; i < elements.length; i++) {
      user[elements[i].name] = elements[i].value
   }
   localStorage.setItem('form1', JSON.stringify(user))
   
}

const fillingCheck = (elements) => {
   let check = 0;
   for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('input', () => {
            elements[i].classList.remove("error");
         })
      if (elements[i].value === '') {
         elements[i].classList.add('error');
         check++;
      }
   }
   return check === 0;
};

form.addEventListener("submit", () => {
   const elements = document.querySelectorAll('input , select');
   if (fillingCheck(elements)) {
      window.location.href = 'income_data.html'
      infoUser()
   }
})