import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(
    categories.find((cat) => cat !== "All") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newTask = { text, category };
      onTaskFormSubmit(newTask);
      setText("");
      setCategory(categories.find((cat) => cat !== "All"));
    }
  };

  const filteredCategories = categories.filter((cat) => cat !== "All");

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details</label>
      <input
        id="task-details"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {filteredCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
