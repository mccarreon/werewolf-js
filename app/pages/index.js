import { useState } from 'react';
import Layout from '../components/layout'
import PlayerImportModal from '../components/playerImportModal'

const Home = () => {
  const [players, setPlayers] = useState([]);

  return (
    <Layout>
      <PlayerImportModal 
        setPlayers={setPlayers}
      />
      <div className="grid overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Alignment</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx+1}</th>
                <th>{player.name}</th>
                <th>{player.alignment ? player.alignment : 'Unknown'}</th>
                <th>{player.role}</th>
                <th>{player.alive ? "Alive" : "Dead"}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Home
