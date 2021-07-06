import TheCafeDbSource from '../../data/thecafedb-source';
import { createCafeItemTemplate } from '../templates/template-creator';

const CafeCatalogue = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Available Cafes</h2>
        <div id="cafes" class="cafes">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const cafes = await TheCafeDbSource.Home();
    const cafesContainer = document.querySelector('#cafes');
    cafes.forEach((cafe) => {
      cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default CafeCatalogue;