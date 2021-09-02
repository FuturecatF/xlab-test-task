import React, { FC } from 'react';
import './AddressSearch.css';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
interface AddressSearchProps {
	onSubmitSearch: (arg: string) => void
    searchData: any[]
    
}

const AddressSearch: FC<AddressSearchProps> = ({ onSubmitSearch, searchData }) => {
	return (
		<section className='address'>
			<h3 className='address__title'>Поиск адресов</h3>
			<p className='address__subtitle'>Введите интересующий вас адрес</p>
			<SearchForm onSubmitSearch={onSubmitSearch} />
			{searchData.length ? <SearchResult searchData={searchData} /> : ''}
		</section>
	);
};

export default AddressSearch;
