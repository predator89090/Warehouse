
let buttons = document.querySelectorAll('button');
let inputs = document.querySelectorAll('input');
let cards = document.getElementById('cards');
let add = document.querySelector('.add_smth'); 
let delete_all = document.querySelector('.delete_all');
let information = document.querySelector('.information');
let additional_prop = [];
let amount = 0;
let prices = [];
let sum=0;
let clean = document.querySelector('.clean');
let num = 0;
let alerts = document.querySelectorAll('.alert');
let count = 1;
let filter = document.querySelector('.filter');
let find_block = document.querySelector('.find');
let filtering_val = document.getElementById('filtering_val');
let favouritesBlock  = document.querySelector('.favourites');



function sum_price(){
     sum += +inputs[1].value;
     return sum;
}

inputs[1].addEventListener('keypress', (event) => {
     if(['e', '-','!','@','$','%','^','&','*','(',')','+','='].includes(event.key)){
          event.preventDefault();
     }
})

inputs[2].addEventListener('keypress', (event) => {
     if(['e', '-','!','@','$','%','^','&','*','(',')','+','='].includes(event.key)){
          event.preventDefault();
     }
})


function not_empty(){
     if(inputs[0].value == '' || inputs[1].value =='' || inputs[2].value == '' || inputs[3].value == '' || inputs[4].value == ''){
          alert('Введите все параметры товара!')
          return false;
     }else{
          return true;
     }
}

inputs[0].addEventListener('change', function(){
     if(inputs[0].value.length>20){
          inputs[0].style.borderColor = 'red';
          alerts[0].textContent = 'Название не должно превышать 20 символов';
          alerts[0].style.color = 'red';
     }else{
          inputs[0].style.borderColor = 'grey';
          alerts[0].textContent = '';
     }
});

inputs[1].addEventListener('change', function(){
     if((inputs[1].value) == '0'){
          inputs[1].style.borderColor = 'red';
          alerts[1].textContent = 'Цена должна быть больше 0';
          alerts[1].style.color = 'red';
     }else{
          inputs[1].style.borderColor = 'grey';
          alerts[1].textContent = '';
     }
});

inputs[2].addEventListener('change', function(){
     if((inputs[2].value) == '0'){
          inputs[2].style.borderColor = 'red';
          alerts[2].textContent = 'Количество должно быть больше 0';
          alerts[2].style.color = 'red';
     }else{
          inputs[2].style.borderColor = 'grey';
          alerts[2].textContent = '';
     }
});

inputs[4].addEventListener('change', function(){
     if(inputs[4].value.length > 50){
          inputs[4].style.borderColor = 'red';
          alerts[4].textContent = 'Описание не должно быть более 50 символов';
          alerts[4].style.color = 'red';
     }else{
          inputs[4].style.borderColor = 'grey';
          alerts[4].textContent = '';
     }
});




function validation (){
     if(inputs[0].value.length<20 && +(inputs[1].value) > 0 && +(inputs[2].value) > 0 && inputs[4].value.length<50){
          alerts[0].textContent = '';
          alerts[1].textContent = '';
          alerts[2].textContent = '';
          alerts[4].textContent = '';
          return true;
     }else{
          if(inputs[0].value.length>20){
               inputs[0].style.borderColor = 'red';
               alerts[0].textContent = 'Название не должно превышать 20 символов';
               alerts[0].style.color = 'red';
          }else if(+(inputs[1].value) <= 0){
               inputs[1].style.borderColor = 'red';
               alerts[1].textContent = 'Цена должна быть больше 0';
               alerts[1].style.color = 'red';
          }else if(+(inputs[2].value) <= 0){
               inputs[2].style.borderColor = 'red';
               alerts[2].textContent = 'Количество должно быть больше 0';
               alerts[2].style.color = 'red';
          }else if(inputs[4].value.length > 50){
               inputs[4].style.borderColor = 'red';
               alerts[4].textContent = 'Описание не должно быть более 50 символов';
               alerts[4].style.color = 'red';
          }
          return false;

     }
}





function additional_properties(){
    
     if(not_empty()){
          add.innerHTML += `<div class="input-group mb-3">
          <span class="input-group-text" >Доп.параметр</span>
          <input type="text" class="form-control ahmed" id='input' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="">
          <button type = "button" class = "add_prop">Добавить</button>
          </div>`;
          
          
          
          
     }else{
          alert('Вы ввели не все значения! Повторите попытку.');
     }
         
}

buttons[0].addEventListener('click', function(){
     additional_properties();
     let new_properties = document.querySelectorAll(`.ahmed `);

     let add_property = document.querySelector('.add_prop')

     add_property.addEventListener('click', function(){
          
          for(let prop of new_properties){
               additional_prop.push(`${prop.value}`);
          }

     });  
});




buttons[1].addEventListener('click', function(){
     if(not_empty() && validation()){
          amount+=1;
          cards.innerHTML += `<div class="card text-bg-success mb-3" style="max-width: 18rem" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
          <div class="card-header" style="text-align: center">${inputs[0].value}</div>
          <div class="card-body${count}">
            <p class="card-text" style="text-align: center">${inputs[1].value}</p>
            <p class="card-text" style="text-align: center">${inputs[2].value}</p>
            <p class="card-text" style="text-align: center">${inputs[3].value}</p>
            <p class="card-text" style="text-align: center">${inputs[4].value}</p>
          </div>
          <button type="button" class="btn btn-warning update">Обновить</button>
        </div>`;   
          
          delete_all.textContent = 'Удалить товар';


          prices.push(+inputs[1].value);

          information.innerHTML = `<p class="amount">Количество товаров: ${amount}</p>
                                   <p class="sum">Общая стоимость товаров: ${sum_price()}</p>`;
          
          let card_body = document.querySelector(`.card-body${count}`)
          
          if(additional_prop.length != 0){
               
               for(let k of additional_prop){
                    
                    card_body.innerHTML += `<p class="card-text" style="text-align: center">${k}</p>`;
                    additional_prop.shift();
               }
          
          }
          count++;
     }
     let update = document.querySelectorAll('.update');
     for(let button of update){
          button.addEventListener('click', function(){
               
               let card_header = document.querySelector('.card .card-header')
               let card_par = document.querySelectorAll('.card p');
          
               card_header.innerHTML = inputs[0].value;
               card_par[0].innerHTML = inputs[1].value;
               card_par[1].innerHTML = inputs[2].value;
               card_par[2].innerHTML = inputs[3].value;
               card_par[3].innerHTML = inputs[4].value;

               
          });
     }
     let card_arr = document.querySelectorAll('.card');
     let favourite_arr = document.querySelectorAll('svg');

     for(let card = 0; card<card_arr.length; card++){
          for(let favourite = 0; favourite<favourite_arr.length; favourite++){
               favourite_arr[favourite].addEventListener('click', function(){
                    if(favourite == card){
                         let favouritesBlock  = document.querySelector('.favourites');
                         favouritesBlock.appendChild(card_arr[card].cloneNode(true));
                    }
               });
          }
     }

     


});


delete_all.addEventListener('click', function(){
     if(amount!=0 && sum!=0){
     let card_arr = document.querySelectorAll('.card');
     let cards_amount = document.querySelector('.amount');

     let sum_of_prices = document.querySelector('.sum');
     

     cards_amount.innerHTML = `Количество товаров: ${amount-=1}`;

     prices.reverse();
     
     sum_of_prices.innerHTML = `Общая стоимость товаров: ${sum-=prices[0]}`;
     prices.shift();
     card_arr[card_arr.length-1].remove();
     }
     
     if(amount == 0){
          delete_all.textContent = '';
     }
     
});


     
clean.addEventListener('click', function(){
     inputs[0].value = '';
     inputs[1].value = '';
     inputs[2].value = '';
     inputs[3].value = '';
     inputs[4].value = '';
});


filter.addEventListener('click', function(){
     let card_arr = document.querySelectorAll('.card');
     
     for(i = 0; i<card_arr.length; i++){
          if(card_arr[i].outerHTML.includes(filtering_val.value)){
          }else{
               card_arr[i].remove();
          }
     }
});



     
     

