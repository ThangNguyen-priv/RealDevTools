import { useLocation } from 'react-router-dom';

export default function Develop() {
  let pathName = useLocation().pathname;
  pathName = pathName.replace('/', '').replace('-', ' ').toUpperCase();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-blue-600 text-center">
          Trang {pathName} đang trong giai đoạn phát triển
        </h1>
        <p className="text-center text-gray-700">
          Chào mừng bạn đến với trang {pathName} của chúng tôi! Hiện tại, trang {pathName} vẫn đang trong quá trình xây dựng và hoàn thiện để mang đến cho bạn trải nghiệm tốt nhất.
        </p>
        <p className="text-center text-gray-700">
          Rất mong nhận được sự thông cảm và ủng hộ từ bạn. Nếu có bất kỳ góp ý hoặc thắc mắc nào, vui lòng liên hệ với chúng tôi. Cảm ơn bạn đã kiên nhẫn chờ đợi!
        </p>
        <p className="italic text-gray-500">
          Nguyễn Văn Thắng — Đội ngũ phát triển
        </p>
      </div>
    </div>
  );
}
