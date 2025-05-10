import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
      <main>
        <h1>Sidebar</h1>
        <Outlet />
      </main>
    </>
  )
}
