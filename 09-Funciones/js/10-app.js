/**Arrow Functions*/

/** */

const aprendiendo = function() {
    console.log(`Aprendiendo JavaScript`);
}

/**function se remplaza por => del lado derecho del los ()
 * Cuando sólo es una función con una linea, no requiere las llaves 
 * Cuando tienen una ola línea dan por implicito que hay un return 
 */
const aprendiendo2 = () => `Aprendiendo JavaScript2`;

console.log(aprendiendo2());
