import { useState, useEffect } from "react";
import { fetchProducts, FetchProductsParams, ApiProduct } from "@/services/api";

interface UseProductsResult {
  products: ApiProduct[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch products from the API
 * @param params - Optional query parameters for filtering
 * @returns Object containing products, loading state, error, and refetch function
 */
export function useProducts(params?: FetchProductsParams): UseProductsResult {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts(params);
        
        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to fetch products");
          setProducts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(params), refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((prev) => prev + 1);
  };

  return { products, loading, error, refetch };
}

