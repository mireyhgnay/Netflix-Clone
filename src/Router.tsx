import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Search from './routes/Search';
import Tv from './routes/Tv';
import MusicVideo from './routes/MusicVideo';
import New from './routes/New';
import Like from './routes/Like';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'tv',
        element: <Tv />,
      },
      {
        path: 'musicvideo',
        element: <MusicVideo />,
      },
      {
        path: 'new',
        element: <New />,
      },
      {
        path: 'like',
        element: <Like />,
      },
    ],
  },
]);

export default router;
