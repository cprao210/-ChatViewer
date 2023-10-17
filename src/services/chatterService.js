import { httpClient } from "./httpUtil";

const ChatterService = {
	getAllMsg: () => {
		return httpClient.get(
			`/api/v1/messages/`
		);
	},
	postAllMsg: (body) => {
		return httpClient.post(
			`/api/v1/messages/ `,body
		);
	},
	deleteAllMsg: (id) => {
		return httpClient.delete(
			`/api/v1/messages/${id}`
		);
	},
	
};

export {ChatterService}