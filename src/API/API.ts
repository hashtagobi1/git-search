import axios from "axios";
// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

export const endpoint: string = "https://api.github.com";

export const headerConfig = {
  headers: {
    "Content-Type": "application/vnd.github.v3+json",
  },
};

export const headerReadMe = {
  headers: {
    "Content-Type": "application/vnd.github.VERSION.raw",
  },
};


// Props

// Get RateLimitNumbers

// ! https://github.com/axios/axios/issues/1510

// ? find out how to include my Login Details within the

export const getRateLimitRemaining = async () => {
  const newEndpoint = `${endpoint}/rate_limit`;
  const data: number = await await axios
    .get(
      newEndpoint
      //   {
      //   headers: {
      //     "Access-Control-Allow-Origin": "true",
      //   },
      // }
    )
    .then((r) => {
      return r.headers["x-ratelimit-remaining"];
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getRateLimitTotal = async () => {
  const newEndpoint = `${endpoint}/rate_limit`;
  const data: number = await await axios
    .get(
      newEndpoint

      //   {
      //   headers: {
      //     "Access-Control-Allow-Origin": "true",
      //   },
      // }
    )
    .then((r) => {
      return r.headers["x-ratelimit-limit"];
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

// Searching Repos

export type SearchResponseData = {
  incompleteResults: boolean;
  items: [];
  totalCount: number;
};

const search =
  "https://api.github.com/search/repositories?q={simple%20dashboard%20that%20displays%20100%20coins}{&page,per_page,sort,order}";
const gap = "%20";

export const searchRepo = async (searchTerm: string) => {
  const newEndpoint = `${endpoint}/search/repositories?q={${searchTerm}}&page,per_page,sort,order}`;
  const data: SearchResponseData = await await axios
    .get(newEndpoint)
    .then((r) => {
      // console.log(r);
      return r.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return console.log(data);
};

// ! they can search languages too.. 'amazing language:go'

// *need to login before we can access that data!!
