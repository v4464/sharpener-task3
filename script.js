/*Change the main heading 'Fruit Shop' to 'Fruit World'

2. Change the font color of 'Fruit World' from black to orange

3. Change background color of div with id = "header" to green color

4. Add a bottom border of orange color to div with id = "header"

5. Change the font color of 'Fruits In Basket' from black to green

6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks" */

const h1=document.getElementById('main-heading')
h1.textContent='Fruit World';
h1.style.color='orange';

const divv=document.getElementById('header')
divv.style.backgroundColor='green';
divv.style.borderBottom='3px solid orange';

const Basket=document.getElementById('basket-heading')
Basket.style.color='green'

 const newpara=document.getElementById('thanks')
 newpara.innerHTML='Please visit us again';
