const Cta = () => {
    return (
        <section className="sm:w-[1440px] w-full bg-linear-to-r  to-[#004FCE] from-[#103570] flex items-center justify-center flex-col sm:gap-5 gap-1 sm:py-25 py-20 sm:px-10 px-3 font-spacial rounded-2xl">
            <h1 className="font-[500] text-white-50 sm:text-4xl ">Ready to Hire Smarter?</h1>
            <p1 className="font-[400] text-[#B9BDC7] sm:text-[16px] pb-10 text-center">Unlock Exclusive Insights Subscribe to Our Newsletter</p1>
            <button className="py-[16px] px-[36px] bg-[#FCE38A] rounded-3xl ">
                <a className="font-[500] text-[16px] text-blue-600" href="#">Join Now</a>
            </button>
        </section>
    )
}

export default Cta