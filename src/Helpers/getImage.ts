export const getImage = (img: string) => (['self', 'default'].includes(img) ? 'https://picsum.photos/100/100' : img)
