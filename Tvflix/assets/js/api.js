"use strict";

const api_key = "69ccd2a98317ee1c8ecd08800887cdf5";
const imageBasrURL = "https://image.tmdb.org/t/p/";

// fetch datafrom a server using the `url` and phases
// the result in JSON data to a `callback`

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBasrURL, api_key, fetchDataFromServer };
