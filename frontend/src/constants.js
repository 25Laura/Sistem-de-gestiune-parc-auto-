export const COMBUSTIBILI = [
  { value: "petrol", label: "Benzina" },
  { value: "diesel", label: "Diesel" },
  { value: "electric", label: "Electric" },
];

export const ETICHETE_COMBUSTIBIL = Object.fromEntries(
  COMBUSTIBILI.map((c) => [c.value, c.label])
);

export const NUME_MAX = 60;
export const AN_MIN = 1950;

const COMMONS = "https://commons.wikimedia.org/wiki/";

const IMAGINI_MODELE = [
  { cuvinte: ["logan"], fisier: "Dacia_Logan_1.4_MPI_(Facelift)_%E2%80%93_Frontansicht,_19._Juni_2012,_Heiligenhaus.jpg" },
  { cuvinte: ["fh16", "fh 16"], fisier: "Civa_Trans_Volvo_FH16.jpg" },
  { cuvinte: ["model 3", "model3"], fisier: "Tesla_Model_3_(2023)_IMG_9488_(cropped).jpg" },
  { cuvinte: ["transit"], fisier: "2016_Ford_Transit_350_2.2.jpg" },
  { cuvinte: ["zoe"], fisier: "Renault_Zoe_R110_Z.E._50_Experience_(Facelift)_%E2%80%93_f_22112020.jpg" },
  { cuvinte: ["octavia"], fisier: "Skoda_Octavia_IV_Combi_IMG_2617.jpg" },
];

export function imagineVehicul(vehicul) {
  if (vehicul.image) return { src: vehicul.image, sursa: null };
  const nume = (vehicul.vehicleName ?? "").toLowerCase();
  const gasit = IMAGINI_MODELE.find((m) => m.cuvinte.some((c) => nume.includes(c)));
  if (!gasit) return null;
  return {
    src: `${COMMONS}Special:FilePath/${gasit.fisier}?width=640`,
    sursa: `${COMMONS}File:${gasit.fisier}`,
  };
}
