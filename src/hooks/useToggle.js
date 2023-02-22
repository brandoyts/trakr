import { useState, useEffect } from "react";

const useToggle = (initialState) => {
	const [toggle, setToggle] = useState(initialState);

	setToggle((state) => !state);

	console.log(toggle);

	return {
		toggle,
		setToggle,
	};
};

export default useToggle;
