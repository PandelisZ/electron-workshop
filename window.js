const API = 'https://min-api.cryptocompare.com/data/pricemulti'
//https://min-api.cryptocompare.com/data/pricemulti?fsym=ETH&tsyms=BTC,USD,EUR

const COINS = [
	'BTC',
	'ETH',
	'LTC'
]

const CURRENCIES = [
	'BTC',
	'GBP',
	'USD'
]

const QUERY = API + '?fsyms='+COINS.join(',')+'&tsyms='+CURRENCIES.join(',')
console.log(QUERY)


$.ajax({
  url: QUERY,
}).done(function(data) {
	console.log(data)
	
	COINS.forEach((coin) => {
  
		let value = data[coin]
		
		CURRENCIES.forEach((curr) => {
			$('#' + coin.toLowerCase() + '-' + curr.toLowerCase() ).text(value[curr].toLocaleString())
		})
  
		
  
	})
});
