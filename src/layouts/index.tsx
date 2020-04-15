import React from 'react';


export interface LayoutProps {

}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {

  return (
    <div>
      {props.children}
    </div>
  );
};

export default Layout;
