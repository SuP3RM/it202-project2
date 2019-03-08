## Porject 2

#### For UIC IT 202 course

To use:
Here are some options to quickly spin up a local web server to let your browser render local files best ran in incognito window.

Python 2
If you have Python installed...

Change directory into the folder where your file some.html or file(s) exist using the command cd /path/to/your/folder

Start up a Python web server using the command python -m SimpleHTTPServer

This will start a web server to host your entire directory listing at http://localhost:8000

You can use a custom port  python -m SimpleHTTPServer 9000 giving you link: http://localhost:9000
This approach is built in to any Python installation.

Python 3
Do the same steps, but use the following command instead python3 -m http.server

Node.js
Alternatively, if you demand a more responsive setup and already use nodejs...

Install http-server by typing npm install -g http-server

Change into your working directory, where yoursome.html lives

Start your http server by issuing http-server -c-1

This spins up a Node.js httpd which serves the files in your directory as static files accessible from http://localhost:8080

Ruby
If your preferred language is Ruby ... the Ruby Gods say this works as well:

ruby -run -e httpd . -p 8080
PHP
Of course PHP also has its solution.

php -S localhost:8000


From stackoverflow: answered by Scott Stensland
https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local
