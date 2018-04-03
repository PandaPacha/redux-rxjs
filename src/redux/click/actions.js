export const MOUSE_CLICK = 'MOUSE_CLICK'


export const handleClick = (distance) => ({
    type: MOUSE_CLICK,
    payload: {distance}
})
