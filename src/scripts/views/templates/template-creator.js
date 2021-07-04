import CONFIG from '../../globals/config';

const createCafeDetailTemplate = (cafe) => {
  let cafeCategories = '';
  let cafeFoods = '';
  let cafeDrinks = '';
  let cafeReviews = '';

  cafe.categories.forEach((category) => {
    cafeCategories += category.name;
  });

  cafe.menus.foods.forEach((food) => {
    cafeFoods += food.name;
  });

  cafe.menus.drinks.forEach((drink) => {
    cafeDrinks += drink.name;
  });

  restaurant.customerReviews.forEach((review) => {
    cafeReviews += `
    <div class="post-item">
      <div tabindex="0" class="post-item__content">
        <div>
          <h3 tabindex="0"> ${review.name} <span tabindex="0"> ${review.date} </span></h3>
          <p tabindex="0">${review.review}</p>
        </div>
      </div>
    </div>`;
  });

  return '';

  // return `
  // <div class="header__img">
  //     <img tabindex="0" src="${CONFIG.IMG_MED + cafe.pictureId}" alt="${cafe.name}" crossorigin="anonymous">
  //     <div class="favorite"></div>
  //     <div class="post-item-title-rating-single">
  //         <p class="post-item-rating">
  //           <span> ${cafe.rating} </span>
  //         </p>
  //     </div>
  // </div>
  // <div class="posts-single-content">
  //   <article tabindex="0" class="post-item">
  //       <div class="post-item-content">
  //           <p class="post-item-description">
  //               <span tabindex="0"> ${cafeCategories} </span>
  //               <br>
  //               <span tabindex="0"> ${cafe.address}, ${cafe.city} </span>
  //               <br>
  //               <b tabindex="0">Description : </b>
  //               <br>
  //               <span tabindex="0"> ${cafe.description} </span>
  //           </p>
  //       </div>
  //   </article>
  //   <div class="posts-menu">
  //       <article class="post-item">
  //           <div class="post-item-content">
  //               <div class="post-item-content-title">
  //                   <h2 tabindex="0">Foods</h2>
  //               </div>
  //               <p tabindex="0" class="post-item-description">
  //                   ${cafeFoods}
  //               </p>
  //           </div>
  //       </article>
  //       <article class="post-item">
  //           <div class="post-item-content">
  //               <div class="post-item-content-title">
  //                   <h2 tabindex="0">Drinks</h2>
  //               </div>
  //               <p tabindex="0" class="post-item-description">
  //                   ${cafeDrinks}
  //               </p>
  //           </div>
  //       </article>
  //   </div>
  // </div>
  // <div class="posts-review">
  //     <div class="post-user-review">
  //         ${cafeReviews}
  //     </div>
  // </div>
  // `;
};

const createCafeItemTemplate = (cafe) => `
    <article class="post-item" tabindex="0">
        <div class="post-item__card">
            <img tabindex="0" class="post-item__thumbnail" src="${CONFIG.IMG_SMALL + cafe.pictureId}" alt="${cafe.name}" crossorigin="anonymous">
            <div class="post-item__location">
                <h2>${cafe.city}</h2>
            </div>
        </div>
        <div class="post-item__content">
            <div class="post-item__title-rating">
                <h3 class="post-item__title">
                  <a href="${`/#/detail/${cafe.id}`}"> ${cafe.name} </a>
                </h3>
                <p class="post-item__rating">
                  <span> ${cafe.rating} </span>
                </p>
            </div>
            <p tabindex="0" class="post-item__description">${cafe.description.substr(0, 200)}..</p>
        </div>
    </article>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this cafe">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="like this cafe">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCafeDetailTemplate,
  createCafeItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
