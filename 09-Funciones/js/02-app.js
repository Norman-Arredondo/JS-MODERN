/**Difference between Function Expression and Function Declaration
 * 
 */

//Function Declaration
sumar(); //Puede llamarse antes de declararse

function sumar () {
    console.log(2+2);
}



// Function Expression

const sumar2 = function() {
    console.log(3+3);
}

sumar2(); //Tiene que llamarse la función después de crearla