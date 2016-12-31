const POST_DATA = window.INITIAL_DATA && window.INITIAL_DATA.POST_DATA;
const initialState = {
	list: [],
	total: 0,
	activePostSlug: null,
	postsError: {},
};

if ( POST_DATA && POST_DATA.type === 'post' ) {
	initialState.list.push( POST_DATA )
}

export default initialState;
