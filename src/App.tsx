import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Message from './components/Message/Message';
import Post from './components/Post/Post';
import { GlobalContext, InitialPostData, PostProps, AllPostsProps } from './utils/GlobalContext';

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

const url = 'https://jsonplaceholder.typicode.com/posts';

const method = {
	method: 'GET',
	headers: { 'Content-Type': 'application/json' },
};

const App: React.FC = () => {
	const [status, setStatus] = useState<number | null>(null);
	const [posts, setPosts] = useState<AllPostsProps>([]);
	const [postData, setPostData] = useState<PostProps>(InitialPostData);

	const getPosts = async () => {
		const response = await fetch(url, method);
		const resStatus = response.status;
		setStatus(resStatus);
		console.log(resStatus);

		try {
			if (resStatus === 200) {
				const data = await response.json();
				setPosts(data);
			}
		} catch (err: any) {
			setStatus(err);
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<Container>
			<GlobalContext.Provider value={{ posts, postData, setPostData }}>
				<Wrapper>
					<BrowserRouter>
						<Header />
						{status === 200 ? (
							<Switch>
								<Route exact path='/' component={MainPage} />
								<Route path='/posts/:id' component={Post} />
							</Switch>
						) : (
							<Message status={status} />
						)}
					</BrowserRouter>
				</Wrapper>
			</GlobalContext.Provider>
		</Container>
	);
};

export default App;
