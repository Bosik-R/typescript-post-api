import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Message from './components/Message/Message';
import Post from './components/Post/Post';
import { GlobalContext, InitialPostData, PostProps, AllPostsProps } from './utils/GlobalContext';
import { Status, initialStatus } from './utils/initialStatus';
import { url, method } from './utils/fetchData';

const Container = styled.div`
	max-width: 1024px;
	width: 100%;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100%;
	border-radius: 20px;
	border: 1px solid #5c5c5c;
	border-radius: 10px;
	margin-bottom: 50px;
`;

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
		setTimeout(() => {
			getPosts();
		}, 3000);
	}, []);

	return (
		<Container>
			<GlobalContext.Provider value={{ posts, postData, setPostData }}>
				<Wrapper>
					<BrowserRouter>
						<Header />
						{status.success && (
							<Switch>
								<Route exact path='/' component={MainPage} />
								<Route path='/posts/:id' component={Post} />
							</Switch>
						)}
						{status.error && <Message status={status.resStatus} />}
						{status.loading && <h1>loading</h1>}
					</BrowserRouter>
				</Wrapper>
			</GlobalContext.Provider>
		</Container>
	);
};

export default App;
