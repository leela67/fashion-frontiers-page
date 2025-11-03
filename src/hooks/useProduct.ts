import { useState, useEffect } from "react";
import { fetchProductById, ApiProduct } from "@/services/api";

interface UseProductResult {
  product: ApiProduct | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch a single product by ID from the API
 * @param id - Product ID
 * @returns Object containing product, loading state, error, and refetch function
 */
export function useProduct(id: number | null): UseProductResult {
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState<number>(0);

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;

    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(id);
        
        if (isMounted) {
          setProduct(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to fetch product");
          setProduct(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [id, refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((prev) => prev + 1);
  };

  return { product, loading, error, refetch };
}

