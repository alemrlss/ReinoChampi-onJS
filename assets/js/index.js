/* RELOJ DIGITAL */

const $divReloj = document.querySelector('.reloj')


const funcionaReloj = () => {

let reloj = new Date(),
hora = reloj.getHours(),
minuto = reloj.getMinutes(),
segundo = reloj.getSeconds();


 // Variable meridiano con el valor 'AM' 
 let am = "AM";
 // Si la hora es igual a 0, declaramos la hora con el valor 12 
 if(hora == 0){
     hora = 12;  
 }
 // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM' 
 if(hora > 12) {
     hora = hora - 12;
     am = "PM";
 }

 // Formateamos los ceros '0' del reloj 
 hora = (hora < 10) ? "0" + hora : hora;
 minuto = (minuto < 10) ? "0" + minuto : minuto;
 segundo = (segundo < 10) ? "0" + segundo : segundo;
 
 let hora_final = hora + ":" + minuto + ":" + segundo + " " + am;    
$divReloj.innerHTML = hora_final
setTimeout(() => {
    funcionaReloj()
}, 500);
}
funcionaReloj()
/* FIN RELOJ DIGITAL */


/* ALERTAS DE PERSONAJES ASIDE */
const $alerta_1 = document.querySelector('.alerta-aside-1')
const $alerta_2 = document.querySelector('.alerta-aside-2')
const $alerta_3 = document.querySelector('.alerta-aside-3')
const $alerta_4 = document.querySelector('.alerta-aside-4')

window.addEventListener('mouseover',e=>{
    if(e.target.matches('.img1')) {
       $alerta_1.classList.remove('alert-hidden')
    }
    if(e.target.matches('.img2')) {
        $alerta_2.classList.remove('alert-hidden')
     }
     if(e.target.matches('.img3')) {
        $alerta_3.classList.remove('alert-hidden')
     }
     if(e.target.matches('.img4')) {
        $alerta_4.classList.remove('alert-hidden')
     }
})

window.addEventListener('mouseout',e=>{
    if(e.target.matches('.img1')) {
        $alerta_1.classList.add('alert-hidden')
    }
    if(e.target.matches('.img2')) {
        $alerta_2.classList.add('alert-hidden')
    }
    if(e.target.matches('.img3')) {
        $alerta_3.classList.add('alert-hidden')
    }
    if(e.target.matches('.img4')) {
        $alerta_4.classList.add('alert-hidden')
     }
})

/* FIN ALERTAS DE PERSONAJES */

/* BOTON UP  */

const $scrollbtn = document.querySelector('.botonUp')

window.addEventListener('scroll',e=>{

    if(scrollY > 900) {
        $scrollbtn.classList.remove('hidden-btn-up')
    }
    else { 
        $scrollbtn.classList.add('hidden-btn-up')
    }
 })

window.addEventListener('click',e=>{

  if (e.target.matches('.botonUp')){
    window.scrollTo(0,0)

  }
})

/* FIN BOTON UP. */

/* CONTADOR DE PALABRAS  */

const stats = document.querySelector('.status-ex');
const text = document.getElementById('text');
const char = document.getElementById('char');
const words = document.getElementById('words');
const lines = document.getElementById('lines');
const symbols = document.getElementById('symbols');
function count() {
	if (text.value.length === 0) { // can be easily done using CSS, check CSS for that
		stats.style.display = "none";
		console.log("No hay nada escrito");
	}
	else {
		console.log("empezaste a escribir");
		stats.style.display = "block";
		char.innerHTML = text.value.length + " Caracteres" //char
		//words.innerHTML = text.value.trim().split(/\s+/).length + " Words"; words
		lines.innerHTML = text.value.split("\n").length + " Lineas"; //lines
		symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Symbolos"
	}
}
text.addEventListener("input", count);

/* FIN CONTADOR */

/* BOTON DEL CONTADOR */

const $botonContador = document.querySelector('.botonContador')

const $cuerpoContador = document.querySelector('.cuerpo')
const $contenedorContador = document.querySelector('.contenedor')
const $textareaContador = document.querySelector('#text')


window.addEventListener('click',(e) => {
    if(e.target.matches('.botonContador') || e.target.matches('.img-contador')) {
        $cuerpoContador.classList.remove('hiddenContador')
        $contenedorContador.classList.remove('hiddenContador')
        $textareaContador.value = ''
        char.innerHTML = "0 Caracteres" //char
		lines.innerHTML = "0 Lineas" //lines
		symbols.innerHTML = "0 Symbolos"
    }
    if(e.target.matches('.cierraContador')) {
        $cuerpoContador.classList.add('hiddenContador')
        $contenedorContador.classList.add('hiddenContador') 
    }
})



