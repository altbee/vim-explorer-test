import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import VimViewer from "../../components/vim-viewer";
import vimService from "../../services/vim.service";
import { VIMS_PER_PAGE } from "../../utils";

import "./index.scss";

function VimVentory() {
  const [vimList, setVimList] = useState([]);
  const [paginationShowing, setPaginationShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function vimDetailFetch(vimId) {
      return await vimService.getDetailOfVim(vimId);
    }

    async function vimListFetch() {
      setIsLoading(true);
      const walletAddr = "0xb2e4213c02845F80355F6F65e85a445EB08Db894";
      const {
        data: { vimList: _vimList },
      } = await vimService.getListOfVims(walletAddr);
      let newVimList = [];
      for (let i = 0; i < _vimList.length; i++) {
        const { data } = await vimDetailFetch(_vimList[i]);
        newVimList = [...newVimList, data];
      }
      setVimList(newVimList);
      setIsLoading(false);
    }

    vimListFetch();
  }, []);

  const onChangePaginationControl = () => {
    setPaginationShowing(!paginationShowing);
  };

  const list = paginationShowing
    ? [
        ...vimList,
        ...vimList,
        ...vimList,
        ...vimList,
        ...vimList,
        ...vimList,
        ...vimList,
        ...vimList,
      ]
    : vimList;

  return (
    <div className="vim-container">
      {vimList.length < VIMS_PER_PAGE && !isLoading && (
        <div className="pagination-control">
          <input
            type="checkbox"
            value={paginationShowing}
            className="form-check-input"
            onChange={onChangePaginationControl}
          />
          <label>
            Show Pagination(This is only showed when the count of fetched VIMs
            is less than 5)
          </label>
        </div>
      )}
      {isLoading && (
        <div className="vim-loader-container">
          <ClipLoader size={40} color={"#123abc"} loading={isLoading} />
        </div>
      )}
      <VimViewer list={list} />
    </div>
  );
}

export default VimVentory;
