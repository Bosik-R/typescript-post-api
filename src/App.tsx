import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Post from './components/Post/Post';
import ResponseMessage from './components/ResponseMessage/ResponseMessage';
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

type StatusProps = {};

const App: React.FC = () => {
	const [posts, setPosts] = useState<AllPostsProps>([]);
	const [postData, setPostData] = useState<PostProps>(InitialPostData);
	const [resStatus, setResStatus] = useState(200);

	const getPosts = async () => {
		const response = await fetch(url, method);
		const data = await response.json();
		setPosts(data);
		setResStatus(response.status);
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
						{resStatus === 200 && (
							<Switch>
								<Route exact path='/' component={MainPage} />
								<Route path='/posts/:id' component={Post} />
							</Switch>
						)}
						{resStatus !== 200 && (
							<ResponseMessage resStatus={resStatus}>Loading...</ResponseMessage>
						)}
					</BrowserRouter>
				</Wrapper>
			</GlobalContext.Provider>
		</Container>
	);
};

export default App;
