import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description: `Điều khoản sử dụng ứng dụng ${site.name}.`,
};

export default function TermsPage() {
  return (
    <article className="legal">
      <div className="container legal-inner">
        <span className="eyebrow">Pháp lý</span>
        <h1>Điều khoản sử dụng</h1>
        <p className="legal-meta">
          Hiệu lực từ: {site.effectiveDate} · Phát hành bởi: {site.company} · Liên hệ:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <p>
          Chào mừng bạn đến với {site.name}. Khi tải, cài đặt hoặc sử dụng ứng dụng, bạn đồng ý với các điều khoản dưới
          đây. Nếu không đồng ý, vui lòng ngừng sử dụng ứng dụng.
        </p>

        <h2>1. Dịch vụ</h2>
        <p>
          {site.name} là ứng dụng nhật ký giúp bố mẹ ghi lại hoạt động và kỷ niệm của con bằng giọng nói, ảnh, video và
          ghi chú; tự phân loại nội dung và đồng bộ giữa các thiết bị. Ứng dụng hiện
          được cung cấp miễn phí và không có quảng cáo.
        </p>

        <h2>2. Tài khoản</h2>
        <ul>
          <li>Bạn cần đăng ký tài khoản bằng email và mật khẩu để sử dụng ứng dụng.</li>
          <li>Bạn phải từ đủ 18 tuổi, hoặc có sự đồng ý của cha mẹ / người giám hộ hợp pháp.</li>
          <li>
            Bạn chịu trách nhiệm giữ bí mật mật khẩu và mọi hoạt động diễn ra trong tài khoản của mình. Hãy báo cho
            chúng tôi ngay nếu phát hiện tài khoản bị truy cập trái phép.
          </li>
          <li>Thông tin bạn cung cấp khi đăng ký phải chính xác.</li>
        </ul>

        <h2>3. Nội dung của bạn</h2>
        <ul>
          <li>
            Bạn là chủ sở hữu mọi nội dung bạn tạo trong ứng dụng (ký ức, ảnh, video, bản ghi âm, ghi chú). Chúng tôi
            không nhận quyền sở hữu nội dung đó.
          </li>
          <li>
            Bạn cho phép chúng tôi lưu trữ, xử lý và hiển thị nội dung <strong>chỉ</strong> để vận hành các tính năng
            của ứng dụng: ghi, sắp xếp, hiển thị và đồng bộ.
          </li>
          <li>
            Bạn chịu trách nhiệm về nội dung mình tải lên và đảm bảo có quyền với nội dung đó, đặc biệt là hình ảnh của
            người khác.
          </li>
          <li>Bạn có thể sửa hoặc xoá nội dung bất cứ lúc nào ngay trong ứng dụng.</li>
        </ul>

        <h2>4. Hành vi không được phép</h2>
        <ul>
          <li>Tải lên nội dung vi phạm pháp luật, xâm phạm quyền riêng tư, bạo lực hoặc khiêu dâm, đặc biệt liên quan tới trẻ em.</li>
          <li>Truy cập trái phép vào tài khoản, dữ liệu của người khác hoặc hệ thống máy chủ.</li>
          <li>Dịch ngược, sao chép, sửa đổi hoặc phân phối lại ứng dụng khi chưa được phép.</li>
          <li>Dùng ứng dụng để gửi thư rác, mã độc hoặc làm gián đoạn dịch vụ.</li>
        </ul>
        <p>Chúng tôi có quyền tạm khoá hoặc chấm dứt tài khoản vi phạm các điều trên.</p>

        <h2>5. Không thay thế tư vấn y tế</h2>
        <div className="note">
          {site.name} là công cụ ghi chép. Các số liệu, danh mục và tuổi của bé do ứng dụng hiển thị chỉ mang tính tham
          khảo và <strong>không</strong> thay thế chẩn đoán hay lời khuyên của bác sĩ. Khi con có dấu hiệu bất thường,
          hãy liên hệ ngay cơ sở y tế.
        </div>
        <p>
          Việc tự động nhận dạng giọng nói và phân loại có thể sai. Bạn nên kiểm tra lại thẻ ký ức trước khi dựa vào dữ
          liệu cho các quyết định quan trọng.
        </p>

        <h2>6. Quyền sở hữu trí tuệ</h2>
        <p>
          Ứng dụng, tên gọi, logo, giao diện, bộ quy tắc phân loại và mã nguồn thuộc quyền sở hữu của {site.company}.
          Bạn được cấp quyền sử dụng cá nhân, không độc quyền, không chuyển nhượng để dùng ứng dụng theo điều khoản này.
        </p>

        <h2>7. Dịch vụ bên thứ ba</h2>
        <p>
          Ứng dụng sử dụng một số dịch vụ bên thứ ba như Supabase (lưu trữ, đồng bộ), dịch vụ nhận dạng giọng nói của
          Apple / Google và App Store / Google Play. Việc sử dụng các dịch vụ này cũng tuân theo điều khoản của họ.
          Chi tiết xem tại <Link href="/privacy">Chính sách bảo mật</Link>.
        </p>

        <h2>8. Tính sẵn sàng và giới hạn trách nhiệm</h2>
        <ul>
          <li>
            Ứng dụng được cung cấp “nguyên trạng”. Chúng tôi nỗ lực để dịch vụ ổn định và dữ liệu an toàn, nhưng không
            cam kết dịch vụ luôn liên tục hay không có lỗi.
          </li>
          <li>
            Trong phạm vi pháp luật cho phép, {site.company} không chịu trách nhiệm cho các thiệt hại gián tiếp phát sinh
            từ việc sử dụng hoặc không thể sử dụng ứng dụng.
          </li>
        </ul>

        <h2>9. Chấm dứt</h2>
        <p>
          Bạn có thể ngừng sử dụng và xoá tài khoản bất cứ lúc nào tại Cài đặt → Vùng nguy hiểm → Xoá tài khoản. Khi
          tài khoản bị xoá, dữ liệu của bạn được xoá khỏi máy chủ theo{" "}
          <Link href="/privacy">Chính sách bảo mật</Link> và không thể khôi phục.
        </p>

        <h2>10. Thay đổi điều khoản</h2>
        <p>
          Chúng tôi có thể cập nhật điều khoản này. Ngày hiệu lực ở đầu trang sẽ được thay đổi, và thay đổi quan trọng
          sẽ được thông báo trong ứng dụng. Việc tiếp tục sử dụng sau khi điều khoản thay đổi đồng nghĩa với việc bạn
          chấp nhận điều khoản mới.
        </p>

        <h2>11. Luật áp dụng</h2>
        <p>
          Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp trước hết sẽ được giải quyết bằng thương
          lượng; nếu không thành, sẽ được đưa ra cơ quan có thẩm quyền tại Việt Nam.
        </p>

        <h2>12. Liên hệ</h2>
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
      </div>
    </article>
  );
}
