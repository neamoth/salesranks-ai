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
        <section className="flex-center pt-[130px]">
            <div className="w-[1440px] flex gap-3  h-[100dvh]">
                <div>
                    <div className="w-full mb-10 md:md-0" ref={heroMainText}>
                        <h1 className="text-[100px] font-ai font-bold text-black-100">
                            Your AI- <br />
                            Powered <br />
                            Sales Coach
                        </h1>
                    </div>
                    <div className="flex">
                        <div className="">
                            <img src="/images/hero-miniRobot.png" alt="" />
                        </div>
                        <div className="flex-center px-40 text-[20px]">
                            <p className="w-[346px]">
                                {hero.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex py-20 gap-5">
                        {iconCount.map((item) => (
                            <div id={item.label} className="flex gap-5">
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
                <div>
                    <div className="relative">
                        <img src="/images/hero-robot.png" alt="" className="w-[583px] h-[628px]" />
                    </div>
                    <div className="flex-center w-[467px] h-[359px] bg-white rounded-2xl absolute top-[600px] right-[508px] px-1.5 gap-3">
                            {boxCount.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <CountUp
                                        end={item.value}
                                        suffix={item.suffix}
                                        duration={2.5}
                                    />
                                </div>
                            ))}
                        <h1></h1>
                        <p></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero