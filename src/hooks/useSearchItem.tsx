import { useEffect, useMemo, useState } from 'react'
import type { MenuItemsProps, useSearchItemProps } from '../types';


export default function useSearchItem(listData: MenuItemsProps[]): useSearchItemProps {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<MenuItemsProps[]>(listData);

    const handleSearch = useMemo(() => (searchVal: string) => {
        const searchLower = searchVal.toLowerCase().trim()
        // kiem tra co data trong search khong
        if (!searchLower) {
            setFilteredData(listData)
            return
        }

        //duyet mang tim kiem va ghi ra searchResult
        const searchResult = listData
            .map(section => ({
                ...section,
                items: section.items.filter(item => 
                    item.title?.toLowerCase().includes(searchLower)
                )
            }))
            .filter(section => section.items.length > 0)
            // lay ra section co it nhat 1 ban ghi
        
        setFilteredData(searchResult)
    }, [listData])

    // render khi co them ptu vao list
    useEffect(() => {
        setFilteredData(listData)
    }, [listData])

    // render khi search thay doi
    useEffect(() => {
        handleSearch(searchTerm)
    }, [searchTerm, handleSearch])

    return { searchTerm, setSearchTerm, filteredData, handleSearch }
}