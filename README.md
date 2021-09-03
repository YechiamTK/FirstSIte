# FirstSIte

A semi-twitter clone made as a learning project, using React and Flask created as a Single-Page-App.

The project has user-differentitation with signup an login mechanisms, tweeting and adding comments.

In the future I might add the more advanced mechanisms of tagging, following, having a personal page and personalized feed.

Many of the buttons currently are just place-holders. 

Also the backend is self-hosted and not hosted in the World Wide Web, if you wish to use it you need to prepare a backend enviorment, such as having sqlite and nodejs installed. 
Other dependencies needed are elaborated in requirements.txt (some of it for developement purposes only).

[Start-Up Guide]

The instructions can also be found in initialize_steps.txt.

Run the following commands in cmd or bash:

  1. set FLASK_APP=app
  2. (optional) set FLASK_ENV=development (cmd) | $env:FLASK_ENV="development"
  3. http-server ./ -p 80 [need to run in a different tab]
  4. (for development) npx babel --watch src --out-dir . --presets @babel/preset-react
  5. flask init-db
  6. flask run
