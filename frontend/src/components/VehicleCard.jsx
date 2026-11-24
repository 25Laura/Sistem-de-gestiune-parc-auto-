import { Link } from "react-router-dom";
import { ETICHETE_COMBUSTIBIL } from "../constants.js";
import VehicleImage from "./VehicleImage.jsx";
import styles from "./VehicleCard.module.css";

export default function VehicleCard({ vehicle, onToggle, onDelete }) {
  return (
    <li
      className={vehicle.activeFlag ? `${styles.card} ${styles.activeCard}` : styles.card}
      data-testid="item"
      data-id={vehicle.id}
    >
      <VehicleImage vehicul={vehicle} />

      <div className={styles.row}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={vehicle.activeFlag}
          onChange={() => onToggle(vehicle.id)}
          aria-label={`Marcheaza in serviciu ${vehicle.vehicleName}`}
          data-testid="item-toggle"
        />
        <div className={styles.info}>
          <Link
            to={`/vehicule/${vehicle.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {vehicle.vehicleName}
          </Link>
          <div>
            <span className={`badge-fuel fuel-${vehicle.fuelType}`}>
              {ETICHETE_COMBUSTIBIL[vehicle.fuelType] ?? vehicle.fuelType}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn-danger"
        onClick={() => onDelete(vehicle.id)}
        aria-label={`Sterge ${vehicle.vehicleName}`}
        data-testid="item-delete"
      >
        Sterge
      </button>
    </li>
  );
}
