import React from 'react';
import styles from './Hello.less';

export interface HelloProps {}

const Hello: React.FunctionComponent<HelloProps> = ({ className }) => {
  return <div className={`${styles.hello} ${className}`}>div</div>;
};

export default Hello;
