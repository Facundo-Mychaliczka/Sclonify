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
	StyledImageLibrary,
	StyledImageLibraryIcon,
	StyledImageLibraryIconLarge,
} from "./IconsWrapperStyles";
import { useDispatch, useSelector } from "react-redux";
import {
	setLeftMenuToLarge,
	setLeftMenuToMedium,
	setLeftMenuToSmall,
} from "../../../../../redux/LeftMenuDisplay/LeftMenuSlices";

const IconsWrapper = () => {
	const dispatch = useDispatch();

	const widthLeftMenu = useSelector((state) => state.leftMenu.leftMenu);

	return (
		<IconsContainer>
			<Icon>
				<StyledImageIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
					<path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z" />
				</StyledImageIcon>
				{widthLeftMenu === "small" ? "" : "Inicio"}
			</Icon>
			<Icon>
				<StyledImageIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
					<path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z" />
				</StyledImageIcon>
				{widthLeftMenu === "small" ? "" : "Buscar"}
			</Icon>
			<LibraryIconsContainer>
				<IconLibrary onClick={() => dispatch(setLeftMenuToSmall())}>
					<StyledImageLibrary
						menuWith={widthLeftMenu}
						viewBox="0 0 88 88"
						width="48px"
						height="48px"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title />
						<g id="Layer">
							<path d="M1.5361,32.8857l42,22a.9985.9985,0,0,0,.9278,0l42-22a1,1,0,0,0,0-1.7714l-42-22a.9985.9985,0,0,0-.9278,0l-42,22a1,1,0,0,0,0,1.7714Z" />
							<path d="M86.4644,43.1143l-7.6072-3.9862L45.3921,56.6572a2.9984,2.9984,0,0,1-2.7861-.0009L9.1429,39.128,1.5356,43.1143a1,1,0,0,0,0,1.7714l42,22a.9985.9985,0,0,0,.9278,0l42-22a1,1,0,0,0,.0005-1.7714Z" />
							<path d="M86.4644,55.1143l-7.6072-3.9862L45.3921,68.6572a2.9984,2.9984,0,0,1-2.7861-.0009L9.1429,51.128,1.5356,55.1143a1,1,0,0,0,0,1.7714l42,22a.9985.9985,0,0,0,.9278,0l42-22a1,1,0,0,0,.0005-1.7714Z" />
						</g>
					</StyledImageLibrary>
					<LibraryIconP>{widthLeftMenu === "small" ? "" : "Tu biblioteca"}</LibraryIconP>
				</IconLibrary>
				<LibraryRightIcons menuWidth={widthLeftMenu}>
					{/* ÍCONO DE CREAR LISTA O CARPETA */}
					<StyledImageLibraryIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
						<path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
					</StyledImageLibraryIcon>
					{/* ----------------- */}
					{/* FLECHA PARA HACER EL WIDTH DEL MENÚ MAS GRANDE O CHICO */}
					{widthLeftMenu === "medium" ? (
						<StyledImageLibraryIcon
							onClick={() => dispatch(setLeftMenuToLarge())}
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
						</StyledImageLibraryIcon>
					) : (
						<StyledImageLibraryIconLarge
							onClick={() => dispatch(setLeftMenuToMedium())}
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
						</StyledImageLibraryIconLarge>
					)}

					{/* --------------------------- */}
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
