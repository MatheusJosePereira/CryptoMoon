
import './App.css';

//Navbar Componente
import NavbarApp from './components/NavbarApp';

//Header componente
import HeaderApp from './components/HeaderApp';

//Sessão celular, segurança,suporte,cotações
import SessaoCelularApp from './components/SessaoCelularApp';

//Sessão investidores, Carrosel, MoonTalk
import SessaoInvestidoresApp from './components/SessaoInvestidoresApp';

//Sessão criptomoedas, carrosel infinito, compras
import SessaoCriptosApp from './components/SessaoCriptosApp';

//Sessão vantagens, velocidade,liquidez,total controle
import SessaoVantagensApp from './components/SessaoVantagensApp';

//Sessão formulário, avaliação, emojis, etapas
import SessaoJornadaApp from './components/SessaoJornadaApp';

//Footer, links, sobre loja, agradecimentos
import FooterApp from './components/FooterApp';


function App() {
  return (
    <div>
      <NavbarApp/>
      <HeaderApp/>
      <SessaoCelularApp/>
      <SessaoInvestidoresApp/>
      <SessaoCriptosApp/>
      <SessaoVantagensApp/>
      <SessaoJornadaApp/>
      <FooterApp/>
    </div>
  );
}

export default App;
