import React from 'react';
import DevCard from './components/dev-card';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DevCard reactions_count="34" title="Fastify routes" />
      {/* <DevCard reactions_count="333" title="My 30 days github challange" />
      <DevCard reactions_count="232" title="Tell me if you can do it"/>
      <DevCard reactions_count="11" title="Why i love dev.to" /> */}
    </div>
  );
}

export default App;
