export default function Navbar() {

    function handleClick() {
        infoClicked();
    }
    
    return (
        <>
            <section className="title">
                <div>
                    <p className="star">★</p>
                </div>

                <div className="link" id="link">
                    <a href="https://blueroomstudios.com.au/">
                        <p>the blueroom</p>
                    </a>
                </div>

                <div className="info link">
                    <p onClick={handleClick}>information</p>
                </div>
            </section>
        </>
    )
}