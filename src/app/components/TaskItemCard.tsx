import type { Task } from '../../../types/task';
import { TrashIcon } from '@heroicons/react/24/outline';

interface TaskItemCardProps {
  task: Task;
  handleDeleteTask: (taskId: number) => void;
  handleToggleCompleted: (task: Task) => void;
}

const TaskItemCard = (props: TaskItemCardProps) => {
  const { task, handleDeleteTask, handleToggleCompleted} = props;

  return (
    <div className='flex flex-row justify-between'>
      <input
        type="checkbox"
        style={{ borderColor: task.color }}
        className={`checkbox checkbox-sm rounded-full border-2 checked:bg-transparent focus:ring-0`}
        checked={task.completed}
        onChange={() => handleToggleCompleted(task)}
      />
      <p className='text-white'>
        {task.title}
      </p>

      <TrashIcon 
        className='w-5 h-5 text-light-gray hover:cursor-pointer'
        onClick={() => handleDeleteTask(task.id)}
      />
    </div>
  )
}

export default TaskItemCard;