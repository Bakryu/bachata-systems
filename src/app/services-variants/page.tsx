import { Suspense } from 'react';
import ServicesDetailedVariantA from '@/components/sections/services/ServicesDetailedVariantA';
import ServicesDetailedVariantB from '@/components/sections/services/ServicesDetailedVariantB';
import ServicesDetailedVariantC from '@/components/sections/services/ServicesDetailedVariantC';
import Typography from '@/components/ui/Typography';
import Container from '@/components/ui/Container';

export default function ServicesVariantsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <Container>
          <Typography variant="h1" className="text-5xl font-bold text-center text-white mb-4">
            Services Section Variants
          </Typography>
          <Typography variant="body1" className="text-xl text-center text-gray-400 mb-8">
            Three colorful and mobile-optimized variants of the detailed services section
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Variant A',
                description: 'Vibrant gradients with bold colors and smooth animations',
                colors: ['#F0B90B', '#8B5CF6', '#2563EB'],
              },
              {
                title: 'Variant B',
                description: 'Neon cyberpunk style with intense glows and scanlines',
                colors: ['#00FFD1', '#FF00FF', '#FFFF00'],
              },
              {
                title: 'Variant C',
                description: 'Modern glassmorphism with mesh gradients',
                colors: ['#667EEA', '#764BA2', '#F093FB'],
              },
            ].map((variant, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <Typography variant="h3" className="text-xl font-bold text-white mb-2">
                  {variant.title}
                </Typography>
                <Typography variant="body2" className="text-sm text-gray-400 mb-4">
                  {variant.description}
                </Typography>
                <div className="flex gap-2">
                  {variant.colors.map((color, j) => (
                    <div key={j} className="w-8 h-8 rounded-full" style={{ background: color }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Variant A - Vibrant Gradients */}
      <section id="variant-a" className="border-t border-white/10">
        <div className="py-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <Container>
            <Typography variant="h2" className="text-3xl font-bold text-white mb-2">
              Variant A: Vibrant Gradients
            </Typography>
            <Typography variant="body1" className="text-gray-400">
              Bold colors, smooth animations, perfect mobile adaptation
            </Typography>
          </Container>
        </div>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-white">Loading...</div>
          }
        >
          <ServicesDetailedVariantA />
        </Suspense>
      </section>

      {/* Variant B - Neon Cyberpunk */}
      <section id="variant-b" className="border-t border-white/10">
        <div className="py-8 bg-gradient-to-r from-cyan-900/20 to-pink-900/20">
          <Container>
            <Typography variant="h2" className="text-3xl font-bold text-white mb-2">
              Variant B: Neon Cyberpunk
            </Typography>
            <Typography variant="body1" className="text-gray-400">
              Intense glows, animated borders, futuristic design
            </Typography>
          </Container>
        </div>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-white">Loading...</div>
          }
        >
          <ServicesDetailedVariantB />
        </Suspense>
      </section>

      {/* Variant C - Glassmorphism */}
      <section id="variant-c" className="border-t border-white/10">
        <div className="py-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <Container>
            <Typography variant="h2" className="text-3xl font-bold text-white mb-2">
              Variant C: Modern Glassmorphism
            </Typography>
            <Typography variant="body1" className="text-gray-400">
              Mesh gradients, glass effects, elegant and modern
            </Typography>
          </Container>
        </div>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-white">Loading...</div>
          }
        >
          <ServicesDetailedVariantC />
        </Suspense>
      </section>
    </main>
  );
}
