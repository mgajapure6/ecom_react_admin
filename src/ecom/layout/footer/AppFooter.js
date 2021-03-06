import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" rel="noopener noreferrer">
          MGCommerce
        </a>
        <span className="ml-1">&copy; 2021.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoreUI
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
