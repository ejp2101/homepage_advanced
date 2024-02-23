import './style.css';

 function component() {
   const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = "putangina nyong lahat";

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());