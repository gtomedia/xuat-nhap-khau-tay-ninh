export const headerData = {
  logoImg: "/images/logo.png",
  logoText: "UBND TỈNH TÂY NINH",
};

export const heroData = {
  title1: "HỘI NGHỊ",
  title2: "KẾT NỐI CHUỖI CUNG ỨNG",
  subtitle1: "HÀNG HÓA XUẤT NHẬP KHẨU, THƯƠNG MẠI ĐIỆN TỬ",
  subtitle2: "TỈNH TÂY NINH NĂM 2026",
  date: "Tây Ninh, ngày 05 tháng 9 năm 2026",
  image: "/images/hero-banner.png",
};

export const introData = {
  title: "GIỚI THIỆU TÂY NINH",
  desc: "Tây Ninh - Điểm đến tiềm năng cho chuỗi cung ứng xuất nhập khẩu và thương mại điện tử xuyên biên giới.",
  details: [
    "Tây Ninh có vị trí chiến lược, là cửa ngõ giao thương quan trọng giữa Việt Nam và Campuchia, cũng như các nước trong khu vực ASEAN.",
    "Với hệ thống hạ tầng giao thông kết nối liên vùng ngày càng hoàn thiện, Tây Ninh đang trở thành trung tâm logistics và trung chuyển hàng hóa sôi động.",
    "Tỉnh đặc biệt chú trọng phát triển thương mại điện tử xuyên biên giới, kiến tạo môi trường kinh doanh thuận lợi cho các doanh nghiệp xuất nhập khẩu vươn tầm quốc tế.",
    "Sự kiện lần này là cơ hội vàng để các nhà đầu tư, doanh nghiệp giao lưu, tìm hiểu tiềm năng, chính sách ưu đãi và mở rộng mạng lưới đối tác chiến lược tại Tây Ninh."
  ],
};

export const aboutData = {
  tagline: "Về Sự Kiện",
  title: "VỀ HỘI NGHỊ",
  desc1:
    "Hội nghị kết nối chuỗi cung ứng hàng hóa xuất nhập khẩu và thương mại điện tử tỉnh Tây Ninh là sự kiện trọng điểm nhằm thúc đẩy giao thương, tháo gỡ khó khăn trong logistics và phát triển kinh tế số tại khu vực biên giới.",
  desc2:
    "Sự kiện quy tụ các cơ quan ban ngành, nền tảng thương mại điện tử hàng đầu, các doanh nghiệp logistics và xuất nhập khẩu. Đây là cơ hội để thiết lập mạng lưới đối tác chiến lược, chia sẻ giải pháp tối ưu hóa vận tải và cập nhật xu hướng thương mại điện tử xuyên biên giới.",
  highlights: [
    { icon: "Calendar", text: "Ngày 5.9.2026" },
    { icon: "Map", text: "Hội trường Thống nhất, UBND tỉnh Tây Ninh" },
    { icon: "Users", text: "700+ Đại biểu" },
    {
      icon: "Building",
      text: "300+ Doanh nghiệp địa phương, trong nước và quốc tế",
    },
  ],
  videoUrl:
    "https://www.youtube.com/embed/wyBRq0TLiqc?autoplay=1&mute=1&loop=1&playlist=wyBRq0TLiqc&controls=0&modestbranding=1",
  isVideoFile: false,
};

export const potentialData = [
  {
    id: 1,
    title: "Cảng Biển & Logistics",
    subtitle: "Hệ thống hạ tầng giao thông kết nối đồng bộ với các trung tâm cảng biển lớn và ICD khu vực.",
    img: "/images/industries/cangbien.jpg",
  },
  {
    id: 2,
    title: "Công Nghiệp",
    subtitle: "Các khu công nghiệp hiện đại, thu hút mạnh mẽ vốn FDI và sản xuất công nghệ cao.",
    img: "/images/industries/congnghiep.jpg",
  },
  {
    id: 3,
    title: "Du Lịch",
    subtitle: "Phát triển du lịch sinh thái, văn hóa và tâm linh gắn với các danh thắng nổi tiếng.",
    img: "/images/industries/dulich.png",
  },
  {
    id: 4,
    title: "Nông Nghiệp Công Nghệ Cao",
    subtitle: "Ứng dụng khoa học kỹ thuật nâng cao giá trị và chất lượng nông sản xuất khẩu.",
    img: "/images/industries/nongnghiep.jpg",
  },
  {
    id: 5,
    title: "Năng Lượng Tái Tạo",
    subtitle: "Tiên phong phát triển dự án năng lượng mặt trời, hướng tới nền kinh tế xanh.",
    img: "/images/industries/nangluongmattroi.jpg",
  },
  {
    id: 6,
    title: "Thương Mại Điện Tử",
    subtitle: "Thúc đẩy chuyển đổi số, đưa sản phẩm địa phương vươn tầm quốc tế qua các nền tảng số.",
    img: "/images/industries/thuongmai.jpg",
  },
];


