import React, { FC } from 'react';
import './SearchResult.css';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
interface SearchResultProps {
	searchData: any[];
   
}
const SearchResult: FC<SearchResultProps> = ({ searchData }) => {
    
        return (
        	
            <div className='result'>
			<h3 className='result__title'>Адреса</h3>
			<ul className='result__list'>
				
					{searchData.map((item) => (
						<SearchResultItem item={item} key={item.data.kladr_id} />
					))}
			</ul>
		</div> 
	);
    
	
};

export default SearchResult;
