import { createContext, useContext } from 'react';
import { initialPostData, initialCommentsData } from './initialData';
import { PostsContextTypes } from './interfaces';

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
