import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import VimBlock from "./vim-block";
import { VIMS_PER_PAGE } from "../../utils";

import "./index.scss";

function VimViewer({ list }) {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(1);
  }, [list]);

  const onChangePage = (page) => {
    setActivePage(page);
  };

  const activeList = list.slice(
    VIMS_PER_PAGE * (activePage - 1),
    VIMS_PER_PAGE * activePage
  );

  return (
    <div className="vim-viewer">
      <div className="vim-viewer-content">
        {activeList.map((row, index) => {
          return <VimBlock key={index} data={row} />;
        })}
      </div>
      {list.length > VIMS_PER_PAGE && (
        <Pagination
          activePage={activePage}
          itemClass="page-item"
          linkClass="page-link"
          itemsCountPerPage={VIMS_PER_PAGE}
          totalItemsCount={list.length}
          pageRangeDisplayed={10}
          onChange={onChangePage}
        />
      )}
    </div>
  );
}

export default VimViewer;
