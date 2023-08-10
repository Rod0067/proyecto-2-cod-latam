let elementosAcordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i< elementosAcordeon.length; i++){
    elementosAcordeon[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.display=="block"){
            panel.style.display="none";
        } else  {
            panel.style.display="block";
        }
    });
}

const nav= document.querySelector("#nav");
const abrir= document.querySelector("#abrir");
const cerrar=document.querySelector("#cerrar");

abrir.addEventListener("click",()=> {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
    nav.classList.remove("visible");
})

const btnToggle = document.querySelector('#toggle');
btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnToggle.classList.toggle('active');
})