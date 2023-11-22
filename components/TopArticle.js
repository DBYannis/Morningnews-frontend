import styles from '../styles/Toparticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


function TopArticle(props) {
	const dispatch = useDispatch();

	const addBookmarks = () => {
		if(props.isBookmarked){
			dispatch(removeBookmarkToStore(props))
		}else {
			dispatch(addBookmarksToStore(props))
		}
	}

	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} onClick={() => addBookmarks()}/>
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default TopArticle;
