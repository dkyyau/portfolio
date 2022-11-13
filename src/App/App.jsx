import { useEffect, useState } from 'react';

import Loading from './Components/Shared/Loading';
import Home from './Pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <Loading />;
  }

  return <Home />;
}

export default App;
