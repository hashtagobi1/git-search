import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import axios from "axios";
import { endpoint, headerConfig, headerReadMe } from "../../API/API";

interface fetchReposProps {
  searchTerm: string;
  pageNumber: number;
  perPage: number;
  sort?: string;
  order?: string;
}

export const fetchRepos =
  (searchTerm: string, pageNumber: number, perPage: number) =>
  async (dispatch: Dispatch<Action>) => {

    // Error for empty search
    if (!searchTerm) {
      return dispatch({
        type: ActionType.FETCH_REPOS_ERROR,
        errorState: true,
        errorMessage: "Search box cannot be empty, try: 'cool repository' ",
        error: null,
        perPage: 0,
      });
    }
    const newEndpoint = `${endpoint}/search/repositories?q=${searchTerm}&page=${pageNumber}&per_page=${perPage}&sort=stars`;

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

          // If there are no repo's with the search term
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
            pagesShownAmount: [pageNumber, 15],
          });
        } else if (response) {
          // Display available repo's

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
            pagesShownAmount: [pageNumber, 15],
          });
        }
      })
      .catch((error) => {
        if (error.message.includes("422")) {
          return dispatch({
            type: ActionType.FETCH_REPOS_ERROR,
            errorState: true,
            errorMessage:
              "Only the first 1000 search results are available. Try something more specific",
            perPage: 0,
            error: error.message,
          });
        }
        if (error.message.includes("403")) {
          dispatch({
            type: ActionType.FETCH_REPOS_ERROR,
            errorState: true,
            errorMessage: `Your API rate limit has exceeded. Either wait 60 secs or sign in to increase search limit.`,
            perPage: 0,
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

export const getReadMe =
  (user: string, repoName: string) =>
  async (dispatch: Dispatch<Action>, getState: any) => {
    const newEndpoint = `${endpoint}/repos/${user}/${repoName}/readme`;
    console.log("readMe  has been dispatched");

    // Dispatch First Request
    dispatch({
      type: ActionType.GET_README_REQUEST,
      readMe: "",
      loading: true,
    });

    await axios
      .get(newEndpoint, headerReadMe)
      .then((response) => {
        if (
          response.data.content === undefined ||
          response.data.content === null
        ) {
          return dispatch({
            type: ActionType.GET_README_SUCCESS,
            readMe: "",
            loading: false,
            errorState: false,
          });
        }
        dispatch({
          type: ActionType.GET_README_SUCCESS,
          readMe: response.data.content,
          loading: false,
          errorState: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionType.GET_README_ERROR,
          readMe: "",
          loading: false,
          errorState: true,
        });
      });
  };

export const showModal = (showing: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.INVERT_MODAL,
      showModal: showing,
    });
  };
};

export const getUserRepo =
  (full_name: string) => async (dispatch: Dispatch<Action>, getState: any) => {
    const newEndpoint = `${endpoint}/repos/${full_name}`;

    dispatch({
      type: ActionType.GET_USER_REPO_REQUEST,
      repoEndpoint: "",
      loading: true,
    });
    await axios
      .get(newEndpoint, headerConfig)
      .then((response) => {
        return dispatch({
          type: ActionType.GET_USER_REPO_SUCCESS,
          repoEndpoint: newEndpoint,
          loading: false,
          errorState: true,
        });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({
          type: ActionType.GET_USER_REPO_SUCCESS,
          repoEndpoint: newEndpoint,
          loading: false,
          errorState: true,
          payload: error,
        });
      });
  };
