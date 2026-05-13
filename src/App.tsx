import { hero, meta, sections, architectureViews, prototypeGallery, prototypeVideo, functionalRequirements, nonFunctionalRequirements } from './data/content';

const heroFeatures = [
  {
    title: 'Realidad Mixta Educativa',
    description: 'Experiencias inmersivas para estudiantes de medicina con modelos fetales y casos clínicos.'
  },
  {
    title: 'Arquitectura 4+1',
    description: 'Diseño estructurado que cubre escenarios, procesos, lógica, despliegue y desarrollo.'
  },
  {
    title: 'Prototipo Meta Quest',
    description: 'Demostración visual con escenas interactivas, capas anatómicas y evaluación formativa.'
  }
];

function SectionBlock({ section }: { section: any }) {
  return (
    <section id={section.id} className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition duration-500 hover:-translate-y-1 hover:border-sky-500/30">
      <h2 className="text-3xl font-semibold text-white">{section.title}</h2>
      {section.content && <p className="mt-5 text-slate-300 leading-8">{section.content}</p>}
      {section.list && (
        <ul className="mt-6 list-disc space-y-3 text-slate-300 pl-5">
          {section.list.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.subsections?.map((sub: any) => (
        <div key={sub.title} className="mt-8 rounded-[1.75rem] border border-slate-800/50 bg-slate-950/85 p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-white">{sub.title}</h3>
          {sub.content && <p className="mt-4 text-slate-300 leading-8">{sub.content}</p>}
          {sub.list && (
            <ul className="mt-4 list-disc space-y-3 text-slate-300 pl-5">
              {sub.list.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

function ImageCard({ title, src, alt }: { title: string; src: string; alt: string }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-900/80 shadow-xl shadow-slate-950/30 transition duration-500 hover:-translate-y-1 hover:border-sky-500/30">
      <div className="relative h-64 overflow-hidden bg-slate-950">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </article>
  );
}

function VideoCard({ title, src, poster }: { title: string; src: string; poster: string }) {
  return (
    <article className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 shadow-xl shadow-slate-950/30 transition duration-500 hover:-translate-y-1 hover:border-sky-500/30">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="overflow-hidden rounded-b-[2rem] bg-slate-950/90 p-6">
        <video controls poster={poster} className="w-full rounded-[1.5rem] bg-black shadow-inner shadow-slate-950/70">
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </article>
  );
}

function RequirementsTable({ title, columns, items }: { title: string; columns: string[]; items: any[] }) {
  return (
    <div className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-800/70 bg-slate-950/90">
        <table className="min-w-full border-collapse text-left text-sm text-slate-200">
          <thead>
            <tr className="bg-slate-900/90 text-slate-300">
              {columns.map((column) => (
                <th key={column} className="whitespace-nowrap px-4 py-3 font-medium uppercase tracking-[0.15em] text-slate-400">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.ref} className={index % 2 === 0 ? 'bg-slate-950/80' : 'bg-slate-900/80'}>
                {columns.map((column) => {
                  const key = column.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');
                  return (
                    <td key={`${item.ref}-${column}`} className="px-4 py-4 align-top leading-6 text-slate-200">
                      {item[key] ?? item[column.toLowerCase()] ?? ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-slate-900/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300 ring-1 ring-slate-700/40">GestARte</div>
            <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
              <a href="#resumen" className="transition hover:text-sky-300">Resumen</a>
              <a href="#marco-teorico" className="transition hover:text-sky-300">Marco</a>
              <a href="#requerimientos" className="transition hover:text-sky-300">Requerimientos</a>
              <a href="#arquitectura" className="transition hover:text-sky-300">Arquitectura</a>
              <a href="#prototipo" className="transition hover:text-sky-300">Prototipo</a>
              <a href="#referencias" className="transition hover:text-sky-300">Referencias</a>
            </nav>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#arquitectura" className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              Ver arquitectura
            </a>
            <a href="#prototipo" className="rounded-full border border-slate-700 bg-slate-900/90 px-5 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
              Ver prototipo
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:py-14">
        <section className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.95)] ring-1 ring-slate-700/60 backdrop-blur-xl sm:p-12">
          <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_24%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_25%)] opacity-80" />
          <div className="relative grid gap-10 xl:grid-cols-[1.4fr_1fr]">
            <div className="space-y-8">
              <span className="inline-flex rounded-full bg-sky-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300 ring-1 ring-sky-500/30">
                Proyecto de tesis
              </span>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">{hero.subtitle}</p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">{hero.title}</h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">{hero.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href="#arquitectura" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-400">
                  Explorar arquitectura
                </a>
                <a href="#prototipo" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3 text-base text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
                  Ver prototipo
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-[1.75rem] border border-slate-800/60 bg-slate-900/80 p-4 text-slate-300 shadow-lg shadow-slate-950/30">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Investigación</p>
                  <p className="mt-3 text-lg font-semibold text-white">{meta.year}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-800/60 bg-slate-900/80 p-4 text-slate-300 shadow-lg shadow-slate-950/30">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Facultad</p>
                  <p className="mt-3 text-lg font-semibold text-white">{meta.faculty}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-800/60 bg-slate-900/80 p-4 text-slate-300 shadow-lg shadow-slate-950/30">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Línea</p>
                  <p className="mt-3 text-lg font-semibold text-white">{meta.researchLine}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-800/60 bg-slate-900/80 p-4 text-slate-300 shadow-lg shadow-slate-950/30">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Campus</p>
                  <p className="mt-3 text-lg font-semibold text-white">{meta.campus}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/60 bg-slate-900/85 p-6 shadow-2xl shadow-slate-950/40">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl" />
                <div className="absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl" />
                <div className="rounded-[2rem] border border-slate-800/50 bg-slate-950/90 p-3 shadow-inner shadow-slate-950/40">
                  <img
                    src={prototypeGallery[0].image}
                    alt={prototypeGallery[0].alt}
                    className="h-80 w-full rounded-[1.75rem] object-cover"
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-slate-800/50 bg-slate-900/80 p-4 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Último avance</p>
                    <p className="mt-2 text-lg font-semibold text-white">Escena Meta Quest</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-800/50 bg-slate-900/80 p-4 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Interacción</p>
                    <p className="mt-2 text-lg font-semibold text-white">Capas anatómicas</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={prototypeGallery[1].image}
                  alt={prototypeGallery[1].alt}
                  className="h-44 w-full rounded-[2rem] object-cover shadow-2xl shadow-slate-950/30"
                />
                <img
                  src={prototypeGallery[2].image}
                  alt={prototypeGallery[2].alt}
                  className="h-44 w-full rounded-[2rem] object-cover shadow-2xl shadow-slate-950/30"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-3">
          {heroFeatures.map((feature) => (
            <article key={feature.title} className="rounded-[2rem] border border-slate-800/60 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30 transition duration-500 hover:-translate-y-1 hover:border-sky-500/30">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400/80">{feature.title}</p>
              <p className="mt-4 text-slate-300 leading-7">{feature.description}</p>
            </article>
          ))}
        </section>

        <section id="resumen" className="mt-20">
          <SectionBlock section={sections.find((section) => section.id === 'resumen')!} />
        </section>

        <section id="marco-teorico" className="mt-20 grid gap-8 lg:grid-cols-2">
          {sections.slice(6, 12).map((section) => (
            <SectionBlock key={section.id} section={section} />
          ))}
        </section>

        <section id="requerimientos" className="mt-20">
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400/80">Requerimientos</p>
            <h2 className="section-title">Requerimientos funcionales y no funcionales</h2>
            <p className="max-w-3xl text-slate-300 leading-8">Este conjunto define el comportamiento esperado del sistema y los criterios de calidad que GestARte debe cumplir en el entorno académico y técnico.</p>
          </div>
          <div className="grid gap-8 xl:grid-cols-2">
            <RequirementsTable
              title="Requerimientos funcionales"
              columns={['REF', 'Requirement', 'Description']}
              items={functionalRequirements.map((item) => ({
                ref: item.ref,
                requirement: item.requirement,
                description: item.description
              }))}
            />
            <RequirementsTable
              title="Requerimientos no funcionales"
              columns={['REF', 'Category', 'Requirement', 'Description']}
              items={nonFunctionalRequirements.map((item) => ({
                ref: item.ref,
                category: item.category,
                requirement: item.requirement,
                description: item.description
              }))}
            />
          </div>
        </section>

        <section id="arquitectura" className="mt-20">
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400/80">Arquitectura 4+1 del proyecto</p>
            <h2 className="section-title">Estructura técnica y vistas de diseño</h2>
            <p className="max-w-3xl text-slate-300 leading-8">GestARte se describe con las cinco vistas del modelo 4+1 para cubrir diseño lógico, desarrollo, procesos, físico y escenarios de uso.</p>
          </div>
          <div className="space-y-12">
            {architectureViews.map((view) => (
              <section key={view.id} className="rounded-[2rem] border border-slate-800/60 bg-slate-900/75 p-8 shadow-xl shadow-slate-950/30">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white">{view.title}</h3>
                  <p className="mt-3 text-slate-300 leading-7">{view.description}</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {view.items.map((item: any) => (
                    <ImageCard key={item.title} title={item.title} src={item.image} alt={item.alt} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section id="prototipo" className="mt-20">
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400/80">Avance del prototipo</p>
            <h2 className="section-title">Desarrollo y demostración</h2>
            <p className="max-w-3xl text-slate-300 leading-8">El prototipo ilustra el avance con escenas Meta Quest, modelado fetal y la interfaz de interacción por capas para la experiencia en realidad mixta.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {prototypeGallery.map((item) => (
              <ImageCard key={item.title} title={item.title} src={item.image} alt={item.alt} />
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-slate-800/60 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30">
            <VideoCard title={prototypeVideo.title} src={prototypeVideo.src} poster={prototypeVideo.poster} />
          </div>
        </section>

        <section id="referencias" className="mt-20 rounded-[2rem] border border-slate-800/60 bg-slate-900/75 p-8 shadow-xl shadow-slate-950/30">
          <h2 className="text-3xl font-semibold text-white">Referencias</h2>
          <ul className="mt-6 list-disc space-y-3 text-slate-300 pl-5">
            {sections.find((section) => section.id === 'referencias')?.list?.map((ref: string) => (
              <li key={ref}>{ref}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-slate-800/70 bg-slate-950/90 py-8 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2.6fr)] lg:items-center">
          <div className="rounded-[2rem] border border-slate-800/50 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400/80">GestARte</p>
            <p className="mt-3 text-slate-300 leading-7">Landing de tesis con enfoque en realidad mixta educativa y diseño de arquitectura 4+1 para medicina.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800/50 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Autores</p>
              <p className="mt-3 text-slate-200 leading-7">{meta.authors.join(', ')}</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800/50 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Asesor</p>
              <p className="mt-3 text-slate-200 leading-7">{meta.advisor}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:px-8 text-sm text-slate-500">
          <p>Universidad Cooperativa de Colombia · Programa Ingeniería de Software · {meta.year}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
