import Button from '../ui/Button';
import LogoShowcase from './LogoShowcase';

export default function Hero() {
  return (
    <section className="section bg-white">
      <div className="container-custom text-center">
        {/* Welcome Badge */}
        <div className="mb-6">
          <span className="inline-block bg-primary/5 text-primary border border-primary/20 px-6 py-2 rounded-full text-sm font-semibold">
            Welcome to Revwise
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Get Chosen More Often.<br />
          Reviews Bring You More Business.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-medium mb-12 max-w-4xl mx-auto px-4">
          Start Getting the Reviews You Deserve. Start Ranking Higher On Google. Start Getting Chosen Over Your Competition.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Button href="/demo-call" variant="primary" className="text-lg px-8 py-4">
            Start Free
          </Button>
        </div>

        {/* Logo Showcase */}
        <LogoShowcase />
      </div>
    </section>
  );
}