export interface TimelineSubItem {
  time: string;
  title: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  desc?: string;
  topics?: string[];
  subItems?: TimelineSubItem[];
}

export const timelineData: TimelineItem[] = [
  {
    time: "07:30 - 08:00",
    title: "ĐÓN TIẾP ĐẠI BIỂU",
  },
  {
    time: "08:00 - 08:10",
    title: "TUYÊN BỐ LÝ DO, GIỚI THIỆU ĐẠI BIỂU",
  },
  {
    time: "08:10 - 08:30",
    title: "PHÁT BIỂU KHAI MẠC & CHÀO MỪNG",
    subItems: [
      {
        time: "08:10 - 08:20",
        title: "PHÁT BIỂU KHAI MẠC",
      },
      {
        time: "08:20 - 08:30",
        title: "PHÁT BIỂU CHÀO MỪNG",
      },
    ]
  },
  {
    time: "08:30 - 08:40",
    title: "CHIẾU VIDEO CLIP",
  },
  {
    time: "08:40 - 11:00",
    title: "CÁC PHIÊN THẢO LUẬN",
    subItems: [
      {
        time: "08:40 - 09:20",
        title: "PHIÊN 1: TIỀM NĂNG, CƠ HỘI KẾT NỐI HÀNG HÓA, MỞ RỘNG THỊ TRƯỜNG",
      },
      {
        time: "09:20 - 11:00",
        title: "PHIÊN 2: KẾT NỐI CHUỖI CUNG ỨNG HÀNG HÓA QUỐC TẾ",
      },
    ]
  },
  {
    time: "11:00 - 11:10",
    title: "KÝ KẾT GHI NHỚ GIỮA CÁC DOANH NGHIỆP",
  },
  {
    time: "11:10 - 11:30",
    title: "PHÁT BIỂU BẾ MẠC HỘI NGHỊ",
  },
  {
    time: "11:30 - 13:30",
    title: "TIỆC CHIÊU ĐÃI",
  },
  {
    time: "13:30 - 16:30",
    title: "KẾT NỐI GIAO THƯƠNG - KHẢO SÁT DOANH NGHIỆP",
  },
];

export const speakersData = [
  {
    id: 1,
    img: "/images/speakers/speaker-1.png",
    name: "Ông Lê N. Hoàng A",
    role: "Nhà Tham tán Thương mại Quốc tế",
    topic:
      "Kinh nghiệm mở rộng thị trường xuất khẩu nông sản chủ lực sang khu vực EU và Bắc Mỹ thông qua các hiệp định thương mại tự do (FTA).",
  },
  {
    id: 2,
    img: "/images/speakers/speaker-2.png",
    name: "Bà Trần L. Quỳnh B",
    role: "Nhà Tham tán Thương mại Quốc tế",
    topic:
      "Đẩy mạnh chuyển đổi số trong quy trình thông quan hàng hóa tự động và quản lý rủi ro xuyên biên giới.",
  },
  {
    id: 3,
    img: "/images/speakers/speaker-1.png",
    name: "Ông Phạm Quốc C",
    role: "Nhà Tham tán Thương mại Quốc tế",
    topic:
      "Tiêu chuẩn xanh và phát triển bền vững: Yêu cầu bắt buộc và cơ hội đối với hàng hóa xuất khẩu vào thị trường quốc tế.",
  },
  {
    id: 4,
    img: "/images/speakers/speaker-2.png",
    name: "Bà Nguyễn T. Mai D",
    role: "Chuyên gia Logistics & Chuỗi cung ứng",
    topic:
      "Tối ưu hóa chi phí vận chuyển hàng hóa xuất nhập khẩu thông qua giải pháp kết nối đa phương thức.",
  },
  {
    id: 5,
    img: "/images/speakers/speaker-1.png",
    name: "Ông David Smith",
    role: "Chuyên gia Thương mại Điện tử",
    topic:
      "Chiến lược đưa sản phẩm địa phương lên sàn thương mại điện tử quốc tế (Amazon, Alibaba).",
  },
  {
    id: 6,
    img: "/images/speakers/speaker-2.png",
    name: "Bà Lê P. Ngọc E",
    role: "Chuyên gia Thu hút Đầu tư",
    topic:
      "Cơ hội thu hút vốn đầu tư trực tiếp nước ngoài (FDI) vào các ngành công nghiệp phụ trợ tại Tây Ninh.",
  },
];

export const galleryData = {
  tagline: "Khoảnh khắc sự kiện",
  title: "Hình ảnh hoạt động sự kiện",
  desc: "Những khoảnh khắc đáng nhớ, không gian trưng bày sản phẩm Tây Ninh và các lễ ký kết hợp tác quan trọng tại sự kiện.",
  driveLink: "https://drive.google.com",
  photos: [
    {
      src: "/images/events/event-large.png",
      alt: "Lễ ký kết hợp tác",
      span: "large",
    },
    {
      src: "/images/events/event-small-1.png",
      alt: "Tham quan sản phẩm",
      span: "small",
    },
    {
      src: "/images/events/event-small-2.png",
      alt: "Kết nối giao thương",
      span: "small",
    },
  ],
};

export const partnersData = [
  { id: 1, src: "/images/partners/partner-logo-1.png", alt: "Đối tác 1" },
  { id: 2, src: "/images/partners/partner-logo-2.png", alt: "Đối tác 2" },
  { id: 3, src: "/images/partners/partner-logo-3.png", alt: "Đối tác 3" },
  { id: 4, src: "/images/partners/partner-logo-4.png", alt: "Đối tác 4" },
  { id: 5, src: "/images/partners/partner-logo-5.png", alt: "Đối tác 5" },
  { id: 6, src: "/images/partners/partner-logo-6.png", alt: "Đối tác 6" },
];

export const statsData = [
  {
    number: "3",
    label: "Cửa khẩu Quốc tế",
  },
  {
    number: "10+",
    label: "Khu Công Nghiệp",
  },
  {
    number: "15B+",
    label: "USD Kim ngạch XNK",
  },
  {
    number: "300+",
    label: "Doanh nghiệp địa phương, trong và ngoài nước",
  },
  {
    number: "700+",
    label: "Đại biểu tham gia",
  },
];

export const footerData = {
  logoTitle: "HỘI NGHỊ KẾT NỐI CHUỖI CUNG ỨNG HÀNG HOÁ",
  logoImg: "/images/logo.png",
  directors: ["Bộ Công Thương", "UBND Tỉnh Tây Ninh"],
  implementers: ["Sở Công Thương tỉnh Tây Ninh"],
  location: "Hội trường Tỉnh uỷ Tây Ninh, Số 1, đường Phạm Tùng, TP Tây Ninh",
  contact: {
    phone: "0276 3811 111",
    email: "socongthuong@tayninh.gov.vn",
    website: "tayninh.gov.vn",
  },
};

export const benefitsData = {
  tagline: "Vì sao nên tham gia?",
  title: "QUYỀN LỢI ĐẠI BIỂU",
  desc: "Hội nghị mở ra nhiều cơ hội thiết thực cho các doanh nghiệp, nhà đầu tư và tổ chức quan tâm đến sự phát triển của chuỗi cung ứng Tây Ninh.",
  items: [
    {
      icon: "Globe",
      title: "Mở rộng thị trường quốc tế",
      desc: "Tiếp cận trực tiếp các nhà mua hàng và đối tác quốc tế từ EU, Bắc Mỹ và Đông Nam Á.",
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
  ]
};

export const mapData = {
  tagline: "Không gian sự kiện",
  title: "SƠ ĐỒ TRIỂN LÃM & B2B",
  desc: "Hội nghị được tổ chức quy mô với các phân khu chức năng riêng biệt nhằm tối ưu hóa trải nghiệm kết nối và giao thương của đại biểu.",
  zones: [
    { name: "Khu vực Hội trường chính", color: "bg-blue-600" },
    { name: "Không gian trưng bày SP Tây Ninh", color: "bg-emerald-600" },
    { name: "Khu vực Kết nối Giao thương (B2B)", color: "bg-amber-500" },
    { name: "Khu vực Tư vấn Chính sách", color: "bg-purple-600" },
  ]
};
