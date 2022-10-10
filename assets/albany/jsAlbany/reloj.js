const $tiempo = document.querySelector('.tiempo'), 
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() +1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia =('0' + dia).slice(-2);
    mes =('0' + mes).slice(-2);

    let timeString = f.toLocaleTimeString(); //convierte la hora actual en un formato mas entendible

    $tiempo.innerHTML = timeString;

    let semana = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let showSemana = (semana[diaSemana]);

    $fecha.innerHTML = `${dia}/${mes}/${anio} ${showSemana}`
}

//actualiza cada 1 segundo el reloj 
setInterval(() => {
    digitalClock()
}, 1000);