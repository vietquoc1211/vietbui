export class CauHoi {
  question: string;
  answer: Answers[];
}

export class Answers {
  id: number;
  value: string;
}

export const DanhSachCauHoi: CauHoi[] = [
  {
    // câu 1
    question: 'Ông/bà đánh giá tổng quan về sức khỏe của mình như thế nào?',
    answer: [
      { id: 1, value: 'Tuyệt vời' },
      { id: 2, value: 'Rất tốt' },
      { id: 3, value: 'Tốt' },
      { id: 4, value: 'Bình thường' },
      { id: 5, value: 'Kém' },
    ]
  },
  {
    // câu 2
    question: 'So với 1 năm về trước, ông/bà đánh giá sức khỏe hiện nay của mình như thế nào?',
    answer: [
      { id: 1, value: 'Tốt hơn nhiều so với 1 năm trước' },
      { id: 2, value: 'Có vẻ tốt hơn so với 1 năm trước' },
      { id: 3, value: 'Như năm trước' },
      { id: 4, value: 'Có vẻ kém hơn so với 1 năm trước' },
      { id: 5, value: 'Kém hơn nhiều so với 1năm trước' },
    ]
  },
  {
    // câu 3
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Các <b>vận động mạnh</b> như chạy bộ, nâng các vật nặng, tham gia các môn thể thao đòi hỏi gắng sức.',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 4
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Các <b>vận động bình thường</b>, như di chuyển bàn ghế, hút bụi quét nhà, chơi bowling hoặc chơi golf.',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 5
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Mang, vác đồ đạc.',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 6
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Leo vài tầng.',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 7
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Leo một tầng.',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 8
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Cúi gập người, quỳ gối.',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 9
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Đi bộ hơn 1 dặm (1,6 km).',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 10
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Đi bộ một vài dãy nhà (vài trăm mét).',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 11
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Đi bộ một dãy nhà (một trăm mét).',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 12
    question: '<b>Sức khỏe của ông /bà hiện tại có làm hạn chế</b> các hoạt động này không? Nếu có, thì ở mức độ nào? <br>Tự tắm hoặc mặc quần áo.',
    answer: [
      { id: 1, value: 'Có, bị hạn chế nhiều' },
      { id: 2, value: 'Có, bị hạn chế ít' },
      { id: 3, value: 'Không, Không bị hạn chế gì' },
    ]
  },
  {
    // câu 13
    question: 'Trong <b>1 tháng qua</b>, ông/bà có gặp các vấn đề trong công việc hoặc trong các hoạt động thường ngày <b>vì lý do thể chất</b> không?<br>Phải <b>giảm thời gian</b> làm việc hoặc các hoạt động khác.',
    answer: [
      { id: 1, value: 'Có' },
      { id: 2, value: 'Không' },
    ]
  },
  {
    // câu 14
    question: 'Trong <b>1 tháng qua</b>, ông/bà có gặp các vấn đề trong công việc hoặc trong các hoạt động thường ngày vì lý do thể chất không?<br><b>Hoàn thành công việc ít hơn</b> so với mong muốn.',
    answer: [
      { id: 1, value: 'Có' },
      { id: 2, value: 'Không' },
    ]
  },
  {
    // câu 15
    question: 'Trong <b>1 tháng qua</b>, ông/bà có gặp các vấn đề trong công việc hoặc trong các hoạt động thường ngày vì lý do thể chất không?<br>Bị hạn chế trong 1 số công việc hoặc các hoạt động khác.',
    answer: [
      { id: 1, value: 'Có' },
      { id: 2, value: 'Không' },
    ]
  },
  {
    // câu 16
    question: 'Trong <b>1 tháng qua</b>, ông/bà có gặp các vấn đề trong công việc hoặc trong các hoạt động thường ngày <b>vì lý do thể chất</b> không?<br><b>Gặp khó khăn</b> khi thực hiện công việc hoặc các hoạt động khác (ví dụ như phải gắng sức nhiều hơn).',
    answer: [
      { id: 1, value: 'Có' },
      { id: 2, value: 'Không' },
    ]
  },
  {
    // câu 17
    question: 'Trong <b>1 tháng qua</b>, ông/bà có gặp các vấn đề trong công việc hoặc trong các hoạt động thường ngày <b>vì lý do tâm lý</b> không (ví dụ như trầm cảm hoặc lo âu)? <br>Phải <b>giảm thời gian</b> làm việc hoặc các hoạt động khác.',
    answer: [
      { id: 1, value: 'Có' },
      { id: 2, value: 'Không' },
    ]
  },
  {
    // câu 18
    question: 'Trong <b>1 tháng qua</b>, ông/bà có gặp các vấn đề trong công việc hoặc trong các hoạt động thường ngày <b>vì lý do tâm lý</b> không (ví dụ như trầm cảm hoặc lo âu)? <br><b>Hoàn thành công việc ít hơn</b> so với mong muốn.',
    answer: [
      { id: 1, value: 'Có' },
      { id: 2, value: 'Không' },
    ]
  },
  {
    // câu 19
    question: 'Trong <b>1 tháng qua</b>, ông/bà có gặp các vấn đề trong công việc hoặc trong các hoạt động thường ngày <b>vì lý do tâm lý</b> không (ví dụ như trầm cảm hoặc lo âu)? <br>Không làm việc hoặc thực hiện các hoạt động khác <b>một cách cẩn trọng</b> như lúc bình thường.',
    answer: [
      { id: 1, value: 'Có' },
      { id: 2, value: 'Không' },
    ]
  },
  {
    // câu 20
    question: 'Trong <b>1 tháng qua</b>, các vấn đề về thể chất và tâm lý đã ảnh hưởng tới các hoạt động xã hội của ông/bà với gia đình, bạn bè, hàng xóm, hoặc hội nhóm như thế nào?',
    answer: [
      { id: 1, value: 'Không ảnh hưởng' },
      { id: 2, value: 'Ảnh hưởng một chút' },
      { id: 3, value: 'Ảnh hưởng tương đối' },
      { id: 4, value: 'Ảnh hưởng rất nhiều' },
    ]
  },
  {
    // câu 21
    question: 'Trong <b>1 tháng qua</b>, cơ thể ông/bà có bị đau gì không?',
    answer: [
      { id: 1, value: 'Không' },
      { id: 2, value: 'Rất nhẹ' },
      { id: 3, value: 'Nhẹ' },
      { id: 4, value: 'Vừa phải' },
      { id: 5, value: 'Nặng' },
      { id: 6, value: 'Rất nặng' },
    ]
  },
  {
    // câu 22
    question: 'Trong <b>1 tháng qua</b>, cơn đau ảnh hưởng đến hoạt động hàng ngày (bao gồm cả công việc và việc nhà) của ông/bà như thế nào?',
    answer: [
      { id: 1, value: 'Không chút nào' },
      { id: 2, value: 'Một chút' },
      { id: 3, value: 'Ảnh hưởng tương đối' },
      { id: 4, value: 'Ảnh hưởng nhiều' },
      { id: 5, value: 'Ảnh hưởng rất nhiều' },
    ]
  },
  {
    // câu 23
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b><br>Vui vẻ, khỏe mạnh không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 24
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Hay lo lắng quá không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 25
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Buồn đến mức không có gì làm mình vui lên?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 26
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Nhẹ nhàng, thư thái không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 27
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Có nhiều năng lượng không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 28
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Buồn bã và tuyệt vọng không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 29
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Kiệt sức không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 30
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Hạnh phúc không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 31
    question: 'Câu hỏi dưới đây hỏi về cảm giác, cảm nhận của ông/bà và về mọi việc như thế nào trong <b>vòng 1 tháng qua</b>. Mệt mỏi không?',
    answer: [
      { id: 1, value: 'Mọi lúc' },
      { id: 2, value: 'Gần như mọi lúc' },
      { id: 3, value: 'Khá thường xuyên' },
      { id: 4, value: 'Thỉnh thoảng' },
      { id: 5, value: 'Hiếm khi' },
      { id: 6, value: 'Không lúc nào' },
    ]
  },
  {
    // câu 32
    question: 'Trong <b>1 tháng qua, các vấn đề về thể chất và tinh thần</b> ảnh hưởng đến các hoạt động xã hội (như gặp gỡ bạn bè, họ hàng, v.v…) của ông/bà như thế nào?',
    answer: [
      { id: 1, value: 'Lúc nào cũng ảnh hưởng' },
      { id: 2, value: 'Gần như lúc nào cũng ảnh hưởng' },
      { id: 3, value: 'Thỉnh thoảng ảnh hưởng' },
      { id: 4, value: 'Hiếm khi ảnh hưởng' },
      { id: 5, value: 'Không ảnh hưởng' },
    ]
  },
  {
    // câu 33
    question: 'Mô tả nào đúng với tình trạng sức khỏe của ông/bà hiện nay?<br>. Tôi có vẻ dễ bị bệnh hơn người khác.',
    answer: [
      { id: 1, value: 'Đúng' },
      { id: 2, value: 'Gần đúng' },
      { id: 3, value: 'Không biết' },
      { id: 4, value: 'Có thể' },
      { id: 5, value: 'Sai' },
    ]
  },
  {
    // câu 34
    question: 'Mô tả nào đúng với tình trạng sức khỏe của ông/bà hiện nay?<br>. Tôi thấy mình khỏe như mọi người.',
    answer: [
      { id: 1, value: 'Đúng' },
      { id: 2, value: 'Gần đúng' },
      { id: 3, value: 'Không biết' },
      { id: 4, value: 'Có thể' },
      { id: 5, value: 'Sai' },
    ]
  },
  {
    // câu 35
    question: 'Mô tả nào đúng với tình trạng sức khỏe của ông/bà hiện nay?<br>. Tôi dự đoán sức khỏe của mình sẽ xấu đi.',
    answer: [
      { id: 1, value: 'Đúng' },
      { id: 2, value: 'Gần đúng' },
      { id: 3, value: 'Không biết' },
      { id: 4, value: 'Có thể' },
      { id: 5, value: 'Sai' },
    ]
  },
  {
    // câu 36
    question: 'Mô tả nào đúng với tình trạng sức khỏe của ông/bà hiện nay?<br>. Tôi có sức khỏe tuyệt vời.',
    answer: [
      { id: 1, value: 'Đúng' },
      { id: 2, value: 'Gần đúng' },
      { id: 3, value: 'Không biết' },
      { id: 4, value: 'Có thể' },
      { id: 5, value: 'Sai' },
    ]
  },
];
