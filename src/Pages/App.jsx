import Profile from "../components/Layouts/Profile";
import Image from "../components/Elements/Image/Image";
import Landing from "../components/Layouts/Landing";
import Navbar from "../components/Layouts/Navbar";

function App() {
  return (
    <div className="bg-background">
      <div className="flex flex-row gap-2">
        {/* Start Menu Profile */}
        <Profile />
        {/* End Menu Profile */}

        {/* Landing Menu */}
        <Landing />
        {/* End Landing Menu */}
        {/* Navbar */}
        <Navbar />
        {/* End Navbar */}
      </div>
    </div>
  );
}

export default App;
