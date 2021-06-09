import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import axios from "axios";

const endpoint: string = "https://api.github.com";

export const RunMiddle = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RUN_MIDDLE,
    });
  };
};

type SearchResponseData = {
  inCompleteResults: boolean;
  items: {}[];
  totalCount: number;
};

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

export const fetchRepos = () => async (dispatch: any, getState: any) => {
  const response = await axios.get(
    `https://api.github.com/search/repositories?q={dashboard}&page,per_page,sort,order}`
  );

  const data = response.data;
  console.log(data);
  // await searchRepo("simple dashboard 100 coins")

  dispatch({
    type: ActionType.FETCH_REPOS,
    inCompleteResults: data.inCompleteResults,
    items: data.items,
    totalCount: data.totalCount,
  });
};
