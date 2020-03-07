import React from 'react';
import styles from './index.module.less';
import TableBasic from './TableBasic';
import Hello from '@/components/Hello';
import Demo from './Demo';

export default ({ className }) => {
  return (
    <div className={className}>
      <h1 className={styles.title}>Page index</h1>
      <Hello className={styles.hello2} />
      <TableBasic />
      <Demo />
    </div>
  );
};
