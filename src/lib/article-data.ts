export interface WineArticle {
  slug: string;
  title: string;
  vietnameseTitle: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishedTime: string;
  modifiedTime: string;
  readTime: string;
  category: string;
  tags: string[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const WINE_ARTICLES: WineArticle[] = [
  {
    slug: "cach-phan-biet-ruou-vang-chinh-hang-chuan-sommelier",
    title: "Bí Quyết Phân Biệt Rượu Vang Nhập Khẩu Thật - Giả Chuẩn Sommelier",
    vietnameseTitle: "Hướng Dẫn Phân Biệt Rượu Vang Thật Giả Chi Tiết Nhất",
    excerpt:
      "Chuyên gia Sommelier Rượu Vang Hè hướng dẫn 6 bước kiểm tra tem phụ hải quan, nút bần, đáy chai và màu sắc giúp bạn luôn chọn được chai vang chính hãng 100%.",
    author: "Trần Minh Hải",
    authorRole: "Senior Sommelier tại Rượu Vang Hè",
    publishedTime: "2026-01-15T08:00:00+07:00",
    modifiedTime: "2026-03-20T10:30:00+07:00",
    readTime: "6 phút đọc",
    category: "Kiến Thức Rượu Vang",
    tags: ["phân biệt rượu vang", "rượu vang chính hãng", "kiến thức vang", "sommelier"],
    content: [
      {
        heading: "1. Kiểm tra tem nhập khẩu hải quan và tem điện tử QR code",
        paragraphs: [
          "Mọi chai rượu vang nhập khẩu chính ngạch tại Việt Nam bắt buộc phải dán tem nhập khẩu của Tổng cục Hải quan trên phần cổ chai hoặc nắp chai. Tem chuẩn có hoa văn phản quang sắc nét, không bị bong tróc hay chắp vá.",
          "Tại Rượu Vang Hè, mỗi sản phẩm đều tích hợp mã QR điện tử truy xuất trực tiếp nguồn gốc, thông tin lô hàng từ nhà sản xuất và giấy chứng nhận kiểm dịch an toàn thực phẩm.",
        ],
      },
      {
        heading: "2. Quan sát mức rượu và màu sắc trong chai",
        paragraphs: [
          "Rượu vang ngoại cùng một hãng sản xuất luôn có mức rượu đồng đều tuyệt đối trong từng chai do đóng chai hoàn toàn bằng dây chuyền cơ khí tự động hiện đại. Nếu một kiện hàng có các chai vơi đầy bất thường, bạn cần hết sức cảnh giác.",
          "Màu sắc của vang thật phải trong trẻo, không bị vẩn đục hay cặn lơ lửng nhân tạo. Đối với vang đỏ lâu năm, lắng cặn tự nhiên (tartrate crystals) là bình thường, nhưng rượu phải có độ bóng và ánh viền đẹp mắt.",
        ],
      },
      {
        heading: "3. Nhận biết qua nắp thiếc và nút bần (Cork)",
        paragraphs: [
          "Nắp thiếc của chai vang xịn luôn ôm sát mượt mà vào cổ chai, khi xoay có độ đàn hồi nhẹ. Nút bần của vang cao cấp thường in tên nhà sản xuất, năm thu hoạch (vintage) trùng khớp với nhãn chai bên ngoài.",
        ],
      },
      {
        heading: "4. Lời khuyên vàng: Chọn đơn vị phân phối có hầm rượu chuyên dụng",
        paragraphs: [
          "Rượu vang là sinh thể sống có thể biến chất nếu phơi dưới ánh đèn huỳnh quang hoặc nhiệt độ phòng trên 25°C. Do đó, việc mua vang tại các cửa hàng có hầm lưu trữ tiêu chuẩn 16°C như Rượu Vang Hè là bảo chứng an tâm nhất cho trải nghiệm thưởng thức của bạn.",
        ],
      },
    ],
  },
  {
    slug: "nhiet-do-phuc-vu-ruou-vang-chuan-quoc-te",
    title: "Nhiệt Độ Phục Vụ Rượu Vang Chuẩn Quốc Tế: Bí Quyết Đánh Thức Hương Vị",
    vietnameseTitle: "Nhiệt Độ Phục Vụ Rượu Vang Hoàn Hảo Cho Mọi Dòng Vang",
    excerpt:
      "Nhiệt độ thưởng thức quyết định đến 60% hương vị rượu vang. Tìm hiểu mức nhiệt tối ưu cho Vang Đỏ, Vang Trắng và Champagne theo bảng chuẩn thế giới.",
    author: "Lê Hoàng Yến",
    authorRole: "Chuyên Viên Đào Tạo Rượu Vang Hè",
    publishedTime: "2026-02-02T09:00:00+07:00",
    modifiedTime: "2026-03-22T14:15:00+07:00",
    readTime: "5 phút đọc",
    category: "Thưởng Thức Vang",
    tags: ["nhiệt độ phục vụ", "cách uống rượu vang", "bảo quản rượu vang"],
    content: [
      {
        heading: "Tại sao nhiệt độ lại ảnh hưởng sống còn đến vị vang?",
        paragraphs: [
          "Uống rượu vang quá ấm sẽ làm cồn bốc hơi mạnh lấn át hương hoa quả thanh lịch, khiến tannin cảm giác gắt và khô rát. Ngược lại, rượu quá lạnh sẽ khóa chặt mọi phân tử mùi hương, làm vị chua trở nên buốt nhức.",
        ],
      },
      {
        heading: "Bảng chuẩn nhiệt độ phục vụ cho từng loại rượu vang",
        paragraphs: [
          "Champagne & Vang nổ: 6°C - 8°C. Nhiệt độ thấp giúp giữ độ giòn tan của các hạt bọt khí liti và tôn lên độ tươi mới sảng khoái.",
          "Vang Trắng & Vang Hồng: 8°C - 12°C. Làm nổi bật hương cam quýt, hoa đào và độ khoáng chất đặc trưng.",
          "Vang Đỏ nhẹ & trung bình (Pinot Noir, Merlot): 14°C - 16°C.",
          "Vang Đỏ đậm đà (Cabernet Sauvignon, Primitivo, Syrah): 16°C - 18°C. Mức nhiệt này giúp tannin tan chảy êm ái trên vòm họng và bung tỏa tầng hương socola, mận đen.",
        ],
      },
    ],
  },
  {
    slug: "nghe-thuat-ket-hop-ruou-vang-va-am-thuc-viet-nam",
    title: "Nghệ Thuật Kết Hợp Rượu Vang Và Món Ăn Việt: Giao Thoa Đẳng Cấp",
    vietnameseTitle: "Phối Hợp Rượu Vang Với Ẩm Thực Việt Nam Tinh Tế",
    excerpt:
      "Khám phá công thức kết hợp rượu vang nhập khẩu cùng các món ăn truyền thống Việt Nam: Vang đỏ với bò nướng sả, Vang trắng với hải sản nướng mỡ hành.",
    author: "Trần Minh Hải",
    authorRole: "Senior Sommelier tại Rượu Vang Hè",
    publishedTime: "2026-02-18T11:00:00+07:00",
    modifiedTime: "2026-03-25T16:00:00+07:00",
    readTime: "7 phút đọc",
    category: "Văn Hóa Ẩm Thực",
    tags: ["kết hợp rượu vang và món ăn", "ẩm thực việt nam", "pairing rượu vang"],
    content: [
      {
        heading: "Quy tắc kinh điển: Cân bằng gia vị và độ đậm của tannin",
        paragraphs: [
          "Ẩm thực Việt Nam nổi tiếng với sự phong phú của các loại rau thơm tươi, nước mắm mặn mà và gia vị gừng, tiêu, sả. Khi kết hợp với rượu vang phương Tây, nguyên tắc tối thượng là rượu không được lấn át món ăn và vị cay nồng không làm gắt vị rượu.",
        ],
      },
      {
        heading: "Gợi ý những cặp đôi hoàn hảo trên bàn tiệc gia đình",
        paragraphs: [
          "Vang trắng Sauvignon Blanc & Chả cá Lã Vọng: Hương thì là xanh mát cùng vị ngọt mềm của cá lăng tìm thấy người bạn đồng hành lý tưởng nơi độ chua thanh thoát và khoáng chất của Sauvignon Blanc.",
          "Vang đỏ Primitivo vùng Puglia & Bò sốt tiêu đen hoặc Vịt quay Bắc Kinh: Vị ngọt tự nhiên của nho Primitivo xoa dịu vị cay the của tiêu và dầu mỡ, mang lại cảm giác lưu luyến tuyệt vời.",
        ],
      },
    ],
  },
];
