const About = () => {
    const handleClick = () => {
        console.log(`this is running`)
    }
    return (
        <>
            <h1>This is About</h1>
            <button onClick={handleClick}>BUTTON</button>
        </>
    )
}

export default About;