import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import Container from '@/components/ui/Container';

export default function SectionVariantsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <Container>
          <Typography variant="h1" className="text-5xl font-bold text-center text-white mb-4">
            Section Background Variants
          </Typography>
          <Typography variant="body1" className="text-xl text-center text-gray-400 mb-8">
            Four dark variants with colorful gradient orbs and effects
          </Typography>
        </Container>
      </section>

      {/* Variant 1: Dark Orbs */}
      <Section variant="dark-orbs" padding="xl">
        <div className="text-center space-y-6">
          <Typography variant="overline" className="text-brand-gold tracking-wider">
            VARIANT 1
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-6xl font-bold text-white">
            Dark Orbs
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three colorful orbs (gold, violet, blue) positioned at corners and center. Perfect for
            hero sections and focal content.
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['Gold Orb', 'Violet Orb', 'Blue Center'].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <Typography variant="h4" className="text-white mb-2">
                  {item}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Positioned strategically for visual balance
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Variant 2: Dark Mesh */}
      <Section variant="dark-mesh" padding="xl">
        <div className="text-center space-y-6">
          <Typography variant="overline" className="text-brand-violet tracking-wider">
            VARIANT 2
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-6xl font-bold text-white">
            Dark Mesh
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multiple gradient orbs (violet, pink, blue, gold) creating a mesh-like pattern. Ideal
            for feature sections.
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {['Violet', 'Pink', 'Blue', 'Gold'].map((color, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <div className={`w-12 h-12 rounded-full bg-brand-${color.toLowerCase()}/30 mb-4`} />
                <Typography variant="h5" className="text-white mb-2">
                  {color} Accent
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Distributed pattern
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Variant 3: Dark Glow */}
      <Section variant="dark-glow" padding="xl">
        <div className="text-center space-y-6">
          <Typography variant="overline" className="text-brand-blue tracking-wider">
            VARIANT 3
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-6xl font-bold text-white">
            Dark Glow
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-300 max-w-3xl mx-auto">
            Edge-positioned gradient glows with directional lighting. Best for content-heavy
            sections.
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Top Glow', desc: 'Violet to blue radial gradient' },
              { title: 'Left Glow', desc: 'Gold horizontal gradient' },
              { title: 'Right Glow', desc: 'Pink directional gradient' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <Typography variant="h4" className="text-white mb-3">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Variant 4: Dark Radial */}
      <Section variant="dark-radial" padding="xl">
        <div className="text-center space-y-6">
          <Typography variant="overline" className="text-brand-pink tracking-wider">
            VARIANT 4
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-6xl font-bold text-white">
            Dark Radial
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four radial gradients positioned at strategic points. Perfect for pricing tables and
            comparison sections.
          </Typography>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { pos: '20% 30%', color: 'Gold', opacity: '20%' },
              { pos: '80% 20%', color: 'Violet', opacity: '25%' },
              { pos: '40% 80%', color: 'Blue', opacity: '20%' },
              { pos: '90% 70%', color: 'Pink', opacity: '15%' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <Typography variant="h5" className="text-white mb-2">
                  {item.color}
                </Typography>
                <Typography variant="body2" className="text-gray-400 text-xs">
                  at {item.pos}
                </Typography>
                <Typography variant="body2" className="text-gray-500 text-xs mt-1">
                  Opacity: {item.opacity}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Comparison Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <Container>
          <Typography variant="h2" className="text-4xl font-bold text-center text-white mb-12">
            Usage Guide
          </Typography>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
              <Typography variant="h3" className="text-2xl font-bold text-white mb-4">
                When to Use Each Variant
              </Typography>
              <div className="space-y-4 text-gray-300">
                <div>
                  <Typography variant="h5" className="text-brand-gold mb-1">
                    Dark Orbs
                  </Typography>
                  <Typography variant="body2" className="text-sm">
                    Hero sections, landing pages, main content
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5" className="text-brand-violet mb-1">
                    Dark Mesh
                  </Typography>
                  <Typography variant="body2" className="text-sm">
                    Features grid, services showcase, portfolios
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5" className="text-brand-blue mb-1">
                    Dark Glow
                  </Typography>
                  <Typography variant="body2" className="text-sm">
                    Content sections, about pages, blog posts
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5" className="text-brand-pink mb-1">
                    Dark Radial
                  </Typography>
                  <Typography variant="body2" className="text-sm">
                    Pricing tables, comparison grids, data sections
                  </Typography>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
              <Typography variant="h3" className="text-2xl font-bold text-white mb-4">
                How to Use
              </Typography>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <code className="text-sm text-brand-gold">
                    {'<Section variant="dark-orbs" padding="xl">'}
                  </code>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <code className="text-sm text-brand-violet">
                    {'<Section variant="dark-mesh" padding="lg">'}
                  </code>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <code className="text-sm text-brand-blue">
                    {'<Section variant="dark-glow" padding="md">'}
                  </code>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <code className="text-sm text-brand-pink">
                    {'<Section variant="dark-radial" padding="xl">'}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
