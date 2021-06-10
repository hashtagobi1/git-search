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

export const fetchRepos =
  () => async (dispatch: Dispatch<Action>, getState: any) => {
    const response = await axios.get(
      // ! https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=1&per_page=10
      `https://api.github.com/search/repositories?q=dashboard&page=1&per_page=10`
      // `https://api.github.com/search/repositories?q={dashboard}&page=1,per_page=10,sort,order}`
    );

    const data = response.data;
    console.log(data);
    // await searchRepo("simple dashboard 100 coins")

    dispatch({
      type: ActionType.FETCH_REPOS,
      total_count: data.total_count,
      payload: data,
      // inCompleteResults: data.inCompleteResults,
      // items: data.items,
      // totalCount: data.totalCount,
    });
  };
