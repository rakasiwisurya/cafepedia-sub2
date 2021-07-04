import TheCafeDbSource from '../../data/thecafedb-source';

const CafeCatalogue = {
  async render() {
    return `
      <h2>Cafe Catalogue Page</h2>
    `;
  },

  async afterRender() {
    const cafes = await TheCafeDbSource.Home();
    console.log(cafes);

    // TODO: tampilkan movies di dalam DOM
  },
};

export default CafeCatalogue;