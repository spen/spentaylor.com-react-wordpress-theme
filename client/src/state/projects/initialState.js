const POST_DATA = window.INITIAL_DATA && window.INITIAL_DATA.POST_DATA;
const initialState = {
	list: [],
	total: 0,
	activeSlug: null,
	error: {},
};

if ( POST_DATA && POST_DATA.type === 'jetpack-portfolio' ) {
	initialState.list.push( POST_DATA )
}

export default initialState;
