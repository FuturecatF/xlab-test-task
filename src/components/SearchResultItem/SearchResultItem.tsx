import React, { FC } from 'react';
import './SearchResultItem.css';
interface SearchResultItemProps {
	item: any;
}
const SearchResultItem: FC<SearchResultItemProps> = ({ item }) => {
	const { region_type_full, region, street_type_full, street } = item.data;
	return (
		<li className='result__item'>{`${region_type_full} ${region}, ${
			street_type_full ? street_type_full : ''
		} ${street ? street : ''}`}</li>
	);
};

export default SearchResultItem;
