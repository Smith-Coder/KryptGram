import { Navbar, Welcome, Footer, Transactions } from "./components";
import Services from "./components/Services";
import ParticleBackground from "./components/ParticleBackground ";
import Video from "./components/Video";

const App = () => (
  
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
<ParticleBackground/>
      <Navbar />
      <Video /> 
      <Welcome />
    </div>
    <Services/>
    <Transactions />
    <Footer />
  </div>
);

export default App;
