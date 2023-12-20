import {Home} from "./components/Pages/Home";
import {Counter} from "./components/Pages/Counter";
import {FetchData} from "./components/Pages/FetchData";
import {Sanctuaries} from "./components/Pages/Sanctuaries";
import Sanctuary from "./components/Pages/Tables/Sanctuary";
import Animal from "./components/Pages/Tables/Animal";
import Animals from "./components/Pages/Animals";


const AppRoutes = [
  {
    index: true,
    element: <Home/>
  },
  {
    path: '/counter',
    element: <Counter/>
  },
  {
    path: '/animals',
    element: <Animals/>
  },
  {
    path: '/fetch-data',
    element: <FetchData/>
  },
  {
    path: '/sanctuaries',
    element: <Sanctuaries/>
  },
  {
    path: '/sanctuaries/:id',
    element: <Sanctuary/>
  },
  {
    path: '/sanctuaries/:sanctuaryId/animals/:animalId',
    element: <Animal/>
  }
];

export default AppRoutes;
