import React, { useState, useRef, useEffect } from 'react'
import "./style.css"
import perfil from '../images/euhelena.jpg'
import email from '../images/icon-email.png'
import github from '../images/icon-github.png'
import linkedin from '../images/icon-linkedin.png'
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
        <button className="contato">Fale Comigo!</button>
        <div className="icons">
            <a href="mailto:helenaaraujo.dev@gmail.com">
              <img className='icon-img' src={email} alt='Ícone de e-mail'/>
            </a>

            <a href='https://www.google.com/' target='_blank'>
              <img className='icon-img' src={github} alt='Ícone do GitHub' />
            </a>

            <a href='https://www.linkedin.com/in/helena-maia-bb632224a/' target='_blank'>
              <img className='icon-img' src={linkedin} alt='Ícone do LinkedIn'/>
            </a>
        </div>
      </div>

      <div className="animation-informacoes" style={posicaoStyle} ref={animationInformacoes}>
        <Informacoes titulo="Sobre Mim" texto={sobreMim()} />
        <Informacoes titulo="Soft Skills" texto={softSkills()} />
        <Informacoes titulo="Hard Skills" texto={hardSkills()} />
        <Informacoes titulo="Experiência" texto={experiencia()} />
      </div>  

      <div className="navegacao">

        {canDescerTudo ? <img className='navegacao-img' src={desceTudo} onClick={handleDesceTudo}/> : <img className='navegacao-img' src={sobe} onClick={handleSobe} />}
        
        {canSubirTudo ? <img className='navegacao-img' src={sobeTudo} onClick={handleSobeTudo}/> : <img className='navegacao-img' src={desce} onClick={handleDesce} />}
      </div> 
    </div>
    )
}

const sobreMim = () => {
    return (
        <p>
            Olá, é um prazer ter você aqui! 
            <br/><br/>
            Sou a Helena, tenho 18 anos, sou natural do Rio de Janeiro, mas atualmente, chamo Rondônia de lar. Sou uma entusiasta da tecnologia, e minha carreira está focada no desenvolvimento Front-End, onde utilizo <strong>React</strong>, <strong>JavaScript</strong> e <strong>Node.js</strong> para criar interfaces, mas também me aventuro em projetos com <strong>Python</strong>. Estou cursando Análise e Desenvolvimento de Sistemas e trabalhando no Ministério Público do Estado de Rondônia.
            <br/>
            <br/>
            Quando eu tinha 12 anos, meu pai me matriculou em um curso presencial de <i>Web Design</i> onde tive meu primeiro contato com HTML e CSS. No entanto, foi apenas alguns anos mais tarde que realmente despertei um forte interesse pelo mundo da tecnologia. Isso aconteceu em 2020, no início da pandemia, quando eu decidi que era para isso que me dedicaria. Desde então, venho constantemente aprimorando minhas habilidades e conhecimentos, algo que nunca vou parar de fazer. Portanto, gostaria de convidá-lo a me acompanhar nessa jornada!
        </p>
    )
}

const softSkills = () => {
    return (
        <p>
            <strong>Comunicação:</strong> Habilidade essencial para colaborar eficazmente com colegas de equipe e comunicar ideias de forma clara.
            <br/><br/>
            <strong>Trabalho em equipe:</strong> Importante para colaborar harmoniosamente com outros profissionais no desenvolvimento de projetos.
            <br/><br/>
            <strong>Resolução de problemas:</strong> Fundamental para identificar e solucionar desafios técnicos complexos.
            <br/><br/>
            <strong>Adaptabilidade:</strong> Necessária para acompanhar as mudanças tecnológicas constantes e aprender novas habilidades rapidamente.
            <br/><br/>
            <strong>Aprendizado contínuo:</strong> Mostra disposição para manter-se atualizado com as últimas tendências e avanços no campo da tecnologia.
            <br/><br/>
            <strong>Atenção aos detalhes:</strong> Fundamental para garantir que o código seja preciso e livre de erros, o que é crucial no desenvolvimento de software.
            <br/><br/>
            <strong>Pensamento crítico:</strong> Ajuda a analisar problemas complexos de maneira objetiva e a tomar decisões informadas para melhorar o código e a arquitetura.
            <br/><br/>
            <strong>Gestão do tempo:</strong> Importante para gerenciar eficazmente o tempo e cumprir prazos de projeto, garantindo que o desenvolvimento ocorra de maneira eficiente.
        </p>
    )
}

const hardSkills = () => {
    return (
        <p>
            <strong>HTML/CSS:</strong> Experiente em criar páginas web atraentes e estilizadas com HTML e CSS para proporcionar uma experiência de usuário excepcional.
            <br/><br/>
            <strong>JavaScript:</strong> Proficiente em JavaScript para adicionar interatividade dinâmica e funcionalidade a websites, melhorando a experiência do usuário.
            <br/><br/>
            <strong>React:</strong> Experiência sólida no uso do framework React para desenvolver interfaces web modernas e dinâmicas.
            <br/><br/>
            <strong>Pré-processadores:</strong> Conhecimentos em Scss, Sass, Less para simplificar a estilização de páginas web e otimizar o código.
            <br/><br/>
            <strong>Controle de Versão (Git, GitHub, GitLab):</strong> Familiaridade com sistemas de controle de versão, facilitando a colaboração eficaz e o gerenciamento de mudanças em projetos de desenvolvimento.
            <br/><br/>
            <strong>Responsive Design:</strong> Capacidade para criar layouts responsivos que se adaptam a diversos dispositivos, garantindo uma experiência consistente para os usuários.
            <br/><br/>
            <strong>Node.js:</strong> Conhecimento em Node.js para o desenvolvimento de aplicações back-end e integração de tecnologias web.
            <br/><br/>
            <strong>Python:</strong> Competência em Python, uma linguagem versátil, que pode ser aplicada em diversas áreas, como automação, análise de dados e desenvolvimento web.
        </p>
    )
}

const experiencia = () => {
    return (
        <p>
            <strong>Trabalho Freelancer:</strong> Interfriends Fibra<br/>
            Período: 11/2022 a 04/2023 <br/>
            Tarefas Desenvolvidas: <br/>
            •	Desenvolvimento Front-End de plataformas Web responsivas, utilizando as melhores práticas de design para criar interfaces intuitivas e funcionais utilizando <i>React</i>.<br/>
            •	Criação de layouts e logos, contribuindo para a identidade visual e a estética dos projetos utilizando o <i>Figma</i> e o <i>Canva</i>.
            <br/><br/>
            <strong>Desenvolvimento Front-End:</strong> Ministério Público de Rondônia<br/>
            Período: desde 01/09/2023 <br/>
            Tarefas Desenvolvidas: <br/>
              •	Desenvolvimento Front-End de plataformas Web responsivas, utilizando as melhores práticas de design para criar interfaces intuitivas e funcionais utilizando <i>JSF (Java Server Faces)</i> e css.<br/>
            • Revisão e modernização de sistemas legados, aplicando boas práticas de Front-End para atualizar e aprimorar a interface e a usabilidade dos sistemas existentes.<br/>
            •	Criação de layouts, contribuindo para a identidade visual e modernizando os projetos utilizando o <i>Figma</i> e o <i>Canva</i>.

        </p>
    )
}