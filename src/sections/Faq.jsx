import FaqItem from "../components/FaqItem"
import { faqData } from "../constants/constant"
const Faq = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto relative">
                    <span className=" sm:w-42 w-40 font-faq font-[400] sm:text-md text-sm absolute sm:top-[0px] top-[-65px] sm:left-[-220px] left-0 text-blue-700 ">Frequently asked questions</span>
                    <h2 className="sm:text-4xl text-xl  font-bold mb-12 text-center">
                        Constant collaboration is how we roll. Let's see if we are a good fit.
                    </h2>

                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} number={`0${index + 1}`} question={faq.question} answer={faq.answer} defaultOpen={faq.defaultOpen} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq