import Axios from "axios";

const MAIN_SERVER_RUL = "https://api.8hoursfoundation.org";
const VIM_TESTNET_URL = "https://data.testnet.8hoursfoundation.org/metadata/";

function getListOfVims(walletAddress) {
  return Axios.post(`${MAIN_SERVER_RUL}/tokensOfOwner`, {
    wallet: walletAddress,
  });
}

function getDetailOfVim(vimId) {
  const options = {
    headers: {
      "CF-Access-Client-Id":
        "744ad1c298530d92f50b1b99d4c94880.access.8hoursfoundation.org",
      "CF-Access-Client-Secret":
        "5f782e48ad8d776b04b118a37923cdb51fdc521b6c69e5207fdf6f22629c1093",
    },
  };

  return Axios.get(`${VIM_TESTNET_URL}/${vimId}`, options);
}

export default {
  getListOfVims,
  getDetailOfVim,
};
