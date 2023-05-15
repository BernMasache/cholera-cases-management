import axios from "axios";
const programLink = "/programs/N3WbyvxcsV6.json";
const trackedEntityLink = "";
const baseUrlLink = "https://play.dhis2.org/40.0.0/api/29";

const headers = new Headers({
  Authorization: `Basic ${btoa("admin:district")}`,
  "Content-type": "application/json",
  Accept: "application/json",
});

export default class BaseUrls {
  headers = () => {
    return {
      mode: "cors",
      credentials: "include",
      headers,
    };
  };
  bs = "https://play.dhis2.org/40.0.0/api/29/programs/N3WbyvxcsV6.json";

  baseUrl = () => {
    return baseUrlLink;
  };
  programUrl = () => {
    return `${this.baseUrl}/${programLink}`;
  };

  trackedEntity = () => {
    return `${this.baseUrl}/${trackedEntityLink}`;
  };
}
