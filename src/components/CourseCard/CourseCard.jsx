import Image from 'next/image';
import styles from './CourseCard.module.scss';

const CourseCard = ({ course }) => {
  //// COMPONENT
  return (
    <div className={styles.course_card}>
      <h3>{course.name}</h3>
      <span>{course.career}</span>
      <picture>
        <Image src={course.image} alt='course' fill objectFit='cover' />
      </picture>
    </div>
  );
};

export default CourseCard;
