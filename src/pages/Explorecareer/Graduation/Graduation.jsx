import React from 'react'
import BgFirstImage from '../../../components/BackgroundImage/BgFirstImage'

import ButtonOptions from '../ButtonOptions';
/**
 * 
 * @returns Importing randomtextanimation here
 */


function UiModelBackground() {
  return(
    <>
    {/* Button options imported here to implement the logic for 
        UI redering according to user's click on the buttons .. */}
      <ButtonOptions />
      <div>
        I am the graduations..page
      </div>
    </>
  )
}


function Graduation() {
  /**
   * Main function of the file...
   */
  return (
    <>
      <BgFirstImage whichPage={'graduation'} />
      <UiModelBackground />
    </>
  )
}

export default Graduation