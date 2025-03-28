const RootHeader = ({ heading, children }) => {

    return (
        <header id="main_header">

            <div>
                <h1 className="fs-700">{heading || "FindMate"}</h1>
                <div className="options">{children}</div>
            </div>

        </header>
    );

}

export default RootHeader;