import Spline from '@splinetool/react-spline'
import { useState } from 'react';
import {IoCodeWorkingOutline, IoCodeWorkingSharp, IoLogoGithub, IoLogoLinkedin, IoMenu, IoSchool} from 'react-icons/io5'
import {MdEmail,MdPhoneInTalk} from 'react-icons/md'
import laptop from './images/laptop.jpeg'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Experience} from './data'
import Tilt from 'react-parallax-tilt'
import netflix from './images/netflixWeb.jpg';
import advice from './images/adviceApp.jpg';
import flashcard from './images/flashcard.png';
import decoder from './images/decoder.jpg';
import resume from './israel.pdf'
const App = () => {

  const [isActive, setIsActive]= useState(false)

  return ( 
  <div  
  className='flex w-screen min-h-screen flex-col items-center justify-center relative pb-20 overflow-hidden'
  
  >
    <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
      <div className="w-full md:w-880 p-4 rounded-2xl flex items-center bg-[#EDC7B7]  border border-black" >
          <p className='text-lg text-slate-900 font-medium'>Israel Villela</p>
          <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
            <a href="#home" 
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
              Home
            </a>
            <a href="#about" 
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
              About
            </a>
            <a href="#projects" 
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
              Projects
            </a>
            <a href="#contact" 
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
              Contact
            </a> 
            <a href={resume} download
            className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in'>
              Download Resume
            </a>
          </div>
          <div className='block md:hidden ml-auto cursor-pointer'
          onClick={()=> setIsActive(!isActive)}
          >
            <IoMenu className='text-2xl text-textbase' />
          </div>

          {isActive && (
            <div onClick={() => setIsActive(false)}
            className='lg:hidden p-4 w-275 bg-[#EDC7B7] rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'
            >
            <a href="#home" onClick={() => setIsActive(false)}
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
              Home
            </a>
            <a href="#about" onClick={() => setIsActive(false)}
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
              About
            </a>
            <a href="#projects" onClick={() => setIsActive(false)}
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
              Projects
            </a>
            <a href="#contact" onClick={() => setIsActive(false)}
            className='text-base text-textBase font-medium hover:text-slate-200 cursor-pointer duration-100 ease-out'>
            </a> 
            <a href={resume} download
            className=' text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in'>
              Download Resume
            </a>
            </div>
          )}
          
      </div>
    </nav>
    
    <div className='relative h-screen w-screen' id='home'>
    <Spline scene="https://prod.spline.design/h7fdXGCUsbizdf4j/scene.splinecode" />

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
          <p className='text-slate-200' >Press and drag to orbit</p>

        </div>

      </div>
    </div>
    <main className='w-[80%] mt-5'>
      {/**about section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about">
              {/**image box */}
              <div className='w-full h-420 flex items-center justify-center'>
                <div className='h-340 w-275 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-500'>
                  
                  <img 
                  src={laptop} 
                  className="w-[100%] h-[100%] md:h-340 md:w-275 absolute -right-4 top-4 object-cover rounded-md drop-shadow-2xl"
                  />
                </div>
              </div>

              {/**content box */}
              <div
              className='w-full h-420 flex flex-col items-center justify-center rounded-md '
              >
                <p
                className='text-lg text-textBase text-center'
                >
                 Hi, my name is Israel, welcome to my portfolio, here I will highlight some of my work. I am a Software Engineer proficient in using JavaScript, React, React Hooks, React Router, HTML, CSS, API
implementation, Node.js, Express, PostgreSQL, and frameworks like Bootstrap, and Tailwind CSS. I am a problem solver
with experience developing logical and methodical solutions to problems. I have a keen eye for design, allowing for the
development of visually pleasing and user-friendly website designs.

                </p>
                <a href={resume} download class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  hover:text-white focus:ring-2 focus:ring-red-100 hover:shadow-lg hover:shadow-red-100 hover:dark:shadow-lg hover:dark:shadow-red-100">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-b from-[#EDC7B7] to-gray-100 rounded-md ">
                  Download Resume
                </span>                  
                  </a>
              </div>
      </section>
      {/** timeline */}
      <section className='w-full flex items-center justify-center'>
        <VerticalTimeline
        lineColor='black'
        >

          {
            Experience && Experience.map((element)=>(
              <VerticalTimelineElement
              key={element.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#EDC7B7', color: 'black', border:'solid black', boxShadow:'-5px -5px 5px black' }}
               contentArrowStyle={{ borderRight: '7px solid black' }}
               date={element.date}
               iconStyle={{ background: '#EDC7B7', color: 'black' }}
               icon={element.iconsSrc}
               >
                 <h3 className="vertical-timeline-element-title">{element.title}</h3>
                 <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                 <p>
                   {element.description}
                 </p>
             </VerticalTimelineElement>
            ))
          }


        </VerticalTimeline>
      </section>
      {/**Projects Section */}
      <section
      className="flex flex-wrap items-center justify-evenly my-24 gap-4 "
      id="projects"
      >
        <Tilt
    className="z-3 hover:z-1"
    perspective={1000}
    glareEnable={true}
    glareColor='lightblue'
    glarePosition='all'
    glareMaxOpacity={0.9}
    scale={1.1}
        >
        <a href="https://netflix-clone-e97a2.web.app/" target="_blank">
        <div
        className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-zinc-800 rounded-md p-2 h-[500px] min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'
        >
          <p className='text-lg text-textBase font-medium uppercase'>Netflix FrontEnd Replica</p>
          <div>
          <img src={netflix} 
          alt=""
          className='w-full h-full object-cover rounded-md my-4'
          />
          </div>
          <div
          className='flex flex-1 items-center justify-center'
          >
            <p
            className='text-lg text-gray-300'
            >Technologies- React, React Hooks, JavaScript, CSS, Firebase
            <span
            className='block text-sm text-gray-800'
            >
            ● Developed a Frontend only Netflix clone using a mobile-first approach that implements the use of React hooks. <br/>
            ● The single-page web application fetches and displays current Netflix data from the TMDB API like trending shows, movies, and documentaries and renders dynamically ensuring pixel-perfect design.
            ● Installed Firebase CLI to deploy with Firebase to ensure fast and secure hosting.

            </span>
            </p>
            
          </div>
        </div>
        </a>
        </Tilt>
        <Tilt
    className="z-3 hover:z-1"
    perspective={1000}
    glareEnable={true}
    glareColor='lightblue'
    glarePosition='all'
    glareMaxOpacity={0.9}
    scale={1.1}
        >
          <a href="https://euphonious-cannoli-afb679.netlify.app/" target="_blank">
        <div
        className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-zinc-800 rounded-md p-2 h-[500px] min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'
        >
          <p className='text-lg text-textBase font-medium uppercase'>get advice react app</p>
          <div>
          <img src={advice} 
          alt=""
          className='w-full h-full object-cover rounded-md my-4'
          />
          </div>
          <div
          className='flex flex-1 items-center justify-center'
          >
            <p
            className='text-lg text-gray-300'
            >Technologies - React, JavaScript, CSS, Netlify Hosting
            <span
            className='block text-sm text-gray-800'
            >
             ● Created an interactive single-page web application that fetches data and dynamically renders messages from an
            API, optimized performance by developing the web application with React Hooks.<br/>
            ● User-friendly, standards-compliant, cross-browser HTML and CSS designs.

            </span>
            </p>
            
          </div>
        </div>
        </a>
        </Tilt>
        <Tilt
    className="z-3 hover:z-1"
    perspective={1000}
    glareEnable={true}
    glareColor='lightblue'
    glarePosition='all'
    glareMaxOpacity={0.9}
    scale={1.1}
        >
          <a href="https://mellow-creponne-b9253d.netlify.app/" target="_blank">
        <div
        className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-zinc-800 rounded-md p-2 h-[500px] min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'
        >
          <p className='text-lg text-textBase font-medium uppercase'>flashcard study app</p>
          <div>
          <img src={flashcard} 
          alt=""
          className='w-full h-full object-cover rounded-md my-4'
          />
          </div>
          <div
          className='flex flex-1 items-center justify-center'
          >
            <p
            className='text-lg text-gray-300'
            >Technologies
            <span
            className='block text-sm text-gray-800'
            >
              ● Created an application that allows users to create, edit, and delete decks and cards within them.<br/>
● Defined routes and URLs, and used state over multiple components.

            </span>
            </p>
            
          </div>
        </div>
        </a>
        </Tilt>
        <Tilt
    className="z-3 hover:z-1"
    perspective={1000}
    glareEnable={true}
    glareColor='lightblue'
    glarePosition='all'
    glareMaxOpacity={0.9}
    scale={1.1}
        >
          <a href="https://vermillion-pika-ec88e2.netlify.app/"  target="_blank">
        <div
        className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-zinc-800 rounded-md p-2 h-[500px] min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'
        >
          <p className='text-lg text-textBase font-medium uppercase'>decoder ring</p>
          <div>
          <img src={decoder} 
          alt=""
          className='w-full h-full object-cover rounded-md my-4'
          />
          </div>
          <div
          className='flex flex-1 items-center justify-center'
          >
            <p
            className='text-lg text-gray-300'
            >Technologies -JavaScript ES6, HTML5, Node.js, Bootstrap, Mocha, Chai, Netlify Hosting
            <span
            className='block text-sm text-gray-800'
            >
              ● Created interactive site that allows users to encode and decode characters resulting in encrypted and decrypted
messages.<br/>
● Implemented a test-driven development approach to assist the implementation of additional features and
decrease the time in debugging.
            </span>
            </p>
            
          </div>
        </div>
        </a>
        </Tilt>
 
      </section>
      {/**contact section */}
      <section 
      className=''
      id='contact'
      >

      </section>
      <section
      id="contact"
      className='flex flex-col items-center justify-center w-full my-24'
      >
        <p className='text-2xl to-gray-400 capitalize'>get in touch with me!</p>
        <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
          <a href="https://github.com/IsraelVillela" target="_blank" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
            <p className='text-lg text-textBase'>Github</p>
          </a>
        </div>
        <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
          <a href="https://www.linkedin.com/in/israel-villela-swe/" target="_blank" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <IoLogoLinkedin className='text-textBase text-3xl cursor-pointer' />
            <p className='text-lg text-textBase'>LinkedIn</p>
          </a>
        </div>
        <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
          <a href="mailto:israelvillelawork@gmail.com" target="_blank" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <MdEmail className='text-textBase text-3xl cursor-pointer' />
            <p className='text-lg text-textBase'>Email</p>
          </a>
        </div>
        <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
          <a href="tel:760-620-8430" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <MdPhoneInTalk className='text-textBase text-3xl cursor-pointer' />
            <p className='text-lg text-textBase'>Call or Text</p>
          </a>
        </div>

      </section>
    </main>
  </div>
   );
}
 
export default App;