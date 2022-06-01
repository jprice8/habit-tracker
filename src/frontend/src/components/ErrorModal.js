import React from "react"
import { HiXCircle } from "react-icons/hi"

const ErrorModal = (props) => {
  return (
    <div className="rounded-md bg-red-50 p-4 mt-2">
      <div className="flex">
        <div className="flex-shrink-0">
          <HiXCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div>
          {props.errorMessage && (
            <h3 className="text-sm font-medium text-red-800">
              {props.errorMessage}
            </h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorModal
