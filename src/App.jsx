import { Footer, Header } from "./components";
import { Courses, Home, Resources, Testimonials, Videos } from "./sections";
const App = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden font-poppins transition-colors duration-500 selection:bg-primary selection:text-white">
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
