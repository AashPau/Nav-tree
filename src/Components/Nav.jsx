import React from "react";
import { MenuList } from "./MenuList";

export const Nav = ({ menus = [] }) => {
	return (
		<div className="tree-view-container">
			<MenuList list={menus} />
		</div>
	);
};
