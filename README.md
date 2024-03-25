# Lendsqr Frontend Engineer Assessment

## Overview

This project is a React-based web application designed to provide a dynamic user interface with responsive design and accessibility features. It includes a login system and a dashboard for displaying user data.

### Key Features

- **Login Screen**: An authentication mechanism allowing users to securely access the dashboard.
- **Dashboard Screen**: A central hub for users to view, interact with, and manage their data in a user-friendly manner.

## Technology Stack

- **React**: Utilized for building the user interface, leveraging functional components and hooks for efficient state management.
- **TypeScript**: Enhances application reliability and developer experience by providing type safety.
- **SCSS**: Facilitates styling with advanced features like variables and mixins, ensuring a consistent and maintainable codebase.
- **React Router**: Handles in-app navigation, enabling seamless transitions between the login page and dashboard.
- **ESLint**: Maintains code quality and consistency through comprehensive static analysis.
- **Mirage JS**: Simulates an API backend, supporting development and testing by allowing realistic data interactions without an actual backend.
- **JSON Generator**: Assists in generating mock data for the application, facilitating development and testing with realistic datasets.
- **IndexedDB**: Used for client-side storage to enhance application performance and user experience by efficiently managing and querying large amounts of data.
- **LocalStorage**: Manages user sessions and authentication states, providing a seamless user experience.
- **Material UI**: A comprehensive suite of React components that follow Material Design principles, used to design a sleek, intuitive, and accessible user interface.

## Getting Started

### Prerequisites

Ensure you have the following installed before starting:
- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn

### Installation

1. Clone the repository:
```sh
git clone https://github.com/josebright/lendsqr-fe-test.git
```

2. Navigate to the project directory:
```sh
cd lendsqr-fe-test
```

3. Install dependencies:
```sh
npm install
```

4. Running the Project Locally:
```sh
npm start
```

#### This will launch the application in your default web browser at http://localhost:3000.

## Login Details

To log in to the application, you can use either of the following credentials:

- **Email**: "burtonvasquez@sustenza.com", **Password**: "labour"
- **Email**: "shepardvincent@arctiq.com", **Password**: "velit"

## Additional Notes

- **Mock API**: The application uses MirageJS to simulate API calls. You can customize the API behavior by editing the MirageJS configuration in the project.
- **Data Generation**: Use JSON Generator to create realistic datasets for development and testing purposes. The static data can be imported into MirageJS for a comprehensive development experience.
- **Performance**: IndexedDB is used for storing and querying data on the client side, which is particularly beneficial for handling large datasets and improving the overall performance of the application.
- **Authentication**: The application manages user sessions and authentication states using LocalStorage, ensuring that user credentials are securely stored and easily accessible.
