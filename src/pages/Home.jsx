import React from 'react';
import Hero from '../../components/ui/Hero';
import Features from '../../components/ui/Features';
import Services from '../../components/ui/Services';
import Process from '../../components/ui/Process';
import Testimonials from '../../components/ui/Testimonials';
import Products from '../../components/ui/Products';
// import CTA from '../../components/ui/Cta';
import Category from '../../components/ui/Gallery';
import OverlapScrolling from '../../components/ui/OverlapScrolling';

function Home() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <Features />
        <Services />
        <Products/>
      </div>
      
      {/* OverlapScrolling without overflow wrapper */}
      <OverlapScrolling />
      
      <div className="overflow-x-hidden">
        <Category />
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
