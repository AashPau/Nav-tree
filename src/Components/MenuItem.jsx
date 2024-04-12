import React from "react";
import { MenuList } from "./MenuList";

export const MenuItem = ({ item }) => {
	return (
		<li className="">
			<p>{item.label}</p>
			{item && item.children && item.children.length > 0 ? (
				<MenuList list={item.children} />
			) : null}
		</li>
	);
};
