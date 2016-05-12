import { REQUEST_ARTICLE_DETAIL, RESPONSE_ARTICLE_DETAIL, RESPONSE_ARTICLE_DETAIL_ERROR} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  article: {},
  error: null
};

export default function articlesReducer(state = initialState, action){
  switch(action.type){
    case REQUEST_ARTICLE_DETAIL:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RESPONSE_ARTICLE_DETAIL:
      return Object.assign({}, state, {
        isFetching: false,
        article: action.data
      });
    case RESPONSE_ARTICLE_DETAIL_ERROR:
      return Object.assign({}, state, {
        error: 'error'
      });
    default:
      return state;
  }
}
