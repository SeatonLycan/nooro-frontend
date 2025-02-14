import Clipboard from '../../../public/Clipboard.png';
import type { Task } from '../../../types/task';
import Image from 'next/image';
import TaskItemCard from './TaskItemCard';

interface TaskContainerProps {
  tasks: Task[];
  handleDeleteTask: (taskId: number) => void;
  handleToggleCompleted: (task: Task) => void;
}

const TaskContainer = (props: TaskContainerProps) => {
  const { tasks, handleDeleteTask, handleToggleCompleted } = props;

  return (
    <div className='w-4/6 md:w-2/6 mt-16'>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-2'>
          <p className='text-light-blue text-sm font-extrabold'>
            Tasks
          </p>
          <p className='text-white text-sm font-extrabold'>
            {tasks.length}
          </p>
        </div>

        <div className='flex flex-row gap-2'>
          <p className='text-light-purple text-sm font-extrabold'>
            Completed
          </p>
          <p className='text-white text-sm font-extrabold'>
            {tasks.reduce((acc, task) => task.completed ? acc + 1 : acc, 0)} of {tasks.length}
          </p>
        </div>
      </div>

      {!!tasks.length && (
        <div className='flex flex-col gap-4 mt-4'>
          {tasks.map((task, i) => (
            <TaskItemCard 
              key={i}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleToggleCompleted={handleToggleCompleted}
            />
          ))}
        </div>
      )}

      {!tasks.length && (
        <div className='flex flex-col items-center gap-4 mt-16'>
          <Image
            src={Clipboard.src}
            alt="Clipboard Icon"
            width="56"
            height="56"
          />
          <p className='text-light-gray'>
            You don't have any tasks registered yet.
          </p>

          <p className='text-light-gray'>
            Create tasks and organize your to-do items.
          </p>
        </div>
      )}
    </div>
  )
}

export default TaskContainer;