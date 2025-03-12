# To-Do App

## Overview
This is a simple **To-Do application** that allows users to add, delete, and mark tasks as completed. The tasks are stored in **localStorage**, so they persist even after the page is refreshed.

## ✨ Features
- **Add new tasks**
- **Mark tasks as completed**
- **Delete tasks**
- **Persist tasks using localStorage**
- **User-friendly UI with a clean design**

## 🛠️ Technologies Used
- **HTML** – Structure of the app
- **CSS** – Styling and layout
- **JavaScript** – Functionality and logic
- **LocalStorage** – Persistent data storage

## 🚀 Installation & Usage
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/to-do-app.git
   ```
2. **Navigate to the project folder:**
   ```sh
   cd to-do-app
   ```
3. **Open `index.html` in your browser.**
   - Alternatively, you can use **Live Server** in VS Code for a better development experience.

## 📂 File Structure
```
/To-Do-App
│── index.html       # Main HTML file
│── style.css        # CSS for styling
│── script.js        # JavaScript for logic
│── icons/           # Folder containing delete & check icons
│   ├── delete.svg   # Delete icon
│   ├── check.svg    # Check icon
│── README.md        # Documentation
```

## 🎯 How It Works
### Adding a Task
1. Enter a task in the input field.
2. Click the "**Add**" button or press **Enter**.
3. The task will be added to the list and saved in **localStorage**.

### Marking a Task as Completed
1. Click the **checkbox** next to a task.
2. The task will be visually marked as completed.
3. The status is saved in **localStorage**.

### Deleting a Task
1. Click the **trash icon** next to a task.
2. The task will be removed from the list and **localStorage**.

## Local Storage Integration
- The app uses **localStorage** to store tasks so that they persist even after refreshing the page.
- Tasks are saved as an **array of objects** in **JSON format**.
- Whenever a task is added, marked as done, or deleted, **localStorage** is updated automatically.

## Contributing
If you would like to contribute:
1. **Fork** the repository.
2. **Create a new branch**.
3. **Commit your changes**.
4. **Open a pull request**.
