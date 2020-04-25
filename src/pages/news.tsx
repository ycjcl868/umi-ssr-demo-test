import React from 'react';
import { Link } from 'umi';

export interface NewsProps {}

export const newsList = [
  { title: 'Title1', id: 1 },
  { title: 'Title2', id: 2 },
];

const News: React.FunctionComponent<NewsProps> = props => {
  const { list } = props;
  return (
    <div>
      Hello News
      <ul>
        {list?.map(item => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

News.getInitialProps = async params => {
  console.log('news fetch');
  return Promise.resolve({
    list: newsList,
  });
};

export default News;
