import { FC } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
const Feedback: FC = () => {
  const { t } = useTranslation();
  const arrFeedback = [
    {
      img: "https://picsum.photos/50?random=1",
      content:
        "Hành trình vạn dặm bắt đầu từ một bước chân. Em mãi luôn biết ơn cô Trần Thị Đức Hạnh và July Yoga",
      name: "Huong Cao",
    },
    {
      img: "https://picsum.photos/50?random=2",
      content:
        "Đam mê yoga mà được học lớp huấn luyện viên yoga chất lượng thì thật sự quá may mắn và hạnh phúc...",
      name: "Nguyễn Quỳnh Anh",
    },
    {
      img: "https://picsum.photos/50?random=3",
      content:
        "Nhờ cô liên tiếp nhắc nhở 'vươn ngực' trong vài tháng qua nên em thấy mình ý thức thẳng lưng hơn khi đi đứng (càng lớn tuổi thì lưng càng khòm), hy vọng học với cô lâu dài thì vóc dáng được cải thiện",
      name: "Giấu tên",
    },
    {
      img: "https://picsum.photos/50?random=4",
      content:
        "Sau khi tham gia khóa học, mọi người đều nói sức khỏe và thần thái của cô rất tốt",
      name: "Giấu tên",
    },
  ];
  const settings = {
    nextArrow: <></>,
    prevArrow: <></>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  const renderFeedback = () => {
    return arrFeedback.map((feedback, index) => {
      return (
        <div className={styles.item} key={index}>
          <div className={styles.content}>
            <p>{feedback.content}</p>
          </div>
          <div className={styles.info}>
            <img src={feedback.img} alt="img" />
            <div>
              <p className="name heading text-lg my-0">{feedback.name}</p>
              <p>Học viên</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>{t("FEEDBACK")}</h1>
        <div className={styles.feedback}>
          <Slider {...settings}>{renderFeedback()}</Slider>
        </div>
      </div>
    </section>
  );
};
export default Feedback;
