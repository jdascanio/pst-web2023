function valorY() {
    let y = document.documentElement.clientWidth
    return y
}
fetch('../assets/comercios.json')
    .then((res) => res.json())
    .then((comercios) => {
        const data = comercios.sort((a,b) => a.prov.localeCompare(b.prov))
        console.log(data)
        let anchor = valorY()
        let tabla = constTabla()
        let mainTable = document.getElementById('listContainer');
        if (anchor > 800) {
            mainTable.innerHTML = ''
            mainTable.append(tabla)
            const iconCar = document.getElementById('icono-auto')
            const iconMoto = document.getElementById('icono-moto')
            const iconCasa = document.getElementById('icono-casa')
            const iconAudio = document.getElementById('icono-audio')
            const iconAcc = document.getElementById('icono-acc')
            const iconRep = document.getElementById('icono-rep')
            const seccion = document.getElementById('tbody')
            for (let n of data) {
                let elemento = document.createElement('tr')
                elemento.innerHTML = `
                <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
                <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
                <td>${n.tel}</td>
                <td><a href="mailto:${n.email}">${n.email}</a></td>
                <td>${n.obs}</td>
                <td>${n.prov}</td>
                `
                seccion.append(elemento)
                if (n.autos == "si") {
                    iconoAuto(n.id)
                }
                if (n.motos == "si") {
                    iconoMoto(n.id)
                }
                if (n.acc == "si") {
                    iconoAcc(n.id)
                }
                if (n.home == "si") {
                    iconoHome(n.id)
                }
                if (n.audio == "si") {
                    iconoAudio(n.id)
                }
                if (n.rev == "si") {
                    iconoRev(n.id)
                }
            }
            filtroIconos(data, seccion, iconCar, iconAudio, iconMoto, iconCasa, iconAcc, iconRep)


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
                    <h4>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></h4>
                    <p><a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i>${n.direccion}</a></p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i>${n.tel}</p>
                    <p><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:${n.email}">${n.email}</a></p>
                    `
                mainTable.append(elemento)
                
                if (n.autos == "si") {                    
                    iconoAuto(n.id)
                }
                if (n.motos == "si") {
                    iconoMoto(n.id)
                }
                if (n.acc == "si") {
                    iconoAcc(n.id)
                }
                if (n.home == "si") {
                    iconoHome(n.id)
                }
                if (n.audio == "si") {
                    iconoAudio(n.id)
                }
                if (n.rev == "si") {
                    iconoRev(n.id)
                }
            }
        }

        window.addEventListener('resize', () => {
            let ancho = document.documentElement.clientWidth
            let tabla = constTabla()
            const mainTable = document.getElementById('listContainer');
            mainTable.innerHTML = ''
            if (ancho > 800) {
                mainTable.append(tabla)
                const iconCar = document.getElementById('icono-auto')
                const iconMoto = document.getElementById('icono-moto')
                const iconCasa = document.getElementById('icono-casa')
                const iconAudio = document.getElementById('icono-audio')
                const iconAcc = document.getElementById('icono-acc')
                const iconRep = document.getElementById('icono-rep')
                const seccion = document.getElementById('tbody')
                for (let n of data) {
                    let elemento = document.createElement('tr')
                    elemento.innerHTML = `
                    <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
                <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
                <td>${n.tel}</td>
                <td><a href="mailto:${n.email}">${n.email}</a></td>
                <td>${n.obs}</td>
                <td>${n.prov}</td>
                    `
                    seccion.append(elemento)
                    if (n.autos == "si") {
                        iconoAuto(n.id)
                    }
                    if (n.motos == "si") {
                        iconoMoto(n.id)
                    }
                    if (n.acc == "si") {
                        iconoAcc(n.id)
                    }
                    if (n.home == "si") {
                        iconoHome(n.id)
                    }
                    if (n.audio == "si") {
                        iconoAudio(n.id)
                    }
                    if (n.rev == "si") {
                        iconoRev(n.id)
                    }
                }
                filtroIconos(data, seccion, iconCar, iconAudio, iconMoto, iconCasa, iconAcc, iconRep)

            } else {
                let disclaimer = document.createElement('p')
                disclaimer.classList = 'comAsist'
                disclaimer.innerText = '*El presente listado corresponde a comercios los cuales Pósitron tiene conocimiento que trabajan asiduamente la marca. Los mismos no son comercios oficiales, autorizados y/o sucursales, ya que la marca no posee dicho tipo de comercios'
                mainTable.innerHTML = ''
                mainTable.append(disclaimer)
                let titulo = document.createElement('h2')
                titulo.classList = 'comAsist'
                titulo.innerText = 'COMERCIOS INSTALADORES'
                mainTable.append(titulo)
                for (let n of data) {

                    let elemento = document.createElement('div')
                    elemento.classList = "distTabla"
                    elemento.innerHTML = `
                    <h4>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></h4>
                    <p><a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i>${n.direccion}</a></p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i>${n.tel}</p>
                    <p><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:${n.email}">${n.email}</a></p>
                    `
                    mainTable.append(elemento)
                    if (n.autos == "si") {
                        iconoAuto(n.id)
                    }
                    if (n.motos == "si") {
                        iconoMoto(n.id)
                    }
                    if (n.acc == "si") {
                        iconoAcc(n.id)
                    }
                    if (n.home == "si") {
                        iconoHome(n.id)
                    }
                    if (n.audio == "si") {
                        iconoAudio(n.id)
                    }
                    if (n.rev == "si") {
                        iconoRev(n.id)
                    }
                }
            }

        })
    })

function constTabla() {
    let tabla = document.createElement('table')
    tabla.classList = 'comTable'
    tabla.innerHTML = `<thead>
                        <table>
                        <tr>
                            <th colspan="6" class="comAsist"><p>*El presente listado corresponde a comercios los cuales Pósitron tiene conocimiento que trabajan asiduamente la marca. Los mismos no son comercios oficiales, autorizados y/o sucursales, ya que la marca no posee dicho tipo de comercios</p></th>                            
                        </tr>
                        <tr id="comTitle">
                            <td><i id="icono-auto" class="fa-solid fa-car setIconos"></i>Alarmas de Auto</td>                          
                            <td><i id="icono-moto" class="fa-solid fa-motorcycle setIconos blue"></i>Alarmas de Moto</td>                          
                            <td><i id="icono-casa" class="fa-solid fa-house setIconos purple"></i>Alarma Residencial</td>                          
                            <td><i id="icono-audio" class="fa-solid fa-music setIconos orange"></i>Audio Positron</td>                          
                            <td><i id="icono-acc" class="fa-solid fa-gear setIconos green"></i>Venta accesorios</td>                          
                            <td><i id="icono-rep" class="fa-solid fa-wrench setIconos turquoise"></i>Revisiones de productos</td>                          
                        </tr>
                        </thead>                         
                        </table>
                        <thead>                         
                        <tr id="comTitle">
                            <th colspan="2" class="comAsist"><h2>COMERCIOS INSTALADORES</h2></th>                            
                        </tr>
                        <tr>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Observaciones</th>
                            <th>Provincia</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>`
    return (tabla)
}


function filtroIconos(data, seccion, iconCar, iconAudio, iconMoto, iconCasa, iconAcc, iconRep) {
    iconCar.addEventListener('click', () => {
        const newTable = data.filter((comercios) => comercios.autos == 'si')
        seccion.innerHTML = ""

        for (let n of newTable) {
            let elemento = document.createElement('tr')
            elemento.innerHTML = `
            <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
        <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
        <td>${n.tel}</td>
        <td><a href="mailto:${n.email}">${n.email}</a></td>
        <td>${n.obs}</td>
        <td>${n.prov}</td>
            `
            seccion.append(elemento)
            if (n.autos == "si") {
                iconoAuto(n.id)
            }
            if (n.motos == "si") {
                iconoMoto(n.id)
            }
            if (n.acc == "si") {
                iconoAcc(n.id)
            }
            if (n.home == "si") {
                iconoHome(n.id)
            }
            if (n.audio == "si") {
                iconoAudio(n.id)
            }
            if (n.rev == "si") {
                iconoRev(n.id)
            }
        }
    })
    iconAudio.addEventListener('click', () => {
        const newTable = data.filter((comercios) => comercios.audio == 'si')
        seccion.innerHTML = ""

        for (let n of newTable) {
            let elemento = document.createElement('tr')
            elemento.innerHTML = `
            <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
        <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
        <td>${n.tel}</td>
        <td><a href="mailto:${n.email}">${n.email}</a></td>
        <td>${n.obs}</td>
        <td>${n.prov}</td>
            `
            seccion.append(elemento)
            if (n.autos == "si") {
                iconoAuto(n.id)
            }
            if (n.motos == "si") {
                iconoMoto(n.id)
            }
            if (n.acc == "si") {
                iconoAcc(n.id)
            }
            if (n.home == "si") {
                iconoHome(n.id)
            }
            if (n.audio == "si") {
                iconoAudio(n.id)
            }
            if (n.rev == "si") {
                iconoRev(n.id)
            }
        }
    })
    iconMoto.addEventListener('click', () => {
        const newTable = data.filter((comercios) => comercios.motos == 'si')
        seccion.innerHTML = ""

        for (let n of newTable) {
            let elemento = document.createElement('tr')
            elemento.innerHTML = `
            <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
        <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
        <td>${n.tel}</td>
        <td><a href="mailto:${n.email}">${n.email}</a></td>
        <td>${n.obs}</td>
        <td>${n.prov}</td>
            `
            seccion.append(elemento)
            if (n.autos == "si") {
                iconoAuto(n.id)
            }
            if (n.motos == "si") {
                iconoMoto(n.id)
            }
            if (n.acc == "si") {
                iconoAcc(n.id)
            }
            if (n.home == "si") {
                iconoHome(n.id)
            }
            if (n.audio == "si") {
                iconoAudio(n.id)
            }
            if (n.rev == "si") {
                iconoRev(n.id)
            }
        }
    })
    iconCasa.addEventListener('click', () => {
        const newTable = data.filter((comercios) => comercios.home == 'si')
        seccion.innerHTML = ""

        for (let n of newTable) {
            let elemento = document.createElement('tr')
            elemento.innerHTML = `
            <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
        <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
        <td>${n.tel}</td>
        <td><a href="mailto:${n.email}">${n.email}</a></td>
        <td>${n.obs}</td>
        <td>${n.prov}</td>
            `
            seccion.append(elemento)
            if (n.autos == "si") {
                iconoAuto(n.id)
            }
            if (n.motos == "si") {
                iconoMoto(n.id)
            }
            if (n.acc == "si") {
                iconoAcc(n.id)
            }
            if (n.home == "si") {
                iconoHome(n.id)
            }
            if (n.audio == "si") {
                iconoAudio(n.id)
            }
            if (n.rev == "si") {
                iconoRev(n.id)
            }
        }
    })
    iconAcc.addEventListener('click', () => {
        const newTable = data.filter((comercios) => comercios.acc == 'si')
        seccion.innerHTML = ""

        for (let n of newTable) {
            let elemento = document.createElement('tr')
            elemento.innerHTML = `
            <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
        <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
        <td>${n.tel}</td>
        <td><a href="mailto:${n.email}">${n.email}</a></td>
        <td>${n.obs}</td>
        <td>${n.prov}</td>
            `
            seccion.append(elemento)
            if (n.autos == "si") {
                iconoAuto(n.id)
            }
            if (n.motos == "si") {
                iconoMoto(n.id)
            }
            if (n.acc == "si") {
                iconoAcc(n.id)
            }
            if (n.home == "si") {
                iconoHome(n.id)
            }
            if (n.audio == "si") {
                iconoAudio(n.id)
            }
            if (n.rev == "si") {
                iconoRev(n.id)
            }
        }
    })
    iconRep.addEventListener('click', () => {
        const newTable = data.filter((comercios) => comercios.rev == 'si')
        seccion.innerHTML = ""

        for (let n of newTable) {
            let elemento = document.createElement('tr')
            elemento.innerHTML = `
            <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
        <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
        <td>${n.tel}</td>
        <td><a href="mailto:${n.email}">${n.email}</a></td>
        <td>${n.obs}</td>
        <td>${n.prov}</td>
            `
            seccion.append(elemento)
            if (n.autos == "si") {
                iconoAuto(n.id)
            }
            if (n.motos == "si") {
                iconoMoto(n.id)
            }
            if (n.acc == "si") {
                iconoAcc(n.id)
            }
            if (n.home == "si") {
                iconoHome(n.id)
            }
            if (n.audio == "si") {
                iconoAudio(n.id)
            }
            if (n.rev == "si") {
                iconoRev(n.id)
            }
        }
    })
}

// function filtroIconos2 (data,seccion,iconAudio){
//     iconAudio.addEventListener('click', () => {
//         const newTable = data.filter((comercios) => comercios.audio == 'si')
//         seccion.innerHTML = ""

//         for (let n of newTable) {
//             let elemento = document.createElement('tr')
//             elemento.innerHTML = `
//             <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
//         <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
//         <td>${n.tel}</td>
//         <td><a href="mailto:${n.email}">${n.email}</a></td>
//         <td>${n.obs}</td>
//             `
//             seccion.append(elemento)
//             if (n.autos == "si") {
//                 iconoAuto(n.id)
//             }
//             if (n.motos == "si") {
//                 iconoMoto(n.id)
//             }
//             if (n.acc == "si") {
//                 iconoAcc(n.id)
//             }
//             if (n.home == "si") {
//                 iconoHome(n.id)
//             }
//             if (n.audio == "si") {
//                 iconoAudio(n.id)
//             }
//             if (n.rev == "si") {
//                 iconoRev(n.id)
//             }
//         }
//     })
//     // iconAudio.addEventListener('click', () => {
//     //     const newTable = data.filter((comercios) => comercios.audio == 'si')
//     //     seccion.innerHTML = ""

//     //     for (let n of newTable) {
//     //         let elemento = document.createElement('tr')
//     //         elemento.innerHTML = `
//     //         <td>${n.nombre}<br><span class="iconCont" id="iconCont${n.id}"></span></td>
//     //     <td>${n.direccion} <a target="_blank" href="http://www.google.com/maps/search/?api=1&query=${n.lat},${n.lon}" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i></a></td>
//     //     <td>${n.tel}</td>
//     //     <td><a href="mailto:${n.email}">${n.email}</a></td>
//     //     <td>${n.obs}</td>
//     //         `
//     //         seccion.append(elemento)
//     //         if (n.autos == "si") {
//     //             iconoAuto(n.id)
//     //         }
//     //         if (n.motos == "si") {
//     //             iconoMoto(n.id)
//     //         }
//     //         if (n.acc == "si") {
//     //             iconoAcc(n.id)
//     //         }
//     //         if (n.home == "si") {
//     //             iconoHome(n.id)
//     //         }
//     //         if (n.audio == "si") {
//     //             iconoAudio(n.id)
//     //         }
//     //         if (n.rev == "si") {
//     //             iconoRev(n.id)
//     //         }
//     //     }
//     // })
// }

function iconoAuto(id) {
    let idNumber = 'iconCont' + id
    let contenedor = document.getElementById(idNumber)
    let icono = document.createElement('i')
    icono.classList = 'fa-solid fa-car setIconos'
    contenedor.appendChild(icono)
}
function iconoMoto(id) {
    let idNumber = 'iconCont' + id
    let contenedor = document.getElementById(idNumber)
    let icono = document.createElement('i')
    icono.classList = 'fa-solid fa-motorcycle setIconos blue'
    contenedor.appendChild(icono)
}
function iconoAcc(id) {
    let idNumber = 'iconCont' + id
    let contenedor = document.getElementById(idNumber)
    let icono = document.createElement('i')
    icono.innerHTML = `<i class="fa-solid fa-gear setIconos green"></i>`
    contenedor.appendChild(icono)
}
function iconoAudio(id) {
    let idNumber = 'iconCont' + id
    let contenedor = document.getElementById(idNumber)
    let icono = document.createElement('i')
    icono.classList = 'fa-solid fa-music setIconos orange'
    contenedor.appendChild(icono)
}
function iconoHome(id) {
    let idNumber = 'iconCont' + id
    let contenedor = document.getElementById(idNumber)
    let icono = document.createElement('i')
    icono.classList = 'fa-solid fa-house setIconos purple'
    contenedor.appendChild(icono)
}
function iconoRev(id) {
    let idNumber = 'iconCont' + id
    let contenedor = document.getElementById(idNumber)
    let icono = document.createElement('i')
    icono.classList = 'fa-solid fa-wrench setIconos turquoise'
    contenedor.appendChild(icono)
}

