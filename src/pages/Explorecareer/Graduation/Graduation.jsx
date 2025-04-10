import React from 'react'
import BgFirstImage from '../../../components/BackgroundImage/BgFirstImage'


function UiModelBackground() {
  return(
    <>
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