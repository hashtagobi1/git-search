import { ResultCard } from "./Result.styles";

// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";
import { MyButton } from "../HeaderBar/HeaderBar.styles";
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

  return (
    <div>
      {results ? (
        results.map((result: any) => {
          return (
            <ResultCard bg="light" border="dark" key={result.id}>
              {/* <ResultCard.Img variant="top" src={result.owner.avatar_url} height="25" width="25"/> */}
              <ResultCard.Body>
                <ResultCard.Title>
                  Repository:
                  <a href={result.html_url}>{result.name}</a>
                </ResultCard.Title>
                <ResultCard.Subtitle>
                  User: {result.full_name}          
                </ResultCard.Subtitle>
                <ResultCard.Header>
                  Stars 🌟: {result.stargazers_count}   <br/>        
                  Open Issues:🐛 {result.open_issues_count}<br/>    
                  Forks:🍴 {result.forks_count}
                </ResultCard.Header>
                <ResultCard.Text>
                  Description: 📝 {result.description}
                </ResultCard.Text>

                <ResultCard.Footer>
                  Created On {parseDate(result.created_at)}
                </ResultCard.Footer>
              </ResultCard.Body>
              <MyButton
                onClick={() =>
                  alert(`dispatch action to show popup of more details!
              owners name:
              languages
              sizes
              readme

              liiiimit the description



              PAGINATIONONNN
              https://react-bootstrap.github.io/components/pagination/


              
              `)
                }
              >
                {" "}
                View Details
              </MyButton>
            </ResultCard>
          );
        })
      ) : (
        <h1>noope</h1>
      )}
    </div>
  );
};

export default ResultCardComponent;
