import React from 'react'
import BasicTabs from '../maincomponents/tabs/BasicTabs'
import DisabledTabs from '../maincomponents/tabs/Disabledtabs'
import CenteredTabs from '../maincomponents/tabs/CenteredTabs'
import ScrollableTabs from '../maincomponents/tabs/Scrollabletabs'
import Verticaltabs from '../maincomponents/tabs/Verticaltabs'
import Icontabs from '../maincomponents/tabs/Icontabs'

const Tabs = () => {
    return (
        <div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Basic tabs</h1>
                    <BasicTabs />
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Disabled tabs</h1>
                    <DisabledTabs />
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Centered Tabs</h1>
                    <CenteredTabs />
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Scrollable Tabs</h1>
                    <ScrollableTabs />
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Vertical Tabs</h1>
                    <Verticaltabs />
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Icon Tabs</h1>
                    <Icontabs />
                </div>
            </div>
        </div>
    )
}

export default Tabs