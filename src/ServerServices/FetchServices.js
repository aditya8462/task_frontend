import axios from "axios";
const ServerURL = "http://localhost:5000";
const getData = async (url) => {
  try {
    var response = await fetch(`${ServerURL}/${url}`);
    var result = await response.json();
    return result;
  } catch (e) {
    return { status: false };
  }
};



export { ServerURL, getData };
