// import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs.hooks";
import { GifGridItem } from "./GifGridItem.component";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifts(category)
  //     .then(setImages);
  // }, []); En este caso funciona como un ngOnInit se carga por primera vez antes de que el html se cargue

  // useEffect(() => {
  //   getGifts(category)
  //     .then(setImages);
  // }, [category]); // Usandolo de esta manera cada vez que la variable category cambie se va a disparar el useEffect

  const {data:images, loading} = useFetchGifs(category); //data:images se usa para renombrar esa variable
  
  return (
    <>
        <h3>{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid animate__animated animate__fadeIn">
            {
                images.map((image) => {
                    return <GifGridItem key={image.id} {...image} />;
                })
            }
        </div>
    </>
  );
};
