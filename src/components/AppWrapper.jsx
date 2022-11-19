import React from "react";

export default function AppWrapper({ children }) {
	return (
		<div className="p-8 bg-[#f3f5f7] font-Montserrat flex flex-col gap-5 max-w-lg m-auto">
			{children}
		</div>
	);
}
