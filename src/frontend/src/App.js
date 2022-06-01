import {useEffect, useState} from "react";
import {HiPlusSm} from "react-icons/hi";

import client from "./utils/client"

const goalsStatic = [
  {id: 1, name: "Meditation", description: "Meditation is good mkay"},
  {id: 2, name: "Exercise", description: "Exercise is good mkay"},
]

const App = () => {
  const [goals, setGoals] = useState([])

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
    fetchGoals().then(r => console.log('Then fired ' + r))
  }, [])

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-4xl text-blue-800">Goal Tracker</h1>
      <h2>hello</h2>

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mt-5">
        <table className="min-w-full divide-y divide-gray-300">
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
              Description
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
          {goals.map((goal) => (
            <tr key={goal.id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {goal.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {goal.description}
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit<span className="sr-only">, {goal.name}</span>
                </a>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
