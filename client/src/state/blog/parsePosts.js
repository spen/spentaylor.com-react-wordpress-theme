export default response => Promise.all( [
	response.json(),
	response.headers.get('X-WP-Total'),
	response.headers.get('X-WP-TotalPages'),
] ).then( ( [ posts, total, totalPages ] ) => ( {
	posts,
	total: parseInt( total ),
	totalPages: parseInt( totalPages ),
} ) );
