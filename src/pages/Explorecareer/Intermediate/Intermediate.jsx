import React from 'react'

import BgFirstImage from '../../../components/BackgroundImage/BgFirstImage'

function UiModelBackground() {
  return(
    <>
      <div>
        intermediate model here
      </div>
    </>

  )
}


function Intermediate() {
  /**
   * Main function of the file..
   */
  return (
    <>
      <BgFirstImage  whichPage={'intermediate'}/>
      <UiModelBackground />
    </>
  )
}

export default Intermediate