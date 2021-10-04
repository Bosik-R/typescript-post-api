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

export type ModalProps = {
	open: boolean;
	id: string;
	type: string;
	data: string;
};

export const initialModalData = {
	open: false,
	id: '',
	type: '',
	data: '',
};
