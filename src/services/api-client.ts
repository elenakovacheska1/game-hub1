import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "e09fd015c19a4c9f8b558f1c43330546",
	},
});
