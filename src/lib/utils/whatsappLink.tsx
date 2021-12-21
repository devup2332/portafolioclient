export const whatsappLink = (message: string) => {
    const url = `https://web.whatsapp.com/send?text=${message}`;
    return url;
};
