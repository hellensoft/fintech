import { atom } from 'recoil'

const openPhoneMenu = atom({
    key: "openPhoneMenu",
    default: false
})

export { openPhoneMenu }