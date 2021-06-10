import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import axios from "axios";
import { SearchResponseData } from "../../API/API";

const endpoint: string = "https://api.github.com";

// Search Repo
const searchRepo = async (searchTerm: string) => {
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
  return data;
};

// ! html url is repo url
// ! stargazers_count
// ! open_issues_count
// ! forks_count
// ! description

// ! https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=1&per_page=10

export const fetchRepos =
  (searchTerm: string) => async (dispatch: Dispatch<Action>, getState: any) => {
    const newEndpoint = `${endpoint}/search/repositories?q=${searchTerm}&page=1&per_page=10&sort=stars`;

    if (!searchTerm) {
      console.log(searchTerm);
      return dispatch({
        type: ActionType.FETCH_REPOS_ERROR,
        errorState: true,
        errorMessage: "Search box cannot be empty, try: 'cool repository'",
        error: null,
      });
    }

    dispatch({
      type: ActionType.FETCH_REPOS_REQUEST,
      loading: true,
      payload: [],
    });

    await axios
      .get(newEndpoint)
      .then((response) => {
        console.log(response);
        dispatch({
          type: ActionType.FETCH_REPO_SUCCESS,
          total_count: response.data.total_count,
          payload: response.data,
          rateLimit: response.headers["x-ratelimit-limit"],
          rateLimitRemaining: response.headers["x-ratelimit-remaining"],
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: ActionType.FETCH_REPOS_ERROR,
          errorState: true,
          errorMessage:
            "Rate Limit Reached. Please wait 60 seconds before trying again",
          error: error,
        });
      });
  };

export const setInput = (userText: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_INPUT,
      payload: userText,
    });
  };
};
