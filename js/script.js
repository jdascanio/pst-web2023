let alarmMenu = document.getElementById('alarm')
alarmMenu.addEventListener('click', () => {
    let bannerchk = document.getElementById('banner');
    if (bannerchk.classList.contains('alarma')) {
        bannerchk.classList.remove('visible', 'alarma')
    }
    else {
        let elemento = document.createElement('div')

        elemento.classList = 'bannerDinamico'
        elemento.innerHTML = `<div class="banAlmLeft">
                            <h2>Alarmas</h2>
                        </div>
                        <div class="banAlmRight" id="banAlmRight">
                            <ul class="listProducts">
                                <li class="listItems" id="item1"> Alarma de Auto <i class="fa fa-chevron-right "></i></li>
                                <li class="listItems" id="item2">Alarma de Moto <i class="fa fa-chevron-right"></i></li>
                                <li><a href="/comercios.html">Donde Instalar</a></li>
                            </ul>
                        </div>
                        <div class="itemList1 oculto" id="itemList1">
                            <ul class="lista">
                                <li class="prodMenuDetail"><a href="productos/alarma-px360.html"><img class="imgSmallMenu" src="../img/alarmas/PX360-Starter.webp" alt="alarma PX360" /></a><a href="../productos/alarma-px360.html">PX360 Starter</a></li>
                                <li class="prodMenuDetail"><a href="productos/alarma-fx360.html"><img class="imgSmallMenu" src="../img/alarmas/fx360dpn.webp" alt="alarma FX360" /></a><a href="../productos/alarma-fx360.html">FX360 DPN</a></li>
                                <li class="prodMenuDetail"><a href="productos/alarma-keyless360-volumetrica.html"><img class="imgSmallMenu" src="../img/alarmas/kl360us.webp" alt="alarma keyless 360" /></a><a href="../productos/alarma-keyless360-volumetrica.html">Keyless 360 US</a></li>
                                <li class="masMenuDetail"><a href="../alarmas.html"><i class="fa-solid fa-circle-plus"></i></a><p>Ver Todas</p></li>
                            </ul>
                        </div>
                        <div class="motoList oculto" id="motoList">
                            <ul class="lista">
                                <li class="prodMenuDetail"><a href="productos/alarma-moto-duoblock-px350.html"><img class="imgSmallMenu" src="../img/alarmas/dbpx350g8.webp" alt="alarma PX350" /></a><a href="../productos/alarma-moto-duoblock-px350.html">Duoblock PX350</a></li>
                                <li class="prodMenuDetail"><a href="productos/alarma-moto-duoblock-fx350.html"><img class="imgSmallMenu" src="../img/alarmas/dbfx350g8.webp" alt="alarma FX350" /></a><a href="../productos/alarma-moto-duoblock-fx350.html">Duoblock FX350</a></li>
                                <li class="prodMenuDetail"><a href="productos/alarma-moto-duoblock-pro350.html"><img class="imgSmallMenu" src="../img/alarmas/dbpro350g8.webp" alt="alarma PRO350" /></a><a href="../productos/alarma-moto-duoblock-pro350.html">Duoblock PX350</a></li>
                                <li class="masMenuDetail"><a href="../alarmas-moto.html"><i class="fa-solid fa-circle-plus"></i></a><p>Ver Todas</p></li>
                            </ul>
                        </div>`

        let banner = document.getElementById('banner');
        banner.classList.add('alarma')
        if (banner.classList.contains('visible') && banner.classList.contains('alarma')) {
            banner.classList.remove('audio', 'accesorios', 'residencial')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
        } else if (!banner.classList.contains('visible') && banner.classList.contains('alarma')) {
            banner.classList.add('visible')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()

        } else {
            banner.classList.add = 'visible'
            banner.classList.add = 'alarma'
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
        }
    }

})

