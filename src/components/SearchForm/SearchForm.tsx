import React, { FC, useState, useEffect } from 'react';
import './SearchForm.css';
import searchIcon from '../../images/form-search-btn.svg';
interface SearchProps {
	onSubmitSearch: (arg: string) => void;
}
const SearchForm: FC<SearchProps> = ({ onSubmitSearch }) => {
	const [searchValue, SetSearchValue] = useState<string>('');
	const [isValid, SetIsValid] = useState<boolean>(true);
	
	useEffect(() => {
		if (searchValue.length >= 3) {
			SetIsValid(false);
		} else SetIsValid(true);
	}, [searchValue]);

	function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
		SetSearchValue(e.target.value);
	}

	function handleSubmitSearch(e: React.SyntheticEvent): void {
		 e.preventDefault();
		 onSubmitSearch(searchValue); 
	}
	return (
		<form className='search' onSubmit={handleSubmitSearch} noValidate>
			<fieldset className='search__container'>
				<input
					type='text'
					className='search__input'
					placeholder='Введите интересующий вас адрес'
					value={searchValue}
					onChange={handleChangeInput}
				/>
				<button className='search__btn' type='submit' disabled={isValid}>
					<img className='search__btn-image' src={searchIcon} alt='поиск'></img>{' '}
					Поиск
				</button>
			</fieldset>
		</form>
	);
};

export default SearchForm;
