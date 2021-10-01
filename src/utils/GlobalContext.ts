import { createContext, useContext } from 'react';

export interface PostProps {
	id: string;
	title: string;
	body: string;
}

export interface AllPostsProps extends Array<PostProps> {}

export interface PostsContextTypes {
	posts: AllPostsProps;
	postData: {
		id: string;
		title: string;
		body: string;
	};
	editMode: boolean;
	setEditMode: (data: boolean) => void;
	setPostData: (data: PostProps) => void;
	setPosts: (data: Array<PostProps>) => void;
}

export const InitialPostData = {
	id: '',
	title: '',
	body: '',
};

export const GlobalContext = createContext<PostsContextTypes>({
	posts: [],
	postData: InitialPostData,
	editMode: false,
	setEditMode: () => {},
	setPostData: () => {},
	setPosts: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
