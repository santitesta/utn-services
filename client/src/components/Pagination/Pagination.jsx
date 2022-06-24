

function Pagination({ currentPage, productsPerPage, totalProducts, paginate }) {

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	};

	return (
		<div className='btn-group'>
			{pageNumbers.map(number => {
				return (
					<button key={number} className={currentPage === number ? 'btn btn-active' : 'btn'}
						onClick={() => paginate(number)}>
						{number}
					</button>
				)
			})}
		</div>
	)
}

export default Pagination;