import Axios from "axios";
import { baseURL } from "./config/util";

export async function getSearchResponse(numberOfResults,searchTerm) {
  return Axios.get(
    `${baseURL}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${searchTerm}`
  );
}
