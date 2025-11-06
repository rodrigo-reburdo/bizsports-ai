import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Package, Scan } from "lucide-react";
import BeforeAfter from "@/components/BeforeAfter";

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
              🧠 Hackatón IA 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Usamos inteligencia artificial para predecir, simular y optimizar decisiones comerciales y deportivas.
            </p>
          </div>
        </section>

        {/* Description Block */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg text-foreground/90 leading-relaxed">
                La idea del hackatón es resolver un problema usando IA. Desarrollamos un sistema que predice stock, 
                identifica eventos especiales (como días clave o promociones) y analiza cómo le va al Club Talleres 
                de Córdoba en lo deportivo, para entender cómo los resultados influyen en las ventas.
              </p>
            </Card>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-slide-up group">
              <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                1️⃣ Simulador "What-if" y Sandbox financiero
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Permite simular promociones, roturas de suministro o cambios en lead time, y ver su impacto en stock, 
                ventas y cash en USD antes de ejecutar.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-slide-up [animation-delay:200ms] group">
              <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                2️⃣ Gestión de obsolescencia y rotación
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Detecta early warnings para liquidación, bundling o repricing. Integra búsqueda visual con 
                realidad aumentada (SKU lifecycle).
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-slide-up [animation-delay:400ms] group">
              <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <Scan className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                3️⃣ Picking asistido con AR
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AR para búsqueda rápida en almacén, app móvil offline para campo y rutas optimizadas de picking 
                (pick-to-light + mobile).
              </p>
            </Card>
          </div>
        </section>

        {/* Before/After Section */}
        <BeforeAfter />

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
