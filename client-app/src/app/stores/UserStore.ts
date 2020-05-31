import { RootStore } from "./RootStore";
import { observable, action, runInAction } from "mobx";
import { UserRegisterDTO } from "@delgram/core";
import agent from "../api/agent";
import { history } from "../..";

interface IconValue {
  color?: string;
  name?: string;
}

export class UserStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable loading = false;
  @observable disableSummit = false;
  @observable errorMessage: string | undefined;
  @observable userRegister: Partial<UserRegisterDTO> = new UserRegisterDTO();
  @observable fieldTouched = {
    email: false,
    firstName: false,
    username: false,
    password: false,
  };
  @observable fieldValid = {
    email: {},
    firstName: {},
    username: {},
    password: {},
  };

  @action handleChange = (
    name: string,
    value: string,
    validateForm: (name: string, value: string) => IconValue
  ) => {
    this.userRegister = { ...this.userRegister, [name]: value };
    this.fieldTouched = { ...this.fieldTouched, [name]: true };
    this.fieldValid = {
      ...this.fieldValid,
      [name]: validateForm(name, value),
    };

    this.disableSummit =
      Object.values(this.fieldValid as IconValue).filter(
        (v: IconValue) => v.name === "check"
      ).length !== Object.keys(this.fieldValid).length;
  };

  @action summitForm = async () => {
    this.loading = true;
    this.disableSummit = true;
    try {
      await agent.UserService.register(this.userRegister as UserRegisterDTO);
      history.push("/feeds");
    } catch (error) {
      runInAction(() => {
        this.errorMessage = error.response.data.message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
        this.disableSummit = false;
      });
    }
  };
}
