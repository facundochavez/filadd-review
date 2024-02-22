import CourseCard from '@/components/CourseCard/CourseCard';
import styles from './CoursesSection.module.scss';

const CoursesSection = () => {
  const coursesItems = [
    {
      id: 'course1',
      name: 'EFIP 1',
      career: 'Abogacía (UES 21)',
      image: '/images/thumbnail-course1.jpg',
    },
    {
      id: 'course2',
      name: 'Pack CBC Medicina',
      career: 'CBC y Medicina (UBA)',
      image: '/images/thumbnail-course2.jpg',
    },
    {
      id: 'course3',
      name: 'EFIP 2',
      career: 'Abogacía (UES 21)',
      image: '/images/thumbnail-course3.jpg',
    },
    {
      id: 'course4',
      name: 'Histología, Biología Celular, Embriología y Genética',
      career: 'Medicina (UBA)',
      image: '/images/thumbnail-course4.jpg',
    },
    {
      id: 'course5',
      name: 'Ingreso Ingeniería',
      career: 'Ingeniería (UTN FRBA)',
      image: '/images/thumbnail-course5.jpg',
    },
    {
      id: 'course6',
      name: 'Epistemología',
      career: 'Psicología (UNC)',
      image: '/images/thumbnail-course6.jpg',
    },
  ];

  //// COMPONENT
  return (
    <section className={styles.courses_section}>
      <h2>Los mejores cursos de la academia</h2>
      <ul>
        {coursesItems.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </section>
  );
};

export default CoursesSection;
