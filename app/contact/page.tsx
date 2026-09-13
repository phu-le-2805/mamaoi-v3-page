import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Liên hệ đội ngũ ${site.name} để được hỗ trợ.`,
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Liên hệ</span>
          <h1>Cần hỗ trợ? Nhắn cho chúng tôi</h1>
          <p className="muted">
            Góp ý, báo lỗi, yêu cầu về dữ liệu cá nhân hay hợp tác — gửi cho chúng tôi qua email hoặc điện thoại.
            Chúng tôi phản hồi trong {site.responseTime}.
          </p>
        </div>

        <div className="grid grid-3">
          <div className="card contact-item">
            <span className="icon">✉️</span>
            <div>
              <div className="label">Email</div>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="card contact-item">
            <span className="icon">📞</span>
            <div>
              <div className="label">Điện thoại</div>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
          <div className="card contact-item">
            <span className="icon">📍</span>
            <div>
              <div className="label">Địa chỉ</div>
              <span>{site.address}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <h3>Khi gửi yêu cầu hỗ trợ</h3>
            <p className="muted">Để xử lý nhanh hơn, mẹ vui lòng cho biết:</p>
            <ul className="check-list">
              <li>Email đăng nhập ứng dụng</li>
              <li>Loại máy và phiên bản iOS / Android</li>
              <li>Mô tả lỗi, kèm ảnh chụp màn hình nếu có</li>
            </ul>
          </div>
          <div className="card">
            <h3>Yêu cầu về dữ liệu</h3>
            <p className="muted">
              Mẹ có thể tự xoá toàn bộ dữ liệu hoặc xoá tài khoản ngay trong ứng dụng (Cài đặt → Vùng nguy hiểm). Nếu cần bản sao dữ liệu hoặc yêu cầu bằng văn bản, gửi email cho chúng tôi — chúng tôi trả lời trong vòng
              30 ngày.
            </p>
            <p>
              <Link href="/privacy">Chính sách bảo mật</Link> · <Link href="/terms">Điều khoản sử dụng</Link>
            </p>
          </div>
        </div>

        <div className="cta" style={{ marginTop: 40 }}>
          <div>
            <h2>Viết cho chúng tôi</h2>
            <p className="muted">Đơn vị phát hành: {site.company}</p>
          </div>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent(`[${site.name}] Hỗ trợ`)}`} className="btn btn-primary">
            Gửi email
          </a>
        </div>
      </div>
    </section>
  );
}
