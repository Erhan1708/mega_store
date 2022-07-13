const $form = document.querySelector('#form1');
 const $elements = document.querySelectorAll('input , select');
   const $user = {};



$form.addEventListener("submit", () => {
   
   for (let i = 0; i < $elements.length; i++) {
      $user[$elements[i].name] = $elements[i].value
   }
   localStorage.setItem('form1', JSON.stringify($user))
   window.location.href='income_data.html'
})