import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import type { NewTask } from '../../../types/task';

interface AddTaskFormProps {
  setShowTaskForm: (value: boolean) => void;
  handleCreateTask: (taskData: NewTask) => void;
}

const AddTaskForm = (props: AddTaskFormProps) => {
  const { setShowTaskForm, handleCreateTask } = props;

  const [formData, setFormData] = useState({
    title: '',
    color: '',
  });

  const colors = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#007AFF', '#5856D6', '#AF52DE', '#FF2D55', '#A2845E'];
  const isFormValid = formData.title.trim() !== '' && formData.color !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorSelect = (color: string) => {
    setFormData({
      ...formData,
      color,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleCreateTask(formData)
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 w-4/6 md:w-2/6">
      <button
        className="h-[14px] w-[14px]"
        onClick={() => setShowTaskForm(false)}
      >
        <ArrowLeftIcon className="text-white" />
      </button>
      <p className="text-light-blue">
        Title
      </p>
      <input
        type="text"
        name="title"
        placeholder="Ex. Brush your teeth"
        value={formData.title}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <p className="text-light-blue">
        Color
      </p>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`w-10 h-10 rounded-full border-2 ${
              formData.color === color ? 'border-white' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>
      <button 
        type="submit"
        className="btn btn-primary w-full hover:bg-medium-blue border-none bg-medium-blue disabled:bg-medium-blue disabled:text-light-gray"
        disabled={!isFormValid}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;