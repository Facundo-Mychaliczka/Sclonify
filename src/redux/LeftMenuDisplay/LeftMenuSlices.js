import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_LEFTMENU = {
	leftMenu: "medium",
};

const leftMenuFuntion = (state) => {
	if (state.leftMenu === "medium" || state.leftMenu === "large") {
		return "small";
	} else {
		return "medium";
	}
};

const leftMenuSlice = createSlice({
	name: "LeftMenu",
	initialState: INITIAL_STATE_LEFTMENU,
	reducers: {
		setLeftMenuToSmall: (state) => {
			return {
				...state,
				leftMenu: leftMenuFuntion(state),
			};
		},
		setLeftMenuToMedium: (state) => {
			return {
				...state,
				leftMenu: "medium",
			};
		},
		setLeftMenuToLarge: (state) => {
			return {
				...state,
				leftMenu: "large",
			};
		},
	},
});

export const { setLeftMenuToSmall, setLeftMenuToMedium, setLeftMenuToLarge } = leftMenuSlice.actions;

export default leftMenuSlice.reducer;
