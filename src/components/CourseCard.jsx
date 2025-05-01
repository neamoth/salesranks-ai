const CourseCard = ({ data }) => {
    return (
        <div className="flex flex-col gap-5 p-10 bg-white-95 rounded-xl">
            <img src={data.img} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex sm:gap-10 gap-5  ">
                    <span className="sm:px-[16px] px-[8px] sm:py-[10px] py-[5px] sm:text-[16px] text-[12px] rounded-md bg-white-50 shadow-sm">{data.badge1}</span>
                    <span className="sm:px-[16px] px-[8px] sm:py-[10px] py-[5px] sm:text-[16px] text-[12px]] rounded-md bg-white-50 drop-shadow-sm">{data.badge2}</span>
                </div>
                <p className="sm:text-sm text-[12px] text-gray-15 font-bold font-spacial">{data.authName}</p>
            </div>
            <h1 className="text-2xl font-semibold text-gray-15 ">{data.title}</h1>
            <p >{data.desc}</p>
            <button className="bg-blue-500 py-[10px] text-white-50 rounded-sm">{data.btn}</button>
        </div>
    )
}

export default CourseCard