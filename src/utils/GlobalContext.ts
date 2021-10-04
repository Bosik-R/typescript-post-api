import { createContext, useContext } from 'react';

export interface PostProps {
	id: string;
	title: string;
	body: string;
}

export const initialPostData = {
	id: '',
	title: '',
	body: '',
};

export interface CommentProps {
	id: string;
	name: string;
	body: string;
}

export const initialCommentsData = [
	{
		id: '',
		name: '',
		body: '',
	},
];

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

export const GlobalContext = createContext<PostsContextTypes>({
	posts: [],
	postData: initialPostData,
	editMode: false,
	comments: initialCommentsData,
	setComments: () => {},
	setEditMode: () => {},
	setPostData: () => {},
	setPosts: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
