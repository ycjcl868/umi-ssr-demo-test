import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

export default () => {
  const onClick = () => {
    window.postMessage(
      JSON.stringify({
        action: 'umi.ui.block.addTemplate',
        payload: {
          name: '分析页',
          key: 'DashboardAnalysis',
          url:
            'https://github.com/ant-design/pro-blocks/tree/master/DashboardAnalysis',
          path: 'DashboardAnalysis',
        },
      }),
      '*',
    );
  };

  return (
    <Button onClick={onClick} className={styles.container}>
      Hello UmiJS!
    </Button>
  );
};
