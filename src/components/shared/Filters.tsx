// Implement the Filters component to match the approved wireframes. 
// This is a reusable UI element for displaying a vertical stack of filter “pills” (outlined and filled states).

interface FiltersProps {
  state?: "outlined" | "filled" | "active";
  title: string;
  onClick?: () => void;
}

const Filters = ({ state = "outlined", title, onClick }: FiltersProps) => {
    if (state === 'outlined') {
        return(
            <button
                type="button"
                onClick={onClick}
                className="w-fit text-blueprint-black text-sm font-medium font-['Poppins'] uppercase py-3 px-[18px]
                md:py-[10px] md:px-[30px] md:rounded-[10px] rounded-[5px] border border-blueprint-black bg-blueprint-white/20"
            >
                {title}
            </button>
        )
    } 
    if(state === 'filled') {
        return( 
            <button
                type="button"
                onClick={onClick}
                className="w-fit text-blueprint-neutral-dark text-sm font-medium font-['Poppins'] uppercase 
                py-3 px-[18px] md:py-[10px] md:px-[30px] md:rounded-[10px] rounded-[5px] bg-blueprint-white"
            >
                {title}
            </button>
        )
    }

    if(state === 'active'){
      return( 
        <button
            type="button"
            onClick={onClick}
            className="w-fit text-blueprint-neutral-dark text-sm font-medium font-['Poppins'] uppercase 
            py-3 px-[18px] md:py-[10px] md:px-[30px] md:rounded-[10px] rounded-[5px] bg-blueprint-accent-veryLightBlue border border-blueprint-accent-lightBlue"
        >
            {title}
        </button>
    )
    }
};

export default Filters;