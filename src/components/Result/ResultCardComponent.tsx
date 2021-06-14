// Styles
import { MyButton } from "../HeaderBar/HeaderBar.styles";
import {
  ResultCard,
  ResultContainer,
  ResultBody,
  ResultHeader,
  LinkTag,
  NotShowing,
} from "./Result.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";
import DetailedView from "../DetailedView/DetailedView";

const ResultCardComponent = () => {
  // State
  let results = useSelector((state: State) => state.fetchRepoReducer.items[0]);

  const repoEndpoint: string = useSelector(
    (state: State) => state.getUserRepoReducer.repoEndpoint
  );

  const text = useSelector((state: State) => state.inputReducer.input);
  const pageNumber = useSelector(
    (state: State) => state.fetchRepoReducer.pageNumber
  );
  const perPage = useSelector((state: State) => state.fetchRepoReducer.perPage);

  const modalState: boolean = useSelector(
    (state: State) => state.showModalReducer.showModal
  );
  const dispatch = useDispatch();
  const { getReadMe, showModal, fetchRepos, getUserRepo } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const parseDate = (result: Date): string => {
    const myDate = new Date(result);
    const stringDate = myDate.toString();
    return stringDate.slice(0, 15);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await showModal(!modalState);
    await fetchRepos(text, pageNumber, perPage);
  };

  const printName = async (
    destination: string,
    username: string,
    repoName: string
  ) => {
    await showModal(!modalState);
    getUserRepo(destination);
    getReadMe(username, repoName);
  };

  return (
    <ResultContainer>
      {results &&
        results.map((result: any) => {
          const str = result.full_name.split("/");
          const username = str[0];
          const repoName = str[1];
          const destination = result.full_name;
          let description: string = result.description;

          if (!description) {
            description = "No description provided";
          }

          return !modalState ? (
            <div key={result.id}>
              <ResultCard bg="light" border="dark">
                <ResultBody>
                  <ResultCard.Title>
                    Repo Name:{" "}
                    <LinkTag target="_blank" href={result.html_url}>
                      {repoName}
                    </LinkTag>
                  </ResultCard.Title>
                  <ResultCard.Subtitle>Owner: {username}</ResultCard.Subtitle>
                  <ResultCard.Header as={ResultHeader}>
                    🌟: {result.stargazers_count} <br />
                    🐛: {result.open_issues_count}
                    <br />
                    🍴: {result.forks_count}
                  </ResultCard.Header>
                  <ResultCard.Text>
                    {`${description.slice(0, 85)}...`}
                  </ResultCard.Text>

                  <ResultCard.Footer>
                    Created On {parseDate(result.created_at)}
                  </ResultCard.Footer>
                </ResultBody>
                <MyButton
                  onClick={printName.bind(
                    this,
                    destination,
                    username,
                    repoName
                  )}
                >
                  View Details
                </MyButton>
              </ResultCard>
            </div>
          ) : (
            <div key={result.id}>
              {repoEndpoint.includes(result.full_name) ? (
                <>
                  <MyButton onClick={handleSubmit}>Back To Results</MyButton>
                  <DetailedView
                    username={username}
                    result={result}
                    parseDate={parseDate}
                  />
                </>
              ) : (
                <NotShowing>should'nt see</NotShowing>
              )}
            </div>
          );
        })}
    </ResultContainer>
  );
};

export default ResultCardComponent;
