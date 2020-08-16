import React from 'react';
import DevCard from './components/dev-card';

function App() {
  return (
    <div className="App">
     <DevCard title="Fastify routes" />
     <DevCard title="My 30 days github challange" />
     <DevCard title="Tell me if you can do it"/>
     <DevCard title="Why i love dev.to" />
    </div>
  );
}

export default App;
