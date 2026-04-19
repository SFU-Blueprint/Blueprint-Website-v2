import React from 'react'
/**
 * Alumni Grid component to display a grid of cards.
 * @param {Object} props - The props object.
 * @param {string} props.year - The year of the alumni section.
 * @param {Array} props.alumniList - The list of alumnis with names and positions.
 * @returns {JSX.Element} JSX representation of the Alumni Grid component.
 */
const AlumniGrid = (props) => {
    return (
        <>
            <h1 className="ml-[5%] font-medium md:ml-[0%] font-poppins text-[24px]">{props.year}</h1>
            <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 lg:grid-cols-5 xl:grid-cols-6 auto-cols-max justify-start mt-[0.5%]">
                {props.alumniList.map((items, key) => (
                    <div className="border-1 md:m-4 shadow-xl w-[191px] h-[112px] flex flex-col justify-between"
                         key={key}>
                        <div className="ml-5 mt-3 mr-5">
                            <h1 className="flex flex-wrap flex-row font-poppins font-bold text-[16px]">{items.title}</h1>
                            <h1 className="font-poppins text-[14px] text-[#6C6B7A]">{items.position}</h1>
                        </div>
                        <div className="flex flex-row ml-5 mb-3 mr-5">
                            <a className="font-poppins text-bp-blue text-[14px] underline" href="">LinkedIn </a>
                            <img className="ml-[5%]" src="/share.svg" alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AlumniGrid
