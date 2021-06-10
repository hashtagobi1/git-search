import { ActionType } from "../action-types";
import { SearchResponseData } from "../../API/API";

type FetchRepos = {
  type: ActionType.FETCH_REPOS;
  total_count: number;
  payload: SearchResponseData;
};

export type Action = FetchRepos;
