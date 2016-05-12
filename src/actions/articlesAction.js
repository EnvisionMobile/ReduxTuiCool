import { REQUEST_ARTICLES, RESPONSE_ARTICLES, RESPONSE_ARTICLES_ERROR,
  REQUEST_ARTICLE_DETAIL, RESPONSE_ARTICLE_DETAIL, RESPONSE_ARTICLE_DETAIL_ERROR} from './actionTypes';

/**
 * 分页读取文章
 * @param lastId
 * @returns {Function}
 */
export function readArticles(lastId){
  return dispatch => {
    // 开始发送网络请求
    dispatch({
      type: REQUEST_ARTICLES
    });

    // 组建请求文章列表url
    const articalsUrl = `http://localhost:4000/api/articles/rec.json?cid=0&lang=0&size=5${lastId ? ( '&last_id=' + lastId) : ''}`;

    // 使用fetch 发起 AJAX GET
    fetch(articalsUrl, { headers: { authorization: 'Basic MzYwNjU2NTcwMjozYTNkNGEyNTllOTJjN2Q0ZTQ5MmM5Y2RmODZhNmU3YQ=='}})
    .then(res => res.json())
    .then(payload => dispatch({
        type: RESPONSE_ARTICLES,
        data: payload.articles
    }))
    .catch(err => dispatch({
      type: RESPONSE_ARTICLES_ERROR,
      error: err
    }));
  };
}

/**
 * 读取新闻内容
 * @param articleId
 * @returns {Function}
 */
export function readArticleDetail(articleId){
  return dispatch => {
    dispatch({type: REQUEST_ARTICLE_DETAIL});
    const articleUrl = `http://localhost:4000/api/articles/${articleId}.json?is_pad=1&need_image_meta=1`;
    fetch(articleUrl, { headers: { authorization: 'Basic MzYwNjU2NTcwMjozYTNkNGEyNTllOTJjN2Q0ZTQ5MmM5Y2RmODZhNmU3YQ=='}})
    .then(res => res.json())
    .then(payload => dispatch({
      type: RESPONSE_ARTICLE_DETAIL,
      data: payload.article
    }))
    .catch(err => dispatch({
      type: RESPONSE_ARTICLE_DETAIL_ERROR,
      error: err
    }));
  };
}
