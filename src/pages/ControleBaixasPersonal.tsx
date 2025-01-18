import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DatePickerWithRange } from '@/components/ui/datePickerWIthRange';

export function ControleBaixasPersonal() {
  return (
      <main className="flex-1 p-6 overflow-auto w-full">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold shadow-sm p-4 rounded-md">Controle de Baixas - Personal Freight</h1>
          
          <div className="flex items-start gap-4 flex-wrap shadow-sm p-6 rounded-md">
            <div className="flex-1 min-w-[300px]">
              <label className="text-sm text-muted-foreground">Filtro</label>
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option>NR DOCUMENTO FISCAL</option>
              </select>
            </div>
            <div className="flex-[2] min-w-[300px]">
              <label className="text-sm text-muted-foreground">Buscar</label>
              <Input type="text" placeholder="Buscar..." />
            </div>
            <div className="flex-[2] min-w-[300px]">
              <label className="text-sm text-muted-foreground">Período</label>
              <DatePickerWithRange />
            </div>
          </div>

          <div className="flex gap-2 flex-wrap shadow-sm p-4 rounded-md">
            <Button variant="default">Consultar</Button>
            <Button variant="outline">Limpar Filtro</Button>
            <Button variant="outline">Filtro Avançado</Button>
            <Button variant="secondary">Criar Pedido Compra (TOTVS)</Button>
            <Button variant="destructive">Estornar NF/RD (TOTVS)</Button>
            <Button variant="outline">Editar Informações</Button>
            <Button className="ml-auto" variant="outline">
              Exportar Grid - CSV
            </Button>
          </div>
        </div>
      </main>
  );
}
