import SwipeableDrawers from '../maincomponents/drawer/SwipeableDrawers'
import TemporaryDrawer from '../maincomponents/drawer/TemporaryDrawer'
import MiniDrawer from '../maincomponents/drawer/MinivariantDrawer'
import React from 'react'

const Drawer = () => {
    return (
        <div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Swipeable Drawer</h1>
                    <SwipeableDrawers />
                </div>
            </div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Temporary Drawer</h1>
                    <TemporaryDrawer />
                </div>
            </div>
            {/* <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Persistent Drawer</h1>
                    <PersistentDrawer />
                </div>
            </div> */}
            <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Mini Variant Drawer</h1>
                    <MiniDrawer />
                </div>
            </div>
        </div>
    )
}

export default Drawer