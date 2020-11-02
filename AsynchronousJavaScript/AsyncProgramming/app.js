// What is synchronous programming
/*
  - Synchronous code will start execution at the top of the file and continue execution till it reaches the end of the file

  Example:-
  cosnt posts = loadPostsSync();
  //  ...wait till posts are fetched 
  //  ...do something with posts
  dotheNextThing(); // has to wait untill posts load 
*/

// What is Asynchronous programming
/*
  - Synchronous code will start execution at the top of the file and continue execution till it reaches a point where it encounter a asynchronous function/code and split off and execute the asynchonour code seperately and continue to execute the rest of the code.

  cosnt posts = loadPostsSync(function () {
    //  ...wait till posts are fetched 
    //  ...do something with posts
  });
  dotheNextThing(); // doesn't have to wait until posts load
*/

/*
  There are a few ways to work with Async code

  - Callbacks
  - Promises
  - Async/Await
*/
