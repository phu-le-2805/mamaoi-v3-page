import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const categories = [
  { icon: "🍼", name: "Bú / ăn", hint: "Bú mẹ, bú bình, hút sữa, ăn dặm — kèm số ml và giờ.", tint: "#FBE7D6" },
  { icon: "😴", name: "Ngủ", hint: "Giờ ngủ, giờ dậy, độ dài từng giấc.", tint: "#DCE7F3" },
  { icon: "🧺", name: "Bỉm", hint: "Thay bỉm, tè, ị và những lần bất thường.", tint: "#DFEBDC" },
  { icon: "💗", name: "Sức khoẻ", hint: "Sốt, uống thuốc, tiêm chủng, cân nặng, chiều cao.", tint: "#F8DCD8" },
  { icon: "🌱", name: "Kỷ niệm", hint: "Lần đầu biết lật, mọc chiếc răng đầu tiên, tiếng gọi “mẹ”.", tint: "#E9DFF0" },
  { icon: "📝", name: "Chưa xếp", hint: "Khi app chưa chắc, ký ức vẫn được lưu để mẹ xếp sau.", tint: "#E8E3DD" },
];

const features = [
  { icon: "🎙️", title: "Giữ micro và nói", text: "Không cần gõ. Mẹ nói tiếng Việt tự nhiên, app chuyển thành chữ ngay khi đang nói." },
  { icon: "✨", title: "Tự sắp xếp", text: "App tự nhận ra danh mục, số liệu (ml, phút, °C, kg) và thời điểm, rồi tự lưu sau 3 giây." },
  { icon: "📸", title: "Ảnh, video, ghi chú", text: "Thêm ảnh, video ngắn đến 60 giây hoặc ghi chú gõ tay vào cùng một nhật ký." },
  { icon: "📅", title: "Feed và lịch", text: "Xem lại từng ngày theo dòng thời gian, hoặc nhìn cả tháng trên lịch ảnh." },
  { icon: "🎧", title: "Nghe lại giọng mẹ", text: "Giữ bản ghi âm gốc bên cạnh mỗi ký ức để sau này nghe lại đúng giọng mẹ kể." },
  { icon: "📴", title: "Dùng được khi không có mạng", text: "Mọi thứ lưu trên máy trước, tự đồng bộ khi có mạng trở lại." },
];

const faqs = [
  {
    q: "Mommi Memory có mất phí không?",
    a: "Ứng dụng miễn phí, không có quảng cáo và không có mua bán trong ứng dụng.",
  },
  {
    q: "Giọng nói của tôi có bị gửi đi đâu không?",
    a: "Nhận dạng giọng nói chạy trên máy khi điện thoại hỗ trợ tiếng Việt ngoại tuyến. Nếu không, âm thanh được gửi tới dịch vụ nhận dạng của Apple hoặc Google, và app sẽ báo trước cho mẹ biết.",
  },
  {
    q: "Ai xem được nhật ký của con?",
    a: "Chỉ tài khoản của mẹ. Chúng tôi không xem nội dung nhật ký, trừ khi mẹ gửi cho chúng tôi để được hỗ trợ.",
  },
  {
    q: "Tôi có thể xoá dữ liệu và tài khoản không?",
    a: "Có. Vào Cài đặt → Vùng nguy hiểm để xoá toàn bộ dữ liệu hoặc xoá tài khoản. Thao tác xác nhận hai bước và không hoàn tác được.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">{site.tagline}</span>
            <h1>Nói một câu, lưu cả một ngày của con</h1>
            <p className="hero-lead">{site.description}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Liên hệ hỗ trợ
              </Link>
              <a href="#tinh-nang" className="btn btn-ghost">
                Xem tính năng →
              </a>
            </div>
            <span className="badge">Sắp có mặt trên App Store &amp; Google Play</span>
          </div>

          <div className="hero-art">
            <Image
              src="/mommi-logo.png"
              alt="Mommi Memory"
              width={1200}
              height={537}
              priority
              sizes="(max-width: 860px) 100vw, 440px"
            />
            <div className="bubble">
              <small>Đã nghe</small>
              “Bé bú bình 120 ml lúc 2 giờ chiều”
              <div className="chips">
                <span className="chip" style={{ background: "#FBE7D6" }}>
                  🍼 Bú / ăn
                </span>
                <span className="chip" style={{ background: "#E2F6FB" }}>
                  120 ml
                </span>
                <span className="chip" style={{ background: "#FCE7EE" }}>
                  14:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Cách hoạt động</span>
            <h2>Ba bước, không cần rảnh tay</h2>
            <p className="muted">Dành cho những lúc một tay bế con, một tay cầm điện thoại.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="step-no">01</div>
              <h3>Giữ nút micro</h3>
              <p className="muted">Nói như đang kể: “con ngủ từ 9 giờ đến 11 giờ rưỡi”.</p>
            </div>
            <div className="card">
              <div className="step-no">02</div>
              <h3>Kiểm tra thẻ ký ức</h3>
              <p className="muted">App hiện danh mục, số liệu và giờ. Chạm để sửa nếu cần.</p>
            </div>
            <div className="card">
              <div className="step-no">03</div>
              <h3>Tự lưu</h3>
              <p className="muted">Sau 3 giây ký ức được lưu và đồng bộ lên mọi thiết bị của mẹ.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="tinh-nang">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Tính năng</span>
            <h2>Mọi thứ về con, gọn trong một cuốn nhật ký</h2>
          </div>
          <div className="grid grid-3">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <span className="icon" style={{ background: "var(--accent-soft)" }}>
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: 64 }}>
            <span className="eyebrow">6 danh mục</span>
            <h2>Tự xếp đúng chỗ</h2>
          </div>
          <div className="grid grid-3">
            {categories.map((c) => (
              <div className="card" key={c.name}>
                <span className="icon" style={{ background: c.tint }}>
                  {c.icon}
                </span>
                <h3>{c.name}</h3>
                <p className="muted">{c.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2" style={{ alignItems: "center", gap: 40 }}>
          <div>
            <span className="eyebrow">Riêng tư</span>
            <h2>Nhật ký của con là chuyện riêng của gia đình</h2>
            <p className="muted">
              Dữ liệu nằm trên máy của mẹ và máy chủ riêng của ứng dụng để đồng bộ. Chúng tôi không xem nội dung
              nhật ký của mẹ.
            </p>
            <Link href="/privacy" className="btn btn-ghost" style={{ marginTop: 8 }}>
              Đọc chính sách bảo mật
            </Link>
          </div>
          <ul className="check-list card">
            <li>Không quảng cáo, không công cụ theo dõi</li>
            <li>Không bán dữ liệu cho bất kỳ ai</li>
            <li>Chỉ tài khoản của mẹ đọc được nhật ký, mọi kết nối dùng HTTPS</li>
            <li>Xoá toàn bộ dữ liệu hoặc xoá tài khoản ngay trong app</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Hỏi đáp</span>
            <h2>Câu hỏi thường gặp</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <div className="cta" style={{ marginTop: 56 }}>
            <div>
              <h2>Cần hỗ trợ? Nhắn cho chúng tôi</h2>
              <p className="muted">Chúng tôi phản hồi trong {site.responseTime}.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Liên hệ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
