export const devices = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

export const verifyMobile = () => {
    return devices.some((device) => {
        return navigator.userAgent.match(device);
    });
};
