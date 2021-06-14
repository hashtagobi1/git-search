import React from "react";
import {
  MarkdownWrapper,
  LinkTag,
  ProfileCard,
  MainSection,
} from "./DetailedView.styles";
import ReactMarkdown from "react-markdown";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";

// utils
import { Base64 } from "js-base64";

interface DetailedViewProps {
  result: any;
  username: string;
}

const DetailedView = ({ result, username }: DetailedViewProps) => {
  const base64_readMe: string = useSelector(
    (state: State) => state.readMeReducer.readMe
  );
  const readMeInMarkdown = Base64.decode(base64_readMe);

  return (
    <ProfileCard>
      <MainSection>
        <h1>
          RepoName:
          <LinkTag target="_blank" href={result.html_url}>
            {result.name}
          </LinkTag>
        </h1>
        <h3>User: {username}</h3>
        Stars 🌟: {result.stargazers_count}
        <br />
        Bugs 🐛: {result.open_issues_count}
        <br />
        Forks 🍴: {result.forks_count}
        <br />
        Main Language: {result.language}
        {/* <i 
                    className="swift"
                    src={swift}
                    
                    ></i> */}
        {/* <img 
                    height="36"
                    width="36"
                    
                    // src={allLang.results.language}
                    alt="programming logo"
                    /> */}
        <br />
        <p>
          Description: <br />
          {result.description}
        </p>
        <br />
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
