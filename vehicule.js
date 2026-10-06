const vehicule = [
  { id: 1, vehicleName: "Dacia Logan (B 101 ABC)", activeFlag: true, fuelType: "benzina" },
  { id: 2, vehicleName: "Volvo FH16 (B 202 DEF)", activeFlag: false, fuelType: "diesel" },
  { id: 3, vehicleName: "Tesla Model 3 (B 303 GHI)", activeFlag: true, fuelType: "electric" }
];

const COMBUSTIBILI_VALIDI = ["benzina", "diesel", "electric"];

function listeazaVehicule(lista) {
  return lista.map((v) => v.vehicleName);
}

function numaraActive(lista) {
  return lista.filter((v) => v.activeFlag).length;
}

function cautaVehicul(lista, text) {
  const cautare = text.toLowerCase();
  return lista.filter((v) => v.vehicleName.toLowerCase().includes(cautare));
}

function nextId(lista) {
  return lista.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

function adaugaVehicul(lista, vehicleName, fuelType = "benzina") {
  const numeCurat = vehicleName.trim();

  if (!numeCurat) {
    console.log("Eroare validare: Denumirea vehiculului nu poate fi goala!");
    return lista;
  }

  if (!COMBUSTIBILI_VALIDI.includes(fuelType)) {
    console.log(`Eroare validare: Combustibil invalid "${fuelType}". Optiuni: ${COMBUSTIBILI_VALIDI.join(", ")}`);
    return lista;
  }

  const nou = {
    id: nextId(lista),
    vehicleName: numeCurat,
    activeFlag: true,
    fuelType: fuelType
  };

  return [...lista, nou];
}

function comutaStareVehicul(lista, id) {
  return lista.map((v) =>
    v.id === id ? { ...v, activeFlag: !v.activeFlag } : v
  );
}

function stergeVehicul(lista, id) {
  return lista.filter((v) => v.id !== id);
}

console.log("--- Citire vehicule ---");
console.log("Vehicule in parc:", listeazaVehicule(vehicule).join(" | "));
console.log("Vehicule active (in cursa):", numaraActive(vehicule));
console.log("Cautare 'Tesla':", listeazaVehicule(cautaVehicul(vehicule, "Tesla")).join(", "));

console.log("--- Adaugare imutabila ---");
let listaNoua = adaugaVehicul(vehicule, "Ford Transit (B 404 JKL)", "diesel");
console.log("Total vehicule dupa adaugare:", listaNoua.length);
console.log("Array-ul original a ramas intact cu:", vehicule.length, "vehicule (Imutabilitate demonstrata)");

console.log("--- Modificare stare si Stergere ---");
listaNoua = comutaStareVehicul(listaNoua, 2);
console.log("Vehicule active dupa activare Volvo:", numaraActive(listaNoua));

listaNoua = stergeVehicul(listaNoua, 1);
console.log("Vehicule ramase dupa stergerea ID 1:", listeazaVehicule(listaNoua).join(" | "));

console.log("--- Validare date ---");
adaugaVehicul(listaNoua, "   ");
adaugaVehicul(listaNoua, "BMW X5 (B 505 MNO)", "hibrid");