import React, { useState } from 'react'
import Link from 'next/link'

const Index = (): JSX.Element => {
  const [code, setCode] = useState('')

  return (
    <div>
      <p>Enter a room code</p>
      <input
        type='text'
        value={code}
        onChange={(e): void => setCode(e.target.value)}
      />
      <Link href='/game/[code]' as={`/game/${code}`}>
        Go
      </Link>
    </div>
  )
}

export default Index
