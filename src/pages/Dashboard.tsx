import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Home, Bed, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const [maxRent, setMaxRent] = useState([1500]);
  const [income, setIncome] = useState("");

  // Dados de exemplo de imóveis
  const properties = [
    {
      id: 1,
      title: "Apartamento 2 Quartos - Centro",
      location: "Centro, São Paulo - SP",
      rent: 1200,
      bedrooms: 2,
      eligible: true,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Kitnet Mobiliada - Próximo ao Metrô",
      location: "Vila Mariana, São Paulo - SP",
      rent: 950,
      bedrooms: 1,
      eligible: true,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Casa 3 Quartos - Zona Sul",
      location: "Jabaquara, São Paulo - SP",
      rent: 1800,
      bedrooms: 3,
      eligible: false,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Apartamento Compacto - Estudante",
      location: "Butantã, São Paulo - SP",
      rent: 850,
      bedrooms: 1,
      eligible: true,
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop"
    }
  ];

  const filteredProperties = properties.filter(prop => prop.rent <= maxRent[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Encontre Sua Moradia Ideal
          </h1>
          <p className="text-muted-foreground">
            Personalize sua busca e descubra imóveis dentro do seu orçamento
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filtros */}
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filtros de Busca</CardTitle>
                <CardDescription>Ajuste conforme suas necessidades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="income">Sua Renda Mensal (R$)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="Ex: 2000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                  {income && (
                    <p className="text-xs text-muted-foreground">
                      Recomendado: até R$ {Math.floor(Number(income) * 0.3).toLocaleString('pt-BR')} de aluguel
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Aluguel Máximo: R$ {maxRent[0].toLocaleString('pt-BR')}</Label>
                  <Slider
                    value={maxRent}
                    onValueChange={setMaxRent}
                    max={3000}
                    min={500}
                    step={50}
                    className="mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Select>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Selecione o bairro" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="centro">Centro</SelectItem>
                      <SelectItem value="zona-sul">Zona Sul</SelectItem>
                      <SelectItem value="zona-norte">Zona Norte</SelectItem>
                      <SelectItem value="zona-leste">Zona Leste</SelectItem>
                      <SelectItem value="zona-oeste">Zona Oeste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Quartos</Label>
                  <Select>
                    <SelectTrigger id="bedrooms">
                      <SelectValue placeholder="Quantidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Quarto</SelectItem>
                      <SelectItem value="2">2 Quartos</SelectItem>
                      <SelectItem value="3">3+ Quartos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  Aplicar Filtros
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Lista de Imóveis */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {filteredProperties.length} imóveis encontrados
              </p>
              <Select defaultValue="price-low">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                  <SelectItem value="newest">Mais recentes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    {property.eligible && (
                      <Badge className="absolute top-2 right-2 bg-secondary">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Elegível para auxílio
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{property.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                        <DollarSign className="w-5 h-5" />
                        {property.rent.toLocaleString('pt-BR')}
                        <span className="text-sm font-normal text-muted-foreground">/mês</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Bed className="w-4 h-4" />
                        {property.bedrooms} {property.bedrooms === 1 ? 'quarto' : 'quartos'}
                      </div>
                    </div>
                    <Button className="w-full">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <Card className="p-12 text-center">
                <Home className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Nenhum imóvel encontrado</h3>
                <p className="text-muted-foreground mb-4">
                  Tente ajustar seus filtros para ver mais opções
                </p>
                <Button variant="outline" onClick={() => setMaxRent([1500])}>
                  Limpar Filtros
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
