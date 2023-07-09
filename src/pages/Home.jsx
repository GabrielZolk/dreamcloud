import './Home.css';
import { CgMenuGridR } from 'react-icons/cg'
import { BsLinkedin, BsGithub, BsWhatsapp, BsArrowRight } from 'react-icons/bs'

export default function Home() {
  return (
    <section>
      <header>
        <h4>Logo</h4>
        <CgMenuGridR />
      </header>
      <div className='img'>
        <img src='./man.png' />
      </div>
      <p className='back-text'>dreamcloud</p>
      <div className='content'>
        <p>Dedicated <span className='highlight'>to</span> the pursuit of <span className='highlight'>digital</span> aspirations challenge.</p>
        <div id='subtext-container'>
          <div id='subtext'>Its highly likely that there is a cloud-based software as a service (SaaS) solution available in the current market that can cater to your needs.</div>
        </div>
        <button>GET STARTED NOW <BsArrowRight /> </button>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/gabriel-zolk/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/GabrielZolk" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://api.whatsapp.com/send/?phone=%2B5511950674214&text&type=phone_number&app_absent=0"
          target="_blank" rel="noreferrer"><BsWhatsapp /></a>
      </div>
    </section>
  )
}
