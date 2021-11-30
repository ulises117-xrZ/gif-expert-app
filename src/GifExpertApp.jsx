import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export default function GifExpertApp() {
    const [categories, setcategories] = useState(["One Punch"]);

    return (
        <div>
            <h2>
                GifExpertApp
            </h2>
            <AddCategory setCategories={setcategories} />
            <hr />
            <ol>
                {
                    categories.map(item =>
                        <GifGrid
                            key={item}
                            category={item} />
                    )
                }
            </ol>
        </div>
    )
}
