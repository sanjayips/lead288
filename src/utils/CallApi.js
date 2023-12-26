import axios from "axios";
import { store } from "../store";

const HOSTNAME = "https://api.hporx.org";
const callApi = (endpoint, method, payload) => {
    let candidate = store.getState().recruitAuth.loginInfo.token
    let token = candidate ? candidate : store.getState().userAuth.loginInfo.token
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",

            ...authHeaders,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const callApiRecuit = (endpoint, method, payload) => {
    let token = store.getState().recruitAuth.loginInfo.token;
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",

            ...authHeaders,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const callPublicApi = (endpoint, method, payload) => {
    const HOSTNAME = "https://api.hporx.org";
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",
            // ...authHeaders,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { callPublicApi, callApi, callApiRecuit, HOSTNAME };
