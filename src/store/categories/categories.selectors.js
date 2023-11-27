export const selectCategoriesMap = (state) =>
  state.categories.categories.reduce((acc, category) => {
    //we changed the object as we want [{title:'',items:[]}]
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
