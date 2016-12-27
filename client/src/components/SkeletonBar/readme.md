# Skeleton Bar

A stylised `p` element used to build skeleton views to indicate that something is loading.

## Usage

Multiple SkeletonBars should be used together to compose a larger skeleton view.
The inline prop can be set to true to allow multiple bars to flow inline with each other.

```jsx
render: function() {
    return (
    	<div>
    		<SkeletonBar width="50%" />
        	<SkeletonBar width="30%" inline />
        	<SkeletonBar width="10%" inline />
        	<SkeletonBar width="40%" inline />
        </div>
    );
}
```

## Props

### `width`

Type: `String` or `number`
The width of the bar. Set to '40%' by default.

### `inline`

Type: `Boolean`
Sets the elements `display` style to `inline-block` if true.
Otherwise defaults to `display: block`.