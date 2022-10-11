import { FC } from 'react'

interface IApp {}

const App: FC<IApp> = () => {
    return (
        <div className='bg-black'>
            <h2 className='text-4xl text-red-600'>The app has started</h2>
        </div>
    )
}

export default App