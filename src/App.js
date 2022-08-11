import './App.css';
import img from '../src/images/logo.png';
import home from '../src/images/home.png';
import work from '../src/images/work.jpg';
import previdencia from '../src/images/previdencia.jpg';
import civil from '../src/images/civil.jpg';
import instagram from '../src/images/instagram.png';
import facebook from '../src/images/facebook.png';
import linkedin from '../src/images/linkedin.jpg';

function App() {
  return (
    <div className="App">
    <header class="header">
    
        <a href="#" class="logo">
          <img src={img}/>
        </a>
    
        <nav class="navbar">
            <a href="#home">home</a>
            <a href="#about">Sobre</a>
            <a href="#atuacao">Atuação</a>
            <a href="#menu">Redes Sociais</a>
            <a href="#contact">Contato</a>
        </nav>
    
        <div class="icons">
            <div class="fas fa-search" id="search-btn"></div>
            <div class="fas fa-shopping-cart" id="cart-btn"></div>
            <div class="fas fa-bars" id="menu-btn"></div>
        </div>
    
    </header>
  <section class="home" id="home">

    <div class="content">
        <h3>Advocacia Personalizada</h3>
        <p>O Escritório de advocacia Douglas Marcelo Maciel foi fundado em Julho de 2022, com o intuito de ajudar de uma forma transparente os seus clientes.</p>
        <a href="#" class="btn">Entre em contato</a>
    </div>

</section>

<section class="about" id="about">

<h1 class="heading"> <span>Sobre</span> nós </h1>

<div class="row">

    <div class="image">
        <img src={home}/>
    </div>

    <div class="content">
        <h3>Por que escolher nosso escritório?</h3>
        <p>Sou formado em letras pela universidade Unisinos e formado em Direito pela Universidade de Caxias do Sul,</p>
        <p>....</p>
    </div>

</div>

</section>

<section class="about" id="atuacao">

<h1 class="heading"> <span>Áreas de</span> atuação </h1>

<div class="row">

    <div class="image">
        <img src={work}/>
    </div>

    <div class="content">
        <h3>Direito Trabalhista</h3>
        <p>Direito do trabalho é o ramo jurídico que estuda as relações de trabalho. Esse direito é composto de conjuntos de normas, princípios e outras fontes jurídicas que regem as relações de trabalho, regulamentando a condição jurídica dos trabalhadores.</p>
    </div>

</div>

</section>

<section class="about" id="about">

<div class="row">

    <div class="image">
        <img src={previdencia}/>
    </div>

    <div class="content">
        <h3>Direito Previdenciário</h3>
        <p>O direito previdenciário é um ramo do direito público surgido da conquista dos direitos sociais no fim do século XIX e início do século XX. Seu objetivo é o estudo e a regulamentação do instituto seguridade social.</p>
    </div>

</div>

</section>

<section class="about" id="about">

<div class="row">

    <div class="image">
        <img src={civil}/>
    </div>

    <div class="content">
        <h3>Direito Civil</h3>
        <p>O Direito Civil é o ramo do direito privado que trata das normas que regulam os direitos e obrigações das pessoas físicas e jurídicas nas suas relações patrimoniais, familiares e obrigacionais.</p>
    </div>

</div>

</section>

<section class="menu" id="menu">

<h1 class="heading"> Nossas<span> Redes Sociais</span> </h1>

<div class="box-container">

    <div class="box">
        <a className='footer_item_link' target="_blank" href='https://www.instagram.com/douglasmarcelomaciel/'>
        <img src={instagram}/>
      </a>
        <h3>Instagram</h3>
    </div>

    <div class="box">
        <a className='footer_item_link' target="_blank" href='https://www.facebook.com/douglasmarcelo.maciel'>
        <img src={facebook}/>
      </a>
        <h3>Facebook</h3>
    </div>

    <div class="box">
        <a className='footer_item_link' target="_blank" href='https://github.com/OJeanMaciel'>
        <img src={linkedin}/>
      </a>
        <h3>Linkedin</h3>
    </div>

</div>

</section>


<section class="footer">

<div class="links">
    <a href="#">home</a>
    <a href="#">sobre</a>
    <a href="#">Atuação</a>
    <a href="#">Redes Sociais</a>
    <a href="#">Contato</a>
</div>

</section>

    </div>
  );
}

export default App;
