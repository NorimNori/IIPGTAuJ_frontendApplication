function useReload () {

    const handleRefresh = () => {
        location.reload()
    }

    return {
        handleRefresh
    }
}

export default useReload