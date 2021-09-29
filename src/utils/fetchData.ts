export const url = 'https://jsonplaceholder.typicode.com/posts';

export const method = {
	method: 'GET',
	headers: { 'Content-Type': 'application/json' },
};

export const urlComments = (id: string) => {
	return `https://jjsonplaceholder.typicode.com/posts/${id}/comments`;
};
