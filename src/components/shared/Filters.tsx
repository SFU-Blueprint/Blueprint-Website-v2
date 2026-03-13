// Implement the Filters component to match the approved wireframes. 
// This is a reusable UI element for displaying a vertical stack of filter “pills” (outlined and filled states).

const Filters = ({state,title}: {state: 'outlined' | 'filled', title: string}) => {

    if (state === 'outlined') {
        return(
            // Outlined State
            <button
                type="button"
                className="w-fit text-white text-sm font-medium font-['Poppins'] uppercase py-3 px-[18px]
                md:py-[10px] md:px-[30px] md:rounded-[10px] rounded-[5px] border border-blueprint-white bg-blueprint-white/20"
            >
                {title}
            </button>
        )
    } else {
        return(
            // Filled State
            <button className="w-fit text-blueprint-neutral-dark text-sm font-medium font-['Poppins'] uppercase 
            py-3 px-[18px] md:py-[10px] md:px-[30px] md:rounded-[10px] rounded-[5px] bg-blueprint-white">
                    {title}
                </button>
      
        )
    }
};

export default Filters;