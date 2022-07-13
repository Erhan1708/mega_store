const $form2 = document.querySelector('#form2')

$form2.addEventListener('submit', () => {
   const $elements = document.querySelectorAll('input , select');
   const $user = {}
   
   for (let i = 0; i < $elements.length; i++) { 
      $user[$elements[i].name] = $elements[i].value;
   }

   localStorage.setItem("form2", JSON.stringify($user));
   window.location.href='request.html'
})