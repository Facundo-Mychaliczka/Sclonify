import React from "react";
import { LeftMenuContainer } from "./LeftMenuStyles";
import IconsWrapper from "./IconsWrapper/IconsWrapper";
import PlaylistsWrapper from "./PlaylistsWrapper/PlaylistsWrapper";

const LeftMenu = () => {
	return (
		<LeftMenuContainer>
			<IconsWrapper />
			<PlaylistsWrapper />
		</LeftMenuContainer>
	);
};

export default LeftMenu;
