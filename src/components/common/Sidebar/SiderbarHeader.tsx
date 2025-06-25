import { Link } from "react-router-dom";

export default function SidebarHeader({
    title = 'RealDevTools',
    logoAlt = 'RealDevTools Logo',
    logoHref = '/public/logos.png'
})
{
    return (
        <Link
            to={"/"}
            className="flex items-center gap-2 mb-6">
            <img
                className="w-7 h-7 object-contain"
                src={logoHref}
                alt={logoAlt}
                onError={(e) =>
                {
                    console.log('Image load error:', e);
                    // Fallback to default
                    e.currentTarget.src = '/default-logo.png';
                }}
            />
            <h1 className="text-xl font-semibold text-foreground">
                {title}
            </h1>
        </Link>
    )
}
