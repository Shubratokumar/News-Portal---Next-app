import React from 'react'

export const metadata = {
    title: "Next - Archive News",
    description: "Archive News here",
  };

const ArchiveLayout = ({archive, latest }) => {
  return (
    <div>
        <h1>Archive News</h1>
        <section className="mt-3">
            {archive}
        </section>
        <section className="mt-3">
            {latest}
        </section>
    </div>
  )
}

export default ArchiveLayout