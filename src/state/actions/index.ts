import { ActionType } from "../action-types";
import { SearchResponseData } from "../../API/API";

interface FetchRepos_SUCCESS {
  type: ActionType.FETCH_REPO_SUCCESS;
  total_count: number;
  payload: SearchResponseData;
  rateLimit: number;
  rateLimitRemaining: number;
  pageNumber: number;
  perPage: number;
  totalPages: number[];
  responseMessage:string | null
  resultsPerPage: number[]

}

interface FetchRepos_REQUEST {
  type: ActionType.FETCH_REPOS_REQUEST;
  loading: boolean;
  payload: [];
}

interface FetchRepos_ERROR {
  type: ActionType.FETCH_REPOS_ERROR;
  errorState: boolean;
  errorMessage: string;
  error: Error | null;
}

interface SetInput {
  type: ActionType.SET_INPUT;
  payload: string;
}

type FetchRepos = FetchRepos_SUCCESS | FetchRepos_REQUEST | FetchRepos_ERROR;

export type Action = FetchRepos | SetInput;
