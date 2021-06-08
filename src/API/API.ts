import axios from "axios";

// Get Number of Current Requests

// ! https://github.com/axios/axios/issues/1510

export const getCurrentRequests = async () => {
  const endpoint = "https://api.github.com/users/defunkt";
  const data :number= await (await axios
    .get(endpoint)
    .then((r) => {
      console.log(r.headers["x-ratelimit-remaining"]);

      return r.headers["x-ratelimit-remaining"];
    })
    .catch((err) => {
      console.log(err);
    }))
    return data
};
