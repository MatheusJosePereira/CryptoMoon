import  React   from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterApp.module.css'
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'




export default function FooterApp(){
    return(
        <div>
            {/* Footer */}
<footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4">

    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><FaFacebook className='facebook'/></a>

      {/* Twitter */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><FaTwitter/></a>

      {/* Google */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><FaGoogle/></a>

      {/* Instagram */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><FaInstagram/></a>

      {/* Linkedin */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><FaLinkedin/></a>
      {/* Github */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#333333'}} href="#!" role="button"><FaGithub/></a>
    </section>
    {/* Section: Social media */}

    <section className="mb-4">
  <p>
  CryptoMoon é uma empresa líder em troca e venda de criptomoedas. Estamos comprometidos em fornecer aos nossos clientes uma plataforma segura e fácil de usar para suas transações de criptomoedas.
  </p>
</section>


    {/* Section: Links */}
    <section className="">
      {/*Grid row*/}
      <div className="row">
        {/*Grid column*/}
        <div className="col-lg-12 col-md-6 mb-4 mb-md-0">
            
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Sobre nós</a>
            </li>
            <li>
              <a href="#!" className="text-white">Serviços</a>
            </li>
            <li>
              <a href="#!" className="text-white">Política de privacidade</a>
            </li>
            <li>
              <a href="#!" className="text-white">Termos e condições</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}

        {/* ... (Repeat the above code for other columns) */}

      </div>
      {/*Grid row*/}
      
    </section>
    {/* Section: Links */}
    
  </div>
  {/* Grid container */}
</footer>
{/* Footer */}

        </div>
    )
}