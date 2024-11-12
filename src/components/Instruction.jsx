function Instruction({ instruction, videolink }) {
  return (
    <section
      id="instruction"
      className="mt-2 border-b border-[var(--primary-text-color)] pb-5"
    >
      <h2 className="mb-5 text-3xl tracking-tight">Instruction</h2>
      <p className="text-xl leading-9 tracking-wide">{instruction}</p>
      {videolink ? (
        <a
          target="_blank"
          className="cursor-pointer text-blue-800 underline hover:text-[var(--primary-color)]"
          href={videolink}
        >
          Watch Video Turorial
        </a>
      ) : null}
    </section>
  );
}

export default Instruction;
