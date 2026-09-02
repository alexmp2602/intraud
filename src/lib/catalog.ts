import { cache } from "react";

import { createPublicSupabaseClient } from "@/lib/supabase/server";

export type CatalogProduct = {
  id: string;
  name: string;
  model: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  categoryColor: string | null;
  subcategoryName: string | null;
  shortDescription: string;
  datasheetUrl: string | null;
  image: string | null;
  specifications: Array<{ key: string; label: string; value: string; position: number }>;
};

type ProductRow = {
  id: string;
  name: string;
  model: string;
  slug: string;
  category_id: string;
  short_description: string | null;
  datasheet_url: string | null;
  product_categories: { name: string; color: string | null } | null;
  product_subcategories: { name: string } | null;
  product_specifications: Array<{ key: string; label: string; value: string; position: number }>;
  product_images: Array<{ storage_path: string; is_primary: boolean; position: number }>;
};

function normalizeProduct(row: ProductRow): CatalogProduct {
  const images = [...row.product_images].sort(
    (a, b) => Number(b.is_primary) - Number(a.is_primary) || a.position - b.position,
  );

  return {
    id: row.id,
    name: row.name,
    model: row.model,
    slug: row.slug,
    categoryId: row.category_id,
    categoryName: row.product_categories?.name ?? row.category_id,
    categoryColor: row.product_categories?.color ?? null,
    subcategoryName: row.product_subcategories?.name ?? null,
    shortDescription: row.short_description ?? "Equipo Intraud para uso profesional.",
    datasheetUrl: row.datasheet_url,
    image: images[0]?.storage_path ?? null,
    specifications: [...row.product_specifications].sort((a, b) => a.position - b.position),
  };
}

const productSelect = `
  id, name, model, slug, category_id, short_description, datasheet_url,
  product_categories (name, color),
  product_subcategories (name),
  product_specifications (key, label, value, position),
  product_images (storage_path, is_primary, position)
`;

export const getCatalogProducts = cache(async () => {
  const { data, error } = await createPublicSupabaseClient()
    .from("products")
    .select(productSelect)
    .eq("is_active", true)
    .order("category_id")
    .order("position");

  if (error) throw new Error(`No se pudo cargar el catálogo: ${error.message}`);
  return (data as unknown as ProductRow[]).map(normalizeProduct);
});

export const getCatalogProduct = cache(async (slug: string) => {
  const { data, error } = await createPublicSupabaseClient()
    .from("products")
    .select(productSelect)
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (error) throw new Error(`No se pudo cargar el producto: ${error.message}`);
  return data ? normalizeProduct(data as unknown as ProductRow) : null;
});
