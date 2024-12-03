import { Header } from "./components";
import { Courses, Home, Resources, Testimonials, Videos } from "./sections";
const App = () => {
  return (
    <main className="selection:bg-primary flex flex-col overflow-x-hidden font-poppins transition-colors duration-500 selection:text-white">
      <Header />
      <Home />
      <Videos />
      <Resources />
      <Courses />
      <Testimonials />
    </main>
  );
};

export default App;
