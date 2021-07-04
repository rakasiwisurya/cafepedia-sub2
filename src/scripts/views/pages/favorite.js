import FavoriteCafeIdb from '../../data/favorite-cafe-idb';
import { createCafeItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Cafe</h2>
        <div id="cafes" class="cafes">
  
        </div>
      </div>
    `;
  },

  async afterRender() {
    const cafes = await FavoriteCafeIdb.getAllMovies();
    const cafesContainer = document.querySelector('#cafes');
    cafes.forEach((cafe) => {
      cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default Favorite;