import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
	platforms: string[];
}

const PlatformIcons = ({ platforms }: Props) => {
	const icons = {
		pc: FaWindows(),
		playstation5: FaPlaystation(),
		playstation4: FaPlaystation(),
		"xbox-one": FaXbox(),
		"xbox-series-x": FaXbox(),
		"nintendo-switch": SiNintendo(),
		ios: MdPhoneIphone(),
		android: FaAndroid(),
		macos: FaApple(),
		linux: FaLinux(),
		xbox360: FaXbox(),
		web: BsGlobe(),
		"apple-ii": FaApple(),
	};

	return (
		<>
			{platforms.map((p) => (
				<span>{icons[p as keyof typeof icons]} </span>
			))}
		</>
	);
};

export default PlatformIcons;
