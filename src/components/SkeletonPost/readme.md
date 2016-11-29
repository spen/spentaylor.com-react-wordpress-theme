# Skeleton Post

<img width="909" alt="screen shot 2016-11-29 at 14 19 03" src="https://cloud.githubusercontent.com/assets/4335450/20695301/faa77ff6-b63e-11e6-947f-cf3c27b0ba65.png">

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