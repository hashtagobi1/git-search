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
  responseMessage: string | null;
  resultsPerPage: number[];
  pagesShownAmount: number[];
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
  perPage: number;
}

interface SetInput {
  type: ActionType.SET_INPUT;
  payload: string;
}

interface GetReadme_SUCCESS {
  type: ActionType.GET_README_SUCCESS;
  readMe: string;
  loading: boolean;
  errorState: boolean;
}
interface GetReadme_REQUEST {
  type: ActionType.GET_README_REQUEST;
  readMe: string;
  loading: boolean;
}
interface GetReadme_ERROR {
  type: ActionType.GET_README_ERROR;
  readMe: string;
  loading: boolean;
  errorState: boolean;
}

interface GetUserRepo_SUCCESS {
  type: ActionType.GET_USER_REPO_SUCCESS;
  repoEndpoint: string;
  loading: boolean;
  errorState: boolean;
  payload:any
}
interface GetUserRepo_REQUEST {
  type: ActionType.GET_USER_REPO_REQUEST;
  repoEndpoint: string;
  loading: boolean;
}
interface GetUserRepo_ERROR {
  type: ActionType.GET_USER_REPO_ERROR;
  repoEndpoint: string;
  loading: boolean;
  errorState: boolean;
}
interface InvertModal {
  type: ActionType.INVERT_MODAL;
  showModal: boolean;
}

type FetchRepos = FetchRepos_SUCCESS | FetchRepos_REQUEST | FetchRepos_ERROR;
type GetReadMe = GetReadme_SUCCESS | GetReadme_REQUEST | GetReadme_ERROR;
type GetUserRepo =
  | GetUserRepo_SUCCESS
  | GetUserRepo_REQUEST
  | GetUserRepo_ERROR;
export type Action =
  | FetchRepos
  | SetInput
  | GetReadMe
  | InvertModal
  | GetUserRepo;
