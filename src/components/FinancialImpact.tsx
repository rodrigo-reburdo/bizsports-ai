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
        <FadeInSection>
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Package className="w-6 h-6 text-primary" />
            Desglose de Beneficios Anuales
          </h3>
          
          <div className="space-y-6">
            {/* Inventory Reduction */}
            <div className="p-6 bg-background/50 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Reducción de Inventario</h4>
                  <p className="text-sm text-muted-foreground">22% × $2.091.342.013</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  Eficiencia
                </Badge>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                $460.095.243
              </div>
              <p className="text-sm text-muted-foreground mt-2">Capital liberado del inventario</p>
            </div>

            {/* Holding Cost Savings */}
            <div className="p-6 bg-background/50 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Ahorro por Coste de Tenencia</h4>
                  <p className="text-sm text-muted-foreground">25% × $460.095.243</p>
                </div>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                  Ahorro
                </Badge>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                $115.023.811
              </div>
              <p className="text-sm text-muted-foreground mt-2">Reducción anual en costos de almacenamiento</p>
            </div>

            {/* Sales Increase */}
            <div className="p-6 bg-background/50 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Incremento de Ventas</h4>
                  <p className="text-sm text-muted-foreground">6% × $133.306.321.764</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  Crecimiento
                </Badge>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                $7.998.379.306
              </div>
              <p className="text-sm text-muted-foreground mt-2">Ventas adicionales por mejor disponibilidad</p>
            </div>

            {/* Sales Profit */}
            <div className="p-6 bg-background/50 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Utilidad por Ventas Adicionales</h4>
                  <p className="text-sm text-muted-foreground">50% margen × $7.998.379.306</p>
                </div>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                  Margen
                </Badge>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                $3.999.189.653
              </div>
              <p className="text-sm text-muted-foreground mt-2">Utilidad neta de incremento en ventas</p>
            </div>

            {/* Promotion Optimization */}
            <div className="p-6 bg-background/50 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Optimización de Promociones</h4>
                  <p className="text-sm text-muted-foreground">10% × $133.306.321.764 × 50% margen</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  Estrategia
                </Badge>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                $6.665.316.088
              </div>
              <p className="text-sm text-muted-foreground mt-2">Beneficio por timing y targeting óptimo de promociones</p>
            </div>
          </div>
        </Card>
        </FadeInSection>

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
