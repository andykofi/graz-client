import axios from "axios";
import {GET_ACCOUNTS, GET_ERRORS,GET_ACCOUNT,DELETE_ACCOUNT} from "./types";

export const createAccount = (account, history) => async dispatch => {
  try {
    await axios.post("/api/account",account);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
} catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getAccounts = () => async dispatch => {
  const res = await axios.get("/api/account/all");
  dispatch({
    type: GET_ACCOUNTS,
    payload: res.data
  });
};

export const getAccount = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/account/${id}`);
    dispatch({
      type: GET_ACCOUNT,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteAccount = id => async dispatch => {
  if (
      window.confirm(
          "Are you sure? This will delete the project and all the data related to it"
      )
  ) {
    await axios.delete(`/api/account/${id}`);
    dispatch({
      type: DELETE_ACCOUNT,
      payload: id
    });
  }
};