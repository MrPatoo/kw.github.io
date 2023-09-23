
/*menu*/
document. addEventListener ( 'DOMContentLoaded', function(){
    
    const contenedorMenu =document.getElementById("MenuK")
    const menuHTML = GenerarMenu();
    
    contenedorMenu.innerHTML= menuHTML;
})