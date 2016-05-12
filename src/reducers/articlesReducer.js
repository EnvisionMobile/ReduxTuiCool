import { REQUEST_ARTICLES, RESPONSE_ARTICLES, RESPONSE_ARTICLES_ERROR} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  articles: [],
  error: null
};

export default function articlesReducer(state = initialState, action){
  switch(action.type){
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RESPONSE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        articles: state.articles.slice(0).concat(action.data)
      });
    case RESPONSE_ARTICLES_ERROR:
      return Object.assign({}, state, {
        error: 'error'
      });
    default:
      return state;
  }
}
