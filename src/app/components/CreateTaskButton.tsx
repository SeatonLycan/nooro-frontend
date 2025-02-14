import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface CreateTaskButtonProps {
  setShowTaskForm: Dispatch<SetStateAction<boolean>>
}

const CreateTaskButton = (props: CreateTaskButtonProps) => {
  const { setShowTaskForm } = props;

  return (
    <button 
      className="btn bg-medium-blue text-white hover:bg-medium-blue md:w-2/6 w-4/6 border-none"
      onClick={() => setShowTaskForm(true)}  
    >
      Create Task
      <PlusCircleIcon className="w-5 h-5 text-white" />
    </button>
  )
}

export default CreateTaskButton;