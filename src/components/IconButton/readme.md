# Icon Button

<img width="363" alt="screen shot 2016-12-01 at 18 37 12" src="https://cloud.githubusercontent.com/assets/4335450/20785642/5a2f8146-b7f5-11e6-95d4-a5120cfd5979.png">

This button allows Icons to be inserted neatly on either the left, right, or both sides.

### Usage
```js
return (
	<IconButton
		href={ socialNetwork.url }
		openNew={ true }
		label={ 'Twitter' }
		LeftIcon={ TwitterIcon }
	/>
);
```

## Props

### `LeftIcon`

Type: `Component`  
Supply an Icon component to be rendered on the left of the button

### `RightIcon`

Type: `Component`  
Supply an Icon component to be rendered on the right of the button

### Other Button props
Any other props needed for a regular `Button` component should also be passed when declaring
a new IconButton: `href`, `mainColor`, `label` etc.