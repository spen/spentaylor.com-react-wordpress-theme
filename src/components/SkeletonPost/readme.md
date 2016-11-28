# Skeleton Post

A placeholder view to be shown while post data is being fetched to help minimise an abrupt visual change once the data has been loaded and to avoid having to use a spinner of some sort.
It composes a number of `SkeletonBar` components.

## Usage

SkeletonPost should be used in place of anything that looks like a post while data is being waited on to render that view.
It takes no props and should simple be called as below:

```jsx
render: function() {
    return (
    	<div>
    		<SkeletonPost />
        </div>
    );
}
```