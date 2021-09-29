export interface Status {
	loading: boolean;
	success: boolean;
	error: boolean;
	resStatus: number;
}

export const initialStatus = {
	loading: true,
	success: false,
	error: false,
	resStatus: 0,
};
