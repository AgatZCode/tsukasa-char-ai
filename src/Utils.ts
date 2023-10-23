import axios, { AxiosInstance } from "axios";
import { BETA_URL, PLUS_URL, AGENT } from "./Constants";

/**
 * Axios instance for making requests to the BETA_URL.
 */
const Beta: AxiosInstance = axios.create({
	baseURL: BETA_URL,
	headers: {
		"User-Agent": AGENT,
	},
});

Beta.interceptors.request.use(
	(config) => {
		return {
			...Beta.defaults,
			...config,
		};
	},
	(error) => {
		return Promise.reject(error);
	}
);
Beta.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return error.response;
	}
);

/**
 * Axios instance for making requests to PLUS_URL.
 */
const Plus: AxiosInstance = axios.create({
	baseURL: PLUS_URL,
	headers: {
		"User-Agent": AGENT,
	},
});

Plus.interceptors.request.use(
	(config) => {
		return {
			...Plus.defaults,
			...config,
		};
	},
	(error) => {
		return Promise.reject(error);
	}
);
Plus.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return error.response;
	}
);

export { Beta, Plus };
