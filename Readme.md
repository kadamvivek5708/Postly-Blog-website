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
    ```bash
    npm run dev
    ```

## Conclusion

Postly is a powerful and flexible blog application that provides a great user experience for both readers and writers. Its modern tech stack and well-structured codebase make it a great starting point for building your own blog or content-sharing platform.
