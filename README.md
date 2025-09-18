# Today I Learned

A simple React application that allows users to share and vote on interesting facts. This project was created to learn and practice React, state management, and interaction with a backend service (Supabase).

## Features

  * **Share Facts:** Users can add new facts to the list by filling out a form with the fact's text, source, and category.
  * **Categorization:** Facts are organized into categories, each with a distinct color for easy identification.
  * **Voting System:** Users can vote on facts as "interesting," "mind-blowing," or "false."
  * **Real-time Updates:** The application fetches and displays facts from a Supabase backend, allowing for dynamic content.
  * **Responsive Design:** The layout is designed to work on various screen sizes.

## Technologies Used

  * **React:** A JavaScript library for building user interfaces.
  * **Supabase:** An open-source Firebase alternative used for the backend database and API.
  * **CSS:** For styling the application.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * **Node.js and npm:** Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/anubhav0610/today-i-learned.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd today-i-learned/today-i-learned-main
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Usage

1.  **Start the development server:**
    ```sh
    npm start
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

## v1

The `v1` directory contains the initial version of this project, which was built with plain HTML, CSS, and vanilla JavaScript. It uses a hardcoded array of facts instead of a backend. You can open the `v1/index.html` file in your browser to see this version.
