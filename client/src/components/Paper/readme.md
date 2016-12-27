# Paper

![avatar](https://cloud.githubusercontent.com/assets/4335450/20856095/4cca4e2a-b95b-11e6-839c-1c7f6b64cf20.png)

A styled div to be used to display content

## Usage

The Paper component should wrap content as below, note that there is no padding inside the component to allow full width content.  
For this reason padding will have to be added to the inner content.

```jsx
render() {
    return (
		<Paper>
			<div style={ { padding: '10px 30px' } }>
				<h2>Content</h2>
				<p>Fluorescent lights float tank birth name, aquarius himalayan sea salt acid quinoa. </p><p>Namaste.</p>
			</div>
		</Paper>
    );
}
```
