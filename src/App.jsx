import { useState } from 'react'

import { topics } from './data/topics'
import { quizQuestions } from './data/quiz'

import BottomNav from './components/BottomNav'
import Quiz from './components/Quiz'
import TopicPage from './components/TopicPage'

function App() {
  const [screen, setScreen] = useState('home')
  const [topicIndex, setTopicIndex] = useState(0)

  const topic = topics[topicIndex]

  function startPresentation() {
    setScreen('intro')
  }

  function openTopic(index) {
    setTopicIndex(index)
    setScreen('topic')
  }

  function nextTopic() {
    if (topicIndex < topics.length - 1) {
      setTopicIndex(topicIndex + 1)
      setScreen('topic')
    } else {
      setScreen('quiz')
    }
  }

  function previousTopic() {
    if (topicIndex > 0) {
      setTopicIndex(topicIndex - 1)
      setScreen('topic')
    } else {
      setScreen('intro')
    }
  }

  const totalSections = 10

  return (
    <main className="min-h-dvh bg-[#0b0d0c] text-[#f3efe6]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#d4a72c]/10 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#d4a72c]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-[1600px] flex-col px-6 py-5 sm:px-10 sm:py-6 lg:px-14">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <button
            onClick={() => setScreen('home')}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center border border-[#d4a72c]/50 text-sm font-semibold text-[#d4a72c]">
              05
            </div>

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Algorithms
            </span>
          </button>

          <div className="hidden text-xs uppercase tracking-[0.25em] text-white/40 sm:block">
            CS 05 · Chapter Report
          </div>
        </header>

        {/* HOME */}
        {screen === 'home' && (
          <section className="flex flex-1 flex-col justify-center py-8 sm:py-10 lg:py-12">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-[#d4a72c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a72c]">
                Chapter 05
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,min(6.5vw,10vh),7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.06em]">
              Sorting
              <br />

              <span className="text-white/20">&</span>

              <br />

              <span className="text-[#d4a72c]">
                Divide-and-
                <br className="sm:hidden" />
                Conquer
              </span>
            </h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
                Explore sorting algorithms, analyze their performance,
                and discover how divide-and-conquer transforms complex
                problems into simpler ones.
              </p>

              <button
                onClick={startPresentation}
                className="group flex w-fit items-center gap-5 border border-white/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#d4a72c] hover:bg-[#d4a72c] hover:text-black"
              >
                Start exploring

                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </section>
        )}

        {/* INTRO */}
        {screen === 'intro' && (
          <section className="flex flex-1 flex-col justify-center py-10">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#d4a72c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a72c]">
                Introduction
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                  From simple
                  <br />
                  sorting
                  <br />
                  to divide
                  <br />
                  & conquer.
                </h1>
              </div>

              <div className="flex flex-col justify-end">
                <p className="text-lg leading-relaxed text-white/50">
                  In this chapter, we'll explore three important
                  approaches to sorting: Selection Sort, Insertion Sort,
                  and Merge Sort.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/50">
                  Along the way, we'll examine their algorithms,
                  complexity, and the ideas behind divide-and-conquer.
                </p>

                <button
                  onClick={() => openTopic(0)}
                  className="mt-10 flex w-fit items-center gap-5 border border-[#d4a72c] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a72c] transition hover:bg-[#d4a72c] hover:text-black"
                >
                  Begin Topic 01 →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* TOPIC */}
        {screen === 'topic' && (
          <TopicPage
            topic={topic}
            topicNumber={topicIndex + 1}
            totalTopics={topics.length}
            onContinue={() => {
              if (topicIndex < topics.length - 1) {
                setScreen('topic')
                setTopicIndex(topicIndex + 1)
              } else {
                setScreen('quiz')
              }
            }}
          />
        )}

        {/* QUIZ */}
        {screen === 'quiz' && (
          <section className="flex flex-1 items-center py-10">
            <Quiz
              quizzes={quizQuestions}
              onComplete={() => setScreen('complete')}
            />
          </section>
        )}

        {/* COMPLETE */}
        {screen === 'complete' && (
          <section className="flex flex-1 flex-col items-center justify-center py-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a72c]">
              Chapter Complete
            </p>

            <h1 className="mt-6 text-6xl font-semibold uppercase leading-[0.85] tracking-[-0.06em] sm:text-8xl">
              You made it
              <br />
              through.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/45">
              You've explored Selection Sort, Insertion Sort,
              Recursion, Divide-and-Conquer, and Merge Sort.
            </p>

            <button
              onClick={() => {
                setTopicIndex(0)
                setScreen('home')
              }}
              className="mt-10 border border-[#d4a72c] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a72c] transition hover:bg-[#d4a72c] hover:text-black"
            >
              Restart Presentation
            </button>
          </section>
        )}

        {/* Bottom navigation */}
        {screen !== 'home' && screen !== 'quiz' && (
          <BottomNav
            currentSection={
              screen === 'intro'
                ? 1
                : screen === 'complete'
                  ? totalSections
                  : topicIndex + 2
            }
            totalSections={totalSections}
            onPrevious={() => {
              if (screen === 'intro') {
                setScreen('home')
              } else if (screen === 'topic') {
                previousTopic()
              } else if (screen === 'complete') {
                setScreen('quiz')
              }
            }}
            onNext={() => {
              if (screen === 'intro') {
                openTopic(0)
              } else if (screen === 'topic') {
                if (topicIndex < topics.length - 1) {
                  setTopicIndex(topicIndex + 1)
                } else {
                  setScreen('quiz')
                }
              } else if (screen === 'complete') {
                setScreen('home')
                setTopicIndex(0)
              }
            }}
          />
        )}
      </div>
    </main>
  )
}

export default App
