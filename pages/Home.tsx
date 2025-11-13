
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="bg-yellow-50">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-800 leading-tight">
                Le Style, c'est <span className="text-emerald-700">Jiboia</span>
                .
              </h1>
              <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg text-stone-600">
                A French-Brazilian love story, but on a t-shirt. It's funny,
                it's cool, it's for you.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-block bg-stone-800 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-stone-900 transition-transform transform hover:scale-105 duration-300"
              >
                Découvrir la collection
              </Link>
            </div>
            {/* Image Content */}
            <div className="order-first md:order-last">
              <img
                src="/images/1 (4).png"
                alt="Model wearing an Atelier Jiboia t-shirt in a stylish parisian cafe"
                className="rounded-lg shadow-xl w-full h-auto max-h-[600px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-stone-800">
          Our Bestsellers, maybe.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-emerald-50">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/louis (2).png"
              alt="The founders of Atelier Jiboia"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-800">
              Un Français et une Brésilienne...
            </h2>
            <p className="mt-4 text-stone-700 text-lg">
              It sounds like the beginning of a joke, non? Well, Atelier Jiboia
              is born from this beautiful chaos. A mix of Parisian chic and
              Brazilian saudade, with a lot of 'franglais' in between.
            </p>
            <p className="mt-4 text-stone-700 text-lg">
              We make t-shirts that make you smile. C'est tout.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
