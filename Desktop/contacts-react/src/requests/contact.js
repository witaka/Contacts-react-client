import { BASE_URL } from "../config";

export default {
  create(params) {
    return fetch(`${BASE_URL}/contacts/import`, {
      method: "POST",
      enctype: "multipart/form-data",
      body: params
    }).then(response => response.json());
  }, all() {
    return fetch(`${BASE_URL}/contacts`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/contacts/${id}`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
};

