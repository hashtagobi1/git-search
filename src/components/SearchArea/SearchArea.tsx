import Input from "../FormFields/Input";
import { SearchWrapper , Paragraph} from "./SearchArea.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

const SearchArea = () => {
  const dispatch = useDispatch();

  // !selector gets access to state

  const totalCount = useSelector(
    (state: State) => state.fetchRepoReducer.items[1]
  );
  const results = useSelector(
    (state: State) => state.fetchRepoReducer.items[0]
  );
  const loadingState = useSelector(
    (state: State) => state.fetchRepoReducer.loading
  );
  const errorState = useSelector(
    (state: State) => state.fetchRepoReducer.errorState
  );
  console.log(results);

  const fetch = () => {
    if (loadingState === true) {
      return <h1>Loading! Framer Motion</h1>;
    } else if (errorState) {
      return (
        <div>
          <p>
            Woops! Try typing something into the box... Or maybe you should try
            logging in to increase your search limit!
          </p>
          <h1>Display search limit here</h1>
        </div>
      );
    } else {
      return results.map((result: any) => {
        return (
          <div key={result.id}>
            <h3>RepoOwner: {result.full_name}</h3>
            <p>Stars 🌟: {result.stargazers_count}</p>
          </div>
        );
      });
    }
  };

  return (
    <SearchWrapper>
      <Input />
      <Paragraph>Showing {totalCount} available repository results</Paragraph>

      {fetch()}
    </SearchWrapper>
  );
};

export default SearchArea;
