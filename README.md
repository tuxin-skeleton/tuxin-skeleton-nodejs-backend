# tuxin-skeleton-nodejs-backend

this is a nodejs backend part of a starter kit I created at https://github.com/tuxin-skeleton.
which wasn't that long ago :) so if you have any suggestions to improve it, 
please let me know.

included nodejs features:

- https web server
- ini - ini parser
- tls - for https certificates
- newrelic - well.. newreli


## how to build

### installing nodejs packages

`npm install`

###- config.ini

please copy `config/config.ini.defaults` to `config/config.ini`, open it with your favorite text editor, and change it according to your configuration.

in general you have 2 categories in config.ini

- `certs` - certificates for the tls module of the https server
- `web_server` - which includes the https port to open, client project location and the routes to map to index.html

# running the server

just execute `bin/www`

# Things to notice

##- Routes Configuration

some people redirect all requests that can't match to an existing files to index.html,
I don't quite like this approach cause sometimes I would add link to invalid images, html or javascript locations
and they would return the index.html output instead of 404. it made it harder for me to notice errors, so instead
of that I have all the relevant routes listed in config.ini instead.

# Tested

this package was tested on a macbook pro  with macOS Sierra, using nodejs 6.8.1 installed with nvm.

if for some reason you encounter problems with different versions of node, please let me know.
