import React from 'react'
import BasicTransferList from '../maincomponents/transferlists/BasicTransferList'
import EnhancedTransferList from '../maincomponents/transferlists/EnhancedTransferList'

const TransferList = () => {
  return (
    <div>
        <div className="row px-5">
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Basic Transfer List</h1>
          <BasicTransferList />
        </div>
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Enhanced Transfer List</h1>
          <EnhancedTransferList />
        </div>
        </div>
    </div>
  )
}

export default TransferList