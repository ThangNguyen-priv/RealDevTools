import type { MenuItemsProps } from "../common"


export type searchFormProps = {
    searchTerm?:string,
    setSearchTerm:(value:string)=>void,
    onSearch?: (searchTerm: string) => void  // ← Thêm function search
    onClear?: () => void  // ← Thêm function clear (optional)
    placeholder?: string
}
export type useSearchItemProps = {
    searchTerm:string,
    setSearchTerm:(term:string)=>void
    filteredData:MenuItemsProps[],
    handleSearch: (searchVal:string) => void
}