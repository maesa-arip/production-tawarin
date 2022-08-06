import React from 'react'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import Container from '@/Components/Container'

export default function Home() {
  return (
    <div>
        <Head title="Home" />
        <Container>Home</Container>
    </div>
  )
}

Home.layout = page =><App children={page}></App>
