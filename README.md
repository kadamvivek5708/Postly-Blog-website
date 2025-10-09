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

# Postly: A Modern Blog Website

Postly is a feature-rich, modern blog application built with the MERN stack (MongoDB, Express.js, React, Node.js) and powered by Appwrite for its backend services. It provides a seamless and intuitive platform for users to create, manage, and share their content with the world.

## Key Features

* **User Authentication:** Secure user registration and login functionality allows users to create and manage their own accounts.
* **Create and Manage Posts:** Users can create new blog posts using a rich text editor, and then edit or delete their existing posts.
* **My Posts:** A dedicated section for users to view and manage all of their own posts.
* **Featured Images:** Users can upload a featured image for each post, which is displayed on the post's page and on the home page.
* **Rich Text Editor:** A powerful and intuitive rich text editor (RTE) allows for easy formatting of blog posts.
* **Responsive Design:** The application is fully responsive and works seamlessly on all devices, from desktops to mobile phones.

## Tech Stack

* **Frontend:**
    * **React:** A popular JavaScript library for building user interfaces.
    * **React Router:** For handling routing within the application.
    * **Redux Toolkit:** For efficient state management.
    * **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
    * **TinyMCE:** A flexible and powerful rich text editor.
* **Backend:**
    * **Appwrite:** A secure, open-source backend platform that provides authentication, database, and storage services.
* **Build Tool:**
    * **Vite:** A next-generation frontend tooling that provides a faster and leaner development experience.

## Project Structure

The project follows a well-organized structure, with separate folders for components, pages, services, and assets. This modular approach makes the codebase easy to understand, maintain, and scale.

* **`src/`**: Contains the main source code of the application.
    * **`components/`**: Reusable UI components like `Header`, `Footer`, `Button`, etc.
    * **`pages/`**: The main pages of the application, such as `Home`, `Login`, `Signup`, etc.
    * **`appwrite/`**: Appwrite configuration and services for authentication, database, and storage.
    * **`store/`**: Redux Toolkit store and slices for state management.
    * **`assets/`**: Images, logos, and other static assets.

## Getting Started

To run the project locally, you will need to have Node.js and npm installed on your machine. Then, follow these steps:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/kadamvivek5708/postly-blog-website.git](https://github.com/kadamvivek5708/postly-blog-website.git)
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Set up your Appwrite backend and create a `.env` file with your Appwrite credentials.
4.  Start the development server:
5.  
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
=======
## Conclusion

Postly is a powerful and flexible blog application that provides a great user experience for both readers and writers. Its modern tech stack and well-structured codebase make it a great starting point for building your own blog or content-sharing platform.

