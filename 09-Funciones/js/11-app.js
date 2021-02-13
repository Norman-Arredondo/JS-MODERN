/**Ventajas de los Arrow Functions*/

/** */

const aprendiendo = function(tecnologia, tegnologia2) { //Argumento en el parentesis
    console.log(`Aprendiendo ${tecnologia} y ${tegnologia2}`);
}
aprendiendo('JavaScript', 'Node.js');//Argumento

/**function se remplaza por => del lado derecho del los ()
 * Cuando sólo es una función con una linea, no requiere las llaves 
 * Cuando tienen una ola línea dan por implicito que hay un return 
 * Cuando le pasas un sólo parametro los parentesis son opcionales
 */
const aprendiendo2 = (tecnologia, tegnologia2) => `Aprendiendo ${tecnologia} y ${tegnologia2}`;

console.log(aprendiendo2('JavaScript2', 'Node.js2'));
