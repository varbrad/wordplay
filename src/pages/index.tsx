import React, { useState } from 'react'
import Link from 'next/link'
import TextInput from '../components/ui/TextInput/TextInput'

const Index = (): JSX.Element => {
  const [code, setCode] = useState('')

  return (
    <div>
      <p>Enter a room code</p>
      <TextInput value={code} onChange={setCode} />
      <Link href='/game/[code]' as={`/game/${code}`}>
        <a>Go</a>
      </Link>
    </div>
  )
}

export default Index
