export const generateColor = (input) => {
    const id = `${input}`;
    let hash = 0;
    for (let i = 0; i < id.length; i += 1) {
        // eslint-disable-next-line no-bitwise
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i += 1) {
        // 강제로 0.5 곱해서 색을 좀 더 어둡게 함.
        // eslint-disable-next-line no-bitwise
        const value = Math.floor(((hash >> (i * 8)) & 0xff) * 0.5);
        colour += `00${value.toString(16)}`.substr(-2);
    }
    return colour;
};

// (20, 80, 10), 균형감이 있지만 범위 한정으로 컨테이너 개수가 늘어나면 겹치게 됨.
export const generatePercent = (input) => {
    const x = Math.sin(input) * 10000;
    const value = Math.floor((x - Math.floor(x)) * 6) * 10 + 20;
    return `${value}%`;
};
