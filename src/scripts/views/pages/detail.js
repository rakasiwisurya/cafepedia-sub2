import UrlParser from '../../routes/url-parser';
import TheCafeDbSource from '../../data/thecafedb-source';
import { createCafeDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafe = await TheCafeDbSource.detailCafe(url.id);
    const cafeContainer = document.querySelector('#cafe');
    cafeContainer.innerHTML = createCafeDetailTemplate(cafe);

    // try {
    //   const restaurant = await RestaurantDB.Detail(url.id);
    //   if (restaurant !== null) {
    //     singleContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    //     restoName.innerHTML = restaurant.name;
    //   } else {
    //     restoName.innerHTML = '<p>Not Found</p>';
    //   }

    //   await LikeButtonInitiator.init({
    //     likeButtonContainer: document.querySelector('.favorite'),
    //     restaurant,
    //   });
    // } catch (error) {
    //   restoName.innerHTML = '<p>Connection Error</p>';
    // }
  },
};

export default Detail;