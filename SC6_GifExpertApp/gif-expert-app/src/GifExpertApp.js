import React, { Fragment , useState  } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {
                    categories.map(c => {
                        return <li key={c}>{c}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp