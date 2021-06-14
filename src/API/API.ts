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

export type SearchResponseData = {
  incompleteResults: boolean;
  items: [];
  totalCount: number;
};
