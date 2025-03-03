import { useNavigate } from "react-router";
import { useCities } from "../context/CityContext";
import { formatDate } from "../helper";
import styles from "../styles/cityItem.module.css";
function CityItem({ city,active }) {
    const { cityName, emoji, date, id,} = city;
    const { handleRemoveCity, handleLoadCity } = useCities();
    const navigate = useNavigate();
     function navigateToCityRoute() {
        navigate(`/app/city/${id}`);
         handleLoadCity(id);
        
        // console.log("li clicked..");
    }
    function handleDelete(e) {
        e.stopPropagation();
        handleRemoveCity(id);
    }
    return (
        <li onClick={navigateToCityRoute}>
            <div className={`${styles.cityItem} ${active ? styles.activeCityItem:""}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.cityName}>{cityName}</h3>
                <time className={styles.time}>{formatDate(date)}</time>
                <button className={styles.deleteBtn} onClick={handleDelete}>
                    &times;
                </button>
            </div>
        </li>
    );
}
export default CityItem;