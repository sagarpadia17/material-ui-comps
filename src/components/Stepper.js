import React from 'react'
import VerticalStepper from '../maincomponents/stepper/Vertical'
import LinearStepper from '../maincomponents/stepper/Linear'
import NonlinearStepper from '../maincomponents/stepper/Non-linear'
const Stepper = () => {
    return (
        <div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Linear Stepper</h1>
                    <LinearStepper />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Non-linear Stepper</h1>
                    <NonlinearStepper />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Vertical Stepper</h1>
                    <VerticalStepper />
                </div>
            </div>
        </div>
    )
}

export default Stepper