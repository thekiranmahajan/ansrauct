import { Footer, Header } from "./components";
import { Courses, Home, Resources, Testimonials, Videos } from "./sections";
const App = () => {
  return (
    <main className="flex flex-col overflow-x-hidden font-poppins transition-colors duration-500 selection:bg-primary selection:text-white">
      <Header />
      <Home />
      <Videos />
      <Resources />
      <Courses />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
