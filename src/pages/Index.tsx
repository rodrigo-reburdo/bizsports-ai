import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Package, Scan } from "lucide-react";
import WarehouseCrisis from "@/components/WarehouseCrisis";
import FinancialImpact from "@/components/FinancialImpact";
import { FadeInSection } from "@/components/FadeInSection";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-[#110802] to-[#220F02]" />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#FF7819_1px,transparent_1px),linear-gradient(to_bottom,#FF7819_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* Estilos inline para animación de glow */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 40px rgba(255, 120, 25, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 80px rgba(255, 120, 25, 0.9));
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16 text-center">
          <div className="animate-fade-in">
            {/* Subtítulo mejorado */}
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-full mx-auto mb-6 font-medium tracking-wide leading-none whitespace-nowrap">
              Transformamos la Gestión de Stock y Ventas con{" "}
              <span className="text-primary font-bold">Inteligencia Artificial</span>
            </p>

            {/* Título mejorado con efectos visuales más potentes */}
            <h1 className="text-6xl md:text-8xl lg:text-8xl font-black mb-1 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight tracking-tight animate-pulse-glow">
              SKT: Stock Optimizado
            </h1>

            {/* Línea decorativa debajo del título */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-80" />
          </div>
        </section>

        {/* Description Block */}
        <section className="container mx-auto px-4 pb-16">
          <FadeInSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Información en acción: combinamos modelos predictivos de IA y análisis en tiempo real para entender al consumidor, anticipar la demanda y optimizar la rentabilidad de cada producto.
                </p>
              </Card>
            </div>
          </FadeInSection>
        </section>

        {/* Warehouse Crisis Section */}
        <FadeInSection>
          <WarehouseCrisis />
        </FadeInSection>

        {/* Warehouse Dashboard Section 
      <FadeInSection>
        <WarehouseDashboard />
      </FadeInSection> */}

        {/* Financial Impact Section */}
        <FadeInSection>
          <FinancialImpact />
        </FadeInSection>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-relaxed">
                Innovación, predicción y rendimiento.<br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Todo en un solo sistema impulsado por IA.
                </span>
              </p>
              <Button
                size="lg"
                className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_30px_rgba(255,120,25,0.5)] hover:shadow-[0_0_50px_rgba(255,120,25,0.7)] transition-all duration-300"
                asChild
              >
                <a href="https://stockflow-predict.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <Brain className="mr-2 h-6 w-6" />
                  Probar Demo
                </a>
              </Button>
            </div>
          </FadeInSection>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center border-t border-border/50">
          <p className="text-muted-foreground">
            Desarrollado para el <span className="text-primary font-semibold">Hackatón IA 2025</span> — Equipo PredictiveOps.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;