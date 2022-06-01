import React, { Fragment } from "react"

import { Dialog, Transition } from "@headlessui/react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import client from "../../utils/client"

const DeleteForm = (props) => {
  const { handleSubmit } = useForm()

  const onSubmit = async () => {
    try {
      props.setGoalLoading(true)

      await client({
        method: "DELETE",
        url: `/api/v1/goals/delete/${props.selectedGoal.id}`
      })
      toast.success("Goal deleted!")
      props.setDeleteOpen(false)
    } catch (error) {
      console.error(error)
      toast.error('Failed to delete goal. Please try again.')
    } finally {
      props.setGoalLoading(false)
    }
  }

  return (
    <Transition.Root show={props.deleteOpen} as={Fragment}>
      <Dialog as="div" onClose={props.setDeleteOpen} className="relative z-10">
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
                    Delete Goal
                  </Dialog.Title>

                  <Dialog.Description
                    as="h4"
                    className="text-lg leading-6 font-medium text-gray-600 my-3"
                  >
                    Are you sure you want to delete this goal?
                  </Dialog.Description>


                  <button
                    className="w-full rounded-md px-4 py-2 bg-red-700 text-white font-medium border border-transparent shadow-sm hover:bg-red-800 focus:outline-none"
                    onClick={props.handleGoalFormSubmit}
                  >
                    DELETE
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

export default DeleteForm