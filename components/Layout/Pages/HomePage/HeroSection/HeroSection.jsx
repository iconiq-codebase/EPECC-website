"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGlobe } from "react-icons/fa";

export default function HeroSection() {
  const stats = [
    { value: "5k+", label: "Students guided" },
    { value: "98%", label: "Visa success" },
    { value: "40+", label: "Global partners" },
  ];

  return (
    <section className="home-hero">
      <Image src="/images/homepage/hero-section/hero.jpg" alt="EPECC Study Abroad Guidance" fill priority sizes="100vw" className="home-hero-image" />
      <div className="home-hero-shade" />
      <div className="home-hero-inner">
        <div className="hero-eyebrow"><FaGlobe size={15} /><span>Global Education Excellence</span></div>
        <h1>Your Gateway to <br /><span>Global Success</span></h1>
        <p>EPECC helps students turn overseas education dreams into reality with expert counselling, university placement, visa support, and career-focused guidance.</p>
        <div className="hero-actions">
          <Link href="/apply" className="site-button">Start Your Application <FaArrowRight size={16} /></Link>
          <Link href="/study-abroad" className="site-button site-button-outline">Explore Programs <FaArrowRight size={16} /></Link>
        </div>

        <div className="hero-trust-grid" aria-label="EPECC trust metrics">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-trust-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
