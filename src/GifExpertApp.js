import { useState } from "react";
import { AddCategory } from "./components/AddCategory.component";
import { GifGrid } from "./components/GifGrid.component";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    const handleAdd = () => {
        // setCategories(['Kimetsu No Yaiba', ...categories]);
        setCategories((cate) => [...cate, 'Kimetsu No Yaiba']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <AddCategory julio={setCategories} />
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid key={category} category={category} />
                        // return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
};

export default GifExpertApp;