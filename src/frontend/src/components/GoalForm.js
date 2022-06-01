import React, { Fragment } from "react"

import ErrorModal from "../components/ErrorModal"

import { Dialog, Transition } from "@headlessui/react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import client from "../utils/client"

const GoalForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const watchTargetRange = watch("target")

  const onSubmit = async (data) => {
    try {
      props.setGoalLoading(true)

      const formData = {
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endData: data.endDate,
        target: data.target
      }

      await client({
        method: "POST",
        url: "/api/v1/goals",
        data: formData
      })
      toast.success("Goal created!")
      props.setOpen(false)
    } catch (error) {
      console.error(error)
      toast.error('Failed to create new goal. Please try again.')
    } finally {
      props.setGoalLoading(false)
    }
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" onClose={props.setOpen} className="relative z-10">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Backdrop sibling */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
            aria-hidden="true"
          />
        </Transition.Child>

        {/* Full screen container to center the panel */}
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative mx-auto max-w-sm rounded-lg sm:w-full bg-white p-6 shadow-xl transform transition-all">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mx-auto max-w-sm space-y-10"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-2xl leading-6 font-semibold text-gray-900 my-3"
                  >
                    Add Goal
                  </Dialog.Title>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-500 mb-1"
                    >
                      Goal Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                      placeholder="Text"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <ErrorModal errorMessage="Your input is required" />
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-500 mb-1"
                    >
                      Goal Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                      placeholder="Text"
                      {...register("description", {
                        required: true,
                      })}
                    />
                    {errors.description && (
                      <ErrorModal errorMessage="Your input is required" />
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-500 mb-1"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                      {...register("startDate", {
                        required: true,
                      })}
                    />
                  </div>
                  {errors.startDate && errors.startDate.type === "required" && (
                    <ErrorModal errorMessage="Your input is required" />
                  )}

                  <div>
                    <label
                      htmlFor="endDate"
                      className="block text-sm font-medium text-gray-500 mb-1"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                      {...register("endDate", {
                        required: true,
                      })}
                    />
                    {errors.endDate && errors.endDate.type === "required" && (
                      <ErrorModal errorMessage="Your input is required" />
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="target"
                      className="block text-sm font-medium text-gray-500 mb-1"
                    >
                      Target {watchTargetRange}
                    </label>
                    <input
                      type="range"
                      name="target"
                      id="target"
                      className="block w-full"
                      {...register("target", {
                        required: true,
                      })}
                    />
                    {errors.target && errors.target.type === "required" && (
                      <ErrorModal errorMessage="Your input is required" />
                    )}
                  </div>

                  <button
                    className="w-full rounded-md px-4 py-2 bg-indigo-600 text-white font-medium border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none"
                    onClick={props.handleGoalFormSubmit}
                  >
                    Add
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default GoalForm
