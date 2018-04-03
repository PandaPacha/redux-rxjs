export const CLICK_TOTAL = 'CLICK_TOTAL'
export const CLICK_XY = 'CLICK_XY'


export const handleClick = (distance) => ({
    type: CLICK_TOTAL,
    payload: {distance}
})

export const handleClickXY = (x, y) => ({
    type: CLICK_XY,
    payload: {x, y},
})
