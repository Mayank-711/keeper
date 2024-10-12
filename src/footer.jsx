import './style.css';

const year = new Date().getFullYear(); // Correct way to get the current year

function Footer() {
    return (
        <>
        <div class="footer"><p>Copyright {year}</p></div>
            
        </>
    );
}

export { Footer };
