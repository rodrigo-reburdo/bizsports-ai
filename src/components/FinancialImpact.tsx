import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, DollarSign, Package, ShoppingCart, Zap } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";

const FinancialImpact = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50 mb-6">
          <Calculator className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Análisis Financiero Detallado</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Impacto Económico <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Medible y Comprobable</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Basado en datos reales de inventario y ventas: $2.091M en stock y $133.306M en ventas anuales
        </p>
      </div>

      {/* Calculation Breakdown */}
      <div className="max-w-5xl mx-auto mb-16 space-y-6">


        {/* Total Benefit */}
        <FadeInSection delay={200}>
          <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              Beneficio Total Anual Estimado
            </h3>
            <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              $4.200 M
            </div>
            <p className="text-lg text-muted-foreground">
              $115M (ahorro) + $4.000M (ventas) + $6.665M (promociones)
            </p>
          </div>
        </Card>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FinancialImpact;
