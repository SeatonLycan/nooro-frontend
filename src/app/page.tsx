'use client';

import { useEffect, useState } from "react";
import type { Task, NewTask } from '../../types/task';
import Layout from "./components/Layout";
import CreateTaskButton from "./components/CreateTaskButton";
import TaskContainer from "./components/TaskContainer";
import AddTaskForm from "./forms/AddTaskForm";
import { getTasks, createTask, deleteTask, updateTask } from './services/taskServices';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [showTaskForm, setShowTaskForm] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  }

  const handleCreateTask = async (taskData: NewTask) => {
    const response = await createTask(taskData);
    setTasks([...tasks, response]);
    setShowTaskForm(false);
  }

  const handleDeleteTask = async (taskId: number) => {
    const previousTasks = tasks;
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  
    try {
      await deleteTask(taskId);
    } catch (error) {
      console.error("Failed to delete task:", error);
      setTasks(previousTasks);
    }
  };

  const handleToggleCompleted = async (task: Task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const response = await updateTask(task.id, updatedTask);
    setTasks(tasks.map(task => (task.id === updatedTask.id ? response : task)));
  };

  if (isLoading) return (
    <Layout>
      <p className="text-white">
        Loading...
    </p>
    </Layout>
  )

  return (
    <Layout>
      {showTaskForm ?
        <AddTaskForm 
          setShowTaskForm={setShowTaskForm}
          handleCreateTask={handleCreateTask}
        />
      :
      <>
        <CreateTaskButton
          setShowTaskForm={setShowTaskForm}
        />
        <TaskContainer 
          tasks={tasks} 
          handleDeleteTask={handleDeleteTask}
          handleToggleCompleted={handleToggleCompleted}
        />
      </>
      }
    </Layout>
  );
}
