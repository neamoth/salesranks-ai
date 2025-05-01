import { useEffect, useRef } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CountUp from "react-countup"
import { boxCount, hero, iconCount } from "../constants/constant";

const Hero = () => {
    const heroMainText = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(heroMainText.current,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',

            },
        )
    })
    return (
        <section className="flex-center pt-[130px] sm:pb-14 pb-18">
            <div className="xl:w-[1440px] w-[100%] flex xl:flex-row flex-col gap-3 px-5">
                <div>
                    <div className="w-full mb-10 md:md-0" ref={heroMainText}>
                        <h1 className="xl:text-[70px] text-[50px] font-ai font-bold text-black-100">
                            Your AI- <br />
                            Powered <br />
                            Sales Coach
                        </h1>
                    </div>
                    <div className="flex">
                        <div className="flex xl:flex-row  flex-col">
                            <img src="/images/hero-miniRobot.png" alt="" />
                        </div>
                        <div className="flex-center xl:px-40 px-5 ">
                            <p className="xl:w-[346px]  md:text-[20px] text-[15px] w-full">
                                {hero.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center xl:flex-row flex-col py-20 gap-5">
                        {iconCount.map((item) => (
                            <div id={item.label} className="flex  gap-5">
                                <div className="flex-center p-[5px] shadow-md rounded">
                                    <img src={item.img} alt={item.label} />
                                </div>
                                <div className="flex-col rounded-b-3xl">
                                    <CountUp
                                        start={item.value}
                                        suffix={item.suffix}
                                        duration={2.5}
                                        className="text-[40px] font-semibold text-black-100"
                                    />
                                    <h2 className="text-[20px] font-normal text-gray-50">{item.label}</h2>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="flex items-center relative">
                        <img src="/images/hero-robot.png" alt="" className="xl:w-[583px] xl:h-[628px] w-full h-full" />
                    </div>
                    <div className="flex flex-col items-center justify-center xl:w-[467px] w-75 xl:h-[359px] h-75 bg-white rounded-2xl xl:absolute xl:top-[600px] xl:right-[508px] shadow-md px-5 gap-3">
                        <div className="flex items-center justify-between gap-10 sm:gap-5">
                            {boxCount.map((item, index) => (
                                <div key={index} className="">
                                    <CountUp
                                        end={item.value}
                                        suffix={item.suffix}
                                        duration={2.5}
                                        className="xl:text-[50px] md:text-[40px] text-[35px]  font-semibold text-blue-600 font-spacial"
                                    />
                                </div>
                            ))}
                        </div>
                        <h1 className="font-bold font-spacial text-black-100 ">Growth is our priority</h1>
                        <p className="font-primany text-[17px] text-black-200 text-center">As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero