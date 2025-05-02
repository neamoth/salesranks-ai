import { useState } from "react";

const FaqItem = ({ number, question, answer, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b pb-6">
            <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex sm:pb-8 pb-5">
                    <span className="text-yellow-800 text-3xl mr-4 font-faq">{number}</span>
                    <h3 className="sm:text-4xl text-xl font-medium text-black-100 font-faq">{question}</h3>
                </div>
                <button className="text-2xl ">{isOpen ? "−" : "+"}</button>
            </div>

            {isOpen && (
                <div className="mt-1 pl-10 text-gray-600">
                    <p className="text-[#636363] sm:text-lg text-sm font-primany">{answer}</p>
                </div>
            )}
        </div>
    )
}

export default FaqItem