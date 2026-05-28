import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { bedStaff } from "@/lib/data";

const tableColumns = [
  "S. No.",
  "Photo",
  "Name / Father's Name",
  "Designation",
  "D.O.B.",
  "Qualification",
  "Teaching Subject",
  "Experience",
  "Date of Joining",
  "Pay Scale"
];

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff"
        title="Teaching staff details"
        text="Subjectwise teacher performa for B.Ed College, session 2024-25."
        image="/assets/img/classroom02.jpg"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="B.Ed College Staff"
            text="Name of College and Address: Sharda T.T. College, Chomu, Jaipur."
          />

          <div className="staff-table-wrap desktop-staff">
            <table className="staff-table">
              <thead>
                <tr>
                  {tableColumns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bedStaff.map((person) => (
                  <tr key={person.serial}>
                    <td>{person.serial}</td>
                    <td>
                      <Image
                        className="staff-photo"
                        src={person.image}
                        alt={person.name}
                        width={72}
                        height={72}
                      />
                    </td>
                    <td>
                      <strong>{person.name}</strong>
                      <span>{person.fatherName}</span>
                    </td>
                    <td>{person.designation}</td>
                    <td>{person.dob}</td>
                    <td>{person.qualification}</td>
                    <td>{person.subject}</td>
                    <td>{person.experience}</td>
                    <td>{person.joiningDate}</td>
                    <td>{person.payScale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mobile-staff">
            {bedStaff.map((person) => (
              <article className="staff-detail-card" key={person.serial}>
                <div className="staff-detail-head">
                  <Image
                    className="staff-photo"
                    src={person.image}
                    alt={person.name}
                    width={76}
                    height={76}
                  />
                  <div>
                    <span className="staff-serial">#{person.serial}</span>
                    <h3>{person.name}</h3>
                    <p>{person.designation} · {person.subject}</p>
                  </div>
                </div>
                <dl>
                  <div><dt>Father's Name</dt><dd>{person.fatherName}</dd></div>
                  <div><dt>D.O.B.</dt><dd>{person.dob}</dd></div>
                  <div><dt>Qualification</dt><dd>{person.qualification}</dd></div>
                  <div><dt>Experience</dt><dd>{person.experience}</dd></div>
                  <div><dt>Date of Joining</dt><dd>{person.joiningDate}</dd></div>
                  <div><dt>Pay Scale</dt><dd>{person.payScale}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
