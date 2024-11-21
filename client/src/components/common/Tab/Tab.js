

function AnfitInfo() {
    const [currentTab, clickTab] = useState(0);

    return (
        <>
        <ul className="tab-nav">
            {menuArr.map((el,index) => (
                <li key={index} className={index === currentTab ? "nav-btn active" : "nav-btn" }
                onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
            </ul>
        <div className="tab-contents">
            <div>{menuArr[currentTab].content}</div>
        </div>
        </>
    )
}

