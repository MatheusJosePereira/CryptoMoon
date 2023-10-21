import Style from '../CSS/NavbarApp.module.css';
import logo from '../img/CryptoMoon.png';


//importação de tudo do react
import * as React from 'react';

//React-boostrap Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//React-boostrap botão
import Button from 'react-bootstrap/Button';

//Estilo
import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarApp() {
    return (
      //navbar começo  
      <Navbar expand="lg" className={Style.NavCorpo}>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} className={Style.logo}/></Navbar.Brand>
          <Navbar.Toggle className={Style.Hamburguer}/>
          <Navbar.Collapse>
            <Nav className={Style.nav}>
              <Nav.Link className={Style.linknav} href="#link"><p className={Style.linknav}>Home</p></Nav.Link>
              <Nav.Link className={Style.linknav} href="#link"><p className={Style.linknav}>Comprar Criptos</p></Nav.Link>
              <Nav.Link className={Style.linknav} href="#link"><p className={Style.linknav}>Aprender</p></Nav.Link>
              <Nav.Link className={Style.linknav} href="#link"><p className={Style.linknav}>Quem Somos</p></Nav.Link>
              <Nav.Link className={Style.linknav} href="#link"><p className={Style.linknav}>Suporte</p></Nav.Link>
              <div className={Style.ContainerButtonsNav}>
              
              {/*Botões Navbar*/}
              <Button variant="primary" className={Style.ButtonNav}>Criar Conta</Button>{' '}
              <Button variant="primary" className={Style.ButtonNa}>Entrar</Button>{' '}
              </div>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      //navbar final



    );
  
}


//exportação do componente
export default NavbarApp