let audioMenu = document.getElementById('audio')
audioMenu.addEventListener('click', () => {
    let bannerchk = document.getElementById('banner');
    if (bannerchk.classList.contains('audio')) {
        bannerchk.classList.remove('visible', 'audio')
    }
    else {
        let elemento = document.createElement('div')

        elemento.classList = 'bannerDinamico'
        elemento.innerHTML = `<div class="banAudioLeft">
                            <h2>Audio</h2>
                        </div>
                        <div class="banAlmRight" id="banAlmRight">
                            <ul class="listProducts">
                                <li class="listItems" id="item1">Central Multimedia<i class="fa fa-chevron-right"></i></li>
                                <li class="listItems" id="item2">Pantalla retráctil<i class="fa fa-chevron-right"></i></li>
                                <li class="listItems" id="item3">MP3 Player<i class="fa fa-chevron-right"></i></li>
                                <li class="listItems" id="item4">Parlantes<i class="fa fa-chevron-right"></i></li>
                                <li><a href="/comercios.html">Donde Instalar</a></li>
                            </ul>
                        </div>
                        <div class="itemList1 oculto" id="itemList1">
                            <ul class="lista">
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp9010.html"><img class="imgSmallMenu" src="../img/audio/sp9010.webp" alt="SP9010" /></a><a href="../productos/estereo-para-auto-sp9010.html">SP9010</a></li>
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp9090.html"><img class="imgSmallMenu" src="../img/audio/sp9090.webp" alt="SP9090" /></a><a href="../productos/estereo-para-auto-sp9090.html">SP9090</a></li>
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp8340.html"><img class="imgSmallMenu" src="../img/audio/sp8340.webp" alt="SP8340" /></a><a href="../productos/estereo-para-auto-sp8340.html">SP8340</a></li>
                                <li class="masMenuDetail"><a href="../audio.html"><i class="fa-solid fa-circle-plus"></i></a><p>Ver todos</p></li>
                            </ul>
                        </div>
                        <div class="motoList oculto" id="motoList">
                            <ul class="lista">
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp6730.html"><img class="imgSmallMenu" src="../img/audio/sp6730.webp" alt="SP6730" /></a><a href="../productos/estereo-para-auto-sp6730.html">SP6730</a></li>
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp6330.html"><img class="imgSmallMenu" src="../img/audio/sp6330.webp" alt="SP6330" /></a><a href="../productos/estereo-para-auto-sp6330.html">SP6330</a></li>                                
                            </ul>
                        </div>
                        <div class="itemList3 oculto" id="itemList3">
                            <ul class="lista">
                            <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp2230.html"><img class="imgSmallMenu" src="../img/audio/sp2230.webp" alt="SP2230" /></a><a href="../productos/estereo-para-auto-sp2230.html">SP2230</a></li>
                            <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp2240.html"><img class="imgSmallMenu" src="../img/audio/sp2240.webp" alt="SP2240" /></a><a href="../productos/estereo-para-auto-sp2240.html">SP2240</a></li>
                            <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp2250.html"><img class="imgSmallMenu" src="../img/audio/sp2250.webp" alt="SP2250" /></a><a href="../productos/estereo-para-auto-sp2250.html">SP2250</a></li>
                            </ul>
                        </div>
                        <div class="itemList4 oculto" id="itemList4">
                            <ul class="lista">
                            <li class="prodMenuDetail"><a href="productos/parlante-4-pulgadas-atp4030.html"><img class="imgSmallMenu" src="../img/audio/4-pulgadas-atp4030.webp" alt="parlante 4 pulgadas" /></a><a href="../productos/parlante-4-pulgadas-atp4030.html">Parlante 4 pulgadas</a></li>
                            <li class="prodMenuDetail"><a href="productos/parlante-5-pulgadas-atp5030.html"><img class="imgSmallMenu" src="../img/audio/5-pulgadas-atp5030.webp" alt="parlante 5 pulgadas" /></a><a href="../productos/parlante-5-pulgadas-atp5030.html">Parlante 5 pulgadas</a></li>
                            <li class="prodMenuDetail"><a href="productos/parlante-6-pulgadas-atp6030.html"><img class="imgSmallMenu" src="../img/audio/6-pulgadas-atp6030.webp" alt="parlante 6 pulgadas" /></a><a href="../productos/parlante-6-pulgadas-atp6030.html">Parlante 6 pulgadas</a></li>
                            <li class="prodMenuDetail"><a href="productos/parlante-6x9-pulgadas-acp6940.html"><img class="imgSmallMenu extra" src="../img/audio/6x9-pulgadas-acp6940.webp" alt="Parlante 6x9 pulgadas" /></a><a href="productos/parlante-6x9-pulgadas-acp6940.html">Parlante 6x9 pulgadas</a></li>
                            <li class="masMenuDetail"><a href="../parlantes.html"><i class="fa-solid fa-circle-plus"></i></a><p>Ver Mas</p></li>
                            </ul>
                        </div>`

        let banner = document.getElementById('banner');
        banner.classList.add('audio')
        if (banner.classList.contains('visible') && banner.classList.contains('audio')) {
            banner.classList.remove('alarma', 'accesorios', 'residencial')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()
        } else if (!banner.classList.contains('visible') && banner.classList.contains('audio')) {
            banner.classList.add('visible')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()

        } else {
            banner.classList.add = 'visible'
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()
        }
    }

})

