'use client'

import useSWR from 'swr'

export const fetcher = <T extends string>(endpoint: T) => fetch(endpoint).then(res => res.json())

export default function ClientFetchData () {
    const {data, isLoading} = useSWR('/api/users', fetcher)

    if(isLoading) 
        return <h1>Loading</h1>

    return (
     <div>
        <ul>
            {data?.data.map((el: {name: string}) => <li key={el.name}>{el.name}</li>)}
        </ul>
     </div>
    )

}