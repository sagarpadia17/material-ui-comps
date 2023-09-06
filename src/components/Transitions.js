import React from 'react'
import Collapsetransitions from "../maincomponents/transitions/Collapsetransitions";
import Fadetransitions from "../maincomponents/transitions/Fadetransitions";
import Growtransitions from "../maincomponents/transitions/Growtransitions";
import Sliderelativetransitions from "../maincomponents/transitions/Sliderelativetransitions";
import Slidetransitions from "../maincomponents/transitions/Slidetransitions";
import Transitiongroup from "../maincomponents/transitions/Transitiongroup";
import Zoomtransitions from "../maincomponents/transitions/Zoomtransitions";
const Transitions = () => {
    return (
        <div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Collapse Transitions</h1>
                    <Collapsetransitions />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Fade Transitions</h1>
                    <Fadetransitions />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Grow Transitions</h1>
                    <Growtransitions />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Slide relative to a container Transitions</h1>
                    <Sliderelativetransitions />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Slide Transitions</h1>
                    <Slidetransitions />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Transition Group</h1>
                    <Transitiongroup />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Zoom Transitions</h1>
                    <Zoomtransitions />
                </div>
            </div>
        </div>
    )
}

export default Transitions