let accMenu = document.getElementById('accesorios')
accMenu.addEventListener('click', () => {
    let bannerchk = document.getElementById('banner');
    if (bannerchk.classList.contains('accesorios')) {
        bannerchk.classList.remove('visible', 'accesorios')
    }
    else {
        let elemento = document.createElement('div')

        elemento.classList = 'bannerDinamico'
        elemento.innerHTML = `<div class="banAccLeft">
                            <h2>Accesorios</h2>
                        </div>
                        <div class="banAlmRight" id="banAlmRight">
                            <ul class="listProducts">
                                <li class="listItems" id="item1">Controles remoto</li>
                                <li class="listItems" id="item2">Módulos</li>
                                <li>Donde Comprar</li>
                            </ul>
                        </div>
                        <div class="itemList1 oculto" id="itemList1">
                            <ul class="lista">
                                <li>PXN32</li>
                                <li>PX42</li>
                                <li>PXN72</li>
                            </ul>
                        </div>
                        <div class="motoList oculto" id="motoList">
                            <ul class="lista">
                                <li>Respuesto</li>
                                <li>Alza Cristales</li>
                                <li>Otros</li>
                            </ul>
                        </div>`

        let banner = document.getElementById('banner');
        banner.classList.add('accesorios')
        if (banner.classList.contains('visible') && banner.classList.contains('accesorios')) {
            banner.classList.remove('alarma', 'audio', 'residencial')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()
        } else if (!banner.classList.contains('visible') && banner.classList.contains('accesorios')) {
            banner.classList.add('visible')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()

        } else {
            banner.classList.add = 'visible'
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()
        }
    }

})

let resMenu = document.getElementById('residencial')
resMenu.addEventListener('click', () => {
    let bannerchk = document.getElementById('banner');
    if (bannerchk.classList.contains('residencial')) {
        bannerchk.classList.remove('visible', 'residencial')
    }
    else {
        let elemento = document.createElement('div')

        elemento.classList = 'bannerDinamico'
        elemento.innerHTML = `<div class="banResLeft">
                            <h2>Residencial</h2>
                        </div>
                        <div class="banAlmRight" id="banAlmRight">
                            <ul class="listProducts">
                                <li class="listItems" id="item1">Central<i class="fa fa-chevron-right"></i></li>
                                <li class="listItems" id="item2">Accesorios<i class="fa fa-chevron-right"></i></li>
                                <li class="listItems" id="item3">Aplicaciones<i class="fa fa-chevron-right"></i></li>
                            </ul>
                        </div>
                        <div class="itemList1 oculto" id="itemList1">
                            <ul class="lista">
                            <li class="prodMenuDetail"><a href="productos/alarma-hm264rf.html"><img class="imgSmallMenu" src="../img/home/HM264RF.webp" alt="HM264RF" /></a><a href="../productos/alarma-hm264rf.html">HM264RF</a></li>
                            <li class="prodMenuDetail"><a href="productos/alarma-hm224rf.html"><img class="imgSmallMenu" src="../img/home/HM224RFN.webp" alt="HM224RFN" /></a><a href="../productos/alarma-hm264rf.html">HM224RFN</a></li>
                            <li class="prodMenuDetail"><a href="productos/teclado-ht101.html"><img class="imgSmallMenu" src="../img/home/teclado-ht101.webp" alt="HT101" /></a><a href="../productos/teclado-ht101.html">Teclado</a></li>
                            </ul>
                        </div>
                        <div class="motoList oculto" id="motoList">
                            <ul class="lista">
                            <li class="prodMenuDetail"><a href="productos/pir-hs222.html"><img class="imgSmallMenu" src="../img/home/pir-hs222.webp" alt="HS222" /></a><a href="../productos/pir-hs222.html">Sensor de movimiento</a></li>
                            <li class="prodMenuDetail"><a href="productos/magnetico-ms121.html"><img class="imgSmallMenu" src="../img/home/magnetico-ms121.webp" alt="MS121" /></a><a href="../productos/magnetico-ms121.html">Sensor Magnético</a></li>
                            <li class="prodMenuDetail"><a href="productos/modulo-comunicador.html"><img class="imgSmallMenu" src="../img/home/HEG264.webp" alt="Módulo comunicador" /></a><a href="../productos/modulo-comunicador.html">Módulos Comunicadores</a></li>
                            <li class="prodMenuDetail"><a href="productos/control-hc47.html"><img class="imgSmallMenu" src="../img/home/control-hc47.webp" alt="Control HC47" /></a><a href="../productos/control-hc47.html">Control HC47</a></li>
                            </ul>
                        </div>
                        <div class="itemList3 oculto" id="itemList3">
                            <ul class="lista">
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp2230.html"><img class="imgSmallMenu" src="../img/audio/sp2230.webp" alt="SP2230" /></a><a href="../productos/estereo-para-auto-sp2230.html">SP2230</a></li>
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp2240.html"><img class="imgSmallMenu" src="../img/audio/sp2240.webp" alt="SP2240" /></a><a href="../productos/estereo-para-auto-sp2240.html">SP2240</a></li>
                                <li class="prodMenuDetail"><a href="productos/estereo-para-auto-sp2250.html"><img class="imgSmallMenu" src="../img/audio/sp2250.webp" alt="SP2250" /></a><a href="../productos/estereo-para-auto-sp2250.html">SP2250</a></li>
                            </ul>
                        </div>`

        let banner = document.getElementById('banner');
        banner.classList.add('residencial')
        if (banner.classList.contains('visible') && banner.classList.contains('residencial')) {
            banner.classList.remove('alarma', 'audio', 'accesorios')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()
        } else if (!banner.classList.contains('visible') && banner.classList.contains('residencial')) {
            banner.classList.add('visible')
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()

        } else {
            banner.classList.add = 'visible'
            banner.innerHTML = ""
            banner.append(elemento)
            cars()
            motos()
            item3()
            item4()
        }
    }

})

