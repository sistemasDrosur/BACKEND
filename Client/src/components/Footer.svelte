<script>
</script>

<footer class="footer">
  <div class="container-footer">
    <div class="box-footer">
      <div class="logo">
        <img src="http://localhost:3000/static/logo.png" alt="logo" />
      </div>
      <div class="terms">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit
          veritatis culpa architecto quasi consequuntur alias dolor est quo
          magni porro deserunt, soluta error perspiciatis, sequi molestias
          beatae qui earum.
        </p>
      </div>
    </div>
    <div class="box-footer">
      <h2>Soluciones:</h2>
      <a href="/#">Acerca de Trabajos</a>
      <a href="/#">Servicios</a>
      <a href="/#">Procesos</a>
      <a href="/#">Servicios</a>
    </div>
    <div class="box-footer">
      <h2>Redes Sociales:</h2>
      <a href="/#"> <i class="fa-brands fa-facebook" /></a>
      <a href="/#"><i class="fa-brands fa-youtube" /></a>
      <a href="/#"><i class="fa-brands fa-twitter" /></a>
      <a href="/#"><i class="fa-brands fa-instagram" /></a>
    </div>
  </div>
  <div class="box-copyright">
    <hr />
    <p>Todos los derechos reservados © 2022 <b>Drosur</b></p>
  </div>
</footer>

<style>
  .footer {
    width: 100%;
    padding: 50px 0px;
    background-color: #dddd;
    -webkit-mask-image: url("http://localhost:3000/static/background-footer.svg");
    mask-image: url("http://localhost:3000/static/background-footer.svg");
    -webkit-mask-size: cover;
    mask-size: cover;
  }

  .box-footer .logo img {
    width: 180px;
  }

  .box-footer .terms {
    max-width: 350px;
    margin-top: 20px;
    font-weight: 500;
    color: #7a7a7a;
    font-size: 18px;
  }

  .container-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    margin-top: 100px;
  }

  .box-footer {
    display: flex;
    flex-direction: column;
    padding: 40px;
  }

  .box-footer h2 {
    margin-bottom: 30px;
    color: #343434;
    font-weight: 700;
  }

  .box-footer a {
    margin-top: 10px;
    color: #7a7a7a;
    font-weight: 600;
  }

  .box-footer a:hover {
    opacity: 0.8;
  }

  .box-footer a .fa-brands {
    font-size: 20px;
  }

  .box-copyright {
    max-width: 1200px;
    margin: auto;
    text-align: center;
    padding: 0px 40px;
  }

  .box-copyright p {
    margin-top: 20px;
    color: #7a7a7a;
  }

  .box-copyright hr {
    border: none;
    height: 1px;
    background-color: #7a7a7a;
  }
</style>
