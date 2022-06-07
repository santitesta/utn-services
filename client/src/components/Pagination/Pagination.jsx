import style from './Pagination.module.css'

function Pagination({ currentPage, productsPerPage, totalProducts, paginate }) {

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
				pageNumbers.push(i);
		};
		return (
				<nav className={style.container}>
								{pageNumbers.map(number => {
										return (
												<button key={number} className={currentPage===number?style.selected:style.items}
													onClick={() => paginate(number)}>
													{number}
												</button>
										)
								})}
				</nav>
		)
}

export default Pagination;