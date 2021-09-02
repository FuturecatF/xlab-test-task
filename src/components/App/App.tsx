import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
/* components */
import Header from '../Header/Header';
import Main from '../Main/Main';
import AddressSearch from '../AddressSearch/AddressSearch';
/* Dadada Api */
import * as dapi from '../../utils/daApi';
function App() {
	const [searchData, SetSearchData] = useState<any[]>([]);

	async function handleSubmitSearch(query: string): Promise<any> {
		try {
			const { suggestions } = await dapi.getAdressList(query);

			SetSearchData(suggestions);
		} catch (err) {
			switch (err) {
				case 400:
					console.log({
						message: err + ' Некорректный запрос (невалидный JSON или XML)',
					});
					break;
				case 401:
					console.log({ message: err + ' В запросе отсутствует API-ключ' });
					break;
				case 403:
					console.log({
						message: err + ' В запросе указан несуществующий API-ключ',
					});
					break;
			}
		}
	}

	return (
		<div className='page'>
			<div className='page__container'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Main />
					</Route>
					<Route exact path='/address'>
						<AddressSearch
							onSubmitSearch={handleSubmitSearch}
							searchData={searchData}
						/>
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
