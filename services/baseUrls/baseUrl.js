
const programLink = "/programs/XugY3mCuc3b.json";
const trackedEntityLink = "";
const baseUrlLink = "https://www.namis.org/test/api/29";

const header = {
  'Authorization': `Basic ${btoa('bernardmasache:Twapalisha1.')}`,
  'Content-type': 'application/json',
  Accept: 'application/json',
}

export default class BaseUrls {

  headers = {
    mode: "cors",
    credentials: "include",
    headers: header,
  };

  baseUrl = baseUrlLink;

  programUrl = `${this.baseUrl}/${programLink}`;

  trackedEntity = `${this.baseUrl}/${trackedEntityLink}`;

}