// let audioMenu = document.getElementById('audio')
// audioMenu.addEventListener('click', () => {

//     let elemento = document.createElement('div')
//     elemento.classList = 'bannerDinamico'
//     elemento.innerHTML = `<div class="banAlmLeft">
//                             <h2>Alarmas</h2>
//                         </div>
//                         <div class="banAlmRight" id="banAlmRight">
//                             <ul class="listProducts">
//                                 <li class="listItems" id="item1"> Multimedia</li>
//                                 <li class="listItems" id="item2">In dash</li>
//                                 <li>Donde Comprar</li>
//                             </ul>
//                         </div>
//                         <div class="itemList1 oculto" id="itemList1">
//                             <ul class="lista">
//                                 <li>PX360 Starter</li>
//                                 <li>FX360 DPN</li>
//                                 <li>Keyless</li>
//                             </ul>
//                         </div>
//                         <div class="motoList oculto" id="motoList">
//                             <ul class="lista">
//                                 <li>DB PX350 G8</li>
//                                 <li>DB FX350 G8</li>
//                                 <li>DB PRO350 G8</li>
//                             </ul>
//                         </div>`
//     let banner = document.getElementById('banner');
//     if (banner.classList.contains('visible')) {
//         banner.innerHTML = ""
//         banner.append(elemento)
//     } else {
//         let clase = document.getElementById('banner')
//         if (clase.classList.contains('visible')) {        //         clase.classList.remove('visible')
//             clase.classList.remove('visible')
//         } else {
//             clase.classList.add('visible')
//         }
//     }
//     cars()
//     motos()
// })

function cars() {
    let listaItemsUno = document.getElementById('item1')
    listaItemsUno.addEventListener('click', () => {
        let autos = document.querySelector('.itemList1')
        let motos = document.querySelector('.motoList')
        let itemlist3 = document.querySelector('.itemList3')
        let itemlist4 = document.querySelector('.itemList4')
        if (autos.classList.contains('oculto')) {
            console.log(autos.classList.contains('oculto'))
            autos.classList.remove('oculto')
            motos.classList.add('oculto')
            itemlist3.classList.add('oculto')
            itemlist4.classList.add('oculto')
        } else {
            autos.classList.add('oculto')
        }
    })

}

