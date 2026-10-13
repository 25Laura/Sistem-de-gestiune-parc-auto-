const vehicule = [
  { id: 1, vehicleName: "Dacia Logan (B 101 ABC)", activeFlag: true, fuelType: "benzina" },
  { id: 2, vehicleName: "Volvo FH16 (B 202 DEF)", activeFlag: false, fuelType: "diesel" },
  { id: 3, vehicleName: "Tesla Model 3 (B 303 GHI)", activeFlag: true, fuelType: "electric" }
];

export default function App() {
  const active = vehicule.filter((v) => v.activeFlag).length;

  return (
    <>
      <header className="app-header">
        <h1>Sistem de Gestiune Parc Auto</h1>
        <p>Gestionează vehiculele din parcul auto, starea lor și tipul de combustibil.</p>
        <p className="app-count">
          {vehicule.length} vehicule, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Vehiculele din parc</h2>
          <pre>{JSON.stringify(vehicule, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}