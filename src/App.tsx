import { useEffect, useState, Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import Message from './components/Message/Message';
import PostDetails from './components/PostDetails/PostDetails';
import { GlobalContext, InitialPostData, PostProps, AllPostsProps } from './utils/GlobalContext';
import { Status, initialStatus } from './utils/initialStatus';
import { url, method } from './utils/fetchData';
import MyLoaderPosts from './components/Loading/MyLoaderPosts';

const App: React.FC = () => {
	const [status, setStatus] = useState<Status>(initialStatus);
	const [posts, setPosts] = useState<AllPostsProps>([]);
	const [postData, setPostData] = useState<PostProps>(InitialPostData);

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
		}, 1500);
	}, []);

	return (
		<GlobalContext.Provider value={{ posts, postData, setPostData }}>
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
