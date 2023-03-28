function valorY() {
    let y = document.documentElement.clientWidth
    return y
}
fetch('../assets/comercios.json')
    .then((res) => res.json())
    .then((data) => {
        let anchor = valorY()
        let tabla = constTabla()
        const mainTable = document.getElementById('listContainer');
        mainTable.innerHTML = ''
        if (anchor > 800) {
            mainTable.append(tabla)
            const seccion = document.getElementById('tbody')
            for (let n of data) {
                let elemento = document.createElement('tr')
                elemento.innerHTML = `
                <td>${n.nombre}<a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a><span id="iconCont"></span></td>
                <td>${n.direccion}</td>
                <td>${n.tel}</td>
                <td><a href="mailto:${n.email}">${n.email}</a></td>
                <td>${n.obs}</td>
                `
                seccion.append(elemento)
                if (n.autos == "si"){
                    iconoAuto()
                }
                if (n.motos == "si"){
                    iconoMoto()
                }
            }
        
        } else {
            let disclaimer = document.createElement('p')
            disclaimer.classList = 'comAsist'
            disclaimer.innerText = '*El presente listado corresponde a comercios los cuales Pósitron tiene conocimiento que trabajan asiduamente la marca. Los mismos no son comercios oficiales, autorizados y/o sucursales, ya que la marca no posee dicho tipo de comercios'
            mainTable.append(disclaimer)
            let titulo = document.createElement('h2')
            titulo.classList = 'comAsist'
            titulo.innerText = 'COMERCIOS INSTALADORES'
            mainTable.append(titulo)
            for (let n of data) {
                let elemento = document.createElement('div')
                elemento.classList = "distTabla"
                elemento.innerHTML = `                    
                    <h4>${n.nombre}</h4>
                    <p><a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i>${n.direccion}</a></p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i>${n.tel}</p>
                    <p><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:${n.email}">${n.email}</a></p>
                    `
                mainTable.append(elemento)
            }
        }

        window.addEventListener('resize', () => {
            let ancho = document.documentElement.clientWidth
            let tabla = constTabla()
            const mainTable = document.getElementById('listContainer');
            mainTable.innerHTML = ''
            if (ancho > 800) {
                mainTable.append(tabla)
                const seccion = document.getElementById('tbody')
                for (let n of data) {
                    let elemento = document.createElement('tr')
                    elemento.innerHTML = `
                    <td>${n.nombre} <a href="http://www.google.com/maps/place/${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
                    <td>${n.direccion}</td>
                    <td>${n.tel}</td>
                    <td><a href="mailto:${n.email}">${n.email}</a></td>
                    <td>${n.obs}</td>
                    `
                    seccion.append(elemento)
                }

            } else {
                let disclaimer = document.createElement('p')
                disclaimer.classList = 'comAsist'
                disclaimer.innerText = '*El presente listado corresponde a comercios los cuales Pósitron tiene conocimiento que trabajan asiduamente la marca. Los mismos no son comercios oficiales, autorizados y/o sucursales, ya que la marca no posee dicho tipo de comercios'
                mainTable.append(disclaimer)
                let titulo = document.createElement('h2')
                titulo.classList = 'comAsist'
                titulo.innerText = 'COMERCIOS INSTALADORES'
                mainTable.append(titulo)
                for (let n of data) {
                    let elemento = document.createElement('div')
                    elemento.classList = "distTabla"
                    elemento.innerHTML = `
                    <h4>${n.nombre}</h4>
                    <p><a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i>${n.direccion}</a></p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i>${n.tel}</p>
                    <p><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:${n.email}">${n.email}</a></p>
                    `
                    mainTable.append(elemento)
                }
            }

        })
    })

function constTabla() {
    let tabla = document.createElement('table')
    tabla.classList = 'comTable'
    tabla.innerHTML = `<thead>
                        <tr>
                            <th colspan="5" class="comAsist"><p>*El presente listado corresponde a comercios los cuales Pósitron tiene conocimiento que trabajan asiduamente la marca. Los mismos no son comercios oficiales, autorizados y/o sucursales, ya que la marca no posee dicho tipo de comercios</p></th>                            
                        </tr>
                        <tr id="comTitle">
                            <th colspan="2" class="comAsist"><h2>COMERCIOS INSTALADORES</h2></th>                            
                        </tr>
                        <tr>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Observaciones</th>

                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>`
    return (tabla)
}

function iconoAuto(){
    let contenedor = document.getElementById('iconCont')
    let icono = document.createElement('i')
    icono.classList = 'fa-solid fa-car setIconos'
    contenedor.appendChild(icono)
}
function iconoMoto(){
    let contenedor = document.getElementById('iconCont')
    let icono = document.createElement('i')
    icono.classList = 'fa-solid fa-motorcycle setIconos'
    contenedor.appendChild(icono)
}

