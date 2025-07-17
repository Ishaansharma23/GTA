import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  let [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.vi-mask-group', {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            setShowContent(true);
            document.querySelector(".svg").remove();
            this.kill();
          }
        }
      })
  })

  useGSAP(() =>{
    const main = document.querySelector('.main');

    main?.addEventListener("mousemove", function(e){
      const Xmove = (e.clientX/innerWidth - .5) * 40;
    })
  }, [showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full'>
          <div className='landing w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 z-[10] w-full p-10'>
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-1 bg-white "></div>
                  <div className="line w-8 h-1 bg-white "></div>
                  <div className="line w-6 h-1 bg-white "></div>
                </div>
                <h3 className='text-3xl font-["pricedown"] -mt-[8px] leading-none text-white'>ROCKSTAR</h3>
              </div>
            </div>
            <div className='imagesdiv overflow-hidden w-full h-screen relative'>
              <img className='absolute top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
              <img className='absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" />
              <div className="text absolute flex flex-col gap-3 top-7 left-1/2 -translate-x-1/2 font-['pricedown'] text-white">
              <h1 className='text-[10rem] leading-none -ml-20'>theft</h1>
              <h1 className='text-[10rem] leading-none ml-20'>grand</h1>
              <h1 className='text-[10rem] leading-none -ml-20'>auto</h1>
            </div>
              <img
                className=" absolute -bottom-[50%] left-1/2 -translate-x-1/2 scale-[.8]"
                src="./girlbg.png"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-10 py-13 bg-gradient-to-t from-black to-transparent">
              <div className='flex gap-4 items-center'>
              <i className="ri-arrow-down-line text-3xl"></i>
              <h3 className=' text-xl font-["Helvetica_Now_Display"]'>Scroll Down</h3>
              </div>
              <div>
                <img className='h-[45px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App