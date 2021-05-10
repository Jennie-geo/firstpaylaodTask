# firstpaylaodTask

 # get all user
 router.get('/api/people', getDetails) fetches all the data saved in database

 # create route
 router.post('/api/people', createDetails) inserts/creates data in the database
 # get a single user route

 router.get('/api/people/:userId', singleUserDetails) fetches a single data from the database using the id of the person and attached it in the api

 # update route
 router.patch('/api/people/:userId', updateUserDetails) updates a single data in the database using the id of the person and attached it in the api

 # delete route
 router.delete('/api/people/:userId', deleteUserDetails) delete a single data in the database using the id of the person and attached it in the api

 # hosted link to heroku
 firstdeployment1.herokuapp.com is the link to my heroku page where i deployed the tasks

