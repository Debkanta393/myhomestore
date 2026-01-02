import React from 'react';
import Hero from '../../components/ui/Hero';
import Features from '../../components/ui/Features';
import Services from '../../components/ui/Services';
import Process from '../../components/ui/Process';
import Testimonials from '../../components/ui/Testimonials';
import Products from '../../components/ui/Products';
// import CTA from '../../components/ui/Cta';
import Category from '../../components/ui/Category';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <Services />
      {/* <Process /> */}
      <Products/>
      <Category />
      <Testimonials />
      {/* <CTA /> */}
    </div>
  );
}

export default App;
