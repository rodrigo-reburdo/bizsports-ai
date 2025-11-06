import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, TrendingDown, TrendingUp, Clock, Zap } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Antes vs Después de la IA
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          El impacto real de implementar inteligencia artificial en el control de stock
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* ANTES - Problemas */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/30 hover:border-destructive/50 transition-all duration-300 animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-destructive/20 rounded-lg">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-3xl font-bold text-destructive">ANTES</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <TrendingDown className="w-6 h-6 text-destructive/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Quiebres de stock frecuentes</h4>
                <p className="text-sm text-muted-foreground">
                  Pérdida de ventas por falta de productos en momentos clave. Sin predicción de demanda.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-destructive/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Sobrestock y obsolescencia</h4>
                <p className="text-sm text-muted-foreground">
                  Capital inmovilizado en productos que no rotan. Detección tardía de SKUs sin movimiento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-destructive/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Decisiones reactivas</h4>
                <p className="text-sm text-muted-foreground">
                  Reposiciones manuales basadas en experiencia. Sin análisis de impacto en eventos especiales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TrendingDown className="w-6 h-6 text-destructive/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Impacto deportivo ignorado</h4>
                <p className="text-sm text-muted-foreground">
                  Los resultados de Talleres no se correlacionan con ventas. Oportunidades perdidas.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-destructive/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-destructive mb-1">-35%</p>
                <p className="text-sm text-muted-foreground">Eficiencia operativa</p>
              </div>
            </div>
          </div>
        </Card>

        {/* DESPUÉS - Soluciones */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-slide-up [animation-delay:200ms]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-lg">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-primary">DESPUÉS</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-primary/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Predicción inteligente de stock</h4>
                <p className="text-sm text-muted-foreground">
                  IA predice demanda con días de anticipación. Reposición automática en momentos óptimos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Gestión proactiva de obsolescencia</h4>
                <p className="text-sm text-muted-foreground">
                  Early warnings automáticos. Estrategias de liquidación, bundling y repricing sugeridas por IA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-primary/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Simulación "What-if"</h4>
                <p className="text-sm text-muted-foreground">
                  Testear promociones y cambios antes de ejecutar. Impacto en ventas y cash visible en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-primary/70 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Correlación deportiva automatizada</h4>
                <p className="text-sm text-muted-foreground">
                  IA analiza resultados de Talleres y ajusta predicciones. Maximiza ventas en victorias clave.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-primary/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">+58%</p>
                <p className="text-sm text-muted-foreground">Eficiencia operativa</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Métricas destacadas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 animate-fade-in">
        <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
          <p className="text-3xl md:text-4xl font-bold text-primary mb-2">-40%</p>
          <p className="text-sm text-muted-foreground">Quiebres de stock</p>
        </div>
        <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
          <p className="text-3xl md:text-4xl font-bold text-primary mb-2">+32%</p>
          <p className="text-sm text-muted-foreground">Rotación de inventario</p>
        </div>
        <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
          <p className="text-3xl md:text-4xl font-bold text-primary mb-2">-25%</p>
          <p className="text-sm text-muted-foreground">Capital inmovilizado</p>
        </div>
        <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
          <p className="text-3xl md:text-4xl font-bold text-primary mb-2">+45%</p>
          <p className="text-sm text-muted-foreground">Precisión en predicciones</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
