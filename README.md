
NOTES
Backend:
- I choose Mongodb Atlas Cloud for my database
- Mongoose was used for DB operations
- MVC pattern used for the architecture
- No security was implemented in the application, all cors requests are excepted
Frontend: 
- Built with create-react-app
- Styling and layout was done using Styled Components
- A variety of frontend Libraries were used - see package.json
- Theme styles are contained in app.css
- Redux is used to manage the state of the api post call to save a contact
- All other state is managed using hooks
- Images were sourced from google, unsplash for header image


INSTRUCTIONS TO RUN THE APPLICATION LOCALLY WITH A PRODUCTION BUILD
1. Install Dependencies with command: 'npm install'
2. Add the environment variables: create a .env file in the root folder and add the following variables, replacing MONGO_ATLAS_URL's value with your DB url
****** MONGO_ATLAS_URL=MONGO_DB_URL
****** REACT_APP_API_URL=http://localhost:4000
2. Build the React frontend bundle with command: 'npm run build'
3. Start the server (which will listen on port 4000) with command: 'npm start'
4. Open http://localhost:4000 in a browser

INSTRUCTIONS TO RUN THE APPLICATION LOCALLY IN DEVELOPMENT MODE
1. Install Dependencies with command: 'npm install'
2. Tell webpack to start a live server on the frontend (which will be available on port 3000 - http://localhost:3000): 'npm run frontend-dev'
3. Start the dev server (which will listen on port 4000) with command: 'npm run server-dev'

TESTING?

"frontend-dev": "react-scripts start",
    "server-dev": "nodemon server/server.js",
    "test": "react-scripts test",
