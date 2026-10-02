import React, { useState } from 'react';
import {
  Laptop,
  Smartphone,
  Eye,
  CheckCircle,
  Activity,
  Layers,
  HeartHandshake,
  Calendar,
  Users,
  Search,
  Filter,
  Camera,
  ShieldAlert,
} from 'lucide-react';

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('web');

  const screens = {
    web: {
      title: 'Web Admin: Bảng Điều Khiển Viện Trưởng & Quản Trị Tầng/Phòng',
      desc: 'Theo dõi toàn cảnh tỷ lệ lấp đầy giường, danh sách sự cố, tình hình điều dưỡng trực ca và biểu đồ doanh thu theo thời gian thực.',
      features: ['Sơ đồ phân tầng & phòng ngủ thời gian thực', 'Biểu đồ sức khỏe tổng hợp', 'Phân quyền bảo mật cao'],
      ui: (
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl text-slate-100 font-sans">
          {/* Top Bar */}
          <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-slate-300 font-mono">beecare-admin.vn/dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium">
                SignalR: Online
              </span>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950">
            {/* Sidebar Left Mini */}
            <div className="lg:col-span-3 space-y-2">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400">Tổng Số Giường</div>
                <div className="text-2xl font-bold text-white mt-1">150 Giường</div>
                <div className="text-xs text-emerald-400 mt-1">Đang dùng: 138 (92%)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400">Nhân Lực Trực Ca</div>
                <div className="text-2xl font-bold text-sky-400 mt-1">26 / 26 NV</div>
                <div className="text-xs text-slate-400 mt-1">Check-in Face ID đủ</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400">Cảnh Báo Y Tế</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">0 Nguy Cấp</div>
                <div className="text-xs text-slate-400 mt-1">3 Cần nhắc lịch uống thuốc</div>
              </div>
            </div>

            {/* Main Center: Bed Map Matrix Preview */}
            <div className="lg:col-span-9 bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Sơ Đồ Phòng Khu Nhà A - Tầng 2 (Chăm Sóc Tích Cực)
                </h4>
                <span className="text-xs text-slate-400 font-mono">16/16 Giường có cụ</span>
              </div>

              {/* Bed Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { room: 'P.201 - G1', name: 'Cụ Lê Văn T.', status: 'Ổn định', bp: '120/80' },
                  { room: 'P.201 - G2', name: 'Cụ Trần Thị M.', status: 'Ổn định', bp: '118/75' },
                  { room: 'P.202 - G1', name: 'Cụ Nguyễn Văn H.', status: 'Uống thuốc 14h', bp: '130/85' },
                  { room: 'P.202 - G2', name: 'Cụ Vũ Thị K.', status: 'Khám bác sĩ', bp: '125/80' },
                  { room: 'P.203 - G1', name: 'Cụ Bùi Thị L.', status: 'Ổn định', bp: '115/70' },
                  { room: 'P.203 - G2', name: 'Cụ Phạm Văn D.', status: 'Ổn định', bp: '122/78' },
                  { room: 'P.204 - G1', name: 'Cụ Đỗ Thị N.', status: 'Ăn nhẹ 15h', bp: '119/76' },
                  { room: 'P.204 - G2', name: 'Cụ Ngô Văn P.', status: 'Ổn định', bp: '121/79' },
                ].map((bed, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{bed.room}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="font-bold text-xs text-white mt-1 truncate">{bed.name}</div>
                    <div className="flex justify-between items-center text-[11px] mt-2 pt-2 border-t border-slate-700/60">
                      <span className="text-slate-400 font-mono">{bed.bp}</span>
                      <span className="text-cyan-400 text-[10px] font-medium">{bed.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    staff: {
      title: 'App Nhân Viên: Thao Tác Chăm Sóc & Đo Sinh Hiệu Tại Giường',
      desc: 'Giao diện tối ưu hóa cho màn hình di động, phím bấm to rõ, thao tác 1 chạm giúp điều dưỡng hoàn thành nhiệm vụ nhanh chóng.',
      features: ['Điểm danh Face ID nhận diện ca', 'Nhập sinh hiệu đo tức thì', 'Chụp ảnh hoạt động gửi người thân'],
      ui: (
        <div className="max-w-md mx-auto bg-slate-900 rounded-[36px] p-4 border-[6px] border-slate-700 shadow-2xl">
          {/* Mobile Screen Notch */}
          <div className="w-32 h-4 bg-slate-700 rounded-full mx-auto mb-3" />
          <div className="bg-[#FBF7F3] rounded-[24px] p-5 text-navy-900 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500">Xin chào, Điều dưỡng</div>
                <div className="text-base font-bold text-primary">Nguyễn Thị Hồng</div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-success-bg text-success font-semibold">
                Ca sáng: Đang trực
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                <Activity className="w-5 h-5 text-primary mx-auto mb-1" />
                <span className="font-semibold text-navy-900">Đo Sinh Hiệu</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                <Camera className="w-5 h-5 text-secondary mx-auto mb-1" />
                <span className="font-semibold text-navy-900">Chụp Ảnh Hoạt Động</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                <ShieldAlert className="w-5 h-5 text-red-500 mx-auto mb-1" />
                <span className="font-semibold text-navy-900">Báo Khẩn Cấp</span>
              </div>
            </div>

            {/* Bedside Task Card */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-primary">Phòng 204 - Giường 1</span>
                <span className="text-[10px] text-gray-500 font-mono">11:30 AM</span>
              </div>
              <div className="text-sm font-bold text-navy-900">Cụ Hoàng Văn K. (80 tuổi)</div>
              <div className="text-xs text-gray-600 bg-[#F4F6FA] p-2.5 rounded-lg space-y-1">
                <div className="flex justify-between">
                  <span>Huyết áp lúc 08h:</span>
                  <span className="font-bold text-navy-900 font-mono">122/80 mmHg</span>
                </div>
                <div className="flex justify-between">
                  <span>Khẩu phần trưa:</span>
                  <span className="font-bold text-success">Đã dùng hết (Cháo sườn)</span>
                </div>
              </div>
              <button className="w-full py-2 bg-primary text-white text-xs font-semibold rounded-xl mt-2">
                Cập nhật sinh hiệu tiếp theo
              </button>
            </div>
          </div>
        </div>
      ),
    },
    family: {
      title: 'App Người Thân: Theo Dõi Sức Khỏe & Nhận Ảnh Thường Nhật',
      desc: 'Gia đình an tâm 100% khi theo dõi từng diễn biến của người thân, xem ảnh vui chơi và thanh toán viện phí trực tuyến thuận tiện.',
      features: ['Xem hồ sơ sinh hiệu theo ngày', 'Xem album ảnh hoạt động', 'Nhận hóa đơn & thanh toán online'],
      ui: (
        <div className="max-w-md mx-auto bg-slate-900 rounded-[36px] p-4 border-[6px] border-slate-700 shadow-2xl">
          <div className="w-32 h-4 bg-slate-700 rounded-full mx-auto mb-3" />
          <div className="bg-[#FBF7F3] rounded-[24px] p-5 text-navy-900 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500">Đang theo dõi người thân</div>
                <div className="text-base font-bold text-navy-900">Cụ Bà: Lê Thị Lan (78t)</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-xs">
                LTL
              </div>
            </div>

            {/* Health Snapshot Banner */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl text-white">
              <div className="text-xs opacity-90">Sức khỏe hôm nay: 25/09/2026</div>
              <div className="text-lg font-bold mt-1">Trạng thái Rất Tốt ✨</div>
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/20 text-xs">
                <div>Nhịp tim: 74 bpm</div>
                <div>Huyết áp: 118/76 mmHg</div>
              </div>
            </div>

            {/* Activity Stream */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-navy-900">Hình ảnh hoạt động hôm nay</span>
                <span className="text-[11px] text-primary font-medium">Xem tất cả</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-sky-50 rounded-xl p-3 text-center border border-sky-100">
                  <div className="w-8 h-8 rounded-full bg-sky-200 mx-auto flex items-center justify-center text-secondary mb-1">
                    ☕
                  </div>
                  <div className="text-[11px] font-bold text-navy-900">Tập Dưỡng Sinh</div>
                  <div className="text-[10px] text-gray-500">07:30 Sáng nay</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-3 text-center border border-amber-100">
                  <div className="w-8 h-8 rounded-full bg-amber-200 mx-auto flex items-center justify-center text-amber-700 mb-1">
                    🎨
                  </div>
                  <div className="text-[11px] font-bold text-navy-900">Câu Lạc Bộ Vẽ</div>
                  <div className="text-[10px] text-gray-500">10:00 Sáng nay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const current = screens[activeTab];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill bg-primary-light text-primary mb-4 mx-auto">
            <Eye className="w-4 h-4 text-accent" />
            <span>Trải Nghiệm Giao Diện Người Dùng Thực Tế</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Showcase Trực Quan 3 Nền Tảng Ứng Dụng
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Được thiết kế tinh gọn theo trải nghiệm người dùng hiện đại, dễ thao tác cho cả bác sĩ,
            điều dưỡng và các thành viên lớn tuổi trong gia đình.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'web'
                ? 'bg-primary text-white shadow-md'
                : 'bg-[#FBF7F3] text-navy-800 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>Website Quản Lý Viện (Admin)</span>
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'staff'
                ? 'bg-primary text-white shadow-md'
                : 'bg-[#FBF7F3] text-navy-800 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile App Điều Dưỡng (Staff)</span>
          </button>

          <button
            onClick={() => setActiveTab('family')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'family'
                ? 'bg-primary text-white shadow-md'
                : 'bg-[#FBF7F3] text-navy-800 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Mobile App Thân Nhân (Family)</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">{current.title}</h3>
            <p className="text-sm text-gray-600">{current.desc}</p>
          </div>

          {/* Render Active UI Screen */}
          <div>{current.ui}</div>
        </div>
      </div>
    </section>
  );
}
