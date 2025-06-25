export type MenuItemsProps = {
    section: string;
    items: SideBarItemsProps[];
};

export interface SidebarProps {
    isOpen?: boolean;
    onToggle?: () => void;
}

export type SidebarItem = {
    title?: string;
    logoAlt?: string;
    logoHref?: string;
    menuItems?: MenuItemsProps[];
};
export type SidebarContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export type SideBarItemsProps = {
    itemId?: number | undefined;
    title: string;
    href?: string;
    icon?: string;
    isActive?: boolean;
};

export type SideBarSectionProps = {
    sectionId?: number;
    section?: string;
    items: SideBarItemsProps[];
};

export type SidebarContentProps = {
    title?: string;
    logoHref?: string;
    logoAlt?: string;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    onSearch: (term: string) => void;
    filteredData: MenuItemsProps[];
};

export type MobileSidebarProps = {
    isOpen: boolean;
    children: React.ReactNode;
    onStateChange: (state: { isOpen: boolean }) => void;
};

export type SidebarLayoutProps = SidebarItem & {
    className?: string;
};
