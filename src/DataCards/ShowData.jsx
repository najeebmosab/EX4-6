import "./ShowData.css"
function ShowData(props) {
    const data = props.data;
    function show() {
        return (
            data.map(el => {
                return (
                    <>
                        <div className="card">
                            <img src={el.img} alt="" />
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                            <div className="links">
                                <a href={el.link1.href}>{el.link1.des}</a>
                                <a href={el.link2.href}>{el.link2.des}</a>
                            </div>
                        </div>
                    </>)
            })
        )
    }
    return (
        <>
            <div className="containerCards">
                {show()}
            </div>
        </>
    );
}

export { ShowData };