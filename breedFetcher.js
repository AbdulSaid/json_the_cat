const request = require("request");
let breedName = process.argv.slice(2,3);
let breedNameString = breedName.toString();
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedNameString}`, function(error, response, body) {
  
  if (error) {
    console.error('API Request Error', error);
    return;
  }
  const data = JSON.parse(body);
  // console.log('data',data[0])
  // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log('what is this',typeof body);
  if (!data[0]) {
  // console.log('This is data',data);
  // console.log("what is data:", typeof data);
    console.log("The breed doesn't exist");
  } else {
    console.log(data[0].description);
  }
  
  
});
