# Portal

![avatar](https://cloud.githubusercontent.com/assets/4335450/20856039/5aaaed8e-b95a-11e6-9022-854919f2726b.png)

A style helper component for showing an image within a circle.  

## Usage

Portal can be used either as a wrapper to other components, in which case it will clip that content blindly (and so the position of the content will need to be adjusted manually) or it can be passed a an image url to be used with the `background-image` style.  
If an image is passed, that image will be centered and scaled to fit neatly inside of the Portals clipped area.

```jsx
render: function() {
	return (
	    <Porthole
	    	borderColor="#999" 
	    	image={ imageUrl }
	    	width="100px"
	    />

	    // or

	    <Porthole borderColor="#999" width="100px">
			<img src={ image } />
		</Porthole>
	);
}
```

## Props

### `image`

Type: `String`  
Supply a url to an image to be used as the portals background.

### `width`

Type: `String`  
Defaults to: `120px`  
Defines the width (and height, since the portal is circular) of the component.

### `borderColor`

Type: `String`  
The color of the Portals border.

### `borderWidth`

Type: `String`  
Defaults to: `4px`  
The width of the Portals border - will only be used if the `borderColor` prop is also supplied.
