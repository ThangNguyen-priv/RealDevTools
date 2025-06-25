import type { searchFormProps } from "../../../types"

export default function SearchForm(
    { searchTerm,
        setSearchTerm, onSearch,
        placeholder = 'search...'
    }: searchFormProps)
{


    const handleSearchIcon = () =>
    {
        if (searchTerm?.trim()) {
            onSearch?.(searchTerm)
        }
    }

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault()
        handleSearchIcon()
    }

    return (
        <form className="relative w-full mb-4" onSubmit={handleSubmit}>
            <i className="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-blue-400" aria-hidden="true"
                onClick={handleSearchIcon}
            ></i>
            <input
                type="text"
                className="w-full pl-10 pr-4 py-1 rounded-lg bg-input text-foreground placeholder-muted-foreground border border-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 hover:border-blue-300 hover:ring-1 hover:ring-blue-200"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    )
}
