function valorY() {
    let y = document.documentElement.clientWidth
    return y
}
fetch('../assets/distribuidores.json')
    .then((res) => res.json())
    .then((data) => {
        let anchor = valorY()
        let tabla = constTabla()
        let tabla2 = atencionCliente()
        let tabla3 = atencionCliente2()
        const mainTable = document.getElementById('listContainer');
        mainTable.innerHTML = ''
        if (anchor > 800) {
            mainTable.append(tabla)
            const seccion = document.getElementById('tbody')
            for (let n of data) {
                let elemento = document.createElement('tr')
                elemento.innerHTML = `
                    <td><img class="flag" src="../img/iconos/${n.bandera}" alt="imagen bandera">${n.nombre}</td>
                    <td>${n.telefono}</td>
                    <td><a href="mailto:${n.email}">${n.email}</a></td>
                    `
                seccion.append(elemento)
            }
            mainTable.append(tabla2)

        } else {
            let titulo = document.createElement('h2')
            titulo.classList = 'comAsist'
            titulo.innerText = 'DISTRIBUIDORES'
            mainTable.append(titulo)
            for (let n of data) {
                let elemento = document.createElement('div')
                elemento.classList = "distTabla"
                elemento.innerHTML = `
                    <h4><img class="flag" src="../img/iconos/${n.bandera}" alt="imagen bandera">${n.nombre}</h4>
                    <p>Tel: ${n.telefono}</p>
                    <p>Mail: <a href="mailto:${n.email}">${n.email}</a></p>
                    `
                mainTable.append(elemento)
            }
            mainTable.append(tabla3)
        }

        window.addEventListener('resize', () => {
            let ancho = document.documentElement.clientWidth
            let tabla = constTabla()
            let tabla2 = atencionCliente()
            let tabla3 = atencionCliente2()
            const mainTable = document.getElementById('listContainer');
            mainTable.innerHTML = ''
            if (ancho > 800) {
                mainTable.append(tabla)
                const seccion = document.getElementById('tbody')
                for (let n of data) {
                    let elemento = document.createElement('tr')
                    elemento.innerHTML = `
                    <td><img class="flag" src="../img/iconos/${n.bandera}" alt="imagen bandera">${n.nombre}</td>
                    <td>${n.telefono}</td>
                    <td><a href="mailto:${n.email}">${n.email}</a></td>
                    `
                    seccion.append(elemento)
                }
                mainTable.append(tabla2)

            } else {
                let titulo = document.createElement('h2')
                titulo.classList = 'comAsist'
                titulo.innerText = 'DISTRIBUIDORES'
                mainTable.append(titulo)
                for (let n of data) {
                    let elemento = document.createElement('div')
                    elemento.classList = "distTabla"
                    elemento.innerHTML = `
                    <h4><img class="flag" src="../img/iconos/${n.bandera}" alt="imagen bandera">${n.nombre}</h4>
                    <p>Tel: ${n.telefono}</p>
                    <p>Mail: <a href="mailto:${n.email}">${n.email}</a></p>
                    `
                    mainTable.append(elemento)
                }
                mainTable.append(tabla3)
            }

        })
    })

function constTabla() {
    let tabla = document.createElement('table')
    tabla.classList = 'distTable'
    tabla.innerHTML = `<thead>
                        <tr>
                            <th class="comAsist"><h2>DISTRIBUIDORES</h2></th>
                        </tr>
                        <tr>
                            <th>Distribuidor</th>
                            <th>Teléfono</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>`
    return (tabla)
}



function atencionCliente() {
    let tabla = document.createElement('table')
    tabla.classList = 'distTable'
    tabla.innerHTML = `<thead>
    <tr>
        <th class="comAsist"><h2>ATENCIÓN AL COMERCIO</h2></th>
    </tr>
    <tr>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>email</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Pablo Gonzalez</td>
        <td><a href="https://wa.me/5491165788555">(+54 9 11) 6578-8555</a><i class="fa fa-whatsapp" aria-hidden="true"></i></th>
        <td><a href="mailto:rrgonzalez@pstarg.com.ar">rrgonzalez@pstarg.com.ar</a></td>
    </tr>
    <tr>
        <td>Silvio Canavides</td>
        <td><a href="https://wa.me/5491166258303">(+54 9 11) 6625-8303</a><i class="fa fa-whatsapp" aria-hidden="true"></i></th>
        <td><a href="mailto:scanavides@pstarg.com.ar">scanavides@pstarg.com.ar</a></td>
    </tr>
</tbody>`
    return (tabla)
}
function atencionCliente2() {
    let tabla = document.createElement('div')
    tabla.innerHTML = `
                <h2 class="comAsist">ATENCIÓN AL COMERCIO</h2>
                <div class="distTabla">
                    <h4>Pablo Gonzalez</h4>
                    <p>Tel: <a href="https://wa.me/5491165788555">(+54 9 11) 6578-8555</a><i class="fa fa-whatsapp" aria-hidden="true"></i></p>
                    <p>Mail: <a href="mailto:rrgonzalez@pstarg.com.ar">rrgonzalez@pstarg.com.ar</a></p>
                    </div>
                    <div class="distTabla">
                    <h4>Silvio Canavides</h4>
                    <p>Tel: <a href="https://wa.me/5491166258303">(+54 9 11) 6625-8303</a><i class="fa fa-whatsapp" aria-hidden="true"></i></p>
                    <p>Mail: <a href="mailto:scanavides@pstarg.com.ar">scanavides@pstarg.com.ar</a></p>
                    </div>
                    `
    return (tabla)
}
