# Mega Blog

This is a full-stack blogging platform built with React, Vite, and Appwrite. It allows users to create, read, update, and delete blog posts. The application features user authentication, a rich text editor for creating posts, and a responsive design.

---

## Features

* **User Authentication**: Users can sign up, log in, and log out of their accounts. This is handled using Appwrite's authentication service.
* **Create, Read, Update, and Delete (CRUD) Posts**: Authenticated users can create new blog posts, view existing posts, edit their own posts, and delete their own posts.
* **Rich Text Editor**: The application uses TinyMCE, a powerful rich text editor, to allow users to format their blog posts with various styling options, including headings, lists, and images.
* **Image Uploads**: Users can upload featured images for their blog posts, which are stored using Appwrite's storage service.
* **Responsive Design**: The application is built with Tailwind CSS, making it fully responsive and accessible on various devices, including desktops, tablets, and mobile phones.

---

## Tech Stack

* **Frontend**: React, Vite, Redux Toolkit, React Router, Tailwind CSS
* **Backend**: Appwrite (Authentication, Database, and Storage)
* **Rich Text Editor**: TinyMCE

---

## Getting Started

### Prerequisites

* Node.js and npm (or yarn) installed on your machine
* An Appwrite account and project set up

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/kadamvivek5708/mega_blog.git](https://github.com/kadamvivek5708/mega_blog.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd mega_blog
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the root directory and add your Appwrite configuration details, similar to the `.env.sample` file.
5.  Start the development server:
    ```bash
    npm run dev
    ```

---

## Project Structure

The project is organized into the following directories:

* **public**: Contains public assets like `vite.svg`.
* **src**: Contains the main source code for the application.
    * **appwrite**: Contains the configuration and services for interacting with Appwrite.
    * **assets**: Contains static assets like images.
    * **components**: Contains reusable React components.
    * **conf**: Contains configuration files, such as Appwrite environment variables.
    * **pages**: Contains the main pages of the application (e.g., Home, Login, Signup).
    * **store**: Contains the Redux store and slices for state management.
* **.github**: Contains GitHub-specific files, such as workflow configurations.
* **dist**: Contains the production build of the application.

---

## Key Components

* **App.jsx**: The main component that sets up the application's layout and routing.
* **Header.jsx**: The navigation bar at the top of the page.
* **Footer.jsx**: The footer at the bottom of the page.
* **Login.jsx** and **Signup.jsx**: Components for user authentication.
* **PostForm.jsx**: The form for creating and editing blog posts, which includes the TinyMCE rich text editor.
* **PostCard.jsx**: The component for displaying a single blog post in a list.