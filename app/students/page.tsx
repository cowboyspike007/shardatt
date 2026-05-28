import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { studentIntake } from "@/lib/data";

export default function StudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Students"
        title="Student Intake"
        text="Programme-wise student intake information for the integrated teacher education courses."
        image="/assets/img/classroom01.jpg"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Integrated Program Intake"
            text="The following information presents the intake position for the B.A.-B.Ed. and B.Sc.-B.Ed. integrated programmes."
          />
          <div className="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Student Count</th>
                  <th>Qualification</th>
                </tr>
              </thead>
              <tbody>
                {studentIntake.map((row) => (
                  <tr key={row.program}>
                    <td>{row.program}</td>
                    <td>{row.count}</td>
                    <td>{row.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
