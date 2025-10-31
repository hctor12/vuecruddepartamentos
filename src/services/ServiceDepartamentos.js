import Global from "@/Global";
import axios from "axios";

export default {
  getDepartamentos() {
    return new Promise(function (resolve) {
      let request = "api/Departamentos";
      axios.get(Global.urlApiDepartamentos + request).then((response) => {
        resolve(response.data);
      });
    });
  },
  insertDepartamento(dep) {
    return new Promise(function (resolve) {
      let request = "api/departamentos";
      axios.post(Global.urlApiDepartamentos + request, dep).then((response) => {
        resolve(response);
      });
    });
  },

  findDepartamento(id) {
    return new Promise(function (resolve) {
      let request = "api/departamentos/" + id;
      axios.get(Global.urlApiDepartamentos + request).then((response) => {
        resolve(response.data);
      });
    });
  },

  updateDepartamento(dep) {
    return new Promise(function (resolve) {
      let request = "api/departamentos";
      axios.put(Global.urlApiDepartamentos + request, dep).then((response) => {
        resolve(response);
      });
    });
  },

  deleteDep(id) {
    return new Promise(function (resolve) {
      let request = "api/departamentos/" + id;
      axios.delete(Global.urlApiDepartamentos + request).then((response) => {
        resolve(response);
      });
    });
  },
};
