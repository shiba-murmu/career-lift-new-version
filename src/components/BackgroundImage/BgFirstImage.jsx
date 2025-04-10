import React from 'react'


function Background() {
    /**
     * Actual background model is here...
     */
    return(
        <>
            <div className='w-full '>
               <img src="./images/career.jpeg" alt="background"
               className='w-full h-96 object-center object-fit object-cover' />
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
