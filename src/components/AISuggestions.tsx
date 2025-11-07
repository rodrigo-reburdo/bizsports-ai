import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, ArrowRightLeft, TrendingUp, Sparkles } from "lucide-react";

const AISuggestions = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-background to-background/50">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Powered by AI</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Acciones Sugeridas por IA
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          El sistema no solo predice: propone acciones concretas para maximizar ventas, 
          optimizar inventario y aprovechar oportunidades en tiempo real.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Campañas de Marketing */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-slide-up group">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <Megaphone className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Campañas de Marketing Inteligentes
              </h3>
              <p className="text-muted-foreground mb-6">
                La IA detecta patrones de comportamiento y propone campañas personalizadas en el momento óptimo.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Sugerencia IA
                    </Badge>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      Alto Impacto
                    </Badge>
                  </div>
                  <p className="font-semibold text-foreground mb-2">
                    💡 "Talleres juega clásico en 48hs: Lanzar campaña en indumentaria"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Predicción: +180% en ventas de camisetas. Stock disponible: 450 unidades. 
                    ROI estimado: 3.2x
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Sugerencia IA
                    </Badge>
                    <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
                      Medio Impacto
                    </Badge>
                  </div>
                  <p className="font-semibold text-foreground mb-2">
                    💡 "SKU #1247 sin movimiento en 45 días: Promoción 30% OFF urgente"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Riesgo de obsolescencia: Alto. Capital inmovilizado: $12,500 USD. 
                    Liquidar antes de fin de mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Transferencias de Stock */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-slide-up [animation-delay:200ms] group">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <ArrowRightLeft className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Transferencias Inteligentes de Stock
              </h3>
              <p className="text-muted-foreground mb-6">
                Optimización automática de inventario entre sucursales y almacenes según demanda predictiva.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Sugerencia IA
                    </Badge>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      Crítico
                    </Badge>
                  </div>
                  <p className="font-semibold text-foreground mb-2">
                    🚚 "Sucursal Centro: Quiebre de stock en 24hs en SKU #892"
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Transferir 120 unidades desde Almacén Norte. Tiempo estimado: 8 horas. 
                    Evita pérdida de $8,400 USD en ventas.
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-background rounded">📍 Origen: Almacén Norte (380 unidades)</span>
                    <span className="px-2 py-1 bg-background rounded">📍 Destino: Sucursal Centro (18 unidades)</span>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Sugerencia IA
                    </Badge>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
                      Optimización
                    </Badge>
                  </div>
                  <p className="font-semibold text-foreground mb-2">
                    🚚 "Redistribuir exceso de SKU #445 de Sucursal Sur a Mall"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Liberar espacio en sucursal con baja rotación. Enviar a Mall con +60% de ventas. 
                    Mejora capital de trabajo: $4,200 USD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Oportunidades y Picos de Demanda */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-slide-up [animation-delay:400ms] group">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Detección de Oportunidades y Picos
              </h3>
              <p className="text-muted-foreground mb-6">
                Anticipación de eventos y tendencias para capturar oportunidades antes que la competencia.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Sugerencia IA
                    </Badge>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      Oportunidad
                    </Badge>
                  </div>
                  <p className="font-semibold text-foreground mb-2">
                    📈 "Día de la Madre en 10 días: Pico de demanda +220% detectado"
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Aumentar stock de SKUs #234, #567, #891 en +150%. Negociar lead time urgente con proveedor. 
                    Ventana de oportunidad: $45,000 USD en ventas adicionales.
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                    <div className="p-2 bg-background rounded text-center">
                      <p className="font-bold text-primary">+220%</p>
                      <p className="text-muted-foreground">Demanda</p>
                    </div>
                    <div className="p-2 bg-background rounded text-center">
                      <p className="font-bold text-accent">10 días</p>
                      <p className="text-muted-foreground">Anticipación</p>
                    </div>
                    <div className="p-2 bg-background rounded text-center">
                      <p className="font-bold text-green-500">$45K</p>
                      <p className="text-muted-foreground">Oportunidad</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Sugerencia IA
                    </Badge>
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/30">
                      Evento Deportivo
                    </Badge>
                  </div>
                  <p className="font-semibold text-foreground mb-2">
                    ⚽ "Talleres clasificó a semifinales: Preparar stock para celebración"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Correlación histórica: Victoria = +340% en banderas y accesorios. 
                    Activar protocolo "Victoria Grande". Stock sugerido: 800 unidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Summary */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 animate-fade-in">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Impacto de las Sugerencias de IA
          </h3>
          <p className="text-muted-foreground">Resultados medidos en 6 meses de implementación</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">847</p>
            <p className="text-sm text-muted-foreground">Acciones sugeridas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent mb-1">92%</p>
            <p className="text-sm text-muted-foreground">Tasa de acierto</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">$380K</p>
            <p className="text-sm text-muted-foreground">Oportunidades capturadas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent mb-1">-68%</p>
            <p className="text-sm text-muted-foreground">Pérdidas evitadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuggestions;
