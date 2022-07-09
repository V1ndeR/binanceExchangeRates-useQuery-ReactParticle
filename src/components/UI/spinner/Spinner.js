import './Spinner.css'

export const Spinner = () => {
    return (
        <>
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="loader loader-inner"/>
                </div>
            </div>
            <div style={{height: '100vh'}}></div>
        </>
    )
}