// Implement the Filters component to match the approved wireframes. 
// This is a reusable UI element for displaying a vertical stack of filter “pills” (outlined and filled states).

const Filters = () => {
return (
    <>
    {/* This is the outlined state */}
        <div className="bg-blueprint-black p-2"> {/* This div is to see the outlined state */}
            <button
                type="button"
                className="w-fit text-white text-sm font-medium font-['Poppins'] uppercase py-3 px-[18px]
                md:py-[10px] md:px-[30px] md:rounded-[10px] rounded-[5px] border border-blueprint-white bg-blueprint-white/20"
            >
                EXECUTIVES
            </button>
        </div>

        {/* This is the filled state */}
        <div className="bg-blueprint-neutral-dark p-2">
            <button className="w-fit text-blueprint-neutral-dark text-sm font-medium font-['Poppins'] uppercase 
            py-3 px-[18px] md:py-[10px] md:px-[30px] md:rounded-[10px] rounded-[5px] bg-blueprint-white">
                    EXECUTIVES
                </button>
        </div>
    </>
    );
};

export default Filters;