import { useEffect, useState, Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import Message from './components/Message/Message';
import PostDetails from './components/PostDetails/PostDetails';
import { GlobalContext } from './utils/GlobalContext';
import { initialPostData, initialStatus, initialCommentsData } from './utils/initialData';
import { StatusProps, PostProps, CommentProps } from './utils/interfaces';
import { url, method } from './utils/fetchData';
import MyLoaderPosts from './components/Loading/MyLoaderPosts';

const App: React.FC = () => {
	const [status, setStatus] = useState<StatusProps>(initialStatus);
	const [posts, setPosts] = useState<Array<PostProps>>([]);
	const [postData, setPostData] = useState<PostProps>(initialPostData);
	const [comments, setComments] = useState<Array<CommentProps>>(initialCommentsData);
	const [editMode, setEditMode] = useState(false);

	const getPosts = async () => {
		try {
			const response = await fetch(url, method);
			if (!response.ok) {
				setStatus({ loading: false, success: false, error: true, resStatus: response.status });
			} else {
				const data = await response.json();
				setStatus({ loading: false, success: true, error: false, resStatus: response.status });
				setPosts(data);
			}
		} catch (err) {
			setStatus({ loading: false, success: false, error: true, resStatus: 500 });
		}
	};

	useEffect(() => {
		// setting a timeout function to demostrate the loading skeleton
		setTimeout(() => {
			getPosts();
		}, 800);
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				editMode,
				setEditMode,
				posts,
				setPosts,
				postData,
				setPostData,
				comments,
				setComments,
			}}>
			<BrowserRouter>
				<Layout>
					<Switch>
						{status.success && (
							<Fragment>
								<Route exact path='/' component={MainPage} />
								<Route path='/posts/:id' component={PostDetails} />
							</Fragment>
						)}
						{status.error && <Message status={status.resStatus} />}
						{status.loading && (
							<Fragment>
								<MyLoaderPosts />
								<MyLoaderPosts />
								<MyLoaderPosts />
							</Fragment>
						)}
					</Switch>
				</Layout>
			</BrowserRouter>
		</GlobalContext.Provider>
	);
};

export default App;
