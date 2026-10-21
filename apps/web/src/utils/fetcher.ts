export const fetcher = <T extends string>(endpoint: T) => fetch(endpoint).then(res => res.json())
