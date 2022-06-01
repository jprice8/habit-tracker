import React, { useState } from "react"

import EditForm from "./EditForm"
import DeleteForm from "./DeleteForm"
import MonthChart from "./MonthChart"
import YearChart from "./YearChart"

import { RiEditFill, RiDeleteBin7Fill } from "react-icons/ri"

const GoalDetail = (props) => {
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const handleEditClicked = () => {
    setEditOpen(true)
    setDeleteOpen(false)
  }

  const handleDeleteClicked = () => {
    setDeleteOpen(true)
    setEditOpen(false)
  }

  return (
    <div className="border p-10 h-full">
      {/* Edit Form */}
      {editOpen && (
        <EditForm
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          setGoalLoading={props.setGoalLoading}
          selectedGoal={props.selectedGoal}
        />
      )}

      {deleteOpen && (
        <DeleteForm
          deleteOpen={deleteOpen}
          setDeleteOpen={setDeleteOpen}
          setGoalLoading={props.setGoalLoading}
          selectedGoal={props.selectedGoal}
        />
      )}

      <div className="flex justify-between">
        {/* Info */}
        <div>
          <div className="mb-4">
            <p className="text-sm text-gray-600">Start Date</p>
            <h3 className="text-lg font-semibold">
              {props.selectedGoal.startDate}
            </h3>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600">End Date</p>
            <h3 className="text-lg font-semibold">
              {props.selectedGoal.endDate}
            </h3>
          </div>
        </div>

        {/* Settings */}
        <div>
          <div className="flex space-x-4">
            <RiEditFill
              className="h-5 w-5 cursor-pointer text-indigo-800 hover:text-indigo-400"
              onClick={handleEditClicked}
            />
            <RiDeleteBin7Fill
              className="h-5 w-5 cursor-pointer text-indigo-800 hover:text-indigo-400"
              onClick={handleDeleteClicked}
            />
          </div>
        </div>
      </div>

      {/* Month view */}
      <div className="my-10">
        <MonthChart />
      </div>

      {/* Year view */}
      <div className="my-10">
        <YearChart />
      </div>
    </div>
  )
}

export default GoalDetail
