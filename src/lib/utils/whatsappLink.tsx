export const whatsappLink = (message: string, phone?: number, isMobile?: boolean) => {
    let url = isMobile ? "https://wa.me" : "https://web.whatsapp.com/send";
    if (phone) {
        url += isMobile ? `/${phone}` : `?phone=51${phone}&`;
    } else {
        url += "?";
    }
    url += `text=${message}`;
    return url;
};
