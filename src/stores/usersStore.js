import { makeObservable, observable, action, runInAction } from "mobx";
import { toast } from "react-toastify";
import axios from "../configs/axios";
import { nanoid } from "nanoid";

class UsersStore {
  users = [];
  pages = {};
  positions = [];
  isLoadingUsers = false;
  isLoadingPositions = false;
  isUserCreateLoading = false;
  isUserCreated = false;

  constructor() {
    makeObservable(this, {
      users: observable.ref,
      isLoadingUsers: observable.ref,
      pages: observable.ref,
      positions: observable.ref,
      isLoadingPositions: observable.ref,
      isUserCreated: observable.ref,
      isUserCreateLoading: observable.ref,

      getUsers: action,
      createUser: action,
      getPositions: action,
    });
  }

  getUsers = (page = 1, count = 6) => {
    runInAction(() => {
      this.isLoadingUsers = true;
    });
    axios
      .get("/users", { params: { page, count } })
      .then(({ data }) => {
        runInAction(() => {
          const usersWithId = data?.users?.map((item) => {
            return { ...item, id: nanoid() };
          });
          this.pages = data.total_pages;
          this.users = usersWithId;
          this.isLoadingUsers = false;
        });
      })
      .catch(() => {
        toast.error("Failed fetch users");
        runInAction(() => {
          this.isLoadingUsers = false;
        });
      });
  };

  createUser = ({ payload, callback }) => {
    runInAction(() => {
      this.isUserCreateLoading = true;
    });
    let formData = new FormData();
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("position_id", payload.position_id);
    formData.append("photo", payload.photo);
    axios
      .post("/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data: { message } }) => {
        runInAction(() => {
          this.isUserCreateLoading = false;
          toast.success(message);
          this.isUserCreated = true;
        });
        callback && callback();
      })
      .catch(() => {
        toast.error("Failed create user");
        runInAction(() => {
          this.isUserCreateLoading = false;
        });
      });
  };

  getPositions = () => {
    runInAction(() => {
      this.isLoadingPositions = true;
    });
    axios
      .get("/positions")
      .then(({ data: { positions } }) => {
        runInAction(() => {
          this.positions = positions;
          this.isLoadingPositions = false;
        });
      })
      .catch(() => {
        toast.error("Failed fetch positions");
        runInAction(() => {
          this.isLoadingPositions = false;
        });
      });
  };
}

export default new UsersStore();
