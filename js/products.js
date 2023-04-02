fetch('../assets/productos.json')
    .then((res) => res.json())
    .then((data) => {
        let pn = document.getElementById('pn')
        let pnProducto = pn.innerText.slice(5)
        let product = data.find((producto) => producto.pn == pnProducto)
        let name = document.getElementById('name')
        let name_b = document.getElementById('name_b')
        let images = document.getElementById('productImages')
        let description = document.getElementById('description')
        let manual = document.getElementById('dwlManual')
        let icons = document.getElementById('iconsProduct')
        let specsList = document.getElementById('specsList')

        let imagen = document.createElement('img')
        imagen.classList = 'productImage'
        imagen.src = `${product.images[0]}`
        imagen.alt = `${ product.name }`
        images.append(imagen)

        name.innerText = `${product.name}`
        description.innerText = `${product.description}`
        
        let linkManual = document.createElement('a')
        linkManual.href = `${product.manual}`
        linkManual.rel = 'noopener noreferrer'
        linkManual.target = '_blank'
        linkManual.innerText = 'Descargar Manual'
        manual.append(linkManual)

        
        let listadoIconos = product.icons
        listadoIconos.forEach((valor) => {
            // let iconos = document.getElementById('iconsProduct')
            let icono = document.createElement('div')
            icono.classList = "svgIconProduct"
            icono.innerHTML = `<img class="iconProductSingle" src=${valor.imagen} alt="icono"/><p>${valor.texto}</p>`
            icons.append(icono)
        });

        name_b.innerText = `${product.name}`

        let specs = product.specs
        specs.forEach((valor) => {
            let caracteristica = document.createElement('li')
            caracteristica.innerText = `${valor}`
            specsList.append(caracteristica)
        })
        
        // <img class="productImage" src="../img/alarmas/fx360dpn.webp" alt="cyber fx360 dpn">


})