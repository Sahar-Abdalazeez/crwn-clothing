import {createSelector} from 'reselect'; 


const selectCategoryReducer = (state) => state.categories;


const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=>categoriesSlice.categories
)


export const selectCategoriesMap = createSelector(
  [selectCategories], 
  (categories)=>{
    return  categories.reduce((acc, category) => {
      //we changed the object as we want [{title:'',items:[]}]
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
)

//we used memization above instead of the following code 
// export const selectCategoriesMap = (state) =>{
// console.log('===== newwwwwselector of select categories  fired');
//  return  state.categories.categories.reduce((acc, category) => {
//     //we changed the object as we want [{title:'',items:[]}]
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// }