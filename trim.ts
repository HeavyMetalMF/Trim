export const trim = (str: string, ch: string[]) => {
    let start = 0,
        end = str.length;

    while (start < end && ch.includes(str[start]))
        ++start;

    while (end > start && ch.includes(str[end - 1]))
        --end;

    return (start > 0 || end < str.length) ? str.substring(start, end) : str;
};