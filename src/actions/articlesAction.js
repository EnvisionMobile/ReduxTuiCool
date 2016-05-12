import { REQUEST_ARTICLES, RESPONSE_ARTICLES, RESPONSE_ARTICLES_ERROR} from './actionTypes';

/**
 * 分页读取文章
 * @param lastId
 * @returns {Function}
 */
export function readArticles(lastId){
  return function(dispatch){
    // 开始发送网络请求
    dispatch({
      type: REQUEST_ARTICLES
    });

    // 组建请求文章列表url
    const articalUrl = 'http://localhost:4000/api/articles/rec.json?cid=0&lang=0&size=5'
      + ( lastId ? ( '&last_id=' + lastId) : '');

    // 使用fetch 发起 AJAX GET
    fetch(articalUrl, { headers: { authorization: 'Basic MzYwNjU2NTcwMjozYTNkNGEyNTllOTJjN2Q0ZTQ5MmM5Y2RmODZhNmU3YQ=='}})
    .then(function(res){
      return res.json();
    })
    .then(function(payload){
      // 网络请求应答
      dispatch({
        type: RESPONSE_ARTICLES,
        data: payload.articles
      });
    })
    .catch(function(err){
      dispatch({
        type: RESPONSE_ARTICLES_ERROR,
        error: err
      });
    });
  };
}
