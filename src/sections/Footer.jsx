import Cta from "../components/Cta"
import { footer } from "../constants/constant"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-start sm:gap-10 gap-5 sm:px-10 px-5 sm:py-15 py-5">
            <Cta
                className=""
            />

            <div className="sm:w-[1440px] w-full flex sm:flex-row flex-col items-start sm:gap-40 gap-5 sm:px-0 px-5 sm:py-10 py-5">
                {/* left */}
                <div className="flex flex-col gap-5 sm:w-[35%] w-full">
                    <img src={footer.logo} alt="Logo" className="w-fit" />
                    <p className="font-spacial font-[400] text-[14px] text-blue-400">{footer.desc}</p>
                    <div className="flex gap-2.5 py-3">
                        {footer.social.map((item) => (
                            <a key={item.platform} href={item.href}><img src={item.imgPath} alt={item.platform} /></a>
                        ))}
                    </div>
                </div>
                {/* right */}
                <div className="sm:w-[65%] w-full flex md:flex-row flex-col items-start justify-between ">
                    {/* subdivs */}
                    {footer.nav.map((left, index) => (
                        <div key={index} >
                            <h4 className="text-blue-700 font-spacial font-[600] text-[18px] pb-5">{left.title}</h4>
                            {left.links.map((link, index) => (
                                <div key={index} className="text-blue-400 font-spacial font-[400] text-[14px] pb-3">
                                    <a href={link.href}>{link.label}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div>
                        <h4 className="text-blue-700 font-spacial font-[600] text-[18px] pb-5">Contact</h4>
                        {footer.contact.map((item) => (
                            <div key={item.label} className="flex items-center justify-start gap-2 pb-3">
                                <img src={item.imgPath} alt={item.label} />
                                <a href={`${item.type}${item.label}`} className="text-blue-400 font-spacial font-[400] text-[14px]">{item.label}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer