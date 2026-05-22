type TestimonialCardProps = {

    name: string;
    role: string;
    picture: string;
    caption: string;
}

const TestimonialCard = ({name, role, picture, caption}: TestimonialCardProps) => {
    return (
        // Main Card Container
        <div className="flex flex-col bg-bp-white h-[260px] w-[270px] rounded-[10px] justify-start pt-6 px-[30px] pb-9
        md:h-[280px] md:w-[330px] md:pt-[27px] md:px-9 md:pb-[36px] font-['Poppins'] gap-[18px] md:gap-[22px]">
            {/* Header Container */}
            <div className="flex flex-row gap-[21px] md:gap-[22px]">
                {/* Picture */}
                <div className="w-12 h-12 bg-bp-accent-light-blue rounded-md">
                    <img src={picture} alt={name} className="w-full h-full object-cover rounded-md" />
                </div>

                {/* Name and Role */}
                <div className="flex flex-col justify-start font-normal">
                    <h3 className="text-base text-zinc-800 text-sm md:text-base">{name}</h3>
                    <p className="uppercase text-neutral-400 text-[10px] md:text-sm">{role}</p>
                </div>
            </div>

            {/* Body Container */}
            <div className="flex flex-1 justify-start font-normal text-sm md:text-base text-neutral-700">
                <p>{caption}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;