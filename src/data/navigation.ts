export const navigation = [
  { label: "Servicio técnico", href: "/servicio-tecnico" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contacto", href: "/contacto" },
];

export const productGroups = [
  {
    name: "Arco",
    href: "/productos?categoria=arco",
    color: "var(--color-category-arc)",
    items: [
      "Inverters monofásico",
      "Inverters trifásico",
      "Rectifier",
      "AC-DC",
      "Arco AC",
    ],
  },
  {
    name: "TIG",
    href: "/productos?categoria=tig",
    color: "var(--color-category-tig)",
    items: ["TIG AC-DC", "Arco pulsado DC"],
  },
  {
    name: "MIG",
    href: "/productos?categoria=mig",
    color: "var(--color-category-mig)",
    items: ["MIG LT", "MIG Industrial"],
  },
  {
    name: "Plasma",
    href: "/productos?categoria=plasma",
    color: "var(--color-category-plasma)",
    items: ["Plasma", "Plasma Inverter"],
  },
  {
    name: "Cargadores",
    href: "/productos?categoria=cargadores",
    color: "var(--color-category-chargers)",
    items: ["Cargadores de baterías", "Arrancadores"],
  },
];
