export const whatsappLink = (message: string, phone?: number, isMobile?: boolean) => {
    let url = isMobile ? "https://wa.me" : "https://web.whatsapp.com";
    if (phone) {
        url += isMobile ? `/${phone}` : `?phone=${phone}`;
    } else {
        url += "?";
    }
    url += `text=${message}`;
    console.log(url);
    return url;
};
