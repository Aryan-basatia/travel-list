# 🧳 Travel List App - PackMate

A beautiful, interactive travel packing list application built with React to help you organize and track items for your trips.

**🔗 Live Demo:** [https://travel-list-gamma-ten.vercel.app/](https://travel-list-gamma-ten.vercel.app/)

---

## ✨ Features

- ➕ **Add Items** – Quickly add items to your packing list with quantity selector
- ❌ **Delete Items** – Remove unwanted items from your list
- ✔️ **Mark as Packed** – Check off items as you pack them
- 🔄 **Real-Time Updates** – Instant UI updates as you manage your list
- 📊 **Track Progress** – Visual statistics showing total items and packing percentage
- 🔀 **Sort Options** – Sort items by input order, description, or packed status
- 🧹 **Clear Functions** – Remove all packed items or clear the entire list with confirmation
- 📱 **Fully Responsive** – Works seamlessly on desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

- **React 19.2.4** – Modern UI library with hooks
- **React DOM 19.2.4** – DOM rendering
- **React Scripts 5.0.1** – Build and development tooling
- **JavaScript ES6+** – Modern JavaScript features
- **CSS3** – Responsive styling with Flexbox and CSS Grid
- **Testing Library** – React component testing (included)

---

## 📚 What I Learned

This project is a learning-focused React application that demonstrates:

- **React useState Hook** – Managing component state for items, quantities, and sort preferences
- **Form Handling** – Capturing user input and managing form state
- **List Rendering** – Using `map()` to render dynamic lists with unique keys
- **Conditional Rendering** – Showing/hiding UI elements based on state
- **State-Driven Architecture** – Building interactive UIs where the DOM updates automatically when state changes
- **Component Composition** – Building modular, reusable React components
- **Event Handling** – Managing clicks, submissions, and checkboxes
- **Array Methods** – Using `filter()`, `map()`, and `slice()` for state updates

### 🧠 Key Concept

Unlike vanilla JavaScript where you manually manipulate the DOM, this app uses **React's state-driven approach**. When the state changes, React automatically re-renders the UI to reflect the new data. This makes the code more predictable and easier to maintain.

---

## 📁 Project Structure

```
travel-list/
├── src/
│   ├── index.js          # React app entry point
│   ├── App.js            # Main App component with all logic
│   └── index.css         # Complete styling with responsive design
├── public/               # Static assets
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

### Key Components

- **App** – Main container managing global state for all items
- **Logo** – Displays the "PackMate" app title
- **Form** – Form to add new items with quantity selector
- **PackingList** – Displays items with sorting and action buttons
- **Item** – Individual item component with checkbox and delete button
- **Stats** – Shows packing progress and statistics

---

## 📦 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Aryan-basatia/travel-list.git
cd travel-list
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

---

## 💡 How to Use

1. **Add Items** – Type an item name in the input field, select a quantity from the dropdown, and click "Add"
2. **Mark Packed** – Check the checkbox next to an item to mark it as packed
3. **Delete Items** – Click the ❌ button to remove an item
4. **Sort Items** – Use the "Sort by" dropdown to organize items by input order, description, or packed status
5. **Clear Packed** – Click "Clear packed" to remove all packed items at once
6. **Clear All** – Click "Clear all" to remove all items (with confirmation)
7. **Track Progress** – View statistics at the bottom showing total items, packed count, and completion percentage

---

## 🎯 Future Improvements

- 💾 **Local Storage** – Save items to browser storage so they persist after page reload
- 🏷️ **Categories** – Organize items by category (clothes, essentials, electronics, etc.)
- 🎨 **Enhanced UI/UX** – Add animations, improved color schemes, and better visual feedback
- 🔄 **Sorting & Filtering** – Additional sort options and filters for better organization
- 📤 **Export List** – Download or share your packing list as PDF or text file

---

## 🙌 Contributing

Feedback and suggestions are welcome! If you have ideas for improvements or find any issues, feel free to:

- Open an issue on GitHub
- Submit a pull request with enhancements
- Share your feedback and suggestions

---

## 📄 License

This project is open source and available under the **MIT License**. You are free to use, modify, and distribute this project.

---

## 👨‍💻 Author

**Aryan Basatia**  
Aspiring MERN Stack Developer 🚀

Connect and follow for more projects!