// Compteur de visites GoatCounter (gratuit, sans cookies)
// data-goatcounter-counter="true" : active l'affichage du nombre de
// visites dans le <span data-goatcounter="true"> de la page.
export default function GoatCounter() {
  return (
    <script
      data-goatcounter="https://tjm-facile.goatcounter.com/count"
      data-goatcounter-counter="true"
      async
      src="//gc.zgo.at/count.js"
    />
  );
}