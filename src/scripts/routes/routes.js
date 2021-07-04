import CafeCatalogue from '../views/pages/cafe-catalogue';
import Detail from '../views/pages/detail';

const routes = {
  '/': CafeCatalogue, // default page
  '/cafe-catalogue': CafeCatalogue,
  '/detail/:id': Detail,
};

export default routes;