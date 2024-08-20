import { Outlet } from "react-router-dom"
import GlobalStateManager from "./global_states/GlobalStateManager"

const Core = () => {
  return (
    <GlobalStateManager>
        <Outlet />
    </GlobalStateManager>
  )
}

export default Core