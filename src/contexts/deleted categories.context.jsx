import { createContext, useState } from "react";

export const CategoriesContext = createContext({
  products: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  // this code is deleted since we started using redux instead of context 
  // useEffect(() => {
  //   //because getCategoriesAndDocuments is an async function and we are calling it inside useEffect we create new async function

  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     setCategories(categoryMap);
  //   };
  //   getCategoriesMap();
  // }, []);

  //we deleted this code since the data added to firestore so now we don't need it same for the SHOP_DATA above
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
