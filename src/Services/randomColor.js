export const randomColor = () => {
    const color = `rgb(${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
    )},${Math.floor(Math.random() * 100)})`;
    return color;
};
