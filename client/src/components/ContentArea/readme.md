# Content Area

This component wraps the entire area below the header and serves to allow for it's content to be scrollable.
It also takes in to account the header height, so that the scrollable area is not part covered by the header.
This is all important to allow the mechanism of toggling the Intro/Content areas.

## Usage

This should only be used once - as the wrapper to the lower content area.

```jsx
// Taken from containers/App/index
render: function() {
	// ...
    return (
		<PageWrap open={ showContent }>
			<Intro />
			<Header showContent={ showContent } />
			<ContentArea>
				{ contentComponent }
			</ContentArea>
		</PageWrap>
	);
}
```