function motos() {
    let listaItemsDos = document.getElementById('item2')
    listaItemsDos.addEventListener('click', () => {
        let motos = document.querySelector('.motoList')
        let autos = document.querySelector('.itemList1')
        let itemlist3 = document.querySelector('.itemList3')
        let itemlist4 = document.querySelector('.itemList4')
        if (motos.classList.contains('oculto')) {
            motos.classList.remove('oculto')
            autos.classList.add('oculto')
            itemlist3.classList.add('oculto')
            itemlist4.classList.add('oculto')
        } else {
            motos.classList.add('oculto')
        }

    })

}

function item3() {
    let listaItemsTres = document.getElementById('item3')
    listaItemsTres.addEventListener('click', () => {
        let itemlist3 = document.querySelector('.itemList3')
        let itemlist4 = document.querySelector('.itemList4')
        let autos = document.querySelector('.itemList1')
        let motos = document.querySelector('.motoList')
        if (itemlist3.classList.contains('oculto')) {
            itemlist3.classList.remove('oculto')
            itemlist4.classList.add('oculto')
            autos.classList.add('oculto')
            motos.classList.add('oculto')
            console.log('btn clicked')
        } else {
            itemlist3.classList.add('oculto')
            console.log('btn oculto clicked')
        }

    })

}

function item4() {
    let listaItemsCuatro = document.getElementById('item4')
    listaItemsCuatro.addEventListener('click', () => {
        let itemlist4 = document.querySelector('.itemList4')
        let itemlist3 = document.querySelector('.itemList3')
        let autos = document.querySelector('.itemList1')
        let motos = document.querySelector('.motoList')
        if (itemlist4.classList.contains('oculto')) {
            itemlist4.classList.remove('oculto')
            itemlist3.classList.add('oculto')
            autos.classList.add('oculto')
            motos.classList.add('oculto')
        } else {
            itemlist4.classList.add('oculto')
        }

    })

}

let cuerpo = document.getElementById('body')
cuerpo.addEventListener('click', () => {
    // let clase_alarma = document.querySelector('.banner-alarma')
    let clase_alarma = document.getElementById('banner')
    let motos = document.querySelector('.motoList')
    let autos = document.querySelector('.carList')
    if (clase_alarma.classList.contains('visible')) {
        clase_alarma.classList = ""
        clase_alarma.classList.add('banner-alarma')
        // clase_alarma.classList.remove('visible')
        // autos.classList.add('oculto')
        // motos.classList.add('oculto')
    }
})




// let alarmas = document.getElementById('alarm')

// alarmas.addEventListener('click', () => {
//     let clase = document.querySelector('.banner-alarma')
//     let motos = document.querySelector('.motoList')
//     let autos = document.querySelector('.carList')
//     let audio = document.querySelector('.banner-audio')

//     if (clase.classList.contains('visible')) {
//         clase.classList.remove('visible')
//         autos.classList.add('oculto')
//         motos.classList.add('oculto')
//     } else {
//         clase.classList.add('visible')
//     }
// }
// )

// let audio = document.getElementById('audio')

// audio.addEventListener('click', () => {
//     let audio = document.querySelector('.banner-audio')
//     let clase = document.querySelector('.banner-alarma')
//     let motos = document.querySelector('.motoList')
//     let autos = document.querySelector('.carList')

//     if (audio.classList.contains('visible')) {
//         audio.classList.remove('visible')
//         clase.classList.remove('visible')
//         autos.classList.add('oculto')
//         motos.classList.add('oculto')
//     } else {
//         audio.classList.add('visible')
//     }
// }
// )




// let listaAlarmasAuto = document.getElementById('car')
// listaAlarmasAuto.addEventListener('click', () => {
//     let autos = document.querySelector('.carList')
//     let motos = document.querySelector('.motoList')
//     if (autos.classList.contains('oculto')) {
//         autos.classList.remove('oculto')
//         motos.classList.add('oculto')
//     } else {
//         autos.classList.add('oculto')
//     }

// })

// let listaAlarmasMoto = document.getElementById('moto')
// listaAlarmasMoto.addEventListener('click', () => {
//     let motos = document.querySelector('.motoList')
//     let autos = document.querySelector('.carList')
//     if (motos.classList.contains('oculto')) {
//         motos.classList.remove('oculto')
//         autos.classList.add('oculto')
//     } else {
//         motos.classList.add('oculto')
//     }

// })