import { Footer } from "components/footer/footer";
import {
  CapitalEfficiency,
  Challenges,
  EnhancedCapitalEfficiency,
  Independence,
  LearnMore,
  Main,
  Packages,
  Partners,
  Solutions,
} from "sections/sections";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Main />
      <Packages />
      <CapitalEfficiency />
      <Challenges />
      <Solutions />
      <div className="bg-themeDarkBlack">
        <Independence />
        <LearnMore />
        <EnhancedCapitalEfficiency />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}

export default App;
