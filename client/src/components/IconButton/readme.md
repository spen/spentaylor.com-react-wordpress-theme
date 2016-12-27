# Icon Button

<img width="363" alt="screen shot 2016-12-01 at 18 37 12" src="https://cloud.githubusercontent.com/assets/4335450/20785642/5a2f8146-b7f5-11e6-95d4-a5120cfd5979.png">

This button allows Icons to be inserted neatly on either the left, right or center.

### Usage
```jsx
return (
	<IconButton
		href={ socialNetwork.url }
		openNew={ true }
		label={ 'Twitter' }
		Icon={ TwitterIcon }
		iconPlacement="Left"
	/>
);
```

## Props

### `Icon`

Type: `Component`  
Supply an Icon component to be rendered inside the button

### `iconPlacement`

Type: `Component`  
Defaults to: 'centre'
This should be 'right', 'left', 'centre'. Used to position the icon.

### Other Button props
Any other props needed for a regular `Button` component should also be passed when declaring
a new IconButton: `href`, `mainColor`, `label` etc.