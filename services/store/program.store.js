import axios from "axios";
import BaseUrls from "../baseUrls/baseUrl";
import HttpVerbs from "../apiRequests/httpVerbs";
const programLink = "/programs/N3WbyvxcsV6.json";
const trackedEntityLink = "";
const baseUrlLink = "https://play.dhis2.org/40.0.0/api/29";

const baseUrl = new BaseUrls();
const httpVerbs = new HttpVerbs();

export default class ProgramStore {
  getProgram = async () => {
    try {
      const res = await httpVerbs.get(
        "https://play.dhis2.org/2.39.1.2/api/29/programs/IpHINAT79UW.json",
      );
      return res;
    } catch (e) {
      return e;
    }
  };
}
