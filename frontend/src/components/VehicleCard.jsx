const ETICHETE_FUEL = { petrol: "Benzină", diesel: "Diesel", electric: "Electric" };

export default function VehicleCard({ vehicle, onToggle, onDelete }) {
  return (
    <li className={vehicle.activeFlag ? "vehicle-card active-card" : "vehicle-card"}>
      {vehicle.image && (
        <div className="card-image-wrap">
          <img src={vehicle.image} alt={vehicle.vehicleName} className="vehicle-img" />
        </div>
      )}
      
      <div className="card-body">
        <div className="card-header-row">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={vehicle.activeFlag}
              onChange={() => onToggle && onToggle(vehicle.id)}
            />
            <span className="checkmark"></span>
          </label>
          <div className="card-info">
            <h3 className="card-title">{vehicle.vehicleName}</h3>
            <div>
              <span className={`badge-fuel fuel-${vehicle.fuelType}`}>
                {ETICHETE_FUEL[vehicle.fuelType] || vehicle.fuelType}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn-danger"
          onClick={() => onDelete && onDelete(vehicle.id)}
        >
          ȘTERGE
        </button>
      </div>
    </li>
  );
}