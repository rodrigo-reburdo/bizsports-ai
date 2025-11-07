import { Card } from "@/components/ui/card";
import { AlertTriangle, Package, DollarSign, Clock, Activity, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WarehouseCrisis = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Del Caos Operativo a la <span className="bg-gradient-to-r from-destructive via-accent to-destructive bg-clip-text text-transparent">Eficiencia Predictiva</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Cada día sin gestión adecuada cuesta miles en pérdidas de ingresos, trabajo desperdiciado y oportunidades perdidas.
        </p>
      </div>

      {/* Problems Grid */}
      <div className="space-y-24 max-w-6xl mx-auto">
        {/* Stockouts */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-destructive" />
              <h3 className="text-3xl font-bold">Quiebres de Stock</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Sin visibilidad en tiempo real del inventario, estás constantemente corriendo detrás. 
              Los productos críticos se agotan mientras el exceso de stock acumula polvo.
            </p>
          </div>
          <Card className="p-8 bg-destructive/10 border-destructive/50 text-center animate-slide-up">
            <p className="text-sm text-muted-foreground mb-4">Quiebres de Stock Diarios Promedio</p>
            <AnimatedCounter value={10} suffix="%" className="text-6xl font-bold mb-4 bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent" />
            <p className="text-lg font-semibold text-destructive">Productos no disponibles para clientes</p>
          </Card>
        </div>

        {/* Revenue Loss */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="p-8 bg-accent/10 border-accent/50 text-center animate-slide-up md:order-first">
            <p className="text-sm text-muted-foreground mb-4">Pérdida Anual de Ingresos</p>
            <AnimatedCounter value={418} prefix="$" suffix="M" className="text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent" />
            <p className="text-lg font-semibold text-accent">Solo por quiebres de stock y demoras</p>
          </Card>
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold">Perdida de Ingresos</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Cada quiebre de stock es una venta perdida. Cada demora es un cliente eligiendo a tu competidor. 
              La mala gestión de almacén impacta directamente en tus resultados.
            </p>
          </div>
        </div>

        {/* Labor Waste */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Horas de Trabajo Desperdiciadas</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Tu equipo pasa incontables horas buscando inventario, corrigiendo errores y 
              manejando el caos en lugar de impulsar la productividad.
            </p>
          </div>
          <Card className="p-8 bg-primary/10 border-primary/50 text-center animate-slide-up">
            <p className="text-sm text-muted-foreground mb-4">Horas Extra Mensuales</p>
            <AnimatedCounter value={550} className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" />
            <p className="text-lg font-semibold text-primary">Horas de tiempo extra innecesario</p>
          </Card>
        </div>

        {/* Picking Errors */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="p-8 bg-accent/10 border-accent/50 text-center animate-slide-up">
            <p className="text-sm text-muted-foreground mb-4">Errores de Picking Mensuales</p>
            <AnimatedCounter value={156} className="text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent" />
            <p className="text-lg font-semibold text-accent">Productos incorrectos enviados</p>
          </Card>
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold">Errores Operacionales</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Los procesos manuales y la falta de automatización conducen a errores constantes 
              de picking, devoluciones y pesadillas de servicio al cliente.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ value, prefix = "", suffix = "", className = "" }: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const current = easeOutQuart * value;
              
              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const displayValue = value < 10 ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <div ref={elementRef} className={className}>
      {prefix}{displayValue}{suffix}
    </div>
  );
};

export default WarehouseCrisis;
