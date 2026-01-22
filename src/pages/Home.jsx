import React from 'react';
import Hero from '../../components/ui/Hero';
import Categories from '../../components/ui/Categories';
import Services from '../../components/ui/Services';
import Process from '../../components/ui/Process';
import Testimonials from '../../components/ui/Testimonials';
import Products from '../../components/ui/Products';
// import CTA from '../../components/ui/Cta';
import Gallery from '../../components/ui/Gallery';
import OverlapScrolling from '../../components/ui/OverlapScrolling';
import WhyChooseus from '../../components/ui/WhyChooseus';
import Trust from '../../components/ui/Trust';
import SeoFooterContent from '../../components/ui/Footer';
import Brand from '../../components/ui/Brand';

function Home() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <WhyChooseus />
        <Categories />
        <Products/>
        <Services />
        
      </div>
      
      {/* OverlapScrolling without overflow wrapper */}
      {/* <OverlapScrolling /> */}
      
      <div className="overflow-x-hidden">
        <Trust />
        <Gallery />
        <Testimonials />
        <Brand />
        {/* <SeoFooterContent /> */}
      </div>
    </div>
  );
}

export default Home;
