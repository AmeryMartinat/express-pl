express-pl

Developed on Node v12.18.0

Steps to run:
1. create local postgres DB, name: pltest, user: postgres
2. npm-install
3. ./bin/www (to inititalize db)
4. cntrl+c to kill app
5. node_modules/.bin/sequelize-cli db:seed:all
6. ./bin/www
7. navigate to localhost:9999
8. Copy Paste mockData.json contents into textarea and press Parse
9. Hopefully it worked. 

