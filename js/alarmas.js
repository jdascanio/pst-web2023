fetch('../assets/alarmas.json')
    .then((res) => res.json())
    .then((datos) => {
        let orientacion = 'row'
        const seccion = document.getElementById('seccion-productos')       
        
        let autos = datos[0].auto
        autos.forEach(item => {
            let valSlider = 1
            let producto = document.createElement('div')
            let imagenes = document.createElement('div')
            let listado = document.createElement('ul')
            imagenes.classList = 'swiffy-slider slider-item-nogap slider-nav-chevron slider-nav-autoplay'
            listado.classList = 'slider-container slide-cont'
            
            for (let n of item.icons) {
                let itemLista = document.createElement('li')
                itemLista.innerHTML = `
                    <div id=""slide${valSlider} class="slide">
                    <img src=${item.icons.imagen} alt="icono">
                    <p>Sistema anticlonaje</p>
                    </div>
                    `
                listado.append(itemLista)
                valSlider++
            }
            imagenes.append(listado)
            console.log(imagenes)
        })
    }
    )