import { useEffect, useState } from "react";
import type { MenuItemsProps } from "../types/common/sidebar.type";
import { apiConfig } from "../components/config/apiConfig";

export default function useSidebarData(jsonData: MenuItemsProps[])
{
    const [listData, setListData] = useState<MenuItemsProps[]>(jsonData)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try {
                const respone = await fetch(apiConfig.sidebar.url)
                if (!respone.ok) {
                    throw new Error(`HTTP error, status: ${respone.status}`)
                }

                const json = await respone.json()
                setListData(json)
                setError(null)
            } catch (error) 
            {
                console.log('Error loading sidebar data: ',error);
                setError(error instanceof Error ? error.message : 'Unknow error')
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return {listData, loading, error}
}
