/**Prevenir Event Bubbling con Delegation */

//Selector principal
const cardDiv = document.querySelector('.card');

//e.target para concoer a qupe elemento dimos click y agreguemos funciones o código que se asocien a ese elemento
cardDiv.addEventListener('click', (e) => {

    if(e.target.classList.contains('titulo')){
        console.log('Diste click en título')
    }

    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio')
    }

    if(e.target.classList.contains('card')){
        console.log('Diste click en card')
    }
});