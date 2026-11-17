import { useEffect, useState } from "react"

import GoalDetail from "./components/GoalDetail/index"
import GoalForm from "./components/GoalForm"
import client from "./utils/client"

const App = () => {
  const [goals, setGoals] = useState([])
  const [goalLoading, setGoalLoading] = useState(false)
  const [selectedGoal, setSelectedGoal] = useState(false)
  const [open, setOpen] = useState(false)

  const fetchGoals = async () => {
    try {
      const result = await client({
        method: "GET",
        url: "/api/v1/goals",
      })
      setGoals(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchGoals().then((r) => console.log("fired " + r))
    setSelectedGoal(false)
    console.log("goal loading is " + goalLoading)
  }, [goalLoading])

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex justify-between">
        <h1 className="text-4xl text-indigo-900">Goal Tracker</h1>
        <button
          className="rounded-md px-6 py-2 bg-indigo-600 text-white font-medium border border-transparent shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => setOpen(true)}
        >
          Create Goal
        </button>
      </div>

      {open && (
        <GoalForm
          open={open}
          setOpen={setOpen}
          setGoalLoading={setGoalLoading}
        />
      )}

      <div className="grid grid-cols-3 gap-10 my-10">
        <div className="overflow-hidden shadow-md ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="divide-y divide-gray-300 w-full">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Target
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {goals.map((goal) => (
                <tr
                  key={goal.id}
                  className="hover:bg-gray-200 cursor-pointer"
                  onClick={() => setSelectedGoal(goal)}
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {goal.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {goal.target}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-2 shadow-md">
          {selectedGoal ? (
            <GoalDetail selectedGoal={selectedGoal} setGoalLoading={setGoalLoading} goalLoading={goalLoading} />
          ) : (
            <h2 className="text-2xl text-semibold text-indigo-900 text-center">
              Select a goal for details
            </h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
