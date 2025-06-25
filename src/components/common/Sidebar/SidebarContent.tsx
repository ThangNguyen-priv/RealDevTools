import { SideBarSection } from ".";
import type { SidebarContentProps } from "../../../types";
import { SearchForm } from "../Form";
import SidebarHeader from "./SiderbarHeader";



export default function SidebarContent({
  title,
  logoHref,
  logoAlt,
  searchTerm,
  setSearchTerm,
  onSearch,
  filteredData
}: SidebarContentProps) {

  return (
    <div className="text-foreground h-full flex flex-col">
      <SidebarHeader
        title={title}
        logoHref={logoHref}
        logoAlt={logoAlt}
      />

      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
        placeholder="Search tools..."
      />

      <div className="flex-1 overflow-y-auto">
        {filteredData.length > 0 ? (
          filteredData.map((sectionData, index) => (
            <SideBarSection
              key={index}
              section={sectionData.section}
              items={sectionData.items}
            />
          ))
        ) : (
          searchTerm.trim() && (
            <div className="text-center py-6 text-muted-foreground">
              <i className="fa fa-search mb-2 text-2xl opacity-50" />
              <p className="text-sm text-red-500">Không tìm thấy kết quả cho "{searchTerm}"</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}