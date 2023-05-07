import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b195822e54994f6b92b0c884d5b364f6",
	},
});
