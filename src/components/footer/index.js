  
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {

    return (
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Sobre Nosotros</h6>
            <p class="text-justify">Con Dodo <i>vas a poder aprender todo </i> lo que necesitas para ser exitoso con tu inversiones. Ofrecemos cursos iniciales y avanzados en diferentes temáticas. Todos nuestros cursos tienen un período de prueba de 72 horas con reembolso completo. ¡Animate a aprender!</p>
          </div>
        </div>
        <hr>
      </hr>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 Dodo Holdings </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

    );
}

export default Footer;