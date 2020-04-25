import React from 'react';
import { request, isBrowser } from 'umi';
import { Button, List } from 'antd';

import styles from './index.less';

const fetch = () => request('https://jsonplaceholder.typicode.com/todos');

const Home = props => {
  const { initialData = [], result } = props;
  // console.log('window.error', window.document);
  const browser = isBrowser();
  console.log('browser', browser);
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
  };

  return (
    <div className={styles.normalHello}>
      <h1>Page index122113332</h1>
      <p>{count}</p>
      <Button onClick={handleClick}>Hello SSR</Button>
      <List
        dataSource={result}
        loading={!result}
        renderItem={item => <li key={item.userId}>{item.title}</li>}
      />
    </div>
  );
};

Home.getInitialProps = async props => {
  console.log('Home fetch');
  const result = await fetch();
  return {
    result,
  };
};

export default Home;
