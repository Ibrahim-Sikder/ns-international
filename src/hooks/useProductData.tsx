/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { TProduct } from "@/types/type";
import { useEffect, useState } from "react";

export const useProductData = () => {
    const [productData, setProductData] = useState<TProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/products?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setProductData(data.data?.videos || []);
            } catch (err: any) {
                setError("Failed to fetch products data!");
            } finally {
                setLoading(false);
            }
        };

        fetchProductData();
    }, []);

    return {    productData, loading, error };
};
