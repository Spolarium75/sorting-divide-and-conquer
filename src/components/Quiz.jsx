import { useState } from 'react'

function Quiz({ quizzes, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const quiz = quizzes[currentQuestion]
  const totalQuestions = quizzes.length
  const isCorrect = selected === quiz?.answer

  function handleSubmit() {
    if (selected === null) return

    if (isCorrect) {
      setScore((currentScore) => currentScore + 1)
    }

    setSubmitted(true)
  }

  function handleContinue() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((index) => index + 1)
      setSelected(null)
      setSubmitted(false)
    } else {
      setFinished(true)
    }
  }

  function handleRestart() {
    setCurrentQuestion(0)
    setSelected(null)
    setSubmitted(false)
    setScore(0)
    setFinished(false)
  }

  if (!quiz) {
    return (
      <section className="mx-auto w-full max-w-4xl">
        <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-10">
          <p className="text-sm text-white/60">
            No quiz questions have been added yet.
          </p>
        </div>
      </section>
    )
  }

  if (finished) {
    const finalScore = score

    return (
      <section className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a72c]">
            Quiz Complete
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            You made it through.
          </h2>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Final Score
          </p>

          <p className="mt-4 text-6xl font-semibold tracking-tight text-[#d4a72c] sm:text-8xl">
            {finalScore}/{totalQuestions}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            You completed the full chapter quiz covering Sorting and
            Divide-and-Conquer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onComplete}
              className="border border-[#d4a72c] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a72c] transition hover:bg-[#d4a72c] hover:text-black"
            >
              Finish Chapter →
            </button>

            <button
              onClick={handleRestart}
              className="border border-white/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-4xl">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a72c]">
            Final Quiz
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            {currentQuestion + 1} / {totalQuestions}
          </p>
        </div>

        <div className="h-px bg-white/10">
          <div
            className="h-px bg-[#d4a72c] transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>

        <h2 className="mt-8 text-3xl font-semibold tracking-tight sm:text-5xl">
          Test your understanding.
        </h2>
      </div>

      <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-10">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
          {quiz.topic}
        </p>

        <h3 className="mb-8 text-xl leading-relaxed text-white/90 sm:text-2xl">
          {quiz.question}
        </h3>

        <div className="space-y-3">
          {quiz.options.map((option, index) => {
            const isSelected = selected === index
            const isAnswer = index === quiz.answer

            let optionStyle =
              'border-white/10 hover:border-white/30'

            if (!submitted && isSelected) {
              optionStyle =
                'border-[#d4a72c] bg-[#d4a72c]/10'
            }

            if (submitted && isAnswer) {
              optionStyle =
                'border-green-500/50 bg-green-500/10'
            }

            if (submitted && isSelected && !isAnswer) {
              optionStyle =
                'border-red-500/50 bg-red-500/10'
            }

            return (
              <button
                key={`${quiz.id}-${index}`}
                onClick={() => !submitted && setSelected(index)}
                className={`flex w-full items-center gap-4 border p-4 text-left transition ${optionStyle}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 text-xs text-white/50">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="text-sm text-white/75 sm:text-base">
                  {option}
                </span>
              </button>
            )
          })}
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="mt-8 border border-[#d4a72c] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a72c] transition hover:bg-[#d4a72c] hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
          >
            Check Answer →
          </button>
        ) : (
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className={`text-sm font-semibold uppercase tracking-[0.15em] ${
                  isCorrect ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {isCorrect ? '✓ Correct' : '✕ Not quite'}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/45">
                {quiz.explanation ||
                  `The correct answer is ${quiz.options[quiz.answer]}.`}
              </p>
            </div>

            <button
              onClick={handleContinue}
              className="border border-white/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
            >
              {currentQuestion === totalQuestions - 1
                ? 'See Results →'
                : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Quiz
