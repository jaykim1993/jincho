// 정적 소개 페이지, 외부 데이터 없음.
export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-heading text-2xl font-semibold">About</h1>

      <section className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Jin is a Computer Science PhD student at the University of Iowa, advised by
          Dr. Rahul Singh.
        </p>
        <p>
          His work sits at the intersection of computer science and biomedicine, drawing
          on computer vision, computational topology, and research software tools. He
          builds topological frameworks for analyzing high-dimensional data — from
          multivariate time series such as ECoG and high-resolution manometry, to
          biomedical imaging like bright-field microscopy and fMRI.
        </p>
        <p>
          Outside of research, he enjoys editing underwater photos and videos captured
          on scuba diving trips.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-lg font-semibold text-foreground">
          Collaborating Institutions
        </h2>
        <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <li>University of Iowa Health Care — Otolaryngology, Neurosurgery</li>
          <li>University of Wisconsin–Madison — Otolaryngology</li>
          <li>University of Manitoba — Human Anatomy &amp; Cell Science</li>
        </ul>
      </section>
    </div>
  );
}
