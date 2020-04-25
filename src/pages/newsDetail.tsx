import React from 'react';

import { newsList } from './news';

export interface NewsProps {}

const NewsDetail: React.FunctionComponent<NewsProps> = props => {
  console.log('2332', props);
  const { detail } = props;
  return (
    <div>
      Hello Detail
      <h2>{detail.title}</h2>
    </div>
  );
};

NewsDetail.getInitialProps = async params => {
  const { match } = params;
  const { id } = match.params;
  console.log('newsDetail fetch', id);
  const item = newsList.find(item => Number(item.id) === Number(id));

  return Promise.resolve({
    detail: item,
  });
};

export default NewsDetail;
