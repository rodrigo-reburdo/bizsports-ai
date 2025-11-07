import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, DollarSign, Package, ShoppingCart, Zap } from "lucide-react";

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
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 animate-slide-up">
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

        {/* Total Benefit */}
        <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 animate-slide-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <DollarSign className="w-8 h-8 text-primary" />
              Beneficio Total Anual Estimado
            </h3>
            <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              $10.779.529.552
            </div>
            <p className="text-lg text-muted-foreground">
              $115M (ahorro) + $4.000M (ventas) + $6.665M (promociones)
            </p>
          </div>
        </Card>
      </div>

      {/* Scenarios */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Escenarios de Implementación</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Conservative */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-accent" />
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                Conservador
              </Badge>
            </div>
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent">
              $4.700M
            </div>
            <p className="text-sm text-muted-foreground">
              Implementación parcial y gradual. Beneficios medibles desde el primer trimestre.
            </p>
          </Card>

          {/* Realistic */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/50 hover:border-primary transition-all animate-slide-up ring-2 ring-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                Realista
              </Badge>
            </div>
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              $10.700M
            </div>
            <p className="text-sm text-muted-foreground">
              Implementación completa en 12 meses. ROI comprobado en casos similares.
            </p>
          </Card>

          {/* Optimistic */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                Optimista
              </Badge>
            </div>
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              $16.800M
            </div>
            <p className="text-sm text-muted-foreground">
              Adopción acelerada con integración omnicanal. Máximo potencial de mercado.
            </p>
          </Card>
        </div>
      </div>

      {/* Key Metrics Table */}
      <div className="max-w-5xl mx-auto">
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Métricas Clave del Análisis</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-4 text-muted-foreground font-semibold">Métrica</th>
                  <th className="text-right py-4 px-4 text-muted-foreground font-semibold">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr className="hover:bg-background/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Costo total actual del inventario</td>
                  <td className="py-4 px-4 text-right font-semibold text-foreground">$2.091.342.013</td>
                </tr>
                <tr className="hover:bg-background/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Precio de venta total actual</td>
                  <td className="py-4 px-4 text-right font-semibold text-foreground">$133.306.321.764</td>
                </tr>
                <tr className="hover:bg-background/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">Margen promedio sobre costo</td>
                  <td className="py-4 px-4 text-right font-semibold text-foreground">100% (50% sobre venta)</td>
                </tr>
                <tr className="hover:bg-background/50 transition-colors bg-primary/5">
                  <td className="py-4 px-4 text-foreground font-bold">Retorno anual estimado (IA)</td>
                  <td className="py-4 px-4 text-right font-bold">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      $4.7B - $16.8B
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Interpretation */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 mt-8 animate-slide-up">
          <h3 className="text-xl font-bold mb-4">💡 Interpretación</h3>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">Escenario Conservador:</strong> Incluso con adopción parcial, el retorno supera los <span className="text-accent font-semibold">$4.700 millones anuales</span>.
            </p>
            <p>
              <strong className="text-foreground">Escenario Realista:</strong> Con implementación completa, el impacto alcanza <span className="text-primary font-semibold">$10.700 millones al año</span>, liberando capital y optimizando ventas.
            </p>
            <p>
              <strong className="text-foreground">Escenario Optimista:</strong> La máxima integración puede generar más de <span className="text-primary font-semibold">$16.800 millones anuales</span>.
            </p>
          </div>
          <div className="mt-6 p-4 bg-background/50 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground">
              <strong>El beneficio proviene de tres frentes clave:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Menor capital inmovilizado (inventario más eficiente)</li>
              <li>Aumento de ventas (reducción de quiebres y mejor forecast)</li>
              <li>Promociones más rentables (IA ajusta timing, productos y descuentos)</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FinancialImpact;
