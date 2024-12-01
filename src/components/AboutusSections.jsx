function AboutusSections({ sectionHeader, contents }) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 p-4 text-center text-3xl font-bold tracking-tight text-[#978d84] sm:text-4xl">
        {sectionHeader}
      </h2>

      <div className="mx-auto flex h-auto w-full flex-col gap-4 rounded-lg bg-[var(--secondary-background-color)] p-8 shadow-md lg:w-2/3">
        {contents?.map((content, i) => (
          <div className="flex flex-col gap-2" key={content.title + i}>
            <h3 className="text-xl font-bold text-[var(--primary-color)] sm:text-center lg:text-2xl">
              {content?.title}
            </h3>
            <p className="text-sm sm:text-center lg:text-xl">
              {content.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutusSections;
