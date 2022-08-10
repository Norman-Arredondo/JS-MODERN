/**Eventos al dar scroll con el mouse */

window.addEventListener('scroll', () => {
    //console.log('scrolling') //se ejecuta varias veces

    /*const scrollPX = window.scrollY
    console.log(scrollPX)
    */

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion)

    if (ubicacion.top < 784) {
        console.log('El elelemto ya está visible')
    } else {
        console.log('Aún no, da más scroll')
    }

})