# Page Transition

A wrapper component that responds to routing changes and animates the pages in & out. 
Pages can animate left or right based on direction.

## Usage

The PageTransition wrapper component should be used to wrap the content of a routable page. 
It requires the location state so this must be passed as a prop.

```jsx
// routes
<Route path="/some-page" component={ SomePage } />

// SomePage component
...
render: function() {
	const { children, location } = this.props;

    return (
		<PageTransition location={ location }>
			{ children }
		</PageTransition>
    );
}
```

## Props

### `location`

The `location` state is required.
Set location.state.direction when linking to this route (using the `react-router`s `Link` component) to set the animation direction of the transition.
