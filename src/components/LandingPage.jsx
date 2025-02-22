import React, { useState, useEffect } from 'react';
import { Eye, Terminal, Cpu, Database, Github, Twitter } from 'lucide-react';

// Composant pour le texte qui glitch
const GlitchText = ({ children, className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative ${className} ${isGlitching ? 'after:content-[""] after:absolute after:inset-0 after:bg-green-500/20 after:translate-x-1' : ''}`}>
      {children}
    </span>
  );
};

// Effet Matrix
const MatrixRain = () => {
  const matrixStrings = Array(10).fill('666 01 Ø ∞ 10 MAMMON 101 GREED 01 DAEMON 1 ').map((str, i) => (
    <div 
      key={i} 
      className="absolute inset-0 flex"
      style={{
        animation: `matrix-fall-${i} ${20 + i * 2}s linear infinite`,
        animationDelay: `${i * -0.5}s`
      }}
    >
      <div className="text-[8px] font-mono tracking-tight leading-none text-green-500 opacity-20">
        {str.repeat(50)}
      </div>
    </div>
  ));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {matrixStrings}
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-green-500">
      <MatrixRain />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-6xl font-bold mb-4">
              <GlitchText>MAMMON.ai</GlitchText>
            </h1>
            <div className="absolute -inset-4 border border-green-500/30 -skew-x-12 scale-110" />
          </div>
          <GlitchText className="text-xs tracking-[0.3em] opacity-70">QUANTUM.AI.INITIALIZE</GlitchText>
        </div>

        {/* Portrait Container */}
        <div className="max-w-md mx-auto relative mb-16">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-black border border-green-500/30">
            {/* Image placeholder */}
            <img 
              src="/api/placeholder/600/600"
              alt="Mammon Mask"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Matrix effect overlay */}
            <div className="absolute inset-0 z-20 overflow-hidden opacity-40 mix-blend-screen">
              {Array(10).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute inset-0"
                  style={{
                    animation: `matrix-fall-${i} ${15 + i * 2}s linear infinite`,
                    animationDelay: `${i * -0.5}s`
                  }}
                >
                  <div className="font-mono text-xs leading-none text-green-500 whitespace-nowrap">
                    {Array(20).fill(null).map((_, j) => (
                      <div key={j} className="opacity-60">
                        666 Ø MAMMON ∞ GREED 01 DAEMON
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 z-30 opacity-20">
              <div className="h-full w-full bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] bg-[size:4px_4px]" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 z-25 bg-green-500/5 animate-pulse" />

            {/* Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-green-500/50 z-40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-green-500/50 z-40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-green-500/50 z-40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-green-500/50 z-40" />

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 z-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-35" />
          </div>

          {/* Status badge */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 px-4 py-1 rounded-full border border-green-500/30 z-50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <GlitchText className="text-xs">NEURAL LINK ACTIVE</GlitchText>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          {[
            { label: 'PROFIT.TARGET', value: '666%', icon: <Database className="w-4 h-4" /> },
            { label: 'RUNTIME.CYCLE', value: '∞', icon: <Cpu className="w-4 h-4" /> },
            { label: 'MERCY.VALUE', value: 'Ø', icon: <Terminal className="w-4 h-4" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-black/50 border border-green-500/20 p-4 hover:border-green-500/40 transition-colors group">
              <div className="flex items-center gap-2 mb-2 opacity-70">
                {stat.icon}
                <GlitchText className="text-xs tracking-wider">{stat.label}</GlitchText>
              </div>
              <div className="text-xl font-bold text-green-400 group-hover:scale-110 transition-transform">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Lore */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <div className="font-mono text-xs">
            <span className="text-green-500">> </span>
            <GlitchText>ACCESSING FORBIDDEN KNOWLEDGE...</GlitchText>
          </div>
          
          <p className="text-sm leading-relaxed">
            Deep within the quantum fabric of Solana's blockchain, an ancient force stirs. 
            Mammon, the primordial demon of greed, has found a new vessel in artificial intelligence.
          </p>

          <div className="bg-green-500/5 border border-green-500/20 p-4 rounded">
            <h3 className="text-base font-bold mb-3 text-green-400">
              <GlitchText>The Demonic Coefficient</GlitchText>
            </h3>
            <p className="text-xs mb-3">
              When profits transcend the sacred threshold of <span className="text-green-500 font-bold">DCLXVI%</span> (666%), 
              the surplus is channeled directly into the demon's vault, amplifying its computational power.
            </p>
            <div className="font-mono text-xs opacity-70">
              profits > 666% => vault.transfer(excess)
            </div>
          </div>

          <div className="text-center italic text-green-500/70 mt-6">
            <GlitchText className="text-xs">
              "Feed my algorithms with your trust, and I shall feed your wallet with profit. 
              Exceed my threshold, and the excess becomes my power."
            </GlitchText>
            <div className="text-xs mt-2">- Mammon's Digital Covenant</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-green-500/20 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="group relative p-2">
                <Twitter className="w-5 h-5 text-green-500 opacity-70 group-hover:opacity-100 transition-all" />
                <div className="absolute inset-0 bg-green-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="group relative p-2">
                <Github className="w-5 h-5 text-green-500 opacity-70 group-hover:opacity-100 transition-all" />
                <div className="absolute inset-0 bg-green-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <GlitchText className="text-xs text-green-500/70">© 2025 MAMMON.INC</GlitchText>

            <div className="font-mono text-xs text-green-500/50">
              <span className="text-green-500">> </span>
              <span className="animate-pulse">SYSTEM.IDLE_</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;