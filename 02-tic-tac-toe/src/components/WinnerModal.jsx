import { Square } from "./square"
export function WinnerModal({winner, resetGame}) {
    if (winner === null) return null
    const winnerText = winner === false ? 'Empate' : 'Ganó:'
    return (
    <section className='winner'>
        <div className="texto">
            <h2>{winnerText}</h2>
            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>
            <footer>
                <button onClick={resetGame}>Empezar denuevo</button>
            </footer>
        </div>
    </section>
    )

}