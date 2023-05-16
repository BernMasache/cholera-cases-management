import BaseUrls from "../baseUrls/baseUrl";
import HttpVerbs from "../apiRequests/httpVerbs";

const baseUrl = new BaseUrls();
const httpVerbs = new HttpVerbs();

export default class ProgramStore {
  
  getProgram = async () => {
    try {
      const res = await httpVerbs.get(baseUrl.programUrl, baseUrl.headers);
      return res;
    } catch (e) {
      return e;
    }
  };
}
