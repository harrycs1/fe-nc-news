export const SortBy = ({ params, searchParams, setSearchParams }) => {
    function handleSortBy(e) {
        params.set('sort_by', e.target.value)
        setSearchParams(params)
    }

    function handleOrderBy(e) {
        params.set('order', e.target.value)
        setSearchParams(params)
    }
    
    return (
        <div className='flex bg-secondary border border-[#404040] rounded-lg p-2'>
            <p className='w-1/6 block text-sm font-medium text-gray-200'>Sort by:</p>
            <div className='flex justify-between w-5/6'>
                <select className='bg-transparent appearance-none text-sm' onChange={handleSortBy} value={searchParams.get('sort_by') || 'created_at'}>
                    <option value='created_at'>Date</option>
                    <option value='comment_count'>Comment Count</option>
                    <option value='votes'>Votes</option>
                    <option value='author'>Author</option>
                    <option value='title'>Title</option>
                </select>
                <select className='bg-secondary text-sm appearance-none justify-self-end' onChange={handleOrderBy} value={searchParams.get('order') || 'desc'}>
                    <option value='desc'>Descending</option>
                    <option value='asc'>Ascending</option>
                </select>
            </div>
        </div>
    )
}