import { useState } from "react";

export default function PlayerImportModal({setPlayers}) {
  const [importedPlayersText, setPlayersText] = useState('');

  const handleImportedPlayers = e => {
    setPlayersText(e.target.value);
  }

  const handleClose = e => {
    setPlayersText('');
  }

  const handleSave = e => {
    const splitPlayers = importedPlayersText.split(/[\n,]/)
      .map(e => e.trim()).filter(e => e.length > 0);
    
    const playerObjects = splitPlayers.map((player, idx) => {
      return {
        id: idx+1,
        name: player,
        alignment: null,
        role: null,
        alive: true
      }
    })
    console.log(playerObjects)
    setPlayersText('');
    setPlayers(playerObjects);
  }

  return (
    <>
      <input type="checkbox" id="player-import-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h2 className="font-bold text-lg">Player Import</h2>
          <p className="pb-3">Enter player names separated by new lines or commas</p>
          <textarea 
            className="textarea textarea-accent w-full" 
            placeholder="Matt, Jane, John, ..."
            value={importedPlayersText}
            onChange={handleImportedPlayers}
          ></textarea>
          <div className="modal-action">
            <label htmlFor="player-import-modal" className="btn bg-secondary" onClick={handleClose}>Close</label>
            <label htmlFor="player-import-modal" className="btn" onClick={handleSave}>Save</label>
          </div>
        </div>
      </div>
    </>
  )
}