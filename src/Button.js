import React, { Children } from 'react';
import './Button.css';
const STYLES = ['btn--primary','btn--outline']
const SIZES = ['btn--medium','btn--large','btn--mobile','btn-wide']
const COLOR = ['primary','blue','red','green']
export const Button = ({
child,
type,
onClick,
buttonStyle,
buttonSize,
buttonColor
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ?
  buttonStyle : STYLES[0] 

  const checkButtonSize= STYLES.includes(buttonStyle) ?
  buttonStyle : SIZES[0] 

  const checkButtonColor= STYLES.includes(buttonStyle) ?
  buttonStyle : COLOR[0]
  

    return(
        <button className={`btn ${checkButtonStyle} $ 
        {checkButtonSize} $ {checkButtonColor}`} onClick={onClick}
        type={type}>{Children}</button>
    )
}