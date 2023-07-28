export const trimTitle = (title: string, expectedLength: number) => {
    if(title.length > expectedLength) {
        return `${title.substring(0, expectedLength)}...`;
    } else {
        return title;
    }
}