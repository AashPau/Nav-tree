import React from "react";
import { MenuList } from "./MenuList";
import "./Styles.css";

export const Nav = ({ menus = [] }) => {
	return (
		<div className="tree-view-container">
			<MenuList list={menus} />
		</div>
	);
};
