import { Header } from "./components";
import { Courses, Home, Resources, Testimonials, Videos } from "./sections";
const App = () => {
  return (
    <main className="font-poppins flex flex-col">
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
