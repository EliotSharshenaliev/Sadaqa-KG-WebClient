
export const getRegisteredDays  = (timestamp: string | undefined) => {
    if (timestamp != null){
        const currentDate = new Date();
        const providedDate = new Date(timestamp);
        // @ts-ignore
        const timeDifference = currentDate - providedDate
        const days =  Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return days > 0 ? days + " дней" : "1 день"
    }
    return "1 день"
}
