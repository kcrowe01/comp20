web.js successfully recieves data and places it in the mongodb named scores. When loading the home page all users are shown with a timestamp. The scores are sorted in decending order. Loading scores.json loads an empty array unless the query matches a username in the database. In this case it prints the score, username, timstamp, and final grid of each game played.

Collaborated with: Nate Winters and Emma Posamentier

Scores are stored as a variable of the game_manager.js while the grid is initiallized and stored in grid.js

In order to send the final score and grid to my web application I used the jquery post method withing the game_manager.js file. To do this I included 
 <script type = "text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>.