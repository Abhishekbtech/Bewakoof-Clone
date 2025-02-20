"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { ApiResponse, Product } from "@/types/Product";

interface DataContextType {
    data: Product[];
    loading: boolean;
    error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/electronics/products", {
                    method: "GET",
                    headers: {
                        "projectID": "0io9zoi91tt1"
                    }
                });
                if (!response.ok) throw new Error("Failed to fetch data");
                
                const result: ApiResponse = await response.json();
                setData(result.data);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ data, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
