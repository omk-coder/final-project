'use client';
import { AppContext } from '@/AppContext';
import styles from './landing.module.css';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import * as fcl from '@onflow/fcl';
import { useState } from 'react';
import { useRef } from 'react';


export default function HomePage() {
  const router = useRouter();
  const { user } = useContext(AppContext);
  const [videoEnded, setVideoEnded] = useState(false);

  const textRef2 = useRef(null);

  const textRef4 = useRef(null);

  

  setTimeout(() => {
    if (textRef4.current) {
      textRef4.current.innerText = "ChainCheckmate";
    }
  }, 10000);


  setTimeout(() => {
    if (textRef2.current) {
      textRef2.current.innerText = "Play Decentralised Chess. Compete, Conquer, and Earn!";
    }
  }, 10000); // Display after 5 seconds


  function handleLoginDashboard(){
    if (user && user.loggedIn) {
      router.push('/dashboard/home');
    }
    else {
      fcl.logIn()
    }
  }
  useEffect(() => {
    const videoElement = document.getElementById('chessVideo');
    const textElement = document.getElementById('displayText');

    const handleVideoEnd = () => {
      setVideoEnded(true);
    };
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className={`h-full overflow-x-clip`}>
      <div className="flex items-center justify-between bg-black px-10 py-1">
        <div className="flex items-center gap-2">
          {/* logo */}
          <img src="/imgs/logo.png" className="h-10"></img>
          {/* Brankd Name */}
          <div className="text-white text-2xl font-manrope font-bold">ChainCheckmate</div>
        </div>

        <div
          onClick={handleLoginDashboard}
          className="bg-orange-custom border-2 border-solid border-orange-custom hover:bg-black hover:text-orange-custom font-bold text-manrope p-5 py-1 rounded-lg"
        >
          {user && user.loggedIn ? 'Dashboard' : 'Login'}
        </div>
      </div>
      

      <div className="relative h-screen">
      <video
        id="chessVideo"
        className="absolute inset-0 w-full h-full object-cover "
        autoPlay
        muted
        loop
      >
      //
        <source src="/imgs/chess.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!videoEnded && (
        

        <div className="absolute inset-0 flex flex-col justify-center space-y-14 font-manrope ml-80 ">

      
          
              <div className="max-w-[600px] text-8xl font-700 tracking-wider text-white ">
              <div className="text-center">
             
           
           
           <div className='mr-60'><span ref={textRef4} className={styles.textGradient} ></span></div>
              
              </div>
              </div>
             <span ref={textRef2} className='text-bgcolor text-4xl' ></span></div> 
            
             
           
        
      )}
      {videoEnded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p id="displayText" className="text-white text-4xl">
            Your text after the video ends
          </p>
        </div>
      )}
    </div>


      {/* Here section */}
      {/* 
       
          <div className="mx-auto flex items-center justify-between h-full max-w-[100rem] space-x-5 pl-20">
           
         
              <div className="max-w-xl text-8xl font-700 tracking-wide ">Welcome to CryptoKnights</div>
              <div className="max-w-3xl text-4xl">
                Play Decentralised Chess on FlowChain,{' '}
                <span className={styles.textGradient}>Compete, Conquer, and Earn!</span>
              </div>
            </div>  */}

            {/* /* right section */}
            {/* <section id="hero" className="w-full h-full bg-bg_image md:bg-center-8 bg-cover bg-no-repeat">
            <div className="h-full bg-black bg-opacity-75">
             <div className="flex flex-col space-y-14 text-white text-left  font-manrope mb-40">
            <div className="flex items-center h-full">
              <div className={`${styles.purpleCloud} absolute -top-0 right-20 md:h-[30rem] w-[28rem]`}></div>
              <img src="/imgs/logo.png" className=" top-16 right-14 z-10 h-[38rem] md:h-[40rem]"></img>
            </div>
          </div>
        </div>
      </section> */}

      {/* ticker
      {/* <div className="overflow-hidden">
        <div className={`-mx-5 flex text-2xl w-full items-center bg-white py-4 ${styles.ticker}`}>
          <div className="w-64 mr-5 self-start flex-none">⚔div Bet Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🧑‍🎓 Learn Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🍒 Eat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🛌 Sleep Chess</div>
          <div className="w-64 mr-5 self-start flex-none">😍 Repeat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">♟️Live Chess</div>

          <div className="w-64 mr-5 self-start flex-none">⚔ Bet Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🧑‍🎓 Learn Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🍒 Eat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🛌 Sleep Chess</div>
          <div className="w-64 mr-5 self-start flex-none">😍 Repeat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">♟️Live Chess</div>
        </div>
      </div> */}

    
      <section className="flex justify-center items-center text-white bg-black space-x-5 pl-5 pr-4">
        <div className="w-full max-w-[80rem] flex justify-between items-center">
          {/* Img */}
         <div className="relative w-[40rem] h-[40rem]">
            <div className="absolute top-32 right-40">
              <div className="flex relative items-center justify-center">
                <div className={`${styles.greenCircle} w-[40rem] h-[40rem] absolute`}></div>
                <img src="/imgs/chesss.png" alt="" className="z-10 w-[35rem]" />
              </div>
            </div>
          </div> 

          {/* Content */}
          <div className="font-space-grotesk font-[500] text-6xl text-left">Build Custom Matchs</div>
        </div>
      </section>

      {/* feature 2*/}
      <section className="flex justify-center items-center text-white bg-black space-x-5 pl-5 pr-4">
        <div className="w-full max-w-[80rem] flex justify-between items-center">
          {/* Content */}
         <div className="max-w-xl font-space-grotesk font-[500] text-6xl text-left">
            Ultimate Platform for Multiplayer Purpose
          </div> 

          {/* Img */}
         <div className="relative w-[40rem] h-[40rem] ">
            <div className="absolute top-32 left-40">
              <div className="flex relative items-center justify-center">
                <div className={`${styles.purpleCircle} w-[40rem] h-[40rem] absolute -right-[3.5rem]`}></div>
                <img src="/imgs/chessBoardMultiplayerNew.png" alt="" className="z-10 w-[35rem]" />
              </div>
            </div>
          </div> 
        </div>
      </section>

   
      <section className="flex justify-center items-center text-white bg-black space-x-5 pb-40 pl-5 pr-4">
        {/* Img */}
        <div className="relative w-[40rem] h-[40rem]">
          <div className="absolute top-32 right-40">
            <div className="flex relative items-center justify-center">
              <div className={`${styles.orangeCircle} w-[40rem] h-[40rem] absolute`}></div>
              <img src="/imgs/chesss2.png" alt="" className="z-10 w-[35rem]" />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="max-w-xl font-space-grotesk font-[500] text-6xl text-left">Decentralized and One of the Best Way</div>
      </section>

      {/* ticker */}
      {/* <div className="overflow-hidden">
        <div className={`-mx-5 flex text-2xl w-full items-center bg-white py-4 ${styles.ticker}`}>
          <div className="w-64 mr-5 self-start flex-none">⚔div Bet Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🧑‍🎓 Learn Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🍒 Eat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🛌 Sleep Chess</div>
          <div className="w-64 mr-5 self-start flex-none">😍 Repeat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">♟️Live Chess</div>

          <div className="w-64 mr-5 self-start flex-none">⚔ Bet Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🧑‍🎓 Learn Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🍒 Eat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">🛌 Sleep Chess</div>
          <div className="w-64 mr-5 self-start flex-none">😍 Repeat Chess</div>
          <div className="w-64 mr-5 self-start flex-none">♟️Live Chess</div>
        </div>
      </div> */}
{/* 
      <div className="bg-black pt-40"></div>

      <footer className={`bg-black w-full flex`}>
        <div
          className={`${styles.blueGradientBg} w-full flex justify-center items-center text-white py-6 font-manrope font-semibold text-lg`}
        >
          Made with 💖 for the Web3 Community by Team CryptoKnights
        </div>
      </footer> */} 
    </div>
  );
}
