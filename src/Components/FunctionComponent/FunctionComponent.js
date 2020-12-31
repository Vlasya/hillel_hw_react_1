import  React from 'react'
import s from './FunctionComponent.module.css'

function FunctionComponent (){
	return(
		<div className={s.greetingText}>
			<h3>From Function Component</h3>
			<h4>Hello World</h4>
		</div>
	)
}

export default FunctionComponent;