import React from "react";
import {
	MultimediaButton,
	MultimediaButtonPlayAndPause,
	MultimediaButtonsContainer,
	MultimediaButtonsWrapper,
} from "./MultimediaButtonsStyles";

const MultimediaButtons = () => {
	const isOnPlay = true;
	return (
		<MultimediaButtonsContainer>
			<MultimediaButtonsWrapper>
				{/* SHUFFLEICON */}
				<MultimediaButton xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24">
					<path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" />
				</MultimediaButton>
				{/* PREVIUSICON */}
				<MultimediaButton xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24">
					<path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" />
				</MultimediaButton>
				{/* PLAY AND PAUSE ICONS */}
				{isOnPlay === "true" ? (
					<MultimediaButtonPlayAndPause
						xmlns="http://www.w3.org/2000/svg"
						enable-background="new 0 0 24 24"
						viewBox="0 0 24 24"
					>
						<g>
							<g />
							<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z" />
						</g>
					</MultimediaButtonPlayAndPause>
				) : (
					<MultimediaButtonPlayAndPause xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
					</MultimediaButtonPlayAndPause>
				)}
				{/* NEXT ICON */}
				<MultimediaButton xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
					<path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
				</MultimediaButton>
				{/* LOOP ICON */}
				<MultimediaButton xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
					<path d="m360-120-57-56 64-64h-7q-117 0-198.5-81.5T80-520q0-117 81.5-198.5T360-800h240q117 0 198.5 81.5T880-520q0 117-81.5 198.5T600-240v-80q83 0 141.5-58.5T800-520q0-83-58.5-141.5T600-720H360q-83 0-141.5 58.5T160-520q0 83 58.5 142.5T360-312h16l-72-72 56-56 160 160-160 160Z" />
				</MultimediaButton>
			</MultimediaButtonsWrapper>
			<p>DURACIÓN DE CANCIÓN</p>
		</MultimediaButtonsContainer>
	);
};

export default MultimediaButtons;
