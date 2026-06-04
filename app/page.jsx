import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Chapters from "../components/Chapters";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

// This is the main page. Next.js App Router renders this at the "/" route.
// Each section is its own component — makes it easy to edit or reorder.

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Chapters />
      <Timeline />
      <Testimonials />
      <Footer />
    </main>
  );
}
