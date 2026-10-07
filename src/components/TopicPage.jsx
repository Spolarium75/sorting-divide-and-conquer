function TopicPage({
  topic,
  topicNumber,
  totalTopics,
  onContinue,
}) {
  return (
    <section className="flex flex-1 flex-col justify-center py-12">

      <div className="mb-8 flex items-center gap-4">
        <span className="h-px w-12 bg-[#d4a72c]" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a72c]">
          Topic {String(topicNumber).padStart(2, '0')}
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

        <div>

          <h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            {topic.shortTitle}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
            {topic.description}
          </p>

        </div>

        <div className="border-l border-white/10 pl-6 lg:pl-10">

          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            Topic
          </p>

          <p className="mt-3 text-6xl font-semibold text-[#d4a72c]">
            {String(topicNumber).padStart(2, '0')}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/40">
            {topic.title}
          </p>

        </div>

      </div>

      <div className="mt-14">
        <button
          onClick={onContinue}
          className="group flex items-center gap-5 border border-white/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-[#d4a72c] hover:bg-[#d4a72c] hover:text-black"
        >
          Continue to quick check

          <span className="text-lg transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

    </section>
  )
}

export default TopicPage