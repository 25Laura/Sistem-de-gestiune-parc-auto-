import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchVehicul } from "../api.js";
import { ETICHETE_COMBUSTIBIL } from "../constants.js";
import VehicleImage from "../components/VehicleImage.jsx";
import styles from "./VehiculDetaliuPage.module.css";

export default function VehiculDetaliuPage() {
  const { id } = useParams();
  const [vehicul, setVehicul] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchVehicul(id)
      .then((data) => {
        if (!ignore) {
          setVehicul(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se incarca vehiculul...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Vehiculul nu a putut fi incarcat: {error}
        </p>
        <Link to="/" className={styles.back}>
          Inapoi la flota
        </Link>
      </section>
    );
  }

  const vechime = vehicul.an ? new Date().getFullYear() - vehicul.an : null;

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Inapoi la flota
      </Link>
      <VehicleImage vehicul={vehicul} mare />
      <h2 data-testid="detail-title">{vehicul.vehicleName}</h2>
      <dl className={styles.fields}>
        <dt>Combustibil</dt>
        <dd>
          <span className={`badge-fuel fuel-${vehicul.fuelType}`}>
            {ETICHETE_COMBUSTIBIL[vehicul.fuelType] ?? vehicul.fuelType}
          </span>
        </dd>
        <dt>An fabricatie</dt>
        <dd>{vehicul.an ?? "necunoscut"}</dd>
        <dt>Vechime</dt>
        <dd>{vechime === null ? "necunoscuta" : `${vechime} ani`}</dd>
        <dt>Status</dt>
        <dd className={vehicul.activeFlag ? styles.activ : styles.inactiv}>
          {vehicul.activeFlag ? "In serviciu" : "Scos din serviciu"}
        </dd>
        <dt>ID</dt>
        <dd>{vehicul.id}</dd>
      </dl>
    </section>
  );
}