/* FIN BOTON DEL CONTADOR */


/* CARRUSEL */

const $flecha_iz = document.querySelector('.flechaDerecha')
const $flecha_der = document.querySelector('.flechaIzquierda')
const $item1 = document.querySelector('.item-1')
const $item2 = document.querySelector('.item-2')
const $item3 = document.querySelector('.item-3')
const $item4 = document.querySelector('.item-4')
const $item5 = document.querySelector('.item-5')
const $item6 = document.querySelector('.item-6')
const $item7 = document.querySelector('.item-7')
const $item8 = document.querySelector('.item-8')


window.addEventListener('click',e=>{

    if (e.target.matches('.derecha')) {
        if ($item1.classList.contains('hidden') === false) {
            $item1.classList.add('hidden')
            $item2.classList.remove('hidden')
        } else if ($item2.classList.contains('hidden') === false) {
            $item2.classList.add('hidden')
            $item3.classList.remove('hidden')
        } else if ($item3.classList.contains('hidden') === false) { 
            $item3.classList.add('hidden')
            $item4.classList.remove('hidden')
        }  else if ($item4.classList.contains('hidden') === false) { 
            $item4.classList.add('hidden')
            $item5.classList.remove('hidden')
        }  else if ($item5.classList.contains('hidden') === false) { 
            $item5.classList.add('hidden')
            $item6.classList.remove('hidden')
        }  else if ($item6.classList.contains('hidden') === false) { 
            $item6.classList.add('hidden')
            $item7.classList.remove('hidden')
        }  else if ($item7.classList.contains('hidden') === false) { 
            $item7.classList.add('hidden')
            $item8.classList.remove('hidden')
        }  else if ($item8.classList.contains('hidden') === false) { 
            $item8.classList.add('hidden')
            $item1.classList.remove('hidden')
        }    
    }

    if (e.target.matches('.izquierda')) {
        if ($item8.classList.contains('hidden') === false) {
            $item8.classList.add('hidden')
            $item7.classList.remove('hidden')
        } else if ($item7.classList.contains('hidden') === false) {
            $item7.classList.add('hidden')
            $item6.classList.remove('hidden')
        } else if ($item6.classList.contains('hidden') === false) { 
            $item6.classList.add('hidden')
            $item5.classList.remove('hidden')
        } else if ($item5.classList.contains('hidden') === false) { 
            $item5.classList.add('hidden')
            $item4.classList.remove('hidden')
        } else if ($item4.classList.contains('hidden') === false) { 
            $item4.classList.add('hidden')
            $item3.classList.remove('hidden')
        } else if ($item3.classList.contains('hidden') === false) { 
            $item3.classList.add('hidden')
            $item2.classList.remove('hidden')
        } else if ($item2.classList.contains('hidden') === false) { 
            $item2.classList.add('hidden')
            $item1.classList.remove('hidden')
        } else if ($item1.classList.contains('hidden') === false) { 
            $item1.classList.add('hidden')
            $item8.classList.remove('hidden')
        } 

    }
})


setInterval(() => {
    if ($item1.classList.contains('hidden') === false) {
        $item1.classList.add('hidden')
        $item2.classList.remove('hidden')
    } else if ($item2.classList.contains('hidden') === false) {
        $item2.classList.add('hidden')
        $item3.classList.remove('hidden')
    } else if ($item3.classList.contains('hidden') === false) { 
        $item3.classList.add('hidden')
        $item4.classList.remove('hidden')
    }  else if ($item4.classList.contains('hidden') === false) { 
        $item4.classList.add('hidden')
        $item5.classList.remove('hidden')
    }  else if ($item5.classList.contains('hidden') === false) { 
        $item5.classList.add('hidden')
        $item6.classList.remove('hidden')
    }  else if ($item6.classList.contains('hidden') === false) { 
        $item6.classList.add('hidden')
        $item7.classList.remove('hidden')
    }  else if ($item7.classList.contains('hidden') === false) { 
        $item7.classList.add('hidden')
        $item8.classList.remove('hidden')
    }  else if ($item8.classList.contains('hidden') === false) { 
        $item8.classList.add('hidden')
        $item1.classList.remove('hidden')
    }

}, 3000);
