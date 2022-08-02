const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
   //addEventListener('click', update(button.id));
    // button.addEventListener('click', update(button.id));
    button.addEventListener('click', function(){
        update(button.id);
    });
   
});



function update(key){
    console.log(key);
}