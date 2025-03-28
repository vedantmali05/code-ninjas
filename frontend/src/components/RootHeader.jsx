const RootHeader = ({ heading, children, childrenLeft }) => {

    return (
        <header id="main_header">

            <div>
                <div className="options">{childrenLeft}</div>
                <h1 className="fs-700">{heading || "FindMate"}</h1>
                <div className="options">{children}</div>
            </div>

        </header>
    );

}

export default RootHeader;