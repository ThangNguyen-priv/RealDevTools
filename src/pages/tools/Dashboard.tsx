export default function Dashboard() {
  return (
    <div className="space-y-6">
        <div className="border-b border-border pb-4">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">Welcome to RealDevTools</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold mb-2">HTML Tools</h3>
                <p className="text-muted-foreground text-sm">Format and minify HTML code</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold mb-2">CSS Tools</h3>
                <p className="text-muted-foreground text-sm">Format and minify CSS code</p>
            </div>
        </div>
    </div>
  )
}
