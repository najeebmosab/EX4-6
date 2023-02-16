function BallComponents(props) {
    return (
        <>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{ backgroundColor: props.colorKid, borderRadius: "50%", width: "50px", height: "50px", }}>

                </div>
            </div>
        </>
    )
}

export { BallComponents }