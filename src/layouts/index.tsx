import React from 'react';
import { Link } from 'umi';

export interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  return (
    <div>
      <h1>this is from initialData</h1>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bar">Bar</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/news/1">News 1</Link>
          </li>
          <li>
            <Link to="/news/2">News 2</Link>
          </li>
        </ul>
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
