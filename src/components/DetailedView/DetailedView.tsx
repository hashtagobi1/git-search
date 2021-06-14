import React from "react";
import {
  MarkdownWrapper,
  LinkTag,
  ProfileCard,
  MainSection,
  Gap,
} from "./DetailedView.styles";
import ReactMarkdown from "react-markdown";

// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";

// utils
import { Base64 } from "js-base64";

interface DetailedViewProps {
  result: any;
  username: string;
  parseDate: any;
}
const DetailedView = ({ result, username, parseDate }: DetailedViewProps) => {
  // State
  const base64_readMe: string = useSelector(
    (state: State) => state.readMeReducer.readMe
  );
  let readMeInMarkdown = Base64.decode(base64_readMe);

  if (
    readMeInMarkdown === null ||
    readMeInMarkdown === undefined ||
    !readMeInMarkdown
  ) {
    readMeInMarkdown = "`No Read me provided.`";
  }

  return (
    <ProfileCard>
      <MainSection>
        <h1>
          RepoName:
          <br />
          <LinkTag target="_blank" href={result.html_url}>
            {result.name}
          </LinkTag>
        </h1>
        <Gap>&nbsp;</Gap>
        <h3>Owner: {username}</h3>
        <br />
        <Gap>&nbsp;</Gap>
        Stars 🌟: {result.stargazers_count}
        <br />
        Bugs 🐛: {result.open_issues_count}
        <br />
        Forks 🍴: {result.forks_count}
        <br />
        <Gap>&nbsp;</Gap>
        <p>
          Main Language:
          <strong> {result.language}</strong>
        </p>
        <Gap>&nbsp;</Gap>
        <p>
          Description: <br />
          {result.description}
        </p>
        <br />
        <Gap>&nbsp;</Gap>
        <p>
          Last Updated:
          <br />
          <strong>{parseDate(result.updated_at)}</strong>
        </p>
        <br />
      </MainSection>
      <MarkdownWrapper>
        <h1>ReadMe:</h1>
        <ReactMarkdown>{readMeInMarkdown}</ReactMarkdown>
      </MarkdownWrapper>
    </ProfileCard>
  );
};

export default DetailedView;
