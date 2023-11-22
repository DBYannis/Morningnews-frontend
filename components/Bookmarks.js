import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';
import Article from './Article';
import { useSelector } from 'react-redux';


function Bookmarks() {
	const bookmarks = useSelector((state) => state.bookmarks.value)
	const bookmarksList = bookmarks.map((data, i) => {
		return <Article key={i} {...data} />;
	  });
	console.log(bookmarks)
	return (
		<div>
			<Head>
				<title>Morning News - Bookmarks</title>
			</Head>
			<div className={styles.container}>
				<h2>Bookmarks</h2>
				<div>
				{bookmarksList.length > 0 ? bookmarksList : <p>No bookmarks</p>}
				</div>
			</div>
		</div>

	);
}

export default Bookmarks;
