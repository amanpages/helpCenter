------** NOTE **---

This is the work done as the frontend and backend was asked to to done.

Work is done with the help of React app fullfilling all requirements as asked.

The work is fully responsive and Tailwind CSS is being used to develop the designing.

There is not much of folder structure and middleware designed in the backend to keep code simple as there is just a single task and route.

.env file is to be created to connect with database to see the design with card use the deployed link.

To run locally use database in .env file then create the cards with help o POSTMAN application with post route in raw past by providing title and description. Route for postman to create card is (http://localhost:5000/cards) in post mode.


Backend:-
1. We used express, mongoDb for database.
2. There is proper routes for all as asked form /ping to check server to all the cards to single card to creating card.
3. The work to create card is being done with the help of POSTMAN here as there was no mention to develop a frontend page to create cards and to show all cards and to see each cards.
4. But we have created routes for all and we can check then all in POSTMAN application or if running locally then in our browsers.
5. To run backend in localhost we first need to clone this repository if you cloning this from gitHub moving next we will open codes in our code editors then we are going to push the command line (npm install) to install all dependencies.
6. Next as we have all required dependencies you can have your own Databse url in env file or for this deployed we already have it.
7. Next we are going to start the server with (node server.js) or if we have installed nodemon globally we can hit command (nodemon server.js).
8 This will open our server and we can check it with the way mentioned above, now we will be going to fronend part.


Frontend :-

1. The frontend of the application is created with the react app and we have just created the single page as mentioned. With little enhancement in cards sections and little color twiking which can be same if wanted.
2. The footer section also has a change in logo as there was only logo in the design but in my there is the logo with the name because the picture is directly extracted or the url is directly from the original website. As extractiong single picture from the image could be little difficult then just getting the URL.
3. The pages for creting card and displaying all cards and to show each card when clicked is not designed but can be designed but not done as it was not mentioned to design those pages so just routes have been created.
4. Whole page is responsive with design part with use of tailwind CSS and favicon is also been kept same as the logo.
5. To start with frontend in localhost we will first open file in our local computer then after starting backend we will direct our directory to the frontend folder then we will use command line (npm install) to install all dependencies, after installing all dependencies we will move ahead with the command line (npm start) to start the application in localhost network.
6. The frontend doesnot use any .env here but we can when required adn axios package is used to aquire backend.

Thank you,
MD.Aman