import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import dynamic from 'next/dynamic'
import Typist from 'react-typist';
import Button from '../components/Button'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import styles from "../styles/Home.module.css";
import clsx from 'clsx'
const Stars = dynamic(() => import("../components/Stars"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const tripleNineRef = useRef<HTMLHeadingElement | null>(null);
  const aboutContainerRef = useRef<HTMLElement | null>(null);
  const aboutH1Ref = useRef<HTMLHeadingElement | null>(null);
  const aboutPRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (
        !tripleNineRef.current || 
        !aboutContainerRef.current ||
        !aboutH1Ref.current ||
        !aboutPRef.current 
      ) {
          return;
      }

    gsap.timeline({
      repeat: 0,
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        scrub: true,
        anticipatePin: 1,
        pin: true,
      }
    }).fromTo(tripleNineRef.current, {
      rotateX: 180,
      rotateY: 180,
    }, {
      rotateX: 0,
      rotateY: 0,
    })
    
    gsap.timeline({
      repeat: 0,
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        scrub: true,
        anticipatePin: 1,
        pin: true,
      }
    }).fromTo(aboutH1Ref.current, {
      y: 75,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1
    })
    .fromTo(aboutPRef.current, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1
    }, "-=0.5")
    
  }, [ tripleNineRef, aboutContainerRef, aboutH1Ref, aboutPRef ]);

  return (
    <div>
      <Head>
        <title>Join | Hidden Stars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ height: `calc(100vh * 3)` }} className="flex-1 flex flex-col py-4 min-h-screen ">
          <Stars />
          <header className='flex min-h-screen justify-center flex-col items-center md:space-y-3 space-y-1'>
            <h1 className='text-white md:text-6xl text-3xl font-bold'>
              <span className='text-blue-500'>Join</span> The Hidden Stars
            </h1>
            <Typist cursor={{ show: false }}>
              <h1 className='text-white md:text-6xl text-3xl font-bold'>
                Movement <span className='text-blue-500'>Today</span>.
              </h1>
            </Typist>
            <div className='flex flex-col w-screen px-5 justify-center !mt-8'>
              <h2 className='text-white text-center'>
                We are all stars! Sometimes we are just hidden in the crowd. 
              </h2>
            </div>
            <div className='flex space-x-3 md:space-x-5 !mt-10 w-full justify-center'>
              <Link href={"https://discord.com/invite/CA9AEyWSGr"} passHref>
                <a target={"_blank"} rel="noopener noreferrer">
                  <Button className="!mr-0 w-[140px] md:min-w-[150px]">Discord Server</Button>
                </a>
              </Link>
              <span className='h-10 w-[2px] bg-gray-400 rounded-lg'></span>
              <Link href={"#about"}>
                <Button mode='secondary' className="w-[140px] md:min-w-[150px]">Learn More</Button>
              </Link>
            </div>
          </header>
          <section ref={aboutContainerRef} className='min-h-screen p-4 flex space-y-5 justify-center flex-col items-center'>
            <div className='mb-8'>
              <h1 
                ref={tripleNineRef} 
                className={clsx("text-white md:text-9xl text-7xl font-bold", styles.tripleNine)}>
                  999
              </h1>
            </div>
            <h1 ref={aboutH1Ref} className='text-white md:text-6xl text-3xl font-bold'>
              What We <span className='text-blue-500'>Do</span>?
            </h1>
            <p ref={aboutPRef} className='text-white max-w-xl text-center'>
              We help each other when we are feeling extreme emotions or major issues in life. 
              We relate and inspire each other. We take the negatives in life, 666, 
              and turn it into positive vibes, 999.
            </p>
           
          </section>
          <span id="about"></span>
          {/* <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/KdiJ9zqiMn4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home
