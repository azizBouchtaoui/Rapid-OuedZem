import React from "react";
import CardItem from "./CardItem/CardItem";
import "./Card.css";
const Cards = () => {
  return (
    <div className="cards" id="Destinations">
      <h1> Découvrez ces destinations !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/Images/img-10.jpg"
              text="Casablanca est une ville située au centre-ouest du Maroc. 
                            Capitale économique du pays et plus grande ville du Maghreb par la population,
                            elle est située sur la côte atlantique, à environ 80 km au sud de Rabat, la capitale administrative. "
              label="CASABLANCA"
              path="/"
            />
            <CardItem
              src="/Images/img-14.jpg"
              text="Oued-Zem, parfois surnommée la ville martyre, est une ville marocaine de plus de 115 000 habitants,
                            mais l'agglomération de Oued-Zem regroupe plus de 200 000 habitants. 
                            C'est une communauté urbaine qui se situe dans la région de Béni Mellal-Khénifra, au sein de la province de Khouribga "
              label="Oued-Zem"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/Images/img-11.jpg"
              text="Marrakech, est une ville située dans le centre du Maroc au pied des montagnes de l'Atlas.
                            Marrakech est surnommée « la ville rouge »ou la « ville ocre » en référence à la couleur rouge
                                d'une grande partie de ses immeubles et ses maisons."
              label="MARRAKECH"
              path="/"
            />
            <CardItem
              src="/Images/img-12.jpg"
              text="Fès ou Fez est une ville du Maroc septentrional, située à 180 km à l'est de Rabat, 
                            entre le massif du Rif et le Moyen Atlas. Faisant partie des villes impériales du Maroc,
                            elle a été à plusieurs époques la capitale du pays et est considérée de nos jours comme sa capitale
                                spirituelle."
              label="Fès"
              path="/"
            />
            <CardItem
              src="/Images/img-13.jpg"
              text="Agadir, ville située sur la côte atlantique sud du Maroc dans les contreforts de l'Anti-Atlas,
                            est la capitale de la province d'Agadir Ida-Outanane.
                                Cette station balnéaire est réputée pour ses parcours de golf, 
                                sa large plage en croissant et sa promenade en front de mer bordée de cafés, de restaurants et de bars."
              label="Agadir"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cards;
