document. addEventListener ( 'DOMContentLoaded', function(){
    
    const contenedorMenu =document.getElementById("FooterK")
    const FooterHTML = GenerarFooter();
    
    contenedorMenu.innerHTML= FooterHTML;
})