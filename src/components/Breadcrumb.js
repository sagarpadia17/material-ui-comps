import React from 'react'
import BasicBreadcrumbs from '../maincomponents/breadcrumb/BasicBreadcrumbs'
import CollapsedBreadcrumbs from '../maincomponents/breadcrumb/CollapsedBreadcrumbs'
import CustomBreadcrumbs from '../maincomponents/breadcrumb/CustomBreadcrumbs'

const Breadcrumb = () => {
    return (
        <div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Basic Breadcrumb</h1>
                    <BasicBreadcrumbs />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="m-3">Collapsed Breadcrumb</h1>
                    <CollapsedBreadcrumbs />
                </div>
                <div className="col-md-6 mt-3 ">
                    <h1 className="m-3">Custom Breadcrumb</h1>
                    <CustomBreadcrumbs />
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb