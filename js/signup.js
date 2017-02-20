function init(){
    var bandera=document.getElementById("bandera");
    var codigopais=document.getElementById("codigo-pais");
    
    var banderaEnlace= localStorage.getItem('srcimg');
    var codigo = localStorage.getItem('phone-code');
    
    bandera.src=banderaEnlace;
    codigopais.textContent=codigo;
}

