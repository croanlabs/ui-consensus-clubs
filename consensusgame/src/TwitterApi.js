import Twit from "twit";
import { twitter } from "../config.json";

const T = new Twit(twitter);
const params = {
  q: "po",
  count: 10
};

T.get("users/search", params, getData);
function getData(err, data, response) {}
