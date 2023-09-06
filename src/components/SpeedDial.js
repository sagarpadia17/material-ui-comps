import React from 'react'
import Customiconspeeddial from '../maincomponents/speeddial/Customiconspeeddial'
import Playgroundspeeddial from '../maincomponents/speeddial/Playgroundspeeddial'
const SpeedDial = () => {
    return (
        <div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Custom icon dial</h1>
                    <Customiconspeeddial />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Playground speed dial</h1>
                    <Playgroundspeeddial />
                </div>
            </div>
        </div>
    )
}

export default SpeedDial