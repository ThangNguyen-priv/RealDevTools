
import { SidebarItem } from '.'
import type { SideBarSectionProps } from '../../../types'


export default function SidebarSection({sectionId,section,items}:SideBarSectionProps)
{
    return (
        <div className="mb-3">
            <div className='font-light text-md' key={sectionId}>
                <h2 className="border-border pb-1 mb-4 border-b-2 text-foreground">{section}</h2>
            </div>
            {/* side bar Item render */}
            <div>
                {
                    items.map((itemBar,index)=>(
                        <SidebarItem 
                            key={index}
                            title={itemBar.title}
                            href={itemBar.href}
                            icon={itemBar.icon}
                        />
                    ))
                }
            </div>
        </div>
    )
}
