import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import axios from "axios";
import { SearchResponseData } from "../../API/API";
import { endpoint, headerConfig } from "../../API/API";

// ! https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=1&per_page=10

// * get page + per page
//  ? page 1 as default (((onClick then we fetch repo with different number?.....)))
// ? select 25,50,100 per page

interface fetchReposProps {
  searchTerm: string;
  pageNumber: number;
  perPage: number;
  sort?: string;
  order?: string;
}

export const fetchRepos =
  (searchTerm: string, pageNumber: number, perPage: number) =>
  async (dispatch: Dispatch<Action>, getState: any) => {
    // const availablePages
    const newEndpoint = `${endpoint}/search/repositories?q=${searchTerm}&page=${pageNumber}&per_page=${perPage}&sort=stars`;
    if (!searchTerm) {
      return dispatch({
        type: ActionType.FETCH_REPOS_ERROR,
        errorState: true,
        errorMessage: "Search box cannot be empty, try: 'cool repository' ",
        error: null,
      });
    }

    // Dispatch First Request
    dispatch({
      type: ActionType.FETCH_REPOS_REQUEST,
      loading: true,
      payload: [],
    });

    await axios
      .get(newEndpoint, headerConfig)
      .then((response) => {
        const amountOfPages = Math.ceil(response.data.total_count / perPage);

        if (response.data.total_count === 0) {
          return dispatch({
            type: ActionType.FETCH_REPO_SUCCESS,
            total_count: response.data.total_count,
            payload: response.data,
            rateLimit: response.headers["x-ratelimit-limit"],
            rateLimitRemaining: response.headers["x-ratelimit-remaining"],
            pageNumber: pageNumber,
            perPage: perPage,
            totalPages: [...Array(amountOfPages)],
            responseMessage: "No results found for search: ",
            resultsPerPage: [10, 25, 50, 100],
          });
        } else if (pageNumber > amountOfPages && amountOfPages > 1) {
          return dispatch({
            type: ActionType.FETCH_REPOS_ERROR,
            errorState: true,
            errorMessage:
              "Only the first 1000 search results are available. Try something more specific",
            error: null,
          });
        } else if (response) {
          return dispatch({
            type: ActionType.FETCH_REPO_SUCCESS,
            total_count: response.data.total_count,
            payload: response.data,
            rateLimit: response.headers["x-ratelimit-limit"],
            rateLimitRemaining: response.headers["x-ratelimit-remaining"],
            pageNumber: pageNumber,
            perPage: perPage,
            totalPages: [...Array(amountOfPages)],
            responseMessage: null,
            resultsPerPage: [10, 25, 50, 100],
          });
        }
      })
      .catch((error) => {
        if (error.message.includes("422")) {
          return dispatch({
            type: ActionType.FETCH_REPOS_ERROR,
            errorState: true,
            errorMessage:
              "Only the first 1000 search results are available. Try something more specific" +
              error,
            error: error.message,
          });
        }
        if (error.message.includes("403")) {
          dispatch({
            type: ActionType.FETCH_REPOS_ERROR,
            errorState: true,
            errorMessage: `Your API rate limit has probably exceeded. Either wait 60 secs or sign in to increase search limit.`,
            error: error.message,
          });
        }
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
