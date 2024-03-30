import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'

import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
function Hero() {
    return (
        // <div className='hero'>
        //     <div className="hero-left">
        //         <h2>New ARRIVALS ONLY</h2>
        //         <div>
        //             <div className="hero-hand-icon">
        //                 <p>New</p>
        //                 <img src={hand_icon} alt="" />
        //             </div>
        //             <p>Collection</p> 
        //             <p>For Everyone</p>
        //         </div>
        //         <div className="hero-latest-btn">
        //             <div>Latest Collection</div>
        //             <img src={arrow_icon} alt="" />
        //         </div>
        //     </div>
        //     <div className="hero-right">
        //     <img src={hero_image} alt="" />
        //     </div>

        // </div>
        <div class='hero mf flex flex-row justify-center item-center'>
        <div class="hero-left h-[100%] w-[60%] flex flex-col items-center pt-20">
            <h2 class="text-3xl w-[590px]">New ARRIVALS ONLY</h2>
            <div>
                <div class="hero-hand-icon flex flex-row">
                    <p class="text-[80px] font-medium">New</p>
                    <div class="img h-16 w-16 mt-10">
                      <img src={hand_icon} alt="" />
                    </div>
                </div>
                <div class="everone flex flex-col">
                  <p  class="text-[80px] font-medium ">Collection</p> 
                  <p  class="text-[80px] font-medium w-[600px]">For Everyone</p>
                </div>
            </div>
            <div class="hero-latest-btn w-[600px] ">
                <div class="h-[50px] w-[210px] bg-red-500 text-slate-50 rounded-full flex items-center p-6">
                  Latest Collection
                  <img class="h-[15px] w-[35px] pl-2" src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
        <div class="hero-right h-[1000px] w-[500px]">
        <img src={hero_image} alt="" />
        </div>
    </div>
    )
}

export default Hero
