import { createAction } from "@reduxjs/toolkit"

let open = createAction( /* defino una accion para controlar que la alerta se abra */
    'open',
    ({ icon,text })=> { return { payload: { icon, text, visible: true } }}
)

let close = createAction( /* defino una accion para controlar que la alerta se cierre */
    'close',
    ({ icon,text })=> { return { payload: { icon, text, visible: false} }}
)

const alertActions = { open,close }
export default alertActions