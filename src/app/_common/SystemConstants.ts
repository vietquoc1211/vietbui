export class SystemConstants {
  public static CURRENTUSER = 'CurrentUser';
  public static REMEMBERME = 'RememberMe';
  public static CURRENTUSER_BN = 'CurrentUser_BN';
  public static REMEMBERME_BN = 'RememberMe_BN';
  /**
      * Các tùy chọn giới tính
    */
  public static data_gioitinh = [
    { id: 1, text: 'Nam' },
    { id: 2, text: 'Nữ' }
  ]
  /**
     * Các tùy chọn field tim thai khám sản
   */
  public static data_timthai = [
    { id: '140 – 160', text: '140 – 160' },
    { id: '> 160', text: '> 160' },
    { id: '<140', text: '<140' }
  ];
  /**
    * Các tùy chọn field ngôi khám sản
  */
  public static data_ngoi = [
    { id: 'Di động', text: 'Di động' },
    { id: 'Đầu', text: 'Đầu' },
    { id: 'Mông', text: 'Mông' },
    { id: 'Ngang', text: 'Ngang' }
  ];
  /**
   * Các tùy chọn field tiêm VAT khám sản
 */
  public static data_tiemVAT = [
    { id: 'VAT 1', text: 'VAT 1' },
    { id: 'VAT 2', text: 'VAT 2' },
    { id: 'VAT 3', text: 'VAT 3' },
    { id: 'VAT 4', text: 'VAT 4' }
  ];
  /**
     * Các tùy chọn field tử cung khám sản
   */
  public static data_tucung = [
    { id: 'Gò', text: 'Gò' },
    { id: 'Không Gò', text: 'Không Gò' }
  ];
  /**
     * Các tùy chọn field hai phần phụ khám sản
   */
  public static data_haiphanphu = [
    { id: 'Mềm', text: 'Mềm' },
    { id: 'Có u trái', text: 'Có u trái' },
    { id: 'Có u phải', text: 'Có u phải' }
  ];
  /**
    * Các tùy chọn field cổ tử cung khám sản
  */
  public static data_cotucung = [
    { id: 'Đóng', text: 'Đóng' },
    { id: 'Hở', text: 'Hở' },
    { id: 'Dưới 2 phân', text: 'Dưới 2 phân' },
    { id: 'Trên 2 phân', text: 'Trên 2 phân' }
  ];
  /**
   * Các tùy chọn field âm đạo khám sản
 */
  public static data_amdao = [
    { id: 'Không ra huyết', text: 'Không ra huyết' },
    { id: 'Có ra huyết ít', text: 'Có ra huyết ít' },
    { id: 'Có ra huyết vừa', text: 'Có ra huyết vừa' },
    { id: 'Có ra huyết nhiều', text: 'Có ra huyết nhiều' }
  ];
  /**
    * Danh sách các ngày nghỉ lể
  */
  public static data_ngayle = [
    '30/04', '01/05', '02/09', '01/01'
  ];
  /**
    * Loại Đối tượng đến khám được gán giá trị khi vào form tiếp đón
  */
  public static DoiTuongDenKham: number[] = [];
  /**
  * Bác sĩ tiếp đón và khám bệnh luôn
*/
  public static BacSiTiepDon: number[] = [];

  public static NT_CURRENTUSER = 'NT_CurrentUser';

  /** Cấu hình có tạm ứng */
  public static CoTamUng = false;
  /**Cấu hình sử dụng kho */
  public static CoKho = false;
  /**
   * Xử trí khám sản == Nhập viện không hiện hẹn tái khám
 */
  public static KS_XuTri = 'Nhập viện';
  /**
   * Trạng thái của danh sách tiếp đón ( đã khám or chưa khám )
 */
  public static TrangThai = [
    { id: 0, text: 'Chưa khám' },
    { id: 1, text: 'Đã khám' }
  ];
  /**
   * get thứ mấy trong tuần
 */
  public static days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư ', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  /**
   * get đặt điểm liên quan
   */
  public static array: any[] = [
    [{ id: '01', text: 'Dị ứng', check: null, thoigian: null },
    { id: '04', text: 'Thuốc lá', check: null, thoigian: null }],
    [{ id: '02', text: 'Ma tuý', check: null, thoigian: null },
    { id: '05', text: 'Thuốc lào', check: null, thoigian: null }],
    [{ id: '03', text: 'Rượu bia', check: null, thoigian: null },
    { id: '06', text: 'Khác', check: null, thoigian: null }]
  ];
  /**
   * get chức năng sinh hoạt
   */
  public static arraysinhhoat: any[] = [
    [{ id: '1', text: 'Ăn uống', value: null },
    { id: '5', text: 'Mặc quần áo', value: null },
    { id: '9', text: 'Đứng- ngồi', value: null }],
    [{ id: '2', text: 'Chải tóc', value: null },
    { id: '6', text: 'Đi vệ sinh', value: null },
    { id: '10', text: 'Từ sàn đứng lên', value: null }],
    [{ id: '3', text: 'Đánh răng', value: null },
    { id: '7', text: 'Nằm ngửa-sấp', value: null },
    { id: '11', text: 'Khả năng di chuyển', value: null }],
    [{ id: '4', text: 'Tắm', value: null },
    { id: '8', text: 'Nằm ngửa-ngồi', value: null },
    { id: '12', text: 'Dụng cụ trợ giúp', value: null }],
  ];
  public static values = [{ id: 1, text: 'Phụ thuộc' }, { id: 2, text: 'Trợ giúp trung bình' }, { id: 3, text: 'Trợ giúp tối thiểu' }, { id: 4, text: 'Chỉ giám sát' }, { id: 5, text: 'Độc lập' }];
  // path hình Thông tin phòng khám
  public static path = '/img/logo/';
  // Loại kết quả trong Danh mục test lâm sàn
  public static LoaiKetQua: any[] = [
    {id: 0, text: 'Kết quả nhập văn bản'},
    {id: 1, text: 'Kết quả độ'},
    {id: 2, text: 'Kết quả âm tính/dương tính'},
  ];
  // danh sach dashboard mac dinh
  public static dashboard: any[] = [
    {
        url: '/kham-benh/tiep-don',
        img: '../../../../assets/media/img/img/tiep-don.jpg',
        name: 'Tiếp đón'
    },
    {
        url: '/kham-benh/kham-mtt',
        img: '../../../../assets/media/img/img/vltl.jpg',
        name: 'Khám MTT'
    },
    {
        url: '/kham-benh/lich-dieu-tri-vltl-mtt',
        img: '../../../../assets/media/img/img/lichdieutri.png',
        name: 'Lịch tập VLTT, MTT'
    },
    {
        url: '/kham-benh/dieu-tri/dieu-tri-mtt',
        img: '../../../../assets/media/img/img/dieutrimtt.jpg',
        name: 'Điều trị MTT'
    },
    {
        url: '/kham-benh/dieu-tri/dieu-tri-vltl',
        img: '../../../../assets/media/img/img/dieutrivltl.jpg',
        name: 'Điều trị VLTL'
    },
    {
        url: '/vien-phi/thu-vien-phi',
        img: '../../../../assets/media/img/img/vien-phi.jpg',
        name: 'Viện phí'
    },
]
}



