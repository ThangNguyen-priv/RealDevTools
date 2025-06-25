
export default function PageNotFound() {
    return (
        <div className="min-h-full flex flex-col items-center justify-center  overflow-hidden px-4">
            <div className="text-6xl font-bold text-gray-400 mb-2">404</div>
            <div className="text-2xl font-semibold text-gray-700 mb-4">Không tìm thấy trang</div>
            <p className="text-gray-500 mb-8 text-center max-w-md">
                Trang bạn đang tìm kiếm không tồn tại.<br />
                Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
            </p>
            <a
                href="/"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Quay về trang chủ
            </a>
        </div>
    );
}
