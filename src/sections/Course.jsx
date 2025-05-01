import CourseCard from "../components/CourseCard"
import { cardData } from "../constants/constant"

const Course = () => {
    return (
        <div className="flex-center">
            <div className="xl:w-[1440px] w-full flex flex-col  xl:py-10 py-5 px-5 ">
                <div className="xl:w-[1030px] w-full">
                    <h1 className="font-spacial font-bold xl:text-5xl text-2xl text-gray-15 pb-5">Our Courses</h1>
                    <p className="font-spacial font-semibold sm:text-[18px] text-sm text-gray-35">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>

                </div>
                <div className="flex xl:flex-row md:flex-row flex-col mt-10 gap-10">
                    {cardData.map((data) => (
                        <CourseCard
                            key={data.id}
                            data={data}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Course