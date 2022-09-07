import React from 'react';
import './PageLayout.less';

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="page-container">
      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};

export default PageLayout;
