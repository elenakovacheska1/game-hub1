import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "a467355e05e74f5e9a5c3424119bc1f6",
	},
});
