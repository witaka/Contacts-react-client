import { BASE_URL } from "../config";

export default {
  all() {
    return fetch(`${BASE_URL}/phones`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/phones/${id}`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  create(id, params) {
    return fetch(`${BASE_URL}/contacts/${id}/phones`, {
      method: "POST",
      enctype: "multipart/form-data",
      body: params
    }).then(response => response.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/phones/${id}`, {
      method: "PATCH",
      enctype: "multipart/form-data",
      body: params
    }).then(response => response.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/phones/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  }
};
