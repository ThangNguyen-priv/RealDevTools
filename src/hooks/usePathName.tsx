const usePathName = (path: string) =>
{
    if (path === '/') return 'Dashboard'
    return path.replace('/', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())

    return path
}
export default usePathName