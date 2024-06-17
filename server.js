// 3 types of modules

// modules that we write ourselves
// modules that other people write (useSWR)
// core node modules... that we import as we need them

import { createServer } from "node:http";

export const server = createServer((request, response) => {
  console.log("I am the server :)");
  // console.log("request object: ", request);
  console.log("request.method: ", request.method);
  console.log("request.url: ", request.url);

  // here we will write our response
  if (request.url === "/hello") {
    response.statusCode = 200;
    return response.end("Hello World");
  } else if (request.url === "/goodbye") {
    response.statusCode = 200;
    return response.end("Bye World");
  }

  response.statusCode = 404;
  response.end("Sorry, not found, fancy design");
});

//  status codes

// 100(s) information
// 200(s) means all good
// 300(s) redirecting
// 400(s) 404! not found // means the user screwed up
// 500(s) // server error (we screwed up)

// meet back at 10:22
