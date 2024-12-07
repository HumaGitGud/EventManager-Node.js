# EventManager-Node.js

A responsive web application built with Node.js, Express, and EJS, enabling users to create, view, and manage events. The app supports event submission, displays all upcoming events sorted by date, and provides options to mark events as finished or delete them.

## Features
- **Dynamic Event Management**: Submit events with a title, description, and date-time. View all events and manage their status dynamically.
- **Database Integration**: Uses MariaDB for storing and retrieving event data.
- **Responsive Design**: Optimized for both desktop and mobile devices, with a clean and user-friendly interface.
- **Templating with EJS**: Dynamic rendering of event details and pages.
- **Routing**: Three primary routes to handle home, event submission, and all-events listing.
- **Error Handling**: Validates input on the server and client to ensure data integrity.

## Technologies Used
- **Backend**: Node.js, Express
- **Frontend**: EJS, HTML, CSS, JavaScript
- **Database**: MariaDB
- **Environment Configuration**: dotenv

## How to Run
1. Clone the repository:
git clone https://github.com/your-username/event-manager.git

2. Install dependencies:
npm i express ejs mariadb dotenv

3. Set up your .env file with the following variables:
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

4. Start the server:
npx nodemon or node app.js

5. Open your browser and navigate to http://localhost:3000