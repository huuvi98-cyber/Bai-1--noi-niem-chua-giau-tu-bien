export interface ArticleData {
  series: string;
  part: string;
  title: string;
  lts: string;
  sapo: string;
  sections: {
    id: string;
    heading: string;
    subheading?: string;
    paragraphs: string[];
    isBox?: boolean;
    boxTitle?: string;
    author?: string;
    highlightQuote?: {
      text: string;
      author: string;
    };
  }[];
  concludingBox: {
    title: string;
    paragraphs: string[];
  };
}

export const articleContent: ArticleData = {
  series: "Mạnh về biển, phát triển bền vững từ biển",
  part: "Bài 1",
  title: "Nỗi niềm chưa giàu từ biển",
  lts: "LTS: Trở thành quốc gia biển mạnh là mục tiêu chiến lược đối với sự phát triển và vị thế Việt Nam. Chuyển lợi thế biển thành sức mạnh quốc gia đòi hỏi năng lực tổ chức không gian phát triển, làm chủ công nghệ, kết nối thương mại toàn cầu. Trong đó, người dân và doanh nghiệp có điều kiện làm giàu bền vững; tài nguyên được gìn giữ, chủ quyền biển, đảo được bảo vệ vững chắc. Nghị quyết 20-NQ/TW về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh xác lập tầm nhìn ấy. Nghị quyết 218/NQ-CP ban hành Chương trình hành động của Chính phủ, cụ thể hóa tầm nhìn thành nhiệm vụ và giải pháp. Tuyến bài “Mạnh về biển, phát triển bền vững từ biển” (5 kỳ) tìm lời giải từ thực tiễn: nâng giá trị sản vật, hiện đại hóa nuôi biển, phát triển hệ sinh thái du lịch, công nghiệp, cảng biển, năng lượng sạch gắn với bảo tồn. Từ các địa phương ven biển đến triển vọng trung tâm hàng hải quốc tế tại TPHCM, tuyến bài gợi mở những lựa chọn về thể chế, quản trị để Việt Nam vươn tầm từ biển.",
  sapo: "Biển đem lại sinh kế và nhiều nguồn lực, nhưng giá trị gia tăng vẫn rơi rụng qua những cảng cá chật hẹp, vùng nuôi thiếu quy hoạch và dịch vụ hậu cần, chế biến chưa thành hệ sinh thái hấp dẫn.",
  sections: [
    {
      id: "bat-duoc-ca-lon-van-ngheo",
      heading: "Bắt được cá lớn, vẫn nghèo!",
      paragraphs: [
        "Tháng 8, mưa thu lất phất, tại khu D, cảng cá Tam Quan, phường Hoài Nhơn Bắc (Gia Lai), tàu của ông Nguyễn Văn Minh (45 tuổi) vừa kết thúc chuyến biển kéo dài hai tháng thuận buồm xuôi gió. Đội của ông Minh gồm bốn tàu hành nghề lưới vây thả chà tại vùng biển cách Trường Sa khoảng 50 hải lý, trong đó một tàu hậu cần vận chuyển hải sản vào bờ mỗi tháng, ba tàu khác ở lại nhiều tháng trên biển để giữ chà, bủa lưới.",
        "Ông Minh cho biết khoang cá đầy hay cạn chỉ là một phần của chuyện lời lỗ. Mỗi chuyến, tàu cần khoảng 6 tấn dầu, hơn 1.300 cây đá lạnh cùng thực phẩm; tiền thuê bạn tàu là 7 triệu đồng/người/tháng. Tổng chi phí khoảng 300-350 triệu đồng. Chi phí tăng cao khiến nhiều chuyến biển thất thu, dù biển được mùa. Khó khăn chưa dừng lại khi tàu nhìn thấy bờ. Luồng vào cảng Tam Quan hẹp, một số vị trí bồi lấp. Khi sóng gió, tàu phải thuê phương tiện lai dắt với giá 2-3 triệu đồng/lượt; khoản phát sinh có thể lên khoảng 5 triệu đồng mỗi tháng.",
        "Hoài Nhơn Bắc là một trong những vùng khai thác cá ngừ đại dương trọng điểm. Năm 2025, sản lượng cá ngừ đại dương ở đây đạt khoảng 7.566 tấn/năm, chiếm hơn 42% sản lượng cá ngừ đại dương cả nước. Tại cảng Tam Quan, thời điểm tháng 8-2026, giá cá ngừ đại dương bán cho thương lái khoảng 95.000-100.000 đồng/kg. Giá bán trực tiếp cho người tiêu dùng có thể lên tới 150.000 đồng/kg, còn sản phẩm phi lê tại nhà hàng dao động 300.000-500.000 đồng/kg. Nhìn vào các mốc giá này, có thể thấy dư địa chủ yếu nằm ở bảo quản, chế biến, phân phối và dịch vụ sau đánh bắt.",
        "Ở cảng cá Tam Quan, cuối mỗi mùa trăng cá ngừ (10-15 Âm lịch hàng tháng), tàu thuyền trở về tấp nập, mang theo những khoang cá đầy ắp. Từ sáng sớm, ngư dân tất bật bốc dỡ hải sản xuống tàu, tiếp nhiên liệu, đá lạnh, thực phẩm, chuẩn bị cho đợt ra khơi mới. Đủ các loại cá từ tàu xuống cảng, được các thương lái đón sẵn, ra giá, lên cân rồi nhanh chóng vận chuyển đi khắp nơi. Trao đổi với chúng tôi, ông Nguyễn Xuân Nhật, chủ doanh nghiệp thu mua cá ngừ tại cảng Tam Quan, phân tích cá cập cảng Tam Quan, nhưng nhiều công đoạn làm tăng giá trị, nhất là chế biến sâu và xuất khẩu, lại diễn ra ở nơi khác. Cá ngừ đại dương năm nay ở Tam Quan khá dồi dào. Có thời điểm, chỉ trong 7 ngày chúng tôi thu mua tới 110 tấn. Tuy nhiên, giá cá vẫn khó tăng do chi phí vận chuyển, logistics cao và chuỗi chế biến sâu ở xa, khiến ngư dân và doanh nghiệp đều chịu thiệt. Chưa kể, cá ngừ Việt Nam còn khó vào thị trường châu Âu vì rào cản “thẻ vàng” của Ủy ban Châu Âu (EC) từ năm 2017. Thị trường Mỹ cũng nhiều biến động, cùng với cước vận tải và thuế khiến doanh nghiệp khó nâng giá trị sản phẩm.",
        "Còn ông Nguyễn Đức Đạm, Phó trưởng Phòng Kinh tế, Hạ tầng và Đô thị phường Hoài Nhơn Bắc, thì trăn trở: Sản lượng cá vào Tam Quan rất lớn, khoảng 23.000 tấn/năm, nhưng do thiếu điều kiện hậu cần, chế biến sâu và xuất khẩu tại chỗ nên giá trị vẫn thấp. Trong khi đó, hải sản chủ yếu được thu mua rồi đưa đi nơi khác nên chi phí logistics tăng cao. Địa phương đã nhìn ra vấn đề và đang tìm giải pháp."
      ],
      highlightQuote: {
        text: "Sản lượng cá vào Tam Quan rất lớn, khoảng 23.000 tấn/năm, nhưng do thiếu điều kiện hậu cần, chế biến sâu và xuất khẩu tại chỗ nên giá trị vẫn thấp.",
        author: "Ông Nguyễn Đức Đạm, Phó trưởng Phòng Kinh tế, Hạ tầng và Đô thị phường Hoài Nhơn Bắc"
      }
    },
    {
      id: "hau-phuong-chua-theo-kip",
      heading: "“Hậu phương” chưa theo kịp",
      paragraphs: [
        "Từ thực tế “cá lớn, giá rẻ”, muốn thu hẹp khoảng cách giữa cá nguyên liệu và sản phẩm trên bàn ăn phải có hệ sinh thái hậu cần mạnh, đảm bảo các điều kiện về kho lạnh, nhà máy, luồng vận tải…",
        "Về việc này, ông Trần Văn Dẫn, Giám đốc cảng cá Tam Quan, cho biết Tam Quan là “hậu phương” của đội tàu xa bờ quy mô lớn bậc nhất miền Trung với khoảng 2.300 chiếc. Quy mô đội tàu lớn tạo sức ép lên luồng lạch, nơi neo đậu và không gian hậu cần. Luồng hẹp, chưa được nạo vét đồng bộ; khi thời tiết bất lợi, việc ra vào vừa tốn kém vừa mất an toàn. Trong khi đó, không gian phát triển và quỹ đất dành cho cảng đang bộc lộ nhiều bất cập. Nhiều dự án được định hướng nhằm hình thành trung tâm hậu cần thủy sản lớn tại Tam Quan chưa được triển khai vì thiếu vốn. Dự án cảng cá thông minh mở rộng ngoài khơi, với tổng vốn dự kiến 8.000-10.000 tỷ đồng, hiện tạm dừng để ưu tiên nguồn lực nâng cấp hai cảng cá hiện hữu. Khó khăn hơn là quỹ đất dành cho khu dịch vụ hậu cần cảng cá đang bị cắt xén. Theo quy hoạch được UBND tỉnh phê duyệt, khu hậu cần cảng cá Tam Quan rộng 15,2ha, nhưng đơn vị mới thuê, sử dụng khoảng 5ha. Phần diện tích còn lại đã được bố trí cho một số doanh nghiệp tư nhân thuê 50 năm để xây dựng nhà máy chế biến thủy sản. “Đất bị thu hẹp thì tương lai lấy đâu ra không gian để cảng phát triển?” - ông Dẫn đặt vấn đề, đồng thời gợi ý rằng việc sử dụng quỹ đất cần theo tư duy dài hạn để phù hợp với tầm nhìn phát triển ngành thủy sản đến năm 2040-2050."
      ],
      highlightQuote: {
        text: "Đất bị thu hẹp thì tương lai lấy đâu ra không gian để cảng phát triển?",
        author: "Ông Trần Văn Dẫn, Giám đốc cảng cá Tam Quan"
      }
    },
    {
      id: "quy-hoach-qua-cham",
      heading: "Quy hoạch quá chậm",
      paragraphs: [
        "Thực tế tại cảng cá Tam Quan cho thấy hạ tầng đi sau quy mô đội tàu và sản lượng đánh bắt. Còn tại vùng biển tỉnh Phú Yên trước đây (nay thuộc tỉnh Đắk Lắk), nơi có tiềm năng lớn phát triển nuôi trồng thủy sản ven biển với những vùng vịnh, đầm kín gió như đầm Cù Mông, vịnh Xuân Đài và vịnh Vũng Rô, gặp phải những trở ngại khác.",
        "Đơn cử như tại phường Sông Cầu, địa phương sở hữu không gian mặt nước rộng lớn tại vịnh Xuân Đài. Tại đây, nghề nuôi tôm hùm bắt đầu phát triển tại từ năm 1996, dần tạo sinh kế cho gần 2.000 hộ. Hiện phường có gần 93.000 lồng nuôi thủy sản, trong đó 90% là tôm hùm, ước tính sản lượng đạt hơn 1.400 tấn/năm, doanh thu khoảng 1.000 tỷ đồng/năm. Thế nhưng, vùng nuôi thủy sản có doanh thu nghìn tỷ này đang đối mặt nhiều rủi ro về ô nhiễm, dịch bệnh và thiên tai; đồng thời đang chờ nền tảng căn bản nhất để phát triển dài hạn: quy hoạch chi tiết và giao mặt nước. Theo một lãnh đạo phường Sông Cầu, mật độ lồng nuôi lớn, người dân chủ yếu sử dụng bè gỗ, thức ăn tươi, trong khi đó hạ tầng mua bán, vật tư, thu gom rác và dịch vụ ven đầm, vịnh chưa đồng bộ. Chính sách chuyển đổi nghề cho hộ không đủ điều kiện giao mặt nước cũng chưa rõ.",
        "Từ năm 2017, tỉnh Phú Yên (trước đây) đã phê duyệt quy hoạch tổng thể phát triển thủy sản đến năm 2025, tầm nhìn 2030. Nhưng theo ông Lê Hữu Tình, Phó Giám đốc Công ty TNHH Thủy sản Đắc Lộc, đến nay việc quy hoạch vùng nuôi và giao mặt nước ở Sông Cầu chưa được triển khai thực chất. Phát triển quá nhanh, tự phát, trong khi nguồn giống tôm hùm tự nhiên ngày càng cạn kiệt đang đẩy thủ phủ tôm hùm lớn nhất cả nước vào thế khó. Việc giao mặt nước chưa ổn định khiến người nuôi khó đầu tư lâu dài, doanh nghiệp dè dặt với kế hoạch cần vốn lớn. Vì vậy theo ông Tình, quy hoạch phải tạo cơ sở pháp lý để người dân, doanh nghiệp yên tâm đầu tư và hình thành vùng nuôi tập trung, tham gia sâu vào chuỗi giá trị. Quy hoạch là nền tảng, nếu chưa làm được thì rất khó phát triển bài bản và bền vững.",
        "Tam Quan và Sông Cầu là hai lát cắt khác nhau, nhưng có chung một điểm: hoạt động sản xuất phát triển nhanh hơn hạ tầng, quy hoạch và hệ sinh thái dịch vụ hậu cần. Dù những gia đình như ông Minh ở Tam Quan vẫn kiên kỳ bám biển, hay những ngư dân ở vùng nuôi Cù Mông, Xuân Đài vẫn tiếp tục gắn bó với hàng chục ngàn lồng tôm hùm, nhưng ngày nào điểm nghẽn chuỗi giá trị chưa khơi thông, thì ước mơ làm giàu từ biển của họ vẫn còn rất chông chênh, xa vời."
      ]
    },
    {
      id: "lang-chai-500-nam",
      heading: "Làng chài 500 năm tuổi “thở dài”…",
      isBox: true,
      boxTitle: "Làng chài 500 năm tuổi “thở dài”…",
      paragraphs: [
        "Giữa đêm tối mịt mùng ở đầm Chuồn, ngư dân Nguyễn Văn Hóa lọ mọ thả lưới dưới ánh đèn pin để mưu sinh. Ông Hóa cũng như bao ngư dân ở đây ngoài chịu thương chịu khó còn am hiểu thủy triều, con nước, tập tính từng loài cá, tôm, đồng thời biết nhìn gió, đoán trời. Trước đây, mỗi đêm vợ chồng ông Hóa đi đánh bắt kiếm được 500.000 - 600.000 đồng, có đêm trúng mánh được cả triệu. Nhưng vài năm trở lại đây, có khi vất vả đến rạng sáng cũng chỉ kiếm được đôi trăm.",
        "Làng Chuồn (phường Mỹ Thượng, TP Huế) nằm nép mình bên bờ đầm Chuồn có bề dày lịch sử hơn 500 năm, nằm trong hệ thống đầm phá Tam Giang - Cầu Hai có diện tích mặt nước lợ lớn nhất Đông Nam Á, lên đến khoảng 216 km2. Phá Tam Giang - Cầu Hai, nơi mưu sinh của khoảng 350.000 người dân TP Huế, đã được HĐND TP Huế thông qua Đề án phát triển thành vùng động lực ngành kinh tế biển Trung Trung bộ. Thế nhưng, hiện hoạt động đánh bắt cá tôm gặp nhiều khó khăn.",
        "Ngư dân Trần Văn Quang, ở phường Phong Quảng, TP Huế, có hơn 40 năm gắn bó với nghề đánh bắt trên phá Tam Giang - Cầu Hai, kể: “Trước đây, những loài thủy sản đặc trưng với giá trị kinh tế cao của phá Tam Giang như cá dìa, cá nâu, cá kinh... nhiều vô kể. Nay họa may lắm mới đánh bắt được, bởi ngoài tự nhiên hầu như không còn những loài này sinh sống”."
      ]
    },
    {
      id: "doi-tu-duy-quan-tri",
      heading: "Đổi tư duy quản trị để làm giàu từ biển",
      paragraphs: [
        "Việt Nam nằm bên Biển Đông, trên tuyến hàng hải kết nối Ấn Độ Dương với Thái Bình Dương; bờ biển có nhiều vũng, vịnh thuận lợi cho phát triển cảng. Vùng biển và ven biển còn tập trung nguồn tài nguyên sinh học, dầu khí, khoáng sản, cảnh quan cùng những hệ sinh thái có giá trị lớn. Tuy nhiên, kinh tế biển Việt Nam vẫn chưa phát triển xứng, nói cách khác tiềm năng chưa chuyển thành giá trị kinh tế."
      ]
    },
    {
      id: "kho-khan-ve-cang",
      heading: "Khó khăn về cảng, đánh bắt, nuôi trồng…",
      paragraphs: [
        "Trước hết, hệ thống cảng biển Việt Nam hiện đối mặt với nhiều hạn chế lớn như thiếu các tuyến đường cao tốc, đường sắt chuyên dụng và vận tải thủy nội địa kết nối trực tiếp đến các cảng lớn, dẫn đến ách tắc và chi phí logistics cao; luồng tàu bị bồi lắng giới hạn trọng tải tàu lớn; chưa giảm giá dịch vụ bằng cách áp dụng các giải pháp công nghệ nên lợi nhuận thấp và chưa tăng được sức cạnh tranh; tốc độ chuyển đổi số và phát triển cảng xanh còn chậm nên cũng chưa tăng được sức cạnh tranh. Số lượng cảng chuyên dụng cho tàu khách còn ít.",
        "Dù Chính phủ và nhiều bộ, ngành vào cuộc quyết liệt, tình hình khai thác hải sản bất hợp pháp, không khai báo và không theo quy định (IUU) đã được giải quyết đáng kể, nhưng đến nay gần 10 năm vẫn chưa xóa được thẻ vàng EC với thủy sản Việt Nam. Trong khi đó, công tác bảo tồn biển chưa đạt được các mục tiêu đặt ra. Đến cuối năm 2024, mới có 11 khu bảo tồn biển với tổng diện tích đạt khoảng 0,185% diện tích vùng biển tự nhiên của Việt Nam được thành lập và vận hành, còn rất xa mục tiêu 6% diện tích vùng biển Việt Nam được bảo tồn.",
        "Theo báo cáo của Cục Thủy sản và Kiểm ngư hồi tháng 4-2026, hệ thống bảo tồn biển Việt Nam được quy hoạch với tầm nhìn chiến lược đến năm 2030, bao gồm 27 khu bảo tồn trong đó có 11 khu bảo tồn cấp quốc gia và 16 khu bảo tồn cấp tỉnh. Tổng diện tích khoanh vùng bảo tồn đạt 463.587ha, tương đương 0,463% diện tích vùng biển quốc gia, nhưng đến nay chỉ mới triển khai được 215.191ha, tức chỉ khoảng 0,215% diện tích biển. Do chưa bảo tồn biển tốt, chưa quản lý tốt ngành khai thác thủy sản nên nguồn lợi thủy sản bị suy giảm, làm giảm cả sản lượng lẫn giá trị kinh tế. Ở khía cạnh khác, việc áp dụng các công nghệ cao vào nuôi trồng thủy sản còn hạn chế nên sản lượng và doanh thu nuôi trồng thủy sản chưa cao."
      ]
    },
    {
      id: "thach-thuc-du-lich",
      heading: "Thách thức với du lịch biển",
      paragraphs: [
        "Cạnh đó, nhiều địa điểm có tiềm năng rất lớn để phát triển du lịch và nghỉ dưỡng biển. Tuy nhiên, do chưa có quy hoạch không gian hoặc quy hoạch không gian chưa dựa trên phân vùng chức năng sử dụng biển và vùng bờ biển nên nhiều dải đất sát biển với các bãi cát đẹp vẫn bị các doanh nghiệp du lịch, nghỉ dưỡng tư nhân sử dụng kinh doanh theo kiểu tự phát. Việc này làm mất cảnh quan chung, khiến người dân, du khách khó tiếp cận, làm giảm hiệu suất sử dụng bãi biển.",
        "Vấn đề xử lý nước thải, rác thải, đặc biệt là rác thải nhựa, tại một số địa phương và khu du lịch chưa tốt, dẫn tới làm giảm sức hấp dẫn du lịch. Rất nhiều khu du lịch không có hệ thống thu gom và xử lý nước thải tập trung nên nước thải từ các cơ sở du lịch, nghỉ dưỡng chưa được xử lý đạt chuẩn đang tự do chảy xuống biển, gây ô nhiễm biển và ảnh hưởng tới du lịch. Nhiều nơi, hệ sinh thái vùng bờ biển bị tàn phá và suy thoái nghiêm trọng, ảnh hưởng tới du lịch sinh thái. Các hình thức du lịch vẫn còn đơn điệu, thiếu giải pháp thu hút khách, rất ít địa phương có khả năng khai thác thành quả của bảo tồn các hệ sinh thái biển để phục vụ du lịch."
      ]
    },
    {
      id: "nhieu-han-che-khac",
      heading: "Nhiều hạn chế khác",
      paragraphs: [
        "Nhận thức về quản lý tổng hợp tài nguyên, bảo vệ môi trường biển và hải đảo của người dân, thậm chí là của cán bộ nhà nước còn hạn chế. Từ đó, ảnh hưởng đến hiệu quả quản lý, chưa giúp được nhiều trong bảo vệ, bảo tồn và khai thác hợp lý, hiệu quả tài nguyên, đặc biệt là các hệ sinh thái và đa dạng sinh học, cũng như chưa bảo vệ tốt được môi trường biển. Mặc dù quy hoạch không gian biển quốc gia đã được ban hành, nhiều tỉnh, thành phố có biển chưa cụ thể hóa quy hoạch không gian biển quốc gia vào quy hoạch tỉnh, dẫn tới chưa quản lý và phát triển tối ưu không gian biển phục vụ phát triển kinh tế biển.",
        "Một dạng năng lượng tái tạo rất quan trọng của biển Việt Nam cần được quản lý và khai thác hợp lý là điện gió ngoài khơi. Tuy nhiên, do điện gió ngoài khơi biến động mạnh theo thời gian nên muốn khai thác nó thì phải có hạ tầng lưu trữ và truyền tải hiệu quả. Hạ tầng lưu trữ và truyền tải của ngành điện Việt Nam hiện nay chưa đáp ứng được yêu cầu.",
        "Nghiên cứu khoa học, phát triển công nghệ và chuyển đổi số trong lĩnh vực biển và hải đảo cần đầu tư rất lớn cả về cơ sở hạ tầng lẫn nguồn nhân lực. Song, trong những năm qua nguồn đầu tư này khá hạn hẹp. Các ngành nghiên cứu khoa học, phát triển công nghệ và chuyển đổi số trong lĩnh vực biển và hải đảo cũng như nhiều ngành khoa học, công nghệ và kinh tế biển đòi hỏi nguồn nhân lực có chất lượng rất cao nhưng thực tế lại có thu nhập rất thấp, thậm chí thấp hơn mức trung bình của cả nước trong khi cơ hội việc làm lại ít nên rất khó thu hút được những người đạt yêu cầu."
      ],
      author: "PGS-TS Vũ Thanh Ca, nguyên Viện trưởng Viện Nghiên cứu biển và hải đảo, Tổng cục Biển và Hải đảo Việt Nam"
    }
  ],
  concludingBox: {
    title: "Gỡ khó nhìn từ 2 nghị quyết quan trọng",
    paragraphs: [
      "Nghị quyết số 20-NQ/TW về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh và Nghị quyết số 218/NQ-CP của Chính phủ ban hành Chương trình hành động thực hiện Nghị quyết số 20-NQ/TW có ý nghĩa đặc biệt quan trọng, giúp tháo gỡ những nút thắt tồn tại nhiều năm, đưa tiềm năng biển thực sự chuyển hóa thành nguồn lực cho đất nước. Để tạo đột phá theo những quan điểm và mục tiêu của những nghị quyết này, cần đầu tư nguồn lực tương xứng.",
      "Thứ nhất, rà soát, điều chỉnh Quy hoạch không gian biển quốc gia trên cơ sở phân vùng chức năng chi tiết các vùng biển. Sau đó, sửa đổi quy hoạch tỉnh của các tỉnh, thành có biển bằng cách bổ sung quy hoạch không gian vùng biển thuộc thẩm quyền quản lý. Thứ hai, nghiên cứu chỉnh sửa và bổ sung Luật tài nguyên, môi trường biển và hải đảo theo những quan điểm chỉ đạo trong Nghị quyết 20. Thứ ba, xây dựng mô hình quản lý tổng hợp biển, vùng bờ biển và hải đảo, đảm bảo sự thống nhất về chính sách, pháp luật giữa các cấp chính quyền và sự phối hợp chặt chẽ giữa các ngành và các đối tác liên quan khác. Thứ tư là đầu tư cơ sở hạ tầng phục vụ phát triển kinh tế biển, thích ứng với biến đổi khí hậu và phòng chống thiên tai. Thứ năm là tăng cường quản lý tài nguyên, bảo vệ môi trường và các hệ sinh thái, đa dạng sinh học biển. Cuối cùng, đầu tư phát triển nguồn nhân lực biển, nghiên cứu khoa học, phát triển công nghệ và số hóa đại dương."
    ]
  }
};
