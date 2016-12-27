# Skeleton Pulse

An animation wrapper component. 
Pulses the `opacity` of the wrapping `div` and thus the child components.

## Usage

SkeletonPulse should wrap another component or collection of components.

```jsx
render: function() {
    return (
		<SkeletonPulse>
			<h2>Loading...</h2>
			<SkeletonPost />
			...or
			{ this.props.children }
		</SkeletonPulse>
    );
}
```
