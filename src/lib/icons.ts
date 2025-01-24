// src/utils/iconUtils.ts
import { 
    UserPlus, 
    Handshake, 
    Receipt,
    ReceiptCent,
    ReceiptText,
    BookOpenText,
    MapPin,
    BaggageClaim,
    Newspaper,
    BadgePercent,
    FileText,
    FileX,
    BriefcaseBusiness } from "lucide-react";

// Crie um mapeamento entre as chaves da API e os componentes do Lucide
export class IconMapper {
  private static iconMap: { [key: string]: React.ComponentType } = {
    UserPlus: UserPlus,
    Handshake: Handshake,
    Receipt: Receipt,
    ReceiptCent: ReceiptCent,
    ReceiptText: ReceiptText,
    BookOpenText: BookOpenText,
    MapPin: MapPin,
    BaggageClaim: BaggageClaim,
    Newspaper: Newspaper,
    BadgePercent: BadgePercent,
    FileText: FileText,
    FileX: FileX,
    BriefcaseBusiness: BriefcaseBusiness,
  };

  /**
   * Retorna o componente de ícone do Lucide baseado na chave fornecida.
   * @param key Identificador retornado pela API.
   * @returns Componente do Lucide ou um ícone padrão.
   */
  public static getIcon(key: string): React.ComponentType {
    return this.iconMap[key] || null; // Ícone padrão
  }
}
