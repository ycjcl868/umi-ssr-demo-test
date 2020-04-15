import React from 'react';
import { Button } from 'antd';
import { setLocale, useIntl } from 'umi';
import styles from './index.less';

export default (props) => {
  const { formatMessage } = useIntl();
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    throw new Error('hello');
    setCount(count => count + 1);
  }
  return (
    <div className={styles.normalHello}>
      <h1>Page index</h1>
      {formatMessage({ id: 'hello' })}
      <Button onClick={handleClick}>Add</Button>
      <p>{count}</p>
    </div>
  );
};
