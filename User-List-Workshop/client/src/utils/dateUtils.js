export const formatDate = (dataString) => {
    const date = new Date(dataString);
    const dateOption = { year: "numeric", month: "long", day: "numeric" };

    const formattedDate = date.toLocaleDateString('en-US', dateOption);

    return formattedDate;

}