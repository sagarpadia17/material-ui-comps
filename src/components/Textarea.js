import React from 'react'
import Basictextarea from '../maincomponents/textarea/Basictextarea'
import Minimumtextarea from '../maincomponents/textarea/Minimumtextarea'
import Maximumtextarea from '../maincomponents/textarea/Maximumtextarea'
const Textarea = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Textarea</h1>
          <Basictextarea />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Minimum Size Textarea</h1>
          <Minimumtextarea />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Maximum size Textarea</h1>
          <Maximumtextarea />
        </div>
      </div>
    </div>
  )
}

export default Textarea