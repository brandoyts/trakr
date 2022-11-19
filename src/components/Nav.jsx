import React from "react";

export default function Nav() {
	return (
		<nav className="flex justify-between pt-10 ">
			<span className="font-bold text-3xl text-gray-400">Trakr</span>
			<span className="text-md bg-green-500 rounded-full inline-flex justify-center items-center p-3 text-white">
				BE
			</span>
		</nav>
	);
}
