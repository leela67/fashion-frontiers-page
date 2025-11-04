import { useState, useEffect } from "react";
import { fetchCategories, ApiCategory, FetchCategoriesParams } from "@/services/api";

interface UseCategoriesWithGenderReturn {
  categories: ApiCategory[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch categories with optional gender filter
 * @param params - Optional parameters including gender filter
 * @returns Object containing categories, loading state, and error
 */
export function useCategoriesWithGender(
  params?: FetchCategoriesParams
): UseCategoriesWithGenderReturn {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCategories(params);
        
        if (isMounted) {
          setCategories(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load categories");
          console.error("Error fetching categories:", err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, [params?.gender, params?.type, params?.search, params?.id]);

  return { categories, loading, error };
}

