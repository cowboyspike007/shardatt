import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { courses } from "@/lib/data";

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Courses Offered"
        text="Teacher education programmes offered by the college with course duration, sanctioned intake and fee details."
        image="/assets/img/Admission.jpg"
      />
      <section className="section">
        <div className="section-inner grid grid-3">
          {courses.map((course) => (
            <article className="course-card" key={course.name}>
              <BookOpen size={32} color="#257061" />
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              <div className="course-meta">
                <div><span>Course Duration</span><strong>{course.duration}</strong></div>
                <div><span>Total Intake</span><strong>{course.intake}</strong></div>
              </div>
              <h3>Fee Details</h3>
              <ul className="fee-list">
                {course.fees.map(([year, fee]) => (
                  <li key={year}><span>{year}</span><strong>{fee}</strong></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
