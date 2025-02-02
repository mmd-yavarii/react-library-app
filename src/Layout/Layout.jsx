function Layout(props) {
    const styles = {
        backgroundColor: '#303030',
        padding: '0.5em',
        margin: '0.5em 0',
        borderRadius: '10px',
        marginBottom: '1em',
    };

    return (
        <>
            <header style={styles}>
                <h3>Book App</h3>
            </header>

            {props.children}

            <footer
                style={{ ...styles, textAlign: 'center', marginBottom: '0' }}
            >
                <p>i wish you the best ❤️</p>
            </footer>
        </>
    );
}

export default Layout;
