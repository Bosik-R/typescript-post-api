export interface StatusProps {
	loading: boolean;
	success: boolean;
	error: boolean;
	resStatus: number;
}

export type ModalProps = {
	open: boolean;
	id: string;
	type: string;
	data: string;
};

export interface PostProps {
	id: string;
	title: string;
	body: string;
}

export interface CommentProps {
	id: string;
	name: string;
	body: string;
}

export interface PostsContextTypes {
	posts: Array<PostProps>;
	postData: PostProps;
	editMode: boolean;
	comments: Array<CommentProps>;
	setComments: (data: Array<CommentProps>) => void;
	setEditMode: (data: boolean) => void;
	setPostData: (data: PostProps) => void;
	setPosts: (data: Array<PostProps>) => void;
}
