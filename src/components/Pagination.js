import React from 'react'
import BasicPagination from '../maincomponents/pagination/Basicpagination'
import OutlinedPagination from '../maincomponents/pagination/OutlinedPagination'
import RoundedPagination from '../maincomponents/pagination/Roundedpagination'
import PaginationSize from '../maincomponents/pagination/Paginationsize'
const Pagination = () => {
    return (
        <div>
            <div className="row px-5 justify-content-center">
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Basic pagination</h1>
                    <BasicPagination/>
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Outlined pagination</h1>
                    <OutlinedPagination/>
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Rounded pagination</h1>
                    <RoundedPagination/>
                </div>
                <div className="col-md-4 mt-3">
                    <h1 className="m-3">Pagination Size</h1>
                    <PaginationSize/>
                </div>
            </div>
        </div>
    )
}

export default Pagination