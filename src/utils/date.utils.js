// July 30, 2023
export const formatedDate = (timestamp) =>
    new Date(timestamp).toLocaleDateString('en', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
