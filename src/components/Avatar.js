import React from 'react'
import ImageAvatars from '../maincomponents/avatars/ImageAvatars'
import BackgroundLetterAvatars from '../maincomponents/avatars/BackgroundLetterAvatar'
import IconAvatars from '../maincomponents/avatars/IconsAvatar'

const Avatar = () => {
  return (
    <div>
        <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Image Avatars</h1>
          <ImageAvatars />
        </div>
  
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Letter Avatars</h1>
          <BackgroundLetterAvatars />
        </div>
  
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Icons Avatars</h1>
          <IconAvatars />
        </div>
  
       
        </div>
    </div>
  )
}

export default Avatar