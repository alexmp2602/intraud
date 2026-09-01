export type ProductCategory = "arco" | "tig" | "mig" | "plasma" | "cargadores";

export type ProductSpecification = {
  key: string;
  label: string;
  value: string;
};

export type Product = {
  name: string;
  model: string;
  slug: string;
  category: ProductCategory;
  subcategory: string;
  shortDescription: string;
  specifications: ProductSpecification[];
  image?: string;
  datasheetUrl?: string;
};

export const products: Product[] = [
  {
    name: "Soldadora SE-150M",
    model: "SE-150M",
    slug: "se-150m",
    category: "arco",
    subcategory: "Arco AC",
    shortDescription:
      "Soldadora de corriente alterna compacta para trabajos livianos y uso general.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "45 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "2 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "3,25 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "23 kg",
      },
    ],
  },
  {
    name: "Soldadora SE-150M Turbo",
    model: "SE-150M Turbo",
    slug: "se-150m-turbo",
    category: "arco",
    subcategory: "Arco AC",
    shortDescription:
      "Versión con ventilación forzada para mayor continuidad de trabajo.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "45 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "2 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "3,25 mm",
      },
      {
        key: "ventilation",
        label: "Ventilación",
        value: "Forzada",
      },
      {
        key: "weight",
        label: "Peso",
        value: "23 kg",
      },
    ],
  },
  {
    name: "Soldadora SE-200M",
    model: "SE-200M",
    slug: "se-200m",
    category: "arco",
    subcategory: "Arco AC",
    shortDescription:
      "Equipo electromecánico con ruedas para herrería liviana y reparaciones.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "44 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "2,5 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "3,25 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "26 kg",
      },
    ],
  },
  {
    name: "Soldadora SE-230MB",
    model: "SE-230MB",
    slug: "se-230mb",
    category: "arco",
    subcategory: "Arco AC",
    shortDescription:
      "Soldadora versátil con alimentación 220 V o 380 V para taller y obra.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V / 2 × 380 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "49 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "3,25 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "4 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "43 kg",
      },
    ],
  },
  {
    name: "Soldadora SE-350MB",
    model: "SE-350MB",
    slug: "se-350mb",
    category: "arco",
    subcategory: "Arco AC",
    shortDescription:
      "Equipo de alta capacidad para herrería, mantenimiento y construcción.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V / 2 × 380 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "56 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "3,25 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "5 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "68 kg",
      },
    ],
  },
  {
    name: "Soldadora SE-350T",
    model: "SE-350T",
    slug: "se-350t",
    category: "arco",
    subcategory: "Arco AC",
    shortDescription:
      "Modelo trifásico para herrería pesada y trabajos industriales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "57 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "4 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "130 kg",
      },
    ],
  },

  {
    name: "Inverter 1400M",
    model: "1400M",
    slug: "inverter-1400m",
    category: "arco",
    subcategory: "Inverter monofásico",
    shortDescription:
      "Inverter compacto de 130 A para reparaciones, talleres e instalaciones.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "3,6 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "5–130 A",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "3,25 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "6 kg",
      },
    ],
  },
  {
    name: "Inverter 2000M",
    model: "2000M",
    slug: "inverter-2000m",
    category: "arco",
    subcategory: "Inverter monofásico",
    shortDescription:
      "Inverter monofásico portátil de hasta 180 A para trabajos generales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "5–180 A",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "4 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "7 kg",
      },
    ],
  },
  {
    name: "Inverter C1800M",
    model: "C1800M",
    slug: "inverter-c1800m",
    category: "arco",
    subcategory: "Inverter monofásico",
    shortDescription:
      "Inverter industrial monofásico de 160 A para electrodos especiales y obra.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "5–160 A",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "4 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "9 kg",
      },
    ],
  },
  {
    name: "Inverter C2300M",
    model: "C2300M",
    slug: "inverter-c2300m",
    category: "arco",
    subcategory: "Inverter monofásico",
    shortDescription:
      "Inverter industrial de 210 A para obra, gasoductos y electrodos especiales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "6,5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "5–210 A",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "5 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "12 kg",
      },
    ],
  },
  {
    name: "Inverter C3400T",
    model: "C3400T",
    slug: "inverter-c3400t",
    category: "arco",
    subcategory: "Inverter trifásico",
    shortDescription: "Inverter trifásico para montajes e industria pesada.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "9,5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "10–320 A",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "16,5 kg",
      },
    ],
  },
  {
    name: "Inverter C4800T",
    model: "C4800T",
    slug: "inverter-c4800t",
    category: "arco",
    subcategory: "Inverter trifásico",
    shortDescription:
      "Inverter trifásico de gran potencia para trabajos industriales exigentes.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "13 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "20–400 A",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "28 kg",
      },
    ],
  },

  {
    name: "Rectifier 350",
    model: "RECTIFIER 350",
    slug: "rectifier-350",
    category: "arco",
    subcategory: "Rectifier",
    shortDescription:
      "Rectificadora trifásica robusta para obra y uso industrial.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "68 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "3,25 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "4 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "105 kg",
      },
    ],
  },
  {
    name: "Rectifier 500",
    model: "RECTIFIER 500",
    slug: "rectifier-500",
    category: "arco",
    subcategory: "Rectifier",
    shortDescription:
      "Rectificadora industrial para fabricación, recargue duro y obra.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "72 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "4 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "150 kg",
      },
    ],
  },
  {
    name: "Rectifier 700",
    model: "RECTIFIER 700",
    slug: "rectifier-700",
    category: "arco",
    subcategory: "Rectifier",
    shortDescription:
      "Rectificadora de gran capacidad para minería, vialidad y trabajos pesados.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "openCircuitVoltage",
        label: "Tensión en vacío",
        value: "72 V",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "5 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "170 kg",
      },
    ],
  },

  {
    name: "SE-250 AC-DC",
    model: "SE-250AC-DC",
    slug: "se-250-ac-dc",
    category: "arco",
    subcategory: "AC-DC",
    shortDescription:
      "Soldadora AC-DC adaptable a taller y obra, con alimentación 220 V o 380 V.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V / 2 × 380 V",
      },
      {
        key: "maxCurrent",
        label: "Amperaje máximo AC/DC",
        value: "250 A / 150 A",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "2,5 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "3,25 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "68 kg",
      },
    ],
  },
  {
    name: "SE-300 AC-DC",
    model: "SE-300AC-DC",
    slug: "se-300-ac-dc",
    category: "arco",
    subcategory: "AC-DC",
    shortDescription:
      "Soldadora AC-DC para trabajos de mayor capacidad y diferentes electrodos.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V / 2 × 380 V",
      },
      {
        key: "maxCurrent",
        label: "Amperaje máximo AC/DC",
        value: "300 A / 200 A",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "3,25 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "4 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "92 kg",
      },
    ],
  },
  {
    name: "SE-400 AC-DC",
    model: "SE-400AC-DC",
    slug: "se-400-ac-dc",
    category: "arco",
    subcategory: "AC-DC",
    shortDescription:
      "Equipo AC-DC de gran capacidad para aplicaciones industriales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "2 × 380 V",
      },
      {
        key: "maxCurrent",
        label: "Amperaje máximo AC/DC",
        value: "400 A / 280 A",
      },
      {
        key: "normalElectrode",
        label: "Electrodo normal",
        value: "4 mm",
      },
      {
        key: "maxElectrode",
        label: "Electrodo máximo",
        value: "6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "127 kg",
      },
    ],
  },

  {
    name: "Pulsarctig C1800M",
    model: "C1800M",
    slug: "pulsarctig-c1800m",
    category: "tig",
    subcategory: "Arco pulsado DC",
    shortDescription:
      "TIG inverter de 160 A con arco pulsado, rampas y alta frecuencia.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "5–160 A",
      },
      {
        key: "dutyCycle35",
        label: "Factor de servicio 35%",
        value: "160 A",
      },
      {
        key: "weight",
        label: "Peso",
        value: "11 kg",
      },
    ],
  },
  {
    name: "Pulsarctig C2300M",
    model: "C2300M",
    slug: "pulsarctig-c2300m",
    category: "tig",
    subcategory: "Arco pulsado DC",
    shortDescription:
      "TIG inverter industrial de 210 A con arco pulsado y alta frecuencia.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "6,5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "5–210 A",
      },
      {
        key: "dutyCycle35",
        label: "Factor de servicio 35%",
        value: "210 A",
      },
      {
        key: "weight",
        label: "Peso",
        value: "13 kg",
      },
    ],
  },
  {
    name: "Pulsarctig C3400T",
    model: "C3400T",
    slug: "pulsarctig-c3400t",
    category: "tig",
    subcategory: "Arco pulsado DC",
    shortDescription:
      "TIG inverter trifásico para industria, tubería y trabajos de gran porte.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "9,5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "5–275 A",
      },
      {
        key: "dutyCycle35",
        label: "Factor de servicio 35%",
        value: "275 A",
      },
      {
        key: "weight",
        label: "Peso",
        value: "19,5 kg",
      },
    ],
  },

  {
    name: "MIG 220M",
    model: "220M",
    slug: "mig-220m",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "Soldadora MIG/MAG monofásica para fabricación, taller y obra.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "5,5 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "25–220 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,6–0,9 mm",
      },
      {
        key: "aluminumWire",
        label: "Alambre de aluminio",
        value: "0,9–1,2 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "72 kg",
      },
    ],
  },
  {
    name: "MIG 250M",
    model: "250M",
    slug: "mig-250m",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "MIG/MAG monofásica de mayor capacidad para trabajos profesionales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "1 × 220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "8 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "25–245 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,6–0,9 mm",
      },
      {
        key: "aluminumWire",
        label: "Alambre de aluminio",
        value: "0,9–1,2 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "80 kg",
      },
    ],
  },
  {
    name: "MIG 260T",
    model: "260T",
    slug: "mig-260t",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "Soldadora MIG/MAG trifásica para producción y uso profesional.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "9 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "25–260 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,6–0,9 mm",
      },
      {
        key: "aluminumWire",
        label: "Alambre de aluminio",
        value: "0,9–1,2 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "80 kg",
      },
    ],
  },
  {
    name: "MIG 320T",
    model: "320T",
    slug: "mig-320t",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "MIG/MAG trifásica industrial para mayores espesores y producción.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "13 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "30–320 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,6–1,2 mm",
      },
      {
        key: "aluminumWire",
        label: "Alambre de aluminio",
        value: "0,9–1,2 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "94 kg",
      },
    ],
  },
  {
    name: "MIG 360T",
    model: "360T",
    slug: "mig-360t",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "MIG/MAG trifásica para fabricación industrial y alta productividad.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "16 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "30–360 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,6–1,2 mm",
      },
      {
        key: "aluminumWire",
        label: "Alambre de aluminio",
        value: "0,9–1,6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "108 kg",
      },
    ],
  },

  {
    name: "MIG 320 CDI",
    model: "320CDI",
    slug: "mig-320-cdi",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "MIG industrial con cabezal devanador independiente para trabajo en altura.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "13 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "30–320 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,6–1,2 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "103 kg",
      },
    ],
  },
  {
    name: "MIG 420 CDI",
    model: "420CDI",
    slug: "mig-420-cdi",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "MIG con devanador independiente para obra, tanques y lugares de difícil acceso.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "19 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "30–420 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,6–0,9 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "120 kg",
      },
    ],
  },
  {
    name: "MIG 560 CDI",
    model: "560CDI",
    slug: "mig-560-cdi",
    category: "mig",
    subcategory: "MIG Industrial",
    shortDescription:
      "MIG de gran capacidad con devanador independiente para industria pesada.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "29 kVA",
      },
      {
        key: "current",
        label: "Intensidad",
        value: "35–560 A",
      },
      {
        key: "steelWire",
        label: "Alambre de acero",
        value: "0,8–1,6 mm",
      },
      {
        key: "weight",
        label: "Peso",
        value: "183 kg",
      },
    ],
  },

  {
    name: "Plasma INV25M",
    model: "INV25M",
    slug: "plasma-inv25m",
    category: "plasma",
    subcategory: "Plasma Inverter",
    shortDescription:
      "Plasma inverter monofásico portátil para cortes de hasta 7 mm.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "3,6 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "8–25 A",
      },
      {
        key: "cutThickness",
        label: "Espesor de corte",
        value: "7 mm",
      },
      {
        key: "airConsumption",
        label: "Consumo de aire",
        value: "115 l/min · 5 bar",
      },
      {
        key: "weight",
        label: "Peso",
        value: "9 kg",
      },
    ],
  },
  {
    name: "Plasma INV40M",
    model: "INV40M",
    slug: "plasma-inv40m",
    category: "plasma",
    subcategory: "Plasma Inverter",
    shortDescription:
      "Plasma inverter monofásico portátil para cortes de hasta 12 mm.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "220 V",
      },
      {
        key: "power",
        label: "Potencia",
        value: "5 kVA",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "12–40 A",
      },
      {
        key: "cutThickness",
        label: "Espesor de corte",
        value: "12 mm",
      },
      {
        key: "airConsumption",
        label: "Consumo de aire",
        value: "115 l/min · 5 bar",
      },
      {
        key: "weight",
        label: "Peso",
        value: "13 kg",
      },
    ],
  },

  {
    name: "Plasma AN 40 MB",
    model: "AN 40 MB",
    slug: "plasma-an-40-mb",
    category: "plasma",
    subcategory: "Plasma",
    shortDescription:
      "Equipo de plasma electromecánico para taller y corte manual de metales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "220 V / 2 × 380 V",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "22–35 A",
      },
      {
        key: "cutThickness",
        label: "Espesor de corte",
        value: "5 / 9 mm",
      },
      {
        key: "airConsumption",
        label: "Consumo de aire",
        value: "115 l/min · 5 bar",
      },
      {
        key: "weight",
        label: "Peso",
        value: "46 kg",
      },
    ],
  },
  {
    name: "Plasma AF 50 T",
    model: "AF 50 T",
    slug: "plasma-af-50-t",
    category: "plasma",
    subcategory: "Plasma",
    shortDescription:
      "Plasma trifásico para aplicaciones profesionales e industriales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "27–43 A",
      },
      {
        key: "cutThickness",
        label: "Espesor de corte",
        value: "12 mm",
      },
      {
        key: "airConsumption",
        label: "Consumo de aire",
        value: "165 l/min · 5 bar",
      },
      {
        key: "weight",
        label: "Peso",
        value: "62 kg",
      },
    ],
  },
  {
    name: "Plasma AF 80 T",
    model: "AF 80 T",
    slug: "plasma-af-80-t",
    category: "plasma",
    subcategory: "Plasma",
    shortDescription:
      "Plasma trifásico de mayor capacidad para trabajos industriales.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "32–70 A",
      },
      {
        key: "cutThickness",
        label: "Espesor de corte",
        value: "18 mm",
      },
      {
        key: "airConsumption",
        label: "Consumo de aire",
        value: "170 l/min · 5 bar",
      },
      {
        key: "weight",
        label: "Peso",
        value: "66 kg",
      },
    ],
  },
  {
    name: "Plasma AF 100 T",
    model: "AF 100 T",
    slug: "plasma-af-100-t",
    category: "plasma",
    subcategory: "Plasma",
    shortDescription: "Plasma industrial trifásico para cortes de hasta 25 mm.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "40–100 A",
      },
      {
        key: "cutThickness",
        label: "Espesor de corte",
        value: "25 mm",
      },
      {
        key: "airConsumption",
        label: "Consumo de aire",
        value: "200 l/min · 5 bar",
      },
      {
        key: "weight",
        label: "Peso",
        value: "84 kg",
      },
    ],
  },
  {
    name: "Plasma AF 150 CCT",
    model: "AF 150 CCT",
    slug: "plasma-af-150-cct",
    category: "plasma",
    subcategory: "Plasma",
    shortDescription:
      "Plasma industrial de alta capacidad para cortes de grandes espesores.",
    specifications: [
      {
        key: "lineVoltage",
        label: "Tensión de línea",
        value: "3 × 380 V",
      },
      {
        key: "regulation",
        label: "Regulación",
        value: "25–150 A",
      },
      {
        key: "cutThickness",
        label: "Espesor de corte",
        value: "40 / 50 mm",
      },
      {
        key: "airConsumption",
        label: "Consumo de aire",
        value: "200 l/min · 5,5 bar",
      },
      {
        key: "weight",
        label: "Peso",
        value: "169 kg",
      },
    ],
  },
];
