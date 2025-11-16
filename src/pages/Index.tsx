import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, CheckCircle, FileText, Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Encontre seu lar acessível agora
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
              Conectamos jovens de baixa renda a moradias dentro do orçamento e auxílios habitacionais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 hover:scale-105 transition-transform"
                onClick={() => navigate('/dashboard')}
              >
                Encontrar Moradia
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all"
                onClick={() => navigate('/dashboard')}
              >
                Anunciar Imóvel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simplificamos todo o processo de encontrar e garantir sua moradia ideal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">1. Encontre Imóveis</h3>
                <p className="text-muted-foreground">
                  Busque moradias compatíveis com sua renda e receba recomendações personalizadas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors hover:shadow-lg">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">2. Acesse Auxílios</h3>
                <p className="text-muted-foreground">
                  Descubra automaticamente se você é elegível para programas de assistência habitacional
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors hover:shadow-lg">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">3. Documentação Fácil</h3>
                <p className="text-muted-foreground">
                  Envie e valide documentos de forma simples e rápida, sem complicações
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Por que escolher nossa plataforma?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Seguro e Confiável</h3>
                <p className="text-muted-foreground">Todos os imóveis e documentos são verificados para sua segurança</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Economia Garantida</h3>
                <p className="text-muted-foreground">Conectamos você a auxílios que podem reduzir seus custos em até 70%</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Suporte Dedicado</h3>
                <p className="text-muted-foreground">Acompanhamento em cada etapa da sua jornada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Pronto para encontrar seu novo lar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Junte-se a milhares de jovens que já encontraram moradia acessível através da nossa plataforma
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 hover:scale-105 transition-transform"
            onClick={() => navigate('/dashboard')}
          >
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2025 MoradiaAcessível. Conectando jovens a lares dentro do orçamento.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
