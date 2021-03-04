import React, { useContext } from 'react';
import { getFirestore } from '../Firebase';
export const FirebaseContext = React.createContext(false);
export const useFirebaseContext = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {

    const db = getFirestore();
 
    const getAllItems = () => {    
        return db.collection('ITEMS').where('stock', "!=", 0).get();
    }

    const getItemByID = (itemId) => {
        return db.collection('ITEMS').doc(itemId).get();
    }

    const getItemsByCategory = (category) => {
        return db.collection('ITEMS').where('category', '==', category).get();
    }

    const getItemsByTerm = (term) => {
        console.log(term);
        return db.collection('ITEMS').orderBy('category').startAt(term).endAt(term+'\uf8ff').get();
    }

    const addItem = async () => {
        const data = [    {

            id: 1,
            title: "Finanzas Personales Básico",
            type: "Finanzas Personales",
            categoryId: 1,
            category: "Fácil",
            stock: 10,
            price: "350",
            photo: "data:image/jpeg;base64,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",
            description: "Administrar bien tu dinero es la clave del éxito.",
        },
        {
            id: 2,
            title: "Finanzas Personales Avanzado",
            type: "Finanzas Personales",
            categoryId: 1,
            category: "Avanzado",
            stock: 10,
            price: "500",
            photo: "https://assets.entrepreneur.com/content/3x2/2000/20180410014619-INVERTIRENBOLSA.jpeg",
            description: "Administrar bien tu dinero es la clave del éxito.",
        },
        {
            id: 3,
            title: "Inversión en bolsa",
            type: "Inversiones",
            categoryId: 3,
            category: "Avanzado",
            stock: 10,
            price: "1450",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrjp2Wfm5YZNjvxO55fOLesvnJUEvLIuVrw&usqp=CAU",
            description: "Armado de cartera. Consejos y alertas.",
        },
        {
            id: 4,
            title: "Bitcoins",
            type: "Criptomonedas",
            categoryId: 4,
            category: "Avanzado",
            stock: 10,
            price: "3000",
            photo: "https://www.eleconomista.com.mx/__export/1610752670885/sites/eleconomista/img/2021/01/15/bitcoin-reuters.jpg_820388033.jpg",
            description: "¿Cómo funcionan las crytos? El ejemplo Bitcoin.",
        }];

        data.map( async (item) => {
            await db.collection('ITEMS').add(item).then((result) => {
                console.log(`Documento agregado con el ID: ${result}`);
            })
        })
    }

    return (
        <FirebaseContext.Provider value={{ getAllItems, getItemByID, getItemsByCategory, getItemsByTerm}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;