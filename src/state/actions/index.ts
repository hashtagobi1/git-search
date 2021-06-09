import { ActionType } from "../action-types";

interface RunMiddleAction {
  type: ActionType.RUN_MIDDLE;
}



interface FetchRepos {
  type: ActionType.FETCH_REPOS;
  inCompleteResults: boolean;
  items:[];
  totalCount: number;
}

export type Action = RunMiddleAction | FetchRepos;
