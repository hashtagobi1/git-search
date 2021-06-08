import axios from "axios";

const endpoint: string = "https://api.github.com";

// Get RateLimitNumbers

// ! https://github.com/axios/axios/issues/1510

// ? find out how to include my Login Details within the

export const getRateLimitRemaining = async () => {
  const newEndpoint = `${endpoint}/users/defunkt`;
  const data: number = await await axios
    .get(newEndpoint, {
      headers: {
        "The header i want is to add the user name that has been logged in with":
          "hashtagobi1",
      },
    })
    .then((r) => {
      return r.headers["x-ratelimit-remaining"];
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getRateLimitTotal = async () => {
  const newEndpoint = `${endpoint}/users/defunkt`;
  const data: number = await await axios
    .get(newEndpoint)
    .then((r) => {
      return r.headers["x-ratelimit-limit"];
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

// Searching Repos

export const searchRepo = async () => {
  const newEndpoint = `${endpoint}/search/code`;
  const data = await await axios
    .get(newEndpoint)
    .then((r) => {
      console.log(r);
    })
    .catch((error) => {
      console.log(error);
    });
};

// ! they can search languages too.. 'amazing language:go'

// *need to login before we can access that data!!
