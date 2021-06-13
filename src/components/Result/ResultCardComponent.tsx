// Styles
import { MyButton } from "../HeaderBar/HeaderBar.styles";
import {
  ResultCard,
  ResultContainer,
  ResultTitle,
  ResultBody,
  ResultHeader,
  LinkTag,
  ModalPop,
  SpreaderContainer,
} from "./Result.styles";

// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";
const ResultCardComponent = () => {
  const results = useSelector(
    (state: State) => state.fetchRepoReducer.items[0]
  );

  // ! html url is repo url
  // ! stargazers_count
  // ! open_issues_count
  // ! forks_count
  // ! description
  //   ! readme
  const parseDate = (result: Date): string => {
    const myDate = new Date(result);
    const stringDate = myDate.toString();
    return stringDate.slice(0, 15);
  };

  const showModal = () => {
    // ? view more repo info.... a coomponent or

    // ! Button to jump back to previous search...
    // ! the link on the button would be a fetch with the current state properties

    // * creaate state for showing modal... set it to true

    // * let x set it to false!!!
    // () =>
    // ! alert(`dispatch action to show popup of more details!
    // ! owners name:
    // ! languages
    // ! sizes
    // ! readme
    //  ! liiiimit the description
    console.log("showModal");
  };

  return (
    <ResultContainer>
      {results ? (
        results.map((result: any) => {
          let description = result.description;
          let username = result.full_name.split("/");
          username = username[0];

          if (!description) {
            description = "No description provided";
          }

          return (
            <ResultCard bg="light" border="dark" key={result.id}>
              <ResultBody>
                <ResultCard.Title>
                  Repo Name:{" "}
                  <LinkTag target="_blank" href={result.html_url}>
                    {result.name}
                  </LinkTag>
                </ResultCard.Title>
                <ResultCard.Subtitle>User: {username}</ResultCard.Subtitle>
                <ResultCard.Header as={ResultHeader}>
                  🌟: {result.stargazers_count} <br />
                  🐛: {result.open_issues_count}
                  <br />
                  🍴: {result.forks_count}
                </ResultCard.Header>
                <ResultCard.Text>
                  {`${description.slice(0, 85)}...       CLICK ME TO VIEW MORE`}
                </ResultCard.Text>

                <ResultCard.Footer>
                  Created On {parseDate(result.created_at)}
                </ResultCard.Footer>
              </ResultBody>
              <MyButton onClick={showModal}>View Details</MyButton>
            </ResultCard>
          );
        })
      ) : (
        <h1>noope</h1>
      )}
    </ResultContainer>
  );
};

export default ResultCardComponent;
