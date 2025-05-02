const Testimonial = () => {
    return (
        <section className="flex flex-col items-center gap-10 font-spacial sm:px-0 px-5">
            <div className="sm:w-[1280px] w-full sm:px-0 px-5">
                <div>
                    <p className="font-[600] text-[#010205] sm:text-4xl text-2xl ">
                        “ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”
                    </p>
                </div>
                <div className="flex  sm:flex-row flex-col justify-between sm:gap-0 gap-10">
                    {/* left */}
                    <div className="flex justify-center gap-5">
                        <img src="/images/review1.png" alt="circle" />
                        <div className="flex flex-col items-start justify-center gap-2">
                            <span className="text-[#010205] sm:text-[20px] text-[16px] font-bold">Michael Kaizer</span>
                            <span className="text-[#878C91] sm:text-[16px] text-[12px] font-[500]">CEO of Basecamp Corp</span>
                        </div>
                    </div>
                    {/* right  */}
                    <div className="flex gap-3 items-center">
                        <button className="bg-transparent text-blue-700 px-8 py-4 border-2 border-blue-700 rounded-[70px]"><i class="fa-solid fa-arrow-left"></i></button>
                        <div className="flex justify-center text-[20px] font-[600]">
                            <span className="text-blue-600">01</span>
                            <span className="text-gray-0">/05</span>
                        </div>
                        <button className="bg-blue-700 text-white px-8 py-4 border-2 border-blue-700 rounded-[70px]"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial