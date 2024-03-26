import React from "react";
import {
	CarrouselFilter,
	CarrouselItem,
	Icon,
	IconLibrary,
	IconsContainer,
	LibraryIconP,
	LibraryIconsContainer,
	LibraryRightIcons,
	StyledImageIcon,
	StyledImageLibraryIcon,
} from "./IconsWrapperStyles";
import HomeImg from "../../../../../../public/HomeIcon.svg";
import SearchIcon from "../../../../../../public/SearchIcon.svg";
import LibraryIcon from "../../../../../../public/LibraryIcon.svg";
import PlusIcon from "../../../../../../public/PlusIcon.svg";
import RightArrow from "../../../../../../public/RightArrow.svg";

const IconsWrapper = () => {
	return (
		<IconsContainer>
			<Icon>
				<StyledImageIcon src={HomeImg} />
				Inicio
			</Icon>
			<Icon>
				<StyledImageIcon src={SearchIcon} />
				Buscar
			</Icon>
			<LibraryIconsContainer>
				<IconLibrary>
					<StyledImageIcon src={LibraryIcon} />
					<LibraryIconP>Tu biblioteca</LibraryIconP>
				</IconLibrary>
				<LibraryRightIcons>
					<StyledImageLibraryIcon plus src={PlusIcon} />
					<StyledImageLibraryIcon src={RightArrow} />
				</LibraryRightIcons>
			</LibraryIconsContainer>
			<CarrouselFilter>
				<CarrouselItem>Listas</CarrouselItem>
				<CarrouselItem>Artistas</CarrouselItem>
				<CarrouselItem>Álbumes</CarrouselItem>
				<CarrouselItem>Pódcasts y programas</CarrouselItem>
			</CarrouselFilter>
		</IconsContainer>
	);
};

export default IconsWrapper;
