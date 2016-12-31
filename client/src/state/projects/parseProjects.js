export default response => Promise.all( [
	response.json(),
	response.headers.get( 'X-WP-Total' ),
	response.headers.get( 'X-WP-TotalPages' ),
] ).then( ( [ projects, total, totalPages ] ) => ( {
	projects,
	total: parseInt( total ),
	totalPages: parseInt( totalPages ),
} ) );
