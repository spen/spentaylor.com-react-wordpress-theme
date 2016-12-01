export const propValue = ( prop, defaultValue ) => props => {
	return props[ prop ] != null ? props[ prop ] : defaultValue;
};

export const optionalRule = ( rule, prop ) => props => {
	const style = propValue( prop, null )( props );

	return ( rule && style !== null )
		? `${ rule }: ${ style };`
		: '';
};
