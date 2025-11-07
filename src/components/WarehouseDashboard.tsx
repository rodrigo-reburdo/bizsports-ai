import { Card } from "@/components/ui/card";
import { Activity, TrendingUp } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";

const WarehouseDashboard = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Análisis de Rendimiento de deposito
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Compara tu estado actual vs. resultados con estrategia optimizada
        </p>
      </div>

      {/* Current State */}
      <div className="mb-20 animate-slide-up">
        <div className="flex items-center gap-3 mb-8">
          <Activity className="w-8 h-8 text-destructive" />
          <h3 className="text-3xl font-bold">Estado Actual - Sin Estrategia</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <FadeInSection delay={0}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Quiebres de Stock Diarios</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent mb-2">47</div>
              <p className="text-sm text-muted-foreground">Productos agotados promedio</p>
            </Card>
          </FadeInSection>
          <FadeInSection delay={100}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Tasa de Cumplimiento</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent mb-2">73%</div>
              <p className="text-sm text-muted-foreground">Pedidos completados a tiempo</p>
            </Card>
          </FadeInSection>
          <FadeInSection delay={200}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Costo de Inventario</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent mb-2">$285K</div>
              <p className="text-sm text-muted-foreground">Costos mensuales de exceso</p>
            </Card>
          </FadeInSection>
          <FadeInSection delay={300}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Errores de Picking</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent mb-2">156</div>
              <p className="text-sm text-muted-foreground">Selecciones incorrectas mensuales</p>
            </Card>
          </FadeInSection>
        </div>

        <FadeInSection delay={400}>
          <Card className="p-8 bg-destructive/10 border-destructive/50">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Pérdida de Ingresos </h4>
                <p className="text-4xl font-bold text-destructive mb-2">$418M</p>
                <span className="text-sm text-muted-foreground">Anualmente por quiebres de stock</span>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Horas Extra</h4>
                <p className="text-4xl font-bold text-destructive mb-2">1,340</p>
                <span className="text-sm text-muted-foreground">Mensuales por ineficiencia</span>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Devoluciones de Clientes</h4>
                <p className="text-4xl font-bold text-destructive mb-2">23%</p>
                <span className="text-sm text-muted-foreground">Por productos incorrectos enviados</span>
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>

      {/* Optimized State */}
      <div className="mb-20 animate-slide-up">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h3 className="text-3xl font-bold">Estado Optimizado - Con Nueva Estrategia</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <FadeInSection delay={0}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Quiebres de Stock Diarios</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">3</div>
              <p className="text-sm text-primary">Reducción del 93%</p>
            </Card>
          </FadeInSection>
          <FadeInSection delay={100}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Tasa de Cumplimiento</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">97%</div>
              <p className="text-sm text-primary">Confiabilidad mejorada</p>
            </Card>
          </FadeInSection>
          <FadeInSection delay={200}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Costo de Inventario</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">$142K</div>
              <p className="text-sm text-primary">50% de reducción lograda</p>
            </Card>
          </FadeInSection>
          <FadeInSection delay={300}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h4 className="text-sm text-muted-foreground mb-2">Errores de Picking</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">12</div>
              <p className="text-sm text-primary">92% mejora en precisión</p>
            </Card>
          </FadeInSection>
        </div>

        <FadeInSection delay={400}>
          <Card className="p-8 bg-primary/10 border-primary/50">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Recuperación de Ingresos</h4>
                <p className="text-4xl font-bold text-primary mb-2">$292M</p>
                <span className="text-sm text-muted-foreground">Anualmente por mejor disponibilidad</span>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Horas Extra</h4>
                <p className="text-4xl font-bold text-primary mb-2">420</p>
                <span className="text-sm text-muted-foreground">77% de reducción</span>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">Devoluciones de Clientes</h4>
                <p className="text-4xl font-bold text-primary mb-2">4%</p>
                <span className="text-sm text-muted-foreground">83% de mejora en precisión</span>
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>

      {/* Total Impact */}
      <FadeInSection>
        <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
          <h3 className="text-3xl font-bold mb-8 text-center">Impacto Anual Total</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-muted-foreground mb-2">Ahorro de Costos</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$2.8M</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Ganancia de Eficiencia</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">87%</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Tiempo de ROI</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">6 meses</p>
            </div>
          </div>
        </Card>
      </FadeInSection>
    </section>
  );
};

export default WarehouseDashboard;