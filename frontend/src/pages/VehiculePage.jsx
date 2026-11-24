import { useEffect, useState } from "react";
import VehicleList from "../components/VehicleList.jsx";
import VehicleForm from "../components/VehicleForm.jsx";
import { createVehicul, deleteVehicul, fetchVehicule, updateVehicul } from "../api.js";
import styles from "./VehiculePage.module.css";

export default function VehiculePage() {
  const [vehicule, setVehicule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchVehicule();
        if (!ignore) setVehicule(data);
      } catch (err) {
        if (!ignore) setError(`Nu am putut incarca datele: ${err.message}. Ruleaza npm run api?`);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(vehicul) {
    const creat = await createVehicul(vehicul);
    setVehicule((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const vehicul = vehicule.find((v) => v.id === id);
    try {
      const actualizat = await updateVehicul(id, { activeFlag: !vehicul.activeFlag });
      setVehicule((prev) => prev.map((v) => (v.id === id ? actualizat : v)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteVehicul(id);
      setVehicule((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const activeCount = vehicule.filter((v) => v.activeFlag).length;

  return (
    <>
      <section className={styles.hero}>
        <h1>Sistem Inteligent de Flota Auto</h1>
        <p className={styles.desc}>
          Monitorizeaza, gestioneaza si controleaza vehiculele tale in timp real.
        </p>
      </section>

      <div className={styles.grid}>
        <section className="panel">
          <div className={styles.panelHeader}>
            <h2>Adauga vehicul</h2>
          </div>
          <VehicleForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <div className={styles.panelHeader}>
            <h2>Flota de vehicule</h2>
            <span className={styles.stats}>
              <span className={styles.dot}></span>
              {vehicule.length} vehicule ({activeCount} active)
            </span>
          </div>

          {loading && (
            <p className="info" data-testid="loading">
              Se incarca lista...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}
          {!loading && (
            <VehicleList vehicule={vehicule} onToggle={handleToggle} onDelete={handleDelete} />
          )}
        </section>
      </div>
    </>
  );
}
