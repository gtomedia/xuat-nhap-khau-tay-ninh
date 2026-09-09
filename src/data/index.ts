// Chuyển link YouTube dạng watch/youtu.be sang dạng embed (bắt buộc để nhúng iframe)
export const getYoutubeEmbedUrl = (url: string) => {
  if (!url || url.includes("youtube.com/embed/")) return url;
  let videoId = "";
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

export const heroData = {
  title1: "HỘI NGHỊ",
  title2: "KẾT NỐI CHUỖI CUNG ỨNG",
  subtitle1: "HÀNG HÓA XUẤT NHẬP KHẨU, THƯƠNG MẠI ĐIỆN TỬ",
  subtitle2: "TỈNH TÂY NINH NĂM 2026",
  date: "Tây Ninh, ngày 05 tháng 9 năm 2026",
  image: "/images/hero-banner.png",
};

export const trailerData = {
  link: "https://www.youtube.com/watch?v=b7TtQs8ZbBs", // Link video YouTube của Recap, để trống "" nếu không có
  title:
    "Video Recap Hội nghị Kết nối chuỗi cung ứng hàng hóa xuất nhập khẩu và Thương mại điện tử tỉnh Tây Ninh năm 2026",
};

export const introData = {
  title: "GIỚI THIỆU TÂY NINH",
  desc: "Tây Ninh - Trung tâm kết nối chuỗi cung ứng và thương mại điện tử xuyên biên giới.",
  news: [
    {
      title: "Tìm hiểu về Tây Ninh",
      desc: "Tây Ninh là vùng đất trù phú của vùng Đông Nam Bộ, nơi đây là miền hội tụ giữa cảnh sắc thiên nhiên kỳ vĩ, văn hóa tâm linh đặc sắc và chiều sâu lịch sử. Với tổng diện tích 8.536,44 km², dân số 3.254.170 người, có 96 đơn vị hành chính cấp xã (82 xã, 14 phường), vùng đất này trải dài giữa những tuyến giao thương huyết mạch, tiếp giáp với TP. Hồ Chí Minh, Đồng Tháp, Đồng Nai, và giáp Vương quốc Campuchia qua những cửa khẩu quốc tế nhộn nhịp.",
      image:
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/1/1062784/289799822_1015995557.jpg",
      link: "https://dulich.tayninh.gov.vn/thong-tin/Thong-tin-chung-ve-tinh-Tay-Ninh-15.html",
    },
    {
      title:
        "Du lịch Tây Ninh: Ðiểm nhấn tăng trưởng, hướng đến phát triển bền vững",
      desc: "Tây Ninh đang nổi lên như là điểm đến hấp dẫn về du lịch sinh thái, du lịch về văn hoá, tâm linh, đóng góp tích cực cho sự phát triển kinh tế - xã hội của tỉnh.",
      image:
        "https://images.vietnamtourism.gov.vn/vn/images/2024/thang_1/2901.du_lich_tay_ninh.jpg",
      link: "https://vietnamtourism.gov.vn/post/54482",
    },
    {
      title:
        "Tây Ninh đẩy mạnh thu hút đầu tư phát triển hạ tầng thương mại, logistics hiện đại",
      desc: "Nhằm nâng cao năng lực cạnh tranh và mở rộng không gian phát triển kinh tế, tỉnh Tây Ninh tập trung thu hút đầu tư phát triển hạ tầng thương mại, logistics theo hướng hiện đại, đồng bộ.",
      image:
        "https://imghappyvietnam.vnanet.vn/MediaUpload/Medium/2026/07/22/104708-vna_potal_tay_ninh_day_manh_thu_hut_dau_tu_phat_trien_ha_tang_thuong_mai_logistics_hien_dai_8896909.jpg",
      link: "https://happyvietnam.vnanet.vn/tay-ninh-day-manh-thu-hut-dau-tu-phat-trien-ha-tang-thuong-mai-logistics-hien-dai/60119.html",
    },
    {
      title: "Tây Ninh đặt mục tiêu tăng trưởng xuất khẩu từ 15-16% mỗi năm",
      desc: "Với lợi thế cửa ngõ kết nối Việt Nam với Campuchia và các nước ASEAN, Tây Ninh tiếp tục phát huy tiềm năng kinh tế biên mậu, thúc đẩy thương mại biên giới trở thành động lực tăng trưởng quan trọng.",
      image:
        "https://media.vietnamplus.vn/images/c14f6479e83e315b4cf3a2906cc6a51eb9d6ced238aab0d68b7df356f0b1062ac4fdd44f6a814fc382fe145e64bf577f9688f8384215be0238917c33e4ac81e321e1616ff4a61d0a25e6c6407b9b0b1d3d598da530926ad440618e46f5418c5021e0fc433d783cb75816347765d085e506058199cbc218f8e19c57d4f3e72619e302fa28abdf71aa7a43283315b85f70/ttxvn-khai-truong-cua-hang-mien-thue-the-ky-vang-tai-cua-khau-quoc-te-moc-bai-tay-ninh-8533814.jpg.webp",
      link: "https://www.vietnamplus.vn/tay-ninh-dat-muc-tieu-tang-truong-xuat-khau-tu-15-16-moi-nam-post1112223.vnp",
    },
  ],
};

export const aboutData = {
  tagline: "Về Sự Kiện",
  title: "VỀ HỘI NGHỊ",
  desc1:
    "Hội nghị kết nối chuỗi cung ứng hàng hóa xuất nhập khẩu và thương mại điện tử tỉnh Tây Ninh nhằm thúc đẩy kết nối cung cầu, tăng cường liên kết giữa các chủ thể trong chuỗi cung ứng, góp phần phát triển xuất nhập khẩu, logistics và thương mại điện tử xuyên biên giới, nâng cao năng lực cạnh tranh của doanh nghiệp trong bối cảnh hội nhập.",
  desc2:
    "Hội nghị quy tụ đại diện cơ quan quản lý, hiệp hội, doanh nghiệp logistics, xuất nhập khẩu và các nền tảng thương mại điện tử trong và ngoài nước. Đây là diễn đàn thảo luận, cập nhật xu hướng, giới thiệu chính sách mới và mở rộng cơ hội hợp tác, đầu tư, phát triển chuỗi cung ứng bền vững.",
  highlights: [
    { icon: "Calendar", value: "5.9.2026", label: "Ngày diễn ra" },
    {
      icon: "Map",
      value: "Hội trường Thống Nhất",
      label: "UBND tỉnh Tây Ninh",
    },
    { icon: "Users", value: "700+", label: "Đại biểu" },
    {
      icon: "Building",
      value: "300+",
      label: "Doanh nghiệp địa phương, trong nước và quốc tế",
    },
  ],
  videoUrl: "https://www.youtube.com/watch?v=WzO3cW5UDJg", // Link video YouTube của About / Video tư liệu
  isVideoFile: false,
};

export const benefitsData = {
  tagline: "Vì sao nên tham gia?",
  title: "QUYỀN LỢI ĐẠI BIỂU",
  desc: "Hội nghị mở ra cơ hội kết nối, hợp tác và xúc tiến đầu tư cho các doanh nghiệp, nhà đầu tư và tổ chức, góp phần phát triển chuỗi cung ứng, logistics và thương mại điện tử tại tỉnh Tây Ninh.",
  items: [
    {
      icon: "Globe",
      title: "Mở rộng thị trường quốc tế",
      desc: "Tiếp cận trực tiếp các nhà nhập khẩu, nhà phân phối và đối tác quốc tế từ EU, Bắc Mỹ và Đông Nam Á.",
    },
    {
      icon: "TrendingUp",
      title: "Cập nhật xu hướng TMĐT",
      desc: "Nắm bắt các xu hướng thương mại điện tử xuyên biên giới mới nhất từ chuyên gia hàng đầu.",
    },
    {
      icon: "Handshake",
      title: "Kết nối giao thương B2B",
      desc: "Tham gia các phiên B2B chuyên sâu, tìm kiếm đối tác vận tải và logistics tối ưu.",
    },
    {
      icon: "FileText",
      title: "Lắng nghe chính sách mới",
      desc: "Cập nhật các chính sách ưu đãi đầu tư và hỗ trợ xuất nhập khẩu từ chính quyền địa phương.",
    },
  ],
};

export const potentialData = [
  {
    id: 1,
    title: "Cảng Biển & Logistics",
    subtitle:
      "Hệ thống hạ tầng giao thông kết nối đồng bộ với các trung tâm cảng biển lớn và ICD khu vực.",
    img: "/images/industries/cangbien.jpg",
    link: "", // Điền URL nếu muốn card này bấm vào được
  },
  {
    id: 2,
    title: "Công Nghiệp",
    subtitle:
      "Các khu công nghiệp hiện đại, thu hút mạnh mẽ vốn FDI và sản xuất công nghệ cao.",
    img: "/images/industries/congnghiep.jpg",
    link: "",
  },
  {
    id: 3,
    title: "Du Lịch",
    subtitle:
      "Phát triển du lịch sinh thái, văn hóa và tâm linh gắn với các danh thắng nổi tiếng.",
    img: "/images/industries/dulich.png",
    link: "",
  },
  {
    id: 4,
    title: "Nông Nghiệp Công Nghệ Cao",
    subtitle:
      "Ứng dụng khoa học kỹ thuật nâng cao giá trị và chất lượng nông sản xuất khẩu.",
    img: "/images/industries/nongnghiep.jpg",
    link: "",
  },
  {
    id: 5,
    title: "Năng Lượng Tái Tạo",
    subtitle:
      "Tiên phong phát triển dự án năng lượng mặt trời, hướng tới nền kinh tế xanh.",
    img: "/images/industries/nangluongmattroi.jpg",
    link: "",
  },
  {
    id: 6,
    title: "Thương Mại Điện Tử",
    subtitle:
      "Thúc đẩy chuyển đổi số, đưa sản phẩm địa phương vươn tầm quốc tế qua các nền tảng số.",
    img: "/images/industries/thuongmai.jpg",
    link: "",
  },
];

export interface TimelineItem {
  time: string;
  duration?: string;
  title: string;
  desc?: string;
  performer?: string;
  part?: string;
  topics?: string[];
}

export const timelineData: TimelineItem[] = [
  // ==========================================
  // I. BUỔI SÁNG NGÀY 05/9/2026 (07:30 - 11:30)
  // Địa điểm: Hội trường Thống Nhất, UBND Tỉnh Tây Ninh, 61 Nguyễn Huệ, phường Long An, tỉnh Tây Ninh
  // ==========================================
  {
    time: "07:30 - 08:00",
    duration: "30 phút",
    part: "Sáng 05/9",
    title: "Đăng ký và đón tiếp đại biểu, tham quan trưng bày sản phẩm đặc trưng, sản phẩm xuất khẩu của Tỉnh",
    performer: "Sở Công Thương",
  },
  {
    time: "08:00 - 08:35",
    duration: "35 phút",
    part: "Sáng 05/9",
    title: "Khai mạc Hội nghị & Trình chiếu clip giới thiệu",
    desc: "Nghi thức khai mạc trọng thể, phát biểu chỉ đạo của Lãnh đạo Bộ Công Thương và Lãnh đạo UBND Tỉnh",
    topics: [
      "Tuyên bố lý do, giới thiệu đại biểu — MC",
      "Phát biểu khai mạc của Lãnh đạo Bộ Công Thương — Bà Phan Thị Thắng, Thứ trưởng Bộ Công Thương",
      "Phát biểu chào mừng của Tỉnh — Ông Lê Văn Hẳn, Phó Bí thư Tỉnh ủy - Chủ tịch UBND tỉnh",
      "Trình chiếu clip Tây Ninh – Kết nối chuỗi cung ứng hàng hóa xuất nhập khẩu, thương mại điện tử — Sở Công Thương",
    ],
  },
  {
    time: "08:35 - 09:25",
    duration: "50 phút",
    part: "Sáng 05/9",
    title: "Phiên 1: Nâng tầm chất lượng, thương hiệu Việt",
    desc: "06 bài tham luận chuyên đề về chiến lược toàn cầu, logistics, nông sản và thương hiệu (08 phút / bài)",
    topics: [
      "Doanh nghiệp Tây Ninh – Chiến lược vươn ra toàn cầu — Bà Ninh Thị Bích Thùy, Phó Chủ tịch Thường trực Hiệp hội Doanh nghiệp tỉnh Tây Ninh",
      "Tối ưu hóa logistics, thúc đẩy thương mại xuyên biên giới — Ông Võ Quốc Huy, Chủ tịch HĐQT Cảng Quốc tế Long An",
      "Thương hiệu tinh bột mì Việt Nam trên thị trường quốc tế — Ông Lê Hữu Hùng, PCT Hiệp hội sắn Việt Nam - Chủ tịch Hiệp hội sản xuất tinh bột mì tỉnh Tây Ninh",
      "Chuỗi liên kết chăn nuôi gia cầm tiêu chuẩn châu Âu — Ông Vũ Mạnh Hùng, Chủ tịch HĐQT Tập đoàn Hùng Nhơn",
      "Nâng tầm vị thế nông sản Việt — Ông Võ Xuân Hoà, Phó Giám đốc Công ty TNHH Huy Long An – Mỹ Bình",
      "Nâng tầm sản phẩm thủ công mỹ nghệ – Kết nối giá trị địa phương với thị trường toàn cầu — Ông Võ Thanh Tú, Giám đốc Công ty TNHH MTV Hoà Thành Long An",
    ],
  },
  {
    time: "09:30 - 09:50",
    duration: "20 phút",
    part: "Sáng 05/9",
    title: "Giải lao và Tham quan gian hàng triển lãm",
    performer: "Các đại biểu",
  },
  {
    time: "09:50 - 11:00",
    duration: "70 phút",
    part: "Sáng 05/9",
    title: "Phiên 2: Tham gia sâu chuỗi giá trị toàn cầu",
    desc: "08 bài tham luận chuyên sâu định hướng thị trường quốc tế, phòng vệ thương mại, tiêu chuẩn xanh ESG và kênh phân phối (08 phút / bài)",
    topics: [
      "Bức tranh xuất khẩu, cơ hội đan xen thách thức trong bối cảnh biến động toàn cầu — Ông Tô Ngọc Sơn, Phó Vụ trưởng, Vụ Phát triển thị trường nước ngoài, Bộ Công Thương",
      "Phòng vệ thương mại trong bối cảnh mới — Bà Trần Đỗ Quyên, Phó Cục trưởng Cục Phòng vệ thương mại, Bộ Công Thương",
      "Đánh giá và dự báo thị trường Hoa Kỳ trước những diễn biến chính sách thuế quan mới — Ông Đỗ Ngọc Hưng, Tham tán thương mại Việt Nam tại Hoa Kỳ",
      "Dòng vốn đầu tư châu Âu và xây dựng chuỗi cung ứng bền vững tại Việt Nam — Ông Johan van den Ban, Tổng Giám đốc Tập đoàn De Heus Việt Nam & châu Á (Hà Lan)",
      "Nhu cầu từ thị trường Trung Quốc và cơ hội thúc đẩy nâng cấp chuỗi cung ứng hàng hóa và hợp tác sản xuất công nghệ cao — Ông Zhu Xiang Bin, Phó Tổng giám đốc Tập đoàn Xinde, Hội trưởng Thương hội Kim Hoa Chiết Giang, Trung Quốc",
      "Biến bất ổn thành cơ hội: Từ Tây Ninh đến UAE và thị trường Trung Đông — Ông Trần Tấn Sỹ, Tổng Giám đốc Vietnam Food Pavilion, Tập đoàn Lootah (UAE)",
      "Đổi mới chiến lược thu mua và khuyến nghị tiếp cận hiệu quả các kênh phân phối quốc tế — Ông Paul Lê, Phó Chủ tịch phụ trách xúc tiến thương mại, Tập đoàn Central Retail",
      "Giải pháp cho doanh nghiệp Việt Nam từng bước thích ứng với các tiêu chuẩn xanh, ESG — PGS. TS. Dương Minh Hải, Chuyên gia quốc tế, Đại học Quốc gia Singapore – NUS",
      "Q&A: Trao đổi, thảo luận và giải đáp — Các đại biểu",
    ],
  },
  {
    time: "11:00 - 11:20",
    duration: "20 phút",
    part: "Sáng 05/9",
    title: "Lễ trao ghi nhớ hợp tác (MOU)",
    desc: "Lễ ký kết và trao 11 bản ghi nhớ hợp tác chiến lược giữa các cơ quan, hiệp hội và doanh nghiệp",
    topics: [
      "1. Sở Công Thương Tây Ninh – Phòng Thương mại Malaysia – Việt Nam (MVCC)",
      "2. Sở Công Thương Tây Ninh – Lootah Group (UAE)",
      "3. Sở Công Thương Tây Ninh – Trung tâm Kinh doanh Việt Nam - Pakistan",
      "4. Sở Công Thương Tây Ninh – Hiệp hội Thương mại điện tử Việt Nam (VECOM)",
      "5. Sở Nông nghiệp và Môi trường Tây Ninh – Hiệp hội Xúc tiến Hợp tác Kinh tế Việt Nam - Nhật Bản (VJECPA)",
      "6. Hiệp hội Doanh nghiệp tỉnh Tây Ninh – Hiệp hội doanh nghiệp vừa và nhỏ Singapore",
      "7. Hiệp hội Doanh nghiệp tỉnh Tây Ninh – Phòng Thương mại & Công nghiệp Liverpool, New South Wales, Úc",
      "8. Hiệp hội Doanh nghiệp tỉnh Tây Ninh – Spinneys (UAE)",
      "9. Công ty TNHH Tân Nhiên – Công ty Cổ phần Se-So",
      "10. Công ty TNHH Hương Việt Xưa – Công ty Vipro Japan",
      "11. Công ty TNHH Nông Nghiệp Xanh và Xanh – Công ty TNHH HUSK Việt Nam",
    ],
  },
  {
    time: "11:20 - 11:30",
    duration: "10 phút",
    part: "Sáng 05/9",
    title: "Phát biểu bế mạc Hội nghị",
    performer: "Ông Nguyễn Hồng Thanh, Ủy viên Ban Thường vụ, Phó Chủ tịch Thường trực UBND tỉnh Tây Ninh",
  },
  {
    time: "11:30 - 13:30",
    duration: "120 phút",
    part: "Sáng 05/9",
    title: "Tiệc chiêu đãi (Lunch)",
    desc: "Tiệc trưa giao lưu thân mật chiêu đãi quý đại biểu và doanh nghiệp tham dự",
  },

  // ==========================================
  // II. BUỔI CHIỀU NGÀY 05/9/2026 (13:30 - 17:00)
  // ==========================================
  {
    time: "13:30 - 16:30",
    duration: "180 phút",
    part: "Chiều 05/9",
    title: "Kết nối giao thương B2B & Khảo sát thực tế tại địa bàn Tỉnh",
    desc: "Giao thương B2B tại Hội trường, 6 tuyến khảo sát doanh nghiệp và làm việc chuyên đề với Đoàn Thụy Điển",
    topics: [
      "Kết nối giao thương trực tiếp tại Hội trường – B2B",
      "Đồng thời 13h30 ngày 5/9 Đoàn Thụy Điển làm việc với Sở Công Thương, Ban Quản lý khu kinh tế về điện, đầu tư khu công nghiệp",
      "(1) Cảng quốc tế Long An tại số 68 đường tỉnh 830, ấp Vĩnh Hòa, xã Tân Tập .",
      "(2) Công ty cổ phần thực phẩm Richy miền Nam (sản xuất bánh kẹo) tại Đường số 7, KCN Trảng Bàng Phường An Tịnh, Trảng Bàng .",
      "(3) Công ty CP Chế biến hàng xuất khẩu Long An – Lafooco (sản xuất hạt điều và các loại hạt, sản phẩm sấy) tại số 81B QL62, Long An .",
      "(4) Công ty CP Thép TVP (sản xuất sắt thép) tại Số 400, Quốc lộ 1, Ấp Bến Lức 9, xã Bến Lức .",
      "(5) Mixue khảo sát Nông Trang Hải Âu (chanh tươi)",
      "(6) Khảo sát Đoàn của Wumart và Metro (cả ngày 5/9/2026)",
    ],
  },
  {
    time: "17:00",
    part: "Chiều 05/9",
    title: "Di chuyển từ Tây Ninh về Tp. Hồ Chí Minh",
    desc: "Đoàn kết thúc các hoạt động khảo sát và khởi hành về TP. Hồ Chí Minh",
  },

  // ==========================================
  // III. NGÀY 06/9/2026
  // ==========================================
  {
    time: "07:00 - 15:30",
    part: "Ngày 06/9",
    title: "Di chuyển và tham quan Khu Danh thắng Núi Bà Đen, Tây Ninh",
    performer: "Đoàn Bộ Công Thương và Đoàn Doanh nghiệp nước ngoài",
    desc: "Chương trình tham quan danh thắng, giao lưu văn hóa tại Khu Danh thắng Núi Bà Đen",
  },
  {
    time: "15:30",
    part: "Ngày 06/9",
    title: "Di chuyển từ Núi Bà Đen, Tây Ninh về Tp. Hồ Chí Minh (SECC)",
    performer: "Đoàn Bộ Công Thương và Đoàn Doanh nghiệp nước ngoài",
    desc: "Khởi hành từ Tây Ninh về Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC)",
  },
];

export interface Speaker {
  id: number;
  img: string;
  name: string;
  role: string;
  unit: string;
  topic: string;
  session?: string;
  duration?: string;
  hasPpt?: boolean;
}

export const speakersData: Speaker[] = [
  // Phiên 1: Nâng tầm chất lượng, thương hiệu Việt
  {
    id: 1,
    img: "/images/speakers/Ninh_Thi_Bich_Thuy.png",
    name: "Bà Ninh Thị Bích Thùy",
    role: "Phó Chủ tịch Thường trực",
    unit: "Hiệp hội Doanh nghiệp tỉnh Tây Ninh",
    topic: "Doanh nghiệp Tây Ninh – Chiến lược vươn ra toàn cầu",
    session: "Phiên 1",
    duration: "08 phút",
  },
  {
    id: 2,
    img: "/images/speakers/Vo_Quoc_Huy.png",
    name: "Ông Võ Quốc Huy",
    role: "Chủ tịch HĐQT",
    unit: "Cảng Quốc tế Long An",
    topic: "Tối ưu hóa logistics, thúc đẩy thương mại xuyên biên giới",
    session: "Phiên 1",
    duration: "08 phút",
    hasPpt: true,
  },
  {
    id: 3,
    img: "/images/speakers/Le_Huu_Hung.png",
    name: "Ông Lê Hữu Hùng",
    role: "PCT Hiệp hội sắn Việt Nam - Chủ tịch",
    unit: "Hiệp hội sản xuất tinh bột mì tỉnh Tây Ninh",
    topic: "Thương hiệu tinh bột mì Việt Nam trên thị trường quốc tế",
    session: "Phiên 1",
    duration: "08 phút",
  },
  {
    id: 4,
    img: "/images/speakers/Vu_Manh_Hung.png",
    name: "Ông Vũ Mạnh Hùng",
    role: "Chủ tịch HĐQT",
    unit: "Tập đoàn Hùng Nhơn",
    topic: "Chuỗi liên kết chăn nuôi gia cầm tiêu chuẩn châu Âu",
    session: "Phiên 1",
    duration: "08 phút",
  },
  {
    id: 5,
    img: "/images/speakers/Vo_Xuan_Hoa.png",
    name: "Ông Võ Xuân Hoà",
    role: "Phó Giám đốc",
    unit: "Công ty TNHH Huy Long An – Mỹ Bình",
    topic: "Nâng tầm vị thế nông sản Việt",
    session: "Phiên 1",
    duration: "08 phút",
    hasPpt: true,
  },
  {
    id: 6,
    img: "/images/speakers/Vo_Thanh_Tu.png",
    name: "Ông Võ Thanh Tú",
    role: "Giám đốc",
    unit: "Công ty TNHH MTV Hoà Thành Long An",
    topic:
      "Nâng tầm sản phẩm thủ công mỹ nghệ – Kết nối giá trị địa phương với thị trường toàn cầu",
    session: "Phiên 1",
    duration: "08 phút",
  },

  // Phiên 2: Tham gia sâu chuỗi giá trị toàn cầu
  {
    id: 7,
    img: "/images/speakers/To_Ngoc_Son.png",
    name: "Ông Tô Ngọc Sơn",
    role: "Phó Vụ trưởng, Vụ Phát triển thị trường nước ngoài",
    unit: "Bộ Công Thương",
    topic:
      "Bức tranh xuất khẩu, cơ hội đan xen thách thức trong bối cảnh biến động toàn cầu",
    session: "Phiên 2",
    duration: "08 phút",
    hasPpt: true,
  },
  {
    id: 8,
    img: "/images/speakers/Tran_Do_Quyen.png",
    name: "Bà Trần Đỗ Quyên",
    role: "Phó Cục trưởng Cục Phòng vệ thương mại",
    unit: "Bộ Công Thương",
    topic:
      "Phòng vệ thương mại trong bối cảnh mới",
    session: "Phiên 2",
    duration: "08 phút",
    hasPpt: true,
  },
  {
    id: 9,
    img: "/images/speakers/Do_Ngoc_Hung.png",
    name: "Ông Đỗ Ngọc Hưng",
    role: "Tham tán Thương mại Việt Nam tại Hoa Kỳ",
    unit: "Thương vụ Việt Nam tại Hoa Kỳ",
    topic:
      "Đánh giá và dự báo thị trường Hoa Kỳ trước những diễn biến chính sách thuế quan mới",
    session: "Phiên 2",
    duration: "08 phút",
  },
  {
    id: 10,
    img: "/images/speakers/Johan_Van_Den_Ban.png",
    name: "Ông Johan van den Ban",
    role: "Tổng Giám đốc",
    unit: "Tập đoàn De Heus Việt Nam & châu Á (Hà Lan)",
    topic:
      "Dòng vốn đầu tư châu Âu và xây dựng chuỗi cung ứng bền vững tại Việt Nam",
    session: "Phiên 2",
    duration: "08 phút",
    hasPpt: true,
  },
  {
    id: 11,
    img: "/images/speakers/Tran_Tan_Sy.png",
    name: "Ông Trần Tấn Sỹ",
    role: "Tổng Giám đốc",
    unit: "Vietnam Food Pavilion, Tập đoàn Lootah (UAE)",
    topic:
      "Biến bất ổn thành cơ hội: Từ Tây Ninh đến UAE và thị trường Trung Đông",
    session: "Phiên 2",
    duration: "08 phút",
    hasPpt: true,
  },
  {
    id: 12,
    img: "/images/speakers/Zhu_Xiang_Bin.png",
    name: "Ông Zhu Xiang Bin",
    role: "Phó Tổng Giám đốc Tập đoàn Xinde",
    unit: "Hội trưởng Thương hội Kim Hoa Chiết Giang (Trung Quốc)",
    topic:
      "Nhu cầu từ thị trường Trung Quốc và cơ hội thúc đẩy nâng cấp chuỗi cung ứng hàng hóa và hợp tác sản xuất công nghệ cao",
    session: "Phiên 2",
    duration: "08 phút",
    hasPpt: true,
  },
  {
    id: 13,
    img: "/images/speakers/Paul_Le.png",
    name: "Ông Paul Lê",
    role: "Phó Chủ tịch phụ trách xúc tiến thương mại",
    unit: "Tập đoàn Central Retail",
    topic:
      "Đổi mới chiến lược thu mua và khuyến nghị tiếp cận hiệu quả các kênh phân phối quốc tế",
    session: "Phiên 2",
    duration: "08 phút",
  },
  {
    id: 14,
    img: "/images/speakers/Duong_Minh_Hai.png",
    name: "PGS. TS. Dương Minh Hải",
    role: "Chuyên gia quốc tế",
    unit: "Đại học Quốc gia Singapore – NUS",
    topic:
      "Giải pháp cho doanh nghiệp Việt Nam từng bước thích ứng với các tiêu chuẩn xanh, ESG",
    session: "Phiên 2",
    duration: "08 phút",
    hasPpt: true,
  },

  // Lãnh đạo phát biểu & Chủ trì Hội nghị
  {
    id: 101,
    img: "/images/speakers/Phan_Thi_Thang.png",
    name: "Bà Phan Thị Thắng",
    role: "Thứ trưởng",
    unit: "Bộ Công Thương Việt Nam",
    topic: "Phát biểu khai mạc của Lãnh đạo Bộ Công Thương",
    session: "Lãnh đạo",
    duration: "05 phút",
  },
  {
    id: 102,
    img: "/images/speakers/Le_Van_Han.png",
    name: "Ông Lê Văn Hẳn",
    role: "Phó Bí thư Tỉnh ủy, Chủ tịch UBND tỉnh",
    unit: "Ủy ban Nhân dân tỉnh Tây Ninh",
    topic: "Phát biểu chào mừng của Tỉnh Tây Ninh",
    session: "Lãnh đạo",
    duration: "10 phút",
  },
  {
    id: 103,
    img: "/images/speakers/Nguyen_Hong_Thanh.png",
    name: "Ông Nguyễn Hồng Thanh",
    role: "Ủy viên Ban Thường vụ, Phó Chủ tịch Thường trực",
    unit: "Ủy ban Nhân dân tỉnh Tây Ninh",
    topic: "Phát biểu bế mạc Hội nghị",
    session: "Lãnh đạo",
    duration: "10 phút",
  },
];

export const galleryData = {
  tagline: "Khoảnh khắc sự kiện",
  title: "Hình ảnh hoạt động sự kiện",
  desc: "Những khoảnh khắc đáng nhớ, không gian trưng bày sản phẩm Tây Ninh và các lễ ký kết hợp tác quan trọng tại sự kiện.",
  photos: [
    {
      id: 1,
      src: "/images/events/dai_bieu_doanh_nghiep_chup_anh_luu_niem_tai_hoi_nghi.png",
      tag: "Đại biểu & Lãnh đạo",
      title: "Chụp ảnh lưu niệm toàn thể Lãnh đạo & Doanh nghiệp",
    },
    {
      id: 2,
      src: "/images/events/11_bien_ban_ghi_nho_hop_tac_duoc_ky_ket_giua_cac_co_quan_hiep_hoi_doanh_nghiep_tay_ninh_voi_cac_doi_tac_trong_va_ngoai_nuoc.png",
      tag: "Ký kết MOU",
      title: "Lễ ký kết 11 biên bản ghi nhớ hợp tác (MOU)",
    },
    {
      id: 3,
      src: "/images/events/tong_quan_hoi_nghi.png",
      tag: "Toàn cảnh Hội nghị",
      title: "Toàn cảnh không gian Hội nghị Kết nối 2026",
    },
    {
      id: 4,
      src: "/images/events/khong_gian_trien_lam.png",
      tag: "Không gian Trưng bày",
      title: "Không gian trưng bày sản phẩm xuất khẩu Tây Ninh",
    },
    {
      id: 5,
      src: "/images/events/doan_lanh_dao_tham_quan_cac_gian_hang.jpg",
      tag: "Tham quan Gian hàng",
      title: "Đoàn Lãnh đạo tham quan các gian hàng triển lãm",
    },
    {
      id: 6,
      src: "/images/events/lanh_dao_khao_sat_san_pham_gian_hang.jpg",
      tag: "Khảo sát Sản phẩm",
      title: "Lãnh đạo và đối tác quốc tế khảo sát gian hàng",
    },
    {
      id: 7,
      src: "/images/events/khong_gian_ket_noi_trung_bay_san_pham_tai_hoi_nghi.png",
      tag: "Không gian Trưng bày",
      title: "Không gian kết nối - trưng bày sản phẩm tại Hội nghị",
    },
    {
      id: 8,
      src: "/images/events/khach_quoc_te_tham_quan_trai_nghiem_san_pham_trung_bay.png",
      tag: "Khách quốc tế & Doanh nghiệp",
      title: "Khách quốc tế tham quan, tìm hiểu và trải nghiệm các sản phẩm được trưng bày tại Hội nghị",
    },
    {
      id: 9,
      src: "/images/events/khong_gian_trung_bay_thu_hut_dong_dao_dai_bieu_doanh_nghiep.png",
      tag: "Gian hàng & Kết nối",
      title: "Không gian trưng bày sản phẩm thu hút đông đảo đại biểu và doanh nghiệp tham quan, kết nối tại Hội nghị",
    },
    {
      id: 10,
      src: "/images/events/dai_bieu_khach_moi_luu_lai_khoanh_khac_dang_nho.png",
      tag: "Lưu niệm & Check-in",
      title: "Đại biểu, khách mời lưu lại những khoảnh khắc đáng nhớ tại Hội nghị",
    },
    {
      id: 11,
      src: "/images/events/quay_trai_cay_xuat_khau_tay_ninh.jpg",
      tag: "Gian hàng Nông sản",
      title: "Khu trưng bày trái cây xuất khẩu tiêu biểu Tây Ninh",
    },
    {
      id: 12,
      src: "/images/events/mang_cau_ba_den_tay_ninh.jpg",
      tag: "Đặc sản OCOP",
      title: "Mãng cầu Bà Đen Tây Ninh & nông sản OCOP",
    },
    {
      id: 13,
      src: "/images/events/thanh_long_ruot_do_tay_ninh.jpg",
      tag: "Trái cây Xuất khẩu",
      title: "Thanh long ruột đỏ xuất khẩu Tây Ninh",
    },
    {
      id: 14,
      src: "/images/events/chanh_khong_hat_xuat_khau.jpg",
      tag: "Nông sản Xuất khẩu",
      title: "Chanh không hạt & chanh vàng xuất khẩu",
    },
    {
      id: 15,
      src: "/images/events/gao_st25_hoang_yen_tay_ninh.jpg",
      tag: "Gạo Xuất khẩu",
      title: "Gạo sạch ST25 Hoàng Yến - Lúa Vàng Việt",
    },
    {
      id: 16,
      src: "/images/events/muoi_tom_gia_vi_tay_ninh.jpg",
      tag: "Gia vị Đặc sản",
      title: "Muối tôm Tây Ninh & các dòng nước sốt, gia vị",
    },
    {
      id: 17,
      src: "/images/events/trai_cay_say_gion_xuat_khau.jpg",
      tag: "Nông sản Chế biến",
      title: "Trái cây sấy giòn, mít sấy xuất khẩu",
    },
    {
      id: 18,
      src: "/images/events/yen_sao_tay_ninh_cao_cap.jpg",
      tag: "Yến sào Cao cấp",
      title: "Yến sào và tổ yến chưng Tây Ninh cao cấp",
    },
    {
      id: 19,
      src: "/images/events/dong_trung_ha_thao_tay_ninh.jpg",
      tag: "Dược liệu & Sức khỏe",
      title: "Đông trùng hạ thảo và trà dược liệu Tây Ninh",
    },
    {
      id: 20,
      src: "/images/events/trung_ga_sach_san_ha.jpg",
      tag: "Nông nghiệp Công nghệ cao",
      title: "Trứng gà sạch công nghệ cao San Hà",
    },
    {
      id: 21,
      src: "/images/events/nuoc_khoang_kiem_ion_life.jpg",
      tag: "Thực phẩm & Đồ uống",
      title: "Nước uống ion kiềm I-on Life thương hiệu quốc gia",
    },
    {
      id: 22,
      src: "/images/events/san_pham_toi_yeu_tay_ninh.jpg",
      tag: "Sản phẩm Đặc trưng",
      title: "Gian hàng đặc sản quà tặng Tôi Yêu Tây Ninh",
    },
    {
      id: 23,
      src: "/images/events/thep_tam_tvp_steel.jpg",
      tag: "Công nghiệp Thép",
      title: "Tôn thép tấm hợp kim mạ magie TVP Steel",
    },
    {
      id: 24,
      src: "/images/events/dau_nhot_cong_nghiep_vioil.jpg",
      tag: "Công nghiệp Phụ trợ",
      title: "Dầu nhớt động cơ và phụ trợ công nghiệp Vioil",
    },
    {
      id: 25,
      src: "/images/events/non_la_khan_ran_truyen_thong.jpg",
      tag: "Làng nghề Truyền thống",
      title: "Nón lá và sản phẩm thủ công truyền thống Huy Long An",
    },
    {
      id: 26,
      src: "/images/events/may_tre_dan_my_nghe_xuat_khau.jpg",
      tag: "Thủ công Mỹ nghệ",
      title: "Thủ công mỹ nghệ mây tre đan xuất khẩu",
    },
    {
      id: 27,
      src: "/images/events/b2b_1.png",
      tag: "Kết nối B2B",
      title: "Phiên kết nối B2B quốc tế tại Networking Forum 2026",
    },
    {
      id: 28,
      src: "/images/events/b2b_2.png",
      tag: "Kết nối B2B",
      title: "Doanh nghiệp trong & ngoài nước trao đổi hợp tác trực tiếp",
    },
    {
      id: 29,
      src: "/images/events/b2b_3.png",
      tag: "Kết nối B2B",
      title: "Toàn cảnh không gian gặp gỡ kết nối B2B",
    },
    {
      id: 30,
      src: "/images/events/b2b_4.png",
      tag: "Kết nối B2B",
      title: "Doanh nghiệp Tây Ninh giao thương cùng đối tác quốc tế",
    },
  ],
};

export const statsData = [
  {
    icon: "Landmark",
    number: "4",
    label: "Cửa khẩu Quốc tế",
  },
  {
    icon: "Factory",
    number: "10+",
    label: "Khu Công Nghiệp",
  },
  {
    icon: "DollarSign",
    number: "15B+",
    label: "USD Kim ngạch XNK",
  },
  {
    icon: "Building2",
    number: "300+",
    label: "Doanh nghiệp địa phương\ntrong và ngoài nước",
  },
  {
    icon: "Users",
    number: "700+",
    label: "Đại biểu tham gia",
  },
];

export const documentData = {
  title: "TÀI LIỆU HỘI NGHỊ",
  desc: "Quét mã QR dưới đây để xem toàn bộ tài liệu, hồ sơ và nội dung chương trình của sự kiện.",
  qrImg: "/images/qr-tai-lieu.png",
  link: "https://drive.google.com/drive/folders/1xiCngZSJDUIQfPdnrjhTywbQFvJh7Idn?usp=sharing",
};

export const footerData = {
  logoTitle: [
    "HỘI NGHỊ KẾT NỐI CHUỖI CUNG ỨNG",
    "HÀNG HÓA XUẤT NHẬP KHẨU, THƯƠNG MẠI ĐIỆN TỬ TỈNH TÂY NINH NĂM 2026",
  ],
  directors: ["Bộ Công Thương", "UBND tỉnh Tây Ninh"],
  implementers: ["Sở Công Thương tỉnh Tây Ninh"],
  location:
    "Hội trường Thống Nhất, số 61 Nguyễn Huệ, phường Long An, tỉnh Tây Ninh",
  locationMapUrl:
    "https://www.google.com/maps/place/UBND+T%E1%BB%89nh+T%C3%A2y+Ninh/@10.541237,106.4122555,332m/data=!3m1!1e3!4m14!1m7!3m6!1s0x310ab620e5209607:0x885223bd6e764bb7!2zVHJ1bmcgVMOibSBQaOG7pWMgVuG7pSBI4buZaSBuZ2jhu4sgTG9uZyBBbg!8m2!3d10.5411984!4d106.4129984!16s%2Fg%2F11cp5s8r5h!3m5!1s0x310ab6218fffffff:0x680093c4537ba988!8m2!3d10.5413431!4d106.4138736!16s%2Fg%2F1wt3kvw3?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
  contacts: [
    { label: "Cơ quan ngoại giao", text: "Thái Hòa", phone: "0918.128.365" },
    { label: "Khu công nghiệp", text: "Quốc Tuấn", phone: "0949.819.964" },
    { label: "Sở Công Thương", text: "Thúy Duy", phone: "0979.972.528" },
    { label: "Sở Tài chính", text: "Tường Oanh", phone: "0325.492.768" },
  ],
};
