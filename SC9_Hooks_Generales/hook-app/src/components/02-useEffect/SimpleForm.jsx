import React , { useEffect , useState} from 'react'
import '../01-useState/counter.css'
export const SimpleForm = () => {
	const [ formState , setFormState ] = useState( {
		name:'',
		email:''
	} );
	
	const { name , email } = formState
	
	useEffect( () => {
		console.log('hi')
	},[]);
	
	useEffect( () => {
		console.log('formState change')
	},[formState]);

	useEffect( () => {
		console.log('email change')
	},[email]);
	
	const handleInputChange = ({target}) => {
		setFormState({
			...formState,
			[target.name] : target.value  
		})
	}
	
	return (
		<>
			<h1>UseEffect</h1>
			<hr />
			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Introducir Nombre'
					autoComplete="off"
					value={name}
					onChange={ handleInputChange }
				/>
			</div>
			<div className='form-group'>
				<input
					type='text'
					name='email'
					className='form-control'
					placeholder='Correo Electronico'
					autoComplete="off"
					value={email}
					onChange={ handleInputChange }
				/>
			</div>
		</>
	)
}