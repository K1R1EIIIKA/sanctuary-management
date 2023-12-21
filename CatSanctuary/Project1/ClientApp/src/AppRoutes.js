import {Home} from "./components/Pages/Home";
import {Sanctuaries} from "./components/Pages/Sanctuaries";
import Sanctuary from "./components/Pages/Tables/Sanctuary";
import Animal from "./components/Pages/Tables/Animal";
import Animals from "./components/Pages/Animals";
import CreateSanctuary from "./components/Pages/Create/CreateSanctuary";
import CreateAnimal from "./components/Pages/Create/CreateAnimal";
import About from "./components/Pages/About";


const AppRoutes = [
  {
    index: true,
    element: <Home/>
  },
  {
    path: '/animals',
    element: <Animals/>
  },
  {
    path: '/animals/create',
    element: <CreateAnimal/>
  },
  {
    path: '/sanctuaries',
    element: <Sanctuaries/>
  },
  {
    path: '/sanctuaries/create',
    element: <CreateSanctuary/>
  },
  {
    path: '/sanctuaries/:id',
    element: <Sanctuary/>
  },
  {
    path: '/sanctuaries/:sanctuaryId/animals/:animalId',
    element: <Animal/>
  },
  {
    path: '/about',
    element: <About/>
  }
];

export default AppRoutes;
