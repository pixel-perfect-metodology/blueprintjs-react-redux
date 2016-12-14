export const IsNullOrEmpty = (s: string) => {
    if (s === undefined || s === null || s.trim() === '')
        return false;
    else
        return true;
}