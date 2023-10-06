import React, { useState, useRef, useEffect } from 'react'
import "./style.css"
import perfil from '../images/euhelena.jpg'
import email from '../images/icon-email.png'
import github from '../images/icon-github.png'
import linkedin from '../images/icon-linkedin.png'
import codepen from '../images/icon-codepen.png'
import certificados from '../images/icon-cetificados.png'
import sobe from '../images/icon-sobe.png'
import desce from '../images/icon-desce.png'
import sobeTudo from '../images/icon-sobe-tudo.png'
import desceTudo from '../images/icon-desce-tudo.png'
import { Informacoes } from './Informacoes'

export const Perfil = () => {
    const [posicao, setPosicao] = useState(0);
    const [canSubirTudo, setCanSubirTudo] = useState(false);
    const [canDescerTudo, setCanDescerTudo] = useState(true);
    const [numInformacoes, setNumInformacoes] = useState(0);
    const animationInformacoes = useRef(null);
  
    useEffect(() => {
      const num = animationInformacoes.current.childElementCount;
      setNumInformacoes(num);
    }, []);
  
    const handleDesce = () => {
      setPosicao(posicao - 100);
      console.log(posicao);
      if (posicao === 0) {
        setCanDescerTudo(false);
      } else if (posicao === numInformacoes / 2 * -100) {
        setCanSubirTudo(true);
      }
    }
  
    const handleSobe = () => {
      setPosicao(prevPosicao => prevPosicao + 100);
      
      if (posicao == -100) {
        setCanDescerTudo(true)
      } else if (posicao === (numInformacoes -1) * -100) {
        setCanSubirTudo(false)
    }
    }

    const handleDesceTudo = () => {
        setPosicao((numInformacoes -1) * -100)
        setCanSubirTudo(true)
        setCanDescerTudo(false)
    }

    const handleSobeTudo = () => {
        setPosicao(0)
        setCanSubirTudo(false)
        setCanDescerTudo(true)
    }
  
    const posicaoStyle = {
      transform: `translateY(${posicao}vh)`
    }

  return (
    <div className="container">
      <div className="container-perfil">
        <img className="perfil" src={perfil} alt="Minha imagem de perfil" />
        <h1 className="nome">Helena Maia</h1>
        <h2 className="cargo">Desenvolvedora Front-End</h2>
        <button className="curriculo">Baixe meu currículo!</button>
        <div className="icons">
            <a href="mailto:helenaaraujo.dev@gmail.com">
              <img className='icon-img' src={email} alt='Ícone de e-mail'/>
            </a>

            <a href='https://github.com/DevHelena' target='_blank'>
              <img className='icon-img' src={github} alt='Ícone do GitHub' />
            </a>

            <a href='https://www.linkedin.com/in/helena-maia-bb632224a/' target='_blank'>
              <img className='icon-img' src={linkedin} alt='Ícone do LinkedIn'/>
            </a>

            <a href='https://codepen.io/DevHelena/' target='_blank'> 
              <img className='icon-img' src={codepen} alt='Ícone do CodePen' />
            </a>
        </div>
      </div>

      <div className="animation-informacoes" style={posicaoStyle} ref={animationInformacoes}>
        <Informacoes />
      </div>  

      <div className="navegacao">

        {canDescerTudo ? <img className='navegacao-img' src={desceTudo} onClick={handleDesceTudo}/> : <img className='navegacao-img' src={sobe} onClick={handleSobe} />}
        
        {canSubirTudo ? <img className='navegacao-img' src={sobeTudo} onClick={handleSobeTudo}/> : <img className='navegacao-img' src={desce} onClick={handleDesce} />}
      </div> 
    </div>
    )
}
