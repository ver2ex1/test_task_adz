import { makeObservable, action, runInAction } from "mobx";
import { toast } from "react-toastify";
import axios from "../configs/axios";

class TokenStore {
  constructor() {
    makeObservable(this, {
      getToken: action,
    });
  }

  getToken = () => {
    axios
      .get("/token")
      .then(({ data: { token } }) => {
        runInAction(() => {
          localStorage.setItem("access_token", token);
        });
      })
      .catch(() => {
        toast.error("Failed fetch token");
      });
  };
}

export default new TokenStore();
