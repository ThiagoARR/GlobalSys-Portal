import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { Home } from './pages/Home'
import { AtendimentosRejeitados } from './pages/AtendimentosRejeitados'
import { CaixaSaida } from './pages/CaixaSaida'
import { ComissaoTransportadora } from './pages/ComissaoTransportadora'
import { ConferenciaProcesso } from './pages/ConferenciaProcesso'
import { ConsultarWeek } from './pages/ConsultarWeek'
import { ContaPagarReceber } from './pages/ContaPagarReceber'
import { ControleBaixasPremiacao } from './pages/ControleBaixasPremiacao'
import { ControleBaixasPersonal } from '@/pages/ControleBaixasPersonal'
import { Courrier } from './pages/Courrier'
import { CourrierPersonal } from './pages/CourrierPersonal'
import { Dashboard } from './pages/Dashboard'
import { DemonstrativoRateio } from './pages/DemonstrativoRateio'
import { GerencialMaster } from './pages/GerencialMaster'
import { IntegracaoTOTVSCCProcessosNAC } from './pages/IntegracaoTOTVSCCProcessosNAC'
import { IntegracaoTOTVSCredit } from './pages/IntegracaoTOTVSCredit'
import { IntegracaoTOTVSDebit } from './pages/IntegracaoTOTVSDebit'
import { IntegracaoTOTVSDemurragePA } from './pages/IntegracaoTOTVSDemurragePA'
import { IntegracaoTOTVSDemurrageRA } from './pages/IntegracaoTOTVSDemurrageRA'
import { IntegracaoTOTVSDespesa } from './pages/IntegracaoTOTVSDespesa'
import { IntegracaoTOTVSPa } from './pages/IntegracaoTOTVSPA'
import { IntegracaoTOTVSServico } from './pages/IntegracaoTOTVSServico'
import { InvoiceQuitada } from './pages/InvoiceQuitada'
import { ModuloDemurrage } from './pages/ModuloDemurrage'
import { ModuloDetention } from './pages/ModuloDetention'
import { ModuloGerencial } from './pages/ModuloGerencial'
import { ModuloOperacional } from './pages/ModuloOperacional'
import { PowerBIGerencial } from './pages/PowerBIGerencial'
import { Premiacao } from './pages/Premiacao'
import { PrevisibilidadeContas } from './pages/PrevisibilidadeContas'
import { RelatorioAccountDeclarado } from './pages/RelatorioAccountDeclarado'
import { RelatorioConsolidada } from './pages/RelatorioConsolidada'
import { RelatorioDebitCredit } from './pages/RelatorioDebitCredit'
import { RelatorioInvoice } from './pages/RelatorioInvoice'
import { RelatorioProcessos } from './pages/RelatorioProcessos'
import { TaxasAberto } from './pages/TaxasAberto'
import { TaxasInativas } from './pages/TaxasInativas'
import { SidebarProvider } from "@/components/ui/sidebar"

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Comercial/AtendimentosRejeitados" element={<AtendimentosRejeitados />} />
            <Route path="/Operacao/ConsultarWeek" element={<ConsultarWeek />} />
            <Route path="/Operacao/Courrier" element={<Courrier />} />
            <Route path="/Operacao/ConferenciaProcesso" element={<ConferenciaProcesso />} />
            <Route path="/Financeiro/ModuloDemurrage" element={<ModuloDemurrage />} />
            <Route path="/Financeiro/CaixaSaida" element={<CaixaSaida />} />
            <Route path="/Financeiro/ModuloDetention" element={<ModuloDetention />} />
            <Route path="/Financeiro/RelatorioDebitCredit" element={<RelatorioDebitCredit />} />
            <Route path="/Financeiro/RelatorioAccountDeclarado" element={<RelatorioAccountDeclarado />} />
            <Route path="/Financeiro/ComissaoTransportadora" element={<ComissaoTransportadora />} />
            <Route path="/Financeiro/IntegracaoTOTVSDespesa" element={<IntegracaoTOTVSDespesa />} />
            <Route path="/Financeiro/IntegracaoTOTVSPA" element={<IntegracaoTOTVSPa />} />
            <Route path="/Financeiro/IntegracaoTOTVSDebit" element={<IntegracaoTOTVSDebit />} />
            <Route path="/Financeiro/IntegracaoTOTVSCredit" element={<IntegracaoTOTVSCredit />} />
            <Route path="/Financeiro/IntegracaoTOTVSCCProcessosNAC" element={<IntegracaoTOTVSCCProcessosNAC />} />
            <Route path="/Financeiro/IntegracaoTOTVSDemurrageRA" element={<IntegracaoTOTVSDemurrageRA />} />
            <Route path="/Financeiro/IntegracaoTOTVSDemurragePA" element={<IntegracaoTOTVSDemurragePA />} />
            <Route path="/Financeiro/ContaPagarReceber" element={<ContaPagarReceber />} />
            <Route path="/Financeiro/RelatorioInvoice" element={<RelatorioInvoice />} />
            <Route path="/Financeiro/InvoiceQuitada" element={<InvoiceQuitada />} />
            <Route path="/Financeiro/DemonstrativoRateio" element={<DemonstrativoRateio />} />
            <Route path="/Financeiro/Premiacao" element={<Premiacao />} />
            <Route path="/Financeiro/RelatorioProcessos" element={<RelatorioProcessos />} />
            <Route path="/Financeiro/TaxasAberto" element={<TaxasAberto />} />
            <Route path="/Financeiro/PrevisibilidadeContas" element={<PrevisibilidadeContas />} />
            <Route path="/Financeiro/ControleBaixas" element={<ControleBaixasPersonal />} />
            <Route path="/Financeiro/COntroleBaixasPremiacao" element={<ControleBaixasPremiacao />} />
            <Route path="/Faturamento/IntegracaoTOTVSServico" element={<IntegracaoTOTVSServico />} />
            <Route path="/Gerencial/ModuloGerencial" element={<ModuloGerencial />} />
            <Route path="/Gerencial/ModuloOperacional" element={<ModuloOperacional />} />
            <Route path="/Gerencial/GerencialMaster" element={<GerencialMaster />} />
            <Route path="/Gerencial/Dashboard" element={<Dashboard />} />
            <Route path="/Gerencial/TaxasInativas" element={<TaxasInativas />} />
            <Route path="/Gerencial/PowerBIGerencial" element={<PowerBIGerencial />} />
            <Route path="/Relatorios/RelatorioConsolidada" element={<RelatorioConsolidada />} />
            <Route path="/Servicos/CourrierPersonal" element={<CourrierPersonal />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </SidebarProvider>
  )
}

export default App

