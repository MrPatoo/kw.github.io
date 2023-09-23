function GenerarMenu() {
  const PaginasMenu = `
  <header>
  <div class="titulo" background-color: #2d4263;">
  <img class="imagenTitulo" src="img/logo.png" width="200px" alt="">
  <img class="imagenTitulo" src="../img/logo.png"" width="200px" alt="">
  <a href="file:///c%3A/Users/MINEDUCYT/Downloads/King%27s%20Workshop%20aca%20Rodri/index.html">
    <h1 id="tituloid">King's WorkShop</h1>
  </a>
  </div>

  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid" style="background-color: #2d4263;">
      <a class="navbar-brand" href="file:///c%3A/Users/MINEDUCYT/Downloads/King%27s%20Workshop%20aca%20Rodri/index.html" style="color: aliceblue;">
        <img src="file:///c%3A/Users/MINEDUCYT/Downloads/King%27s%20Workshop%20aca%20Rodri/img/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          King's Workshop
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="padding: 1%;">
        <li class="nav-item">
          <a class="navbar-brand" href="file:///c%3A/Users/MINEDUCYT/Downloads/King%27s%20Workshop%20aca%20Rodri/pajes/Tematica.html" style="color: aliceblue;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z"/>
          </svg>
             Tematica
          </a> 
        </li>
        <li class="nav-item">
        <a class="navbar-brand" href="file:///c%3A/Users/MINEDUCYT/Downloads/King%27s%20Workshop%20aca%20Rodri/pajes/Licencias.html" style="color: aliceblue;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
        </svg>
         Licencias
        </a> 
        </li>
        <li class="nav-item">
        <a class="navbar-brand" href="file:///c%3A/Users/MINEDUCYT/Downloads/King%27s%20Workshop%20aca%20Rodri/pajes/Contactos.html#" style="color: aliceblue;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
        </svg>
         Contactos
        </a> 
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="file:///c%3A/Users/MINEDUCYT/Downloads/King%27s%20Workshop%20aca%20Rodri/pajes/Funciones.html" style="color: aliceblue;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
          <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
          </svg>
             Funciones
          </a> 
        </li>
      </ul>
    </div>
  </div>
</nav>
  </header>
    `
  return PaginasMenu;
}
