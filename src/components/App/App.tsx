import { useState } from 'react'
import type { Votes, VoteType } from '../../types/votes'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import css from './App.module.css'

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleVote = (type: VoteType) => {
    setVotes((currentVotes) => ({
      ...currentVotes,
      [type]: currentVotes[type] + 1,
    }))
  }

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 })
  }

  const canReset = votes.good + votes.neutral + votes.bad > 0

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
    </div>
  )
}

export default App
