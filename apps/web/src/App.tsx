import useSWR from 'swr'
import { fetcher } from './utils/fetcher'


export default function App () {
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