import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Package, Scan } from "lucide-react";
import WarehouseCrisis from "@/components/WarehouseCrisis";
import WarehouseDashboard from "@/components/WarehouseDashboard";
import FinancialImpact from "@/components/FinancialImpact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              SKT: Stock Optimizado
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transformamos la gestión de stock y ventas con inteligencia artificial
            </p>
          </div>
        </section>

        {/* Description Block */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Convertimos información en acción: combinamos modelos predictivos de IA y análisis en tiempo real para entender al consumidor, anticipar la demanda y optimizar la rentabilidad de cada producto.
              </p>
            </Card>
          </div>
        </section>

      {/* Before/After Section */}
      {/*  <BeforeAfter />  */}

      {/* AI Suggestions Section */}
      {/*<AISuggestions />*/}

      {/* Proactive Alerts Section */}
      {/*<ProactiveAlerts />*/}

      {/* Warehouse Crisis Section */}
      <WarehouseCrisis />

      {/* Warehouse Dashboard Section */}
      <WarehouseDashboard />

      {/* Financial Impact Section */}
      <FinancialImpact />

      {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-relaxed">
              Innovación, predicción y rendimiento.<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Todo en un solo sistema impulsado por IA.
              </span>
            </p>
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all duration-300"
            >
              <Brain className="mr-2 h-6 w-6" />
              Probar Demo
            </Button>
          </div>
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
