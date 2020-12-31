import { render } from '@testing-library/react'
import React from 'react'
import s from './ClassComponent.module.css'

class CompClass extends React.Component{
	render(){
		return(
			<div className={s.greetingText}>
				<h3>From Class Component</h3>
				<h4>Hello World</h4>
			</div>
		)
	}
}

export default CompClass;