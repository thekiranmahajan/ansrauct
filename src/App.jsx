import { Header, ThemeToggle } from "./components";
import { Courses, Home, Resources, Testimonials, Videos } from "./sections";
const App = () => {
  return (
    <main className="font-poppins selection:bg-custom-blue flex flex-col overflow-x-hidden transition-colors duration-500 selection:text-white">
      <Header />
      <Home />
      <Videos />
      <Resources />
      <Courses />
      <Testimonials />
      <ThemeToggle />
    </main>
  );
};

export default App;
