import React from "react";
import { LeftMenuContainer } from "./LeftMenuStyles";
import IconsWrapper from "./IconsWrapper/IconsWrapper";
import PlaylistsWrapper from "./PlaylistsWrapper/PlaylistsWrapper";
import { useSelector } from "react-redux";

const LeftMenu = () => {
	const widthLeftMenu = useSelector((state) => state.leftMenu.leftMenu);
	return (
		<LeftMenuContainer widthDisplay={widthLeftMenu}>
			<IconsWrapper />
			<PlaylistsWrapper />
		</LeftMenuContainer>
	);
};

export default LeftMenu;
