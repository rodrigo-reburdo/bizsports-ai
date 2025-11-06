import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, TrendingUp, Clock, Zap, Shield } from "lucide-react";

const ProactiveAlerts = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
          <Bell className="w-5 h-5 text-accent animate-glow-pulse" />
          <span className="text-sm font-semibold text-accent">Monitoreo 24/7</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Alertas Proactivas en Tiempo Real
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          El sistema monitorea automáticamente patrones, riesgos y oportunidades, 
          enviando alertas críticas antes de que se conviertan en problemas.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-4">
        {/* Critical Alert - Stock */}
        <Card className="p-6 bg-gradient-to-r from-red-500/10 to-red-500/5 border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-slide-up group">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="p-3 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-all">
                <AlertTriangle className="w-8 h-8 text-red-500 animate-glow-pulse" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500/40">
                  🚨 Crítico
                </Badge>
                <Badge variant="outline" className="bg-background/50 text-muted-foreground border-border/50">
                  <Clock className="w-3 h-3 mr-1" />
                  Hace 3 minutos
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                ⚠️ Quiebre de Stock Inminente - SKU #892 Sucursal Centro
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Stock actual: 8 unidades. Predicción: agotamiento en 6 horas. 
                Ventas actuales: +340% vs promedio. Pérdida potencial: $15,800 USD.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-background/80 rounded-full font-medium">
                  📦 Transferencia automática iniciada: 150 unidades desde Almacén Norte
                </span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full font-medium border border-green-500/30">
                  ✓ ETA: 4 horas
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* High Priority Alert - Event Detection */}
        <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-slide-up [animation-delay:100ms] group">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-all">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-accent/20 text-accent border-accent/40">
                  🔥 Alta Prioridad
                </Badge>
                <Badge variant="outline" className="bg-background/50 text-muted-foreground border-border/50">
                  <Clock className="w-3 h-3 mr-1" />
                  Hace 12 minutos
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                ⚽ Talleres Gana 3-0: Pico de Demanda Detectado
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Análisis de sentimiento: Euforia masiva detectada en redes sociales. 
                Correlación histórica: Victoria contundente = +420% en merchandising en las próximas 48hs.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-background/80 rounded-full font-medium">
                  🎯 Campaña "Victoria Grande" activada automáticamente
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium border border-primary/30">
                  💰 Oportunidad estimada: $28,400 USD
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Medium Priority Alert - Price Optimization */}
        <Card className="p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] animate-slide-up [animation-delay:200ms] group">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="p-3 bg-yellow-500/20 rounded-xl group-hover:bg-yellow-500/30 transition-all">
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500/40">
                  ⚡ Oportunidad
                </Badge>
                <Badge variant="outline" className="bg-background/50 text-muted-foreground border-border/50">
                  <Clock className="w-3 h-3 mr-1" />
                  Hace 25 minutos
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                💡 Optimización de Precio Sugerida - SKU #1523
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Competencia bajó precio 15%. Tu stock: 340 unidades con rotación lenta. 
                Simulación IA: Ajuste -12% aumentaría ventas +85% sin erosionar margen.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-background/80 rounded-full font-medium">
                  📊 Simulación ejecutada: Impacto neto +$4,200 USD
                </span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full font-medium border border-green-500/30">
                  ✓ ROI proyectado: 2.8x
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Info Alert - Risk Prevention */}
        <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-slide-up [animation-delay:300ms] group">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-all">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/40">
                  🛡️ Prevención
                </Badge>
                <Badge variant="outline" className="bg-background/50 text-muted-foreground border-border/50">
                  <Clock className="w-3 h-3 mr-1" />
                  Hace 1 hora
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                🔍 Detección Early Warning - Obsolescencia SKU #776
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Sin movimiento en 52 días. Capital inmovilizado: $18,900 USD. 
                Riesgo de obsolescencia: 78%. Recomendación: Liquidación inmediata con bundle estratégico.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-background/80 rounded-full font-medium">
                  🎁 Bundle sugerido: SKU #776 + #234 con 35% OFF
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium border border-accent/30">
                  📈 Probabilidad de éxito: 89%
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Real-time Monitoring Dashboard */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 animate-fade-in">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <Bell className="w-6 h-6 text-primary animate-glow-pulse" />
            Sistema de Monitoreo en Tiempo Real
          </h3>
          <p className="text-muted-foreground">Métricas actuales del sistema de alertas inteligentes</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">127</p>
            <p className="text-sm text-muted-foreground">Alertas hoy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent mb-1">8</p>
            <p className="text-sm text-muted-foreground">Críticas activas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-500 mb-1">94%</p>
            <p className="text-sm text-muted-foreground">Precisión</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">2.3min</p>
            <p className="text-sm text-muted-foreground">Tiempo respuesta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProactiveAlerts;
