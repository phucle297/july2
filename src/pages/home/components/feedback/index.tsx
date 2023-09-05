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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias consequuntur eligendi esse incidunt odio!",
      name: "Nguyen Van A",
    },
    {
      img: "https://picsum.photos/50?random=2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias consequuntur eligendi esse incidunt odio consequuntur eligendi esse incidunt",
      name: "Le Van B",
    },
    {
      img: "https://picsum.photos/50?random=3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias consequuntur eligendi esse incidunt odio!",
      name: "Nguyen Van C",
    },
    {
      img: "https://picsum.photos/50?random=4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias",
      name: "Le Van D",
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
          <div className={styles.content}>{feedback.content}</div>
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
