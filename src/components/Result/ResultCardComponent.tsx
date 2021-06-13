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
  Showing,
  NotShowing,
  ProfileCard,
  MarkdownWrapper
} from "./Result.styles";
// utils
import { Base64 } from "js-base64";
import ReactMarkdown from "react-markdown";

// import  allLogo from 'programming-languages-logos/src/swift/swift.svg
// import  allLogo from 'programming-languages-logos/src/languages.json'
import swift from 'programming-languages-logos/src/swift/swift.svg'





// State Management
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";
import DetailedView from "../DetailedView/DetailedView";

const ResultCardComponent = () => {
  let results = useSelector((state: State) => state.fetchRepoReducer.items[0]);
  const base64_readMe: string = useSelector(
    (state: State) => state.readMeReducer.readMe
  );
  const repoEndpoint: string = useSelector(
    (state: State) => state.getUserRepoReducer.repoEndpoint
  );

  const text = useSelector((state: State) => state.inputReducer.input);
  const pageNumber = useSelector(
    (state: State) => state.fetchRepoReducer.pageNumber
  );
  const perPage = useSelector((state: State) => state.fetchRepoReducer.perPage);
  const resultsPerPage = useSelector(
    (state: State) => state.fetchRepoReducer.resultsPerPage
  );

  const modalState: boolean = useSelector(
    (state: State) => state.showModalReducer.showModal
  );
  const readMeInMarkdown = Base64.decode(base64_readMe);

  const dispatch = useDispatch();
  const { getReadMe, showModal, fetchRepos, getUserRepo } = bindActionCreators(
    actionCreators,
    dispatch
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

  const handleModal = (repoOwner: string, repoName: string) => {
    // ? view more repo info.... a coomponent or
    // showModal(!modalState);
    // getReadMe(repoOwner, repoName);
    // await showModal(modalState);
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
    // console.log("showModal");
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await showModal(!modalState);
    showModal(!modalState);

    await fetchRepos(text, pageNumber, perPage);

    // ! we pass the details of what was clicked
    // ! pass details:  repoOwner, reponame
    // ! getDetailedRepo(repoOwner, reponame)
    // ! getReadMe(repoOwner, reponame)
  };

  const languageChecker = (languageName:string) =>{


    return "shey"



    
  }

  const printName = async (destination: string) => {
    await showModal(!modalState);
    // await console.log(destination);
    getUserRepo(destination);

    // ! set RepoOwner name torepowner
    // ? changeRepoDetails: repoOwner
    // getReadMe(repoOwner, reppppoNNN))

    // console.log(reppppoNNN)
    // console.log(repoOwner)
    // console.log(" we clikced on " + repoOwner + "& " + reppppoNNN);

    // console.log(repoOwner);
  };

  return (
    <ResultContainer>
      {/* {
        modalState === true && <MyButton onClick={handleSubmit}>stuff</MyButton>
        // <MyButton onClick={handleSubmit}>Back 2 Results!</MyButton>

        // {console.log("modal state = " + modalState)}
      } */}

      {results &&
        results.map((result: any) => {
          //?  hashtagobi1/ShoppingCart

          let str = result.full_name.split("/");
          const realUser = str[0];
          let destination = result.full_name;
          // console.log(result.full_name);
          let description: string = result.description;
          let repoOwner = result.full_name.split("/");
          repoOwner = repoOwner[0];
          let reppppoNNN = result.full_name.split("/");
          repoOwner = repoOwner[1];
          let repoName: string = result.name;

          if (!description) {
            description = "No description provided";
          }

          // ! when view details is clicked
          // ! we want to display content for that specific thing
          // ! we could do a filter where result.id === component id clicked.

          // ! render one on the screen
          // ! DetailedCView component
          // ! show button to return to previous search

          // * display id when clicked\

          return !modalState ? (
            <div key={result.id}>
              <ResultCard bg="light" border="dark">
                {/* ! w */}

                {/* {console.log(getReadMe(repoOwner, result.name))} */}

                <ResultBody>
                  <ResultCard.Title>
                    Repo Name:{" "}
                    <LinkTag target="_blank" href={result.html_url}>
                      {repoName}
                    </LinkTag>
                  </ResultCard.Title>
                  <ResultCard.Subtitle>
                    User: {result.full_name}
                  </ResultCard.Subtitle>
                  <ResultCard.Header as={ResultHeader}>
                    🌟: {result.stargazers_count} <br />
                    🐛: {result.open_issues_count}
                    <br />
                    🍴: {result.forks_count}
                  </ResultCard.Header>
                  <ResultCard.Text>
                    {`${description.slice(
                      0,
                      85
                    )}...`}
                  </ResultCard.Text>

                  <ResultCard.Footer>
                    Created On {parseDate(result.created_at)}
                  </ResultCard.Footer>
                </ResultBody>
                <MyButton
                // onClick={
                // ! set RepoOwner => that result
                // ! set repo
                // () => {
                // results = result;
                // console.log(result);
                // console.log("invert Modal");
                // handleModal(repoOwner, repoName)

                // console.log(result.name)
                // }
                // }
                >
                  show result ID
                </MyButton>
                <MyButton onClick={printName.bind(this, destination)}>
                  View Details
                </MyButton>
              </ResultCard>
            </div>
          ) : (
            <div key={result.id}>
              {console.log(repoEndpoint)}
              {repoEndpoint.includes(result.full_name) ? (
                <>
                  <MyButton onClick={handleSubmit}>Back To Results</MyButton>

                  {console.log(getReadMe(realUser, result.name))}
                  {console.log(realUser, result.name)}
                  {/* {console.log(realUser)} */}
                  <Showing as={ProfileCard}>
                    <h1>RepoName: 
                      
                      <LinkTag
                      target="_blank" 
                      href={result.html_url}
                      >
                      {result.name}
                      
                      </LinkTag>
                      
                      
                      </h1>
                    <h3>User: {realUser}</h3>
                   Stars 🌟: {result.stargazers_count}
                    <br />

                   Bugs 🐛: {result.open_issues_count}
                    <br />
                 Forks   🍴: {result.forks_count}
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
                    <MarkdownWrapper>
                    <h1>ReadMe:</h1>

                    <ReactMarkdown
                    >{readMeInMarkdown}</ReactMarkdown>

                    </MarkdownWrapper>
                  </Showing>
                </>
              ) : (
                <NotShowing>should'nt see</NotShowing>
              )}
            </div>
          );

          // ! all we need to do now is get that specific ID and render it out
        })}
    </ResultContainer>
  );
};

export default ResultCardComponent;
