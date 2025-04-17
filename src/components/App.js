import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTaskDelete =(textToRemove)=> {
    setTasks(tasks.filter(task=>task.text !==textToRemove));
  };
  
  const handleCategorySelect = (category) =>{
    setSelectedCategory(category);
  };

  handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks.newTask]);
  };
  const filteredTask = selectedCategory === "ALL"
  ?tasks : tasks.filter(task => task.category ===selectedCategory);

  return (
    <div className="App">
      
    </div>
  )
}
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
