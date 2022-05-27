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
												<a key={number} className={currentPage===number?style.selected:style.items} onClick={() => paginate(number)} href='#top'>
													{number}
													{/* <a onClick={() => paginate(number)} href='#top' className={currentPage===number?style.pageSel:style.pages}>
														{number}
													</a> */}
												</a>
										)
								})}
				</nav>
		)
}

export default Pagination;