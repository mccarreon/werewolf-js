export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-lg">Definitely Not Overkill Werewolf Helper</h1>
        </div>
        <div className="flex-0">
          <ul className="menu menu-horizontal p-0">
            <li>
              <label 
                htmlFor="player-import-modal" 
                className="modal-button"
              >
                Import players
              </label>
            </li>
            <li>
              <p>Pick a theme &nbsp;➡️</p>
            </li>
            <select className="select" data-choose-theme>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="cupcake">Cupcake</option>
              <option value="bumblebee">Bumblebee</option>
              <option value="synthwave">Synthwave</option>
              <option value="forest">Forest</option>
              <option value="aqua">Aqua</option>
            </select>
          </ul>
        </div>
      </nav>
      <main className="container">{children}</main>
    </div>
  )
}
  