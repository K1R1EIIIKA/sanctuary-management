import {Counter} from "./components/Counter";
import {FetchData} from "./components/FetchData";
import {Home} from "./components/Home";
import {SanctuaryList} from "./components/SanctuaryList";
import {Sanctuaries} from "./components/Sanctuaries";

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
    path: '/fetch-data',
    element: <FetchData/>
  },
  {
    path: '/sanctuaries',
    element: <Sanctuaries/>
  }
];

export default AppRoutes;
