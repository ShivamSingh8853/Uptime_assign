This is a GitHub-inspired front-end application built with **React**, **Tailwind CSS**, and **React Router**, featuring a contributions calendar, popular repositories, user info, and responsive layout.

---

## Features

- Responsive layout similar to GitHub homepage
- User profile display
- Popular repositories section
- Contributions calendar with month-wise activity
- Responsive tabs (Overview, Repositories, Projects, Packages, Stars)
- Footer with links
- API endpoints served via a local Express server for contributions and activity data

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm or yarn
- Git (optional, for cloning the repo)

---

## Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/github-clone.git
cd github-clone

## Install Dependencies
# Using npm
npm install

# Or using yarn
yarn install

## Start the backend server

cd server
npm install
node index.js


## Start the React Application

cd ..
npm start

## FIle Structure

/server          # Express backend serving JSON data
/src
  /Component     # Reusable components (Header, Footer, User, Tabs, Contributions)
  /pages         # Pages for Repositories, Projects, Packages, Stars
  App.js         # Main application
  index.js       # React entry point
/public
  popular_repo.json
  data.json
  activity.json


## API Endpoints

GET /api/contributions → Returns year-wise contributions
GET /api/activity/:year → Returns activity overview for a given year
GET /api/user → Returns user information

Evidence:

<img width="1470" height="956" alt="Screenshot 2025-11-18 at 6 28 52 PM" src="https://github.com/user-attachments/assets/9dfa8a76-ff69-4448-9f10-b5eee8c181b1" />
<img width="1470" height="956" alt="Screenshot 2025-11-18 at 3 57 51 PM" src="https://github.com/user-attachments/assets/6040c3f4-1730-4b1f-b71c-83872e5fc852" />
