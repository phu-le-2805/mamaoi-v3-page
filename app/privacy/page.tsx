import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: `Cách ${site.name} thu thập, lưu trữ và bảo vệ dữ liệu của bạn.`,
};

export default function PrivacyPage() {
  return (
    <article className="legal">
      <div className="container legal-inner">
        <span className="eyebrow">Quyền riêng tư</span>
        <h1>Chính sách bảo mật</h1>
        <p className="legal-meta">
          Hiệu lực từ: {site.effectiveDate} · Phát hành bởi: {site.company} · Liên hệ:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>1. Tóm tắt</h2>
        <p>
          {site.name} là nhật ký em bé. Bạn nói, ứng dụng chuyển thành chữ và sắp xếp giúp bạn. Dữ liệu của bạn nằm
          trên máy bạn và trên máy chủ riêng của ứng dụng (Supabase, khu vực {site.serverRegion}) để đồng bộ giữa các
          thiết bị. Chúng tôi <strong>không</strong> bán dữ liệu,{" "}
          <strong>không</strong> dùng dữ liệu để quảng cáo, <strong>không</strong> có mạng quảng cáo hay công cụ theo
          dõi trong ứng dụng.
        </p>

        <h2>2. Dữ liệu chúng tôi xử lý</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nhóm</th>
                <th>Cụ thể</th>
                <th>Vì sao cần</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tài khoản</td>
                <td>Địa chỉ email, mật khẩu (đã băm, chúng tôi không thấy được)</td>
                <td>Đăng nhập, khôi phục mật khẩu, đồng bộ nhiều máy</td>
              </tr>
              <tr>
                <td>Hồ sơ bé</td>
                <td>Tên bé, ngày sinh, ảnh đại diện (tuỳ chọn)</td>
                <td>Hiển thị tuổi, nhóm ký ức theo bé</td>
              </tr>
              <tr>
                <td>Ký ức</td>
                <td>Chữ bạn nói hoặc gõ, danh mục, số liệu (ml, phút, °C, kg…), thời điểm</td>
                <td>Chính là nội dung nhật ký</td>
              </tr>
              <tr>
                <td>Tệp đính kèm</td>
                <td>Ảnh, video (≤ 60 giây), bản ghi âm gốc của câu bạn nói</td>
                <td>Chính là nội dung nhật ký</td>
              </tr>
              <tr>
                <td>Nhật ký sửa phân loại</td>
                <td>Câu gốc, danh mục máy đoán, danh mục bạn chọn lại</td>
                <td>Cải thiện bộ quy tắc phân loại tiếng Việt</td>
              </tr>
              <tr>
                <td>Cài đặt</td>
                <td>Ngôn ngữ, số giây tự lưu, bật/tắt lưu âm thanh gốc, bé đang xem</td>
                <td>Giữ trải nghiệm giống nhau trên mọi máy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Chúng tôi <strong>không</strong> thu thập: vị trí, danh bạ, lịch sử duyệt web, mã quảng cáo, báo cáo sự cố, dữ liệu sức khoẻ
          từ Apple Health / Google Fit, thông tin thanh toán (ứng dụng không có mua bán trong app).
        </p>

        <h2>3. Dữ liệu nằm ở đâu</h2>
        <ul>
          <li>
            <strong>Trên máy bạn:</strong> một cơ sở dữ liệu trong vùng dữ liệu riêng của ứng dụng, thư mục
            ảnh/video/âm thanh, và bộ nhớ đệm tối đa 1 GB cho tệp tải về. Phiên đăng nhập nằm trong Keychain (iOS) /
            Keystore (Android). Ứng dụng <strong>chạy được đầy đủ khi không có mạng</strong>.
          </li>
          <li>
            <strong>Trên máy chủ:</strong> Supabase project riêng của {site.name}, khu vực {site.serverRegion}. Cơ sở
            dữ liệu bật Row Level Security: mỗi dòng chỉ đọc được bởi tài khoản sở hữu hồ sơ bé đó. Tệp nằm trong
            một kho lưu trữ <strong>riêng tư</strong>; ứng dụng chỉ lấy được qua đường dẫn ký có hạn 1 giờ. Mọi kết
            nối dùng HTTPS.
          </li>
        </ul>

        <h2>4. Ai được xem nhật ký của bạn</h2>
        <p>
          Chỉ bạn, qua tài khoản đăng nhập của mình trên các thiết bị của bạn. Chúng tôi không xem nội dung nhật ký của
          bạn trừ khi bạn gửi cho chúng tôi để được hỗ trợ. Nếu sau này ứng dụng có tính năng chia sẻ, chính sách này sẽ
          được cập nhật trước khi tính năng đó ra mắt.
        </p>

        <h2>5. Bên thứ ba</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Bên</th>
                <th>Vai trò</th>
                <th>Dữ liệu họ nhận</th>
                <th>Có thể tắt?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supabase</td>
                <td>Máy chủ lưu trữ và đồng bộ (bên xử lý dữ liệu thay chúng tôi)</td>
                <td>Toàn bộ mục 2</td>
                <td>Không — đó là nơi dữ liệu của bạn được lưu</td>
              </tr>
              <tr>
                <td>Dịch vụ nhận dạng giọng nói của Apple / Google</td>
                <td>Chuyển lời nói thành chữ</td>
                <td>
                  <strong>Âm thanh câu bạn nói</strong>, chỉ khi máy của bạn <strong>không</strong> hỗ trợ nhận dạng
                  ngoại tuyến tiếng Việt
                </td>
                <td>Có: không dùng nút micro, gõ ghi chú thay thế. Ứng dụng báo trước khi cần mạng để nhận dạng</td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Phân phối ứng dụng</td>
                <td>Theo chính sách của họ, chúng tôi không nhận thêm gì</td>
                <td>Không</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Nhận dạng giọng nói chạy <strong>trên máy</strong> khi hệ điều hành hỗ trợ tiếng Việt ngoại tuyến. Khi không
          hỗ trợ, âm thanh được gửi tới dịch vụ của Apple hoặc Google để chuyển thành chữ, theo chính sách riêng của
          họ. Chúng tôi nói rõ điều này vì nó xảy ra trước khi dữ liệu tới máy chủ của chúng tôi.
        </p>

        <h2>6. Giữ dữ liệu bao lâu</h2>
        <p>
          Khi bạn xoá một ký ức, nó được đánh dấu xoá ngay và biến khỏi mọi máy sau lần đồng bộ kế tiếp; bản ghi và tệp
          kèm theo bị <strong>xoá hẳn khỏi máy chủ sau 30 ngày</strong>. Xoá toàn bộ dữ liệu hoặc xoá tài khoản trong
          ứng dụng sẽ xoá ngay, không qua bước 30 ngày.
        </p>

        <h2>7. Quyền của bạn</h2>
        <ul>
          <li>
            <strong>Lấy bản sao dữ liệu:</strong> gửi email cho chúng tôi từ địa chỉ đăng nhập của bạn.
          </li>
          <li>
            <strong>Xoá toàn bộ dữ liệu:</strong> Cài đặt → Vùng nguy hiểm → Xoá toàn bộ dữ liệu (xác nhận hai bước).
          </li>
          <li>
            <strong>Xoá tài khoản:</strong> Cài đặt → Vùng nguy hiểm → Xoá tài khoản. Thao tác này xoá tệp, dữ liệu và
            chính tài khoản đăng nhập, không khôi phục được.
          </li>
          <li>
            <strong>Sửa:</strong> mọi ký ức đều sửa được trong ứng dụng.
          </li>
          <li>
            Cần hỗ trợ hoặc muốn yêu cầu bằng văn bản: <a href={`mailto:${site.email}`}>{site.email}</a>, chúng tôi trả
            lời trong vòng 30 ngày.
          </li>
        </ul>

        <h2>8. Dữ liệu về trẻ em</h2>
        <p>
          {site.name} dành cho <strong>người lớn</strong> (bố mẹ, ông bà) ghi chép về con cháu của mình. Ứng dụng không
          nhắm tới trẻ em, không có nội dung dành cho trẻ em và không thu thập dữ liệu trực tiếp từ trẻ em. Thông tin về
          em bé (tên, ngày sinh, ảnh) do người lớn chủ động nhập và do chính người đó kiểm soát và xoá. Nếu phát
          hiện dữ liệu do trẻ em dưới 13 tuổi tự cung cấp, chúng tôi sẽ xoá khỏi máy chủ ngay.
        </p>

        <h2>9. An toàn</h2>
        <p>
          Row Level Security ở tầng cơ sở dữ liệu, kho tệp riêng tư với đường dẫn ký có hạn, HTTPS cho mọi kết nối,
          phiên đăng nhập trong kho khoá của hệ điều hành, mật khẩu tối thiểu 8 ký tự được băm. Tuy vậy, không có phương thức truyền tải hay lưu
          trữ nào an toàn tuyệt đối.
        </p>

        <h2>10. Chuyển dữ liệu qua biên giới</h2>
        <p>
          Máy chủ đặt tại {site.serverRegion}. Khi sử dụng ứng dụng, bạn đồng ý rằng dữ liệu của bạn được lưu và xử lý
          tại khu vực đó.
        </p>

        <h2>11. Thay đổi chính sách</h2>
        <p>
          Chúng tôi cập nhật trang này khi cách xử lý dữ liệu thay đổi và đổi ngày hiệu lực ở đầu trang. Thay đổi lớn
          sẽ được thông báo trong ứng dụng trước khi có hiệu lực.
        </p>

        <h2>12. Liên hệ</h2>
        <p>Nếu có câu hỏi về chính sách này, vui lòng liên hệ:</p>
        <ul>
          <li>Đơn vị: {site.company}</li>
          <li>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            Điện thoại: <a href={site.phoneHref}>{site.phone}</a>
          </li>
          <li>Địa chỉ: {site.address}</li>
        </ul>
        <p>
          Xem thêm: <Link href="/terms">Điều khoản sử dụng</Link>
        </p>

        <h2>English summary</h2>
        <p className="muted">
          {site.name} is a voice-first baby diary published by {site.company}. We process your account email and
          password (hashed), baby profile, diary entries, attachments (photos, videos up to 60 s, original voice
          recordings), classification corrections and app settings. Data lives on your device (the app
          works fully offline) and on our own Supabase project in {site.serverRegion}, protected by row-level security,
          a private storage bucket with 1-hour signed URLs, and HTTPS. Only you, through your own account, can see your diary. Apple/Google speech recognition receives audio only
          when your device lacks offline Vietnamese recognition.
          No crash reporting, no advertising, no tracking, no data sales. Deleted items are purged from the server
          after 30 days; deleting all data or your account purges immediately. You can edit any entry and delete all data or your account in-app; email us for a copy of your data. The app is intended for adults. Contact: {site.email}.
        </p>
      </div>
    </article>
  );
}
