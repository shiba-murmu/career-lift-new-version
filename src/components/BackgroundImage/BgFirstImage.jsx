import React from 'react'


function Background() {
    /**
     * Actual background model is here...
     */
    return(
        <>
            <div className='w-full relative'>
               <img src="./images/career.jpeg" alt="background"
               className='w-full h-50 md:h-50 object-center object-fit object-cover' />
               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <h1 className='text-3xl md:text-6xl text-white' style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "bolder" }}>INTERMEDIATE</h1>
               </div>
            </div>
        </>
    )
}
function BgFirstImage({ whichPage }) {
    /**
     * Main function component here...
     */
    switch (whichPage) {
        case 'matriculation':
            return (
                <>
                    <Background />
                </>
            )
        case 'intermediate':
            return (
                <>
                   <Background />
                </>
            )
        case 'graduation':
            return (
                <>
                    <Background />
                </>
            )
        default:
            return null
    }
}

export default BgFirstImage
