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
		char.innerHTML = text.value.length + " Caracteres<br>" //char
		//words.innerHTML = text.value.trim().split(/\s+/).length + " Words"; words
		lines.innerHTML = text.value.split("\n").length + " Lineas<br>"; //lines
		symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Symbolos"
	}
}
text.addEventListener("input", count);

/* FIN CONTADOR */

const $navbar = document.querySelector('.navbar')

window.addEventListener('scroll',e=>{

    if(scrollY > 10) {
        $navbar.classList.add('navbar-fix')
        
    }
    else { 
        $navbar.classList.remove('navbar-fix')
    }
 })