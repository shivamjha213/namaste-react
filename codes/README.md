Reconciliation is React’s process of updating the DOM efficiently when your app’s UI changes. Diffing is the algorithm React uses to compare the old and new UI trees to decide what needs to change.

🔄 What Is Reconciliation in React?
Reconciliation is the internal process React uses to figure out how to update the DOM when your app's state or props change.
- React builds a new virtual DOM tree based on the latest render.
- It compares this new tree with the previous virtual DOM tree.
- Then it updates only the parts of the real DOM that changed — not the whole page.
This makes React fast and efficient, especially for complex UIs.

🧠 What Is Diffing?
Diffing is the algorithm React uses during reconciliation to compare the old and new trees.

React assumes:
- Elements of different types mean a full replacement.
- Elements of same type may have changed props or children — so it goes deeper.


Under the hood, React uses:
- ReactFiberReconciler to manage the virtual DOM tree.
- diffChildren and reconcileChildren functions to compare and update nodes.


When you call root.render(...), React does the following:
- it replaces all the preexisting text with new one.

- Checks if anything is already rendered inside the root (#shiv).
- If yes, it compares the new element (heading) with the previous one — this is the diffing step.
- Based on the differences, React updates only the changed parts of the real DOM — this is reconciliation.


==========================================================================================================

A JavaScript object is a data structure used to store key-value pairs, while a React element is a special object that describes what you want to see on the screen. React uses these element objects to build and update the UI efficiently.

--------------------------------------------------------------------------------
🧱 1. What is a JavaScript Object?
A JavaScript object is just a collection of properties. It’s like a box with labels and values inside.
const person = {
  name: "Shivam",
  age: 25,
  isDeveloper: true
};
- You can access person.name or person["age"].
- It’s used to store and organize data.

--------------------------------------------------------------------------------
2. What is a React Element (React Object)?
A React element is a JavaScript object too — but it follows a specific structure that React understands.
When you write:
const heading = React.createElement("h1", { id: "title" }, "Hello React");

React internally creates an object like this:
{
  type: "h1",
  props: {
    id: "title",
    children: "Hello React"
  }
}

This is called a React element. It’s not HTML yet — it’s a blueprint telling React what to render.

=============================================================================================
=============================================================================================
                                        ASSIGNMENT 1

Chapter 01 - Inception
---

# Web & React Essentials

### ● What is Emmet?
Emmet is a plugin for code editors that allows developers to write shorthand syntax which expands into complete HTML or CSS code. For example, typing `div.container>ul>li*3` expands into a `<div>` with a list of three `<li>` items.

---

### ● Difference between a Library and Framework
- **Library**: A collection of reusable functions you call when needed. You are in control of the flow.  
  *Example: React (you decide how to use its components).*
- **Framework**: Provides a structured environment and controls the flow of your application. You fill in the details.  
  *Example: Angular (it dictates how the app is built).*

---

### ● What is CDN? Why do we use it?
A **Content Delivery Network (CDN)** is a system of distributed servers that deliver web content (like scripts, styles, images) from locations closer to the user.  
We use it to:
- Improve performance (faster loading).
- Reduce server load.
- Increase reliability and availability.

---

### ● Why is React known as React?
React is named for its ability to **react** quickly to changes in data. When state or props change, React efficiently updates the UI using its virtual DOM and reconciliation process.

---

### ● What is `crossorigin` in script tag?
The `crossorigin` attribute in a `<script>` tag defines how browsers handle cross‑origin requests for that script.  
- `anonymous`: Requests without credentials (cookies, HTTP auth).  
- `use-credentials`: Requests with credentials.  
It’s often used with CDNs to enable proper error reporting and resource sharing.

---

### ● Difference between React and ReactDOM
- **React**: The core library for building UI components and managing state.  
- **ReactDOM**: Provides DOM‑specific methods to render React components into the browser’s actual DOM (e.g., `ReactDOM.createRoot` and `root.render`).

---

### ● Difference between `react.development.js` and `react.production.js` via CDN
- **react.development.js**: Includes helpful warnings, error messages, and debugging tools. Larger in size, slower, but great for development.  
- **react.production.js**: Optimized and minified for performance. No extra warnings, smaller file size, faster loading — used in production.

---

### ● What is `async` and `defer`?
Both are attributes for `<script>` tags that control how scripts load and execute:
- **async**: Script loads in parallel with HTML parsing and executes immediately when ready (may block parsing). Best for independent scripts.  
- **defer**: Script loads in parallel but executes only after HTML parsing is complete. Best for scripts that depend on the DOM.

---

