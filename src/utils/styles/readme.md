# Styled-components Utilities

This is a set of utility functions to be used in [`styled-components`](https://github.com/styled-components/styled-components) implementations.

## propValue

Takes two arguments, `prop` and `defaultValue`.  
`propValue` will attempt to use the value of the matching prop found, returning the `defaultValue` if no match is found.

## optionalRule

`optionalRule` Is to be used in cases where the css rule should not exist unless there is a matching value in the passed `props`.  
The first arguement is the css rule(`color`, `height` etc.) and the second arguement is the name of the `prop` on which this rule depends.

### usage
```js
const someStyles = css`
    backgroundColor: ${ propValue( 'bgColor', 'tomato' ) } ;
    box-shadow: 0 4px 0 ${ propValue( 'shadowColor', '#333' ) };
    ${ optionalRule( 'color', 'textColor' ) }
`;
```