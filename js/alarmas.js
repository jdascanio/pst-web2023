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
            const boton1 = document.createElement('button')
            const boton2 = document.createElement('button')
            boton1.classList = 'slider-nav'
            boton1.type = 'button'
            boton2.classList = 'slider-nav slider-nav-next'
            boton2.type = 'button'
            const botones = document.createElement('div')
            botones.classList = 'product-list-buttons'
            botones.innerHTML = `
            <button class="productButton products-grey red-fade">Mas detalles</button>
            <button class="productButton products-grey green-fade">Comprar</button>
            `


            let productList = document.createElement('div')
            productList.classList = 'productListText'
            imagenes.classList = 'swiffy-slider slider-item-nogap slider-nav-page slider-nav-chevron slider-nav-autoplay'
            imagenes.id = 'carrousel'
            listado.classList = 'slider-container slide-cont'


            for (let n of item.icons) {

                let itemLista = document.createElement('li')
                itemLista.innerHTML = `
                    <div id="slide${valSlider}" class="slide">
                    <img src=${n.imagen} alt="icono">
                    <p>${n.texto}</p>
                    </div>
                    `
                listado.append(itemLista)
                valSlider++
            }
            imagenes.append(listado)
            imagenes.append(boton1)
            imagenes.append(boton2)

            producto.classList = 'productList'
            producto.innerHTML = `
            <div class="productListImage">
            <img src="${item.images}" alt="imagen producto">
            </div>`

            productList.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            `
            productList.append(imagenes)
            productList.append(botones)

            producto.append(productList)
            seccion.append(producto)
        }
        )

    })

