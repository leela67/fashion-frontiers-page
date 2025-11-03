import { useState, useEffect } from "react";
import { fetchCategories, FetchCategoriesParams, ApiCategory } from "@/services/api";

interface UseCategoriesResult {
  categories: ApiCategory[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch categories from the API
 * @param params - Optional query parameters for filtering
 * @returns Object containing categories, loading state, error, and refetch function
 */
export function useCategories(params?: FetchCategoriesParams): UseCategoriesResult {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    async function loadCategories() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCategories(params);
        
        if (isMounted) {
          setCategories(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to fetch categories");
          setCategories([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(params), refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((prev) => prev + 1);
  };

  return { categories, loading, error, refetch };
}

