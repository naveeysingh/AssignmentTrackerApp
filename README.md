```markdown
# AssignmentTracker App 

An effective web application that helps students track their assignments, deadlines, and submission statuses with ease.

## 👤 Author
**Nabin Singh**

## Project Description

The **Assignment Tracker App** is built using Node.js, Express, MongoDB with Mongoose, and HBS as the templating engine. This app allows users—particularly students—to:

- Add new assignments
- Edit existing assignments
- Delete completed assignments
- View all current assignments in a clean, organized list
- Search assignments using keywords
- Receive visual notifications upon task updates via flash messages

## Purpose of the Application

This application is designed to support students in managing their academic workload more efficiently. With clear visibility into their upcoming tasks and deadlines, students can prioritize work, avoid missing submissions, and reduce stress related to academic responsibilities.

## Why is This Application Useful?

By organizing assignments with details like titles, questions/descriptions, deadlines, and statuses, the app:

- Enhances time management
- Prevents assignment loss/forgetfulness
- Improves productivity and mental clarity

## Additional Feature

An advanced **search functionality** is included that allows users to find specific assignments by keywords. This is powered using MongoDB’s built-in text indexing. Additionally:

- **Flash messages** using `connect-flash` and `express-session` are integrated to notify users about successful creation, updates, and deletion.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** HTML5, HBS (Handlebars), Bootstrap 5
- **Other Packages:** dotenv, connect-flash, express-session, body-parser

## Styling Approach

The app uses the **Bootstrap framework** to ensure a responsive and modern UI, allowing faster development of a clean and accessible layout without deep CSS knowledge.


## Getting Started


```bash
git clone https://github.com/naveeysingh/AssignmentTrackerApp.git
cd AssignmentTrackerApp


```

### 2. Install Dependencies

```bash
npm install


```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add your MongoDB URI:

```ini
MONGO_URI=your_mongodb_connection_string

```

### 4. Run the App

```bash
npm start

```

Visit `http://localhost:3000` in your browser.

## Live Deployment

The app is deployed to render platform.

## Features

- ✅ Create assignment with title, description/question, deadline, and status
- ✅ Edit assignment details
- ✅ Delete completed assignments
- ✅ Flash messages for feedback
- ✅ Search functionality for assignments
- ✅ Responsive layout with Bootstrap
