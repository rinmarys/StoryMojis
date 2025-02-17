import React, { useState } from 'react';
import './StoryMojis.css';

function StoryMojis() {
    const emojis = ['💀', '👻', '🎶', '🐈‍⬛', '🐾', '🕸️', '🕷️', '🫂', '🔮', '🎤', '🎸', '🎹', '⛓️', '🩼', '💣', '🎥', '📼', '🏴‍☠️', '🏳️', '🌋']

    const [emoji, setEmoji] = useState('')
    const [historial, setHistorial] = useState([]) // Guardar los últimos 5 emojis

    const randomEmoji = () => {
        const randomIndex = Math.floor(Math.random() * emojis.length)
        const nuevoEmoji = emojis[randomIndex]

        setEmoji(nuevoEmoji)

        setHistorial((prevHistorial) => {
            const nuevoHistorial = [nuevoEmoji, ...prevHistorial]
            return nuevoHistorial.slice(0, 5) // Mantiene solo los últimos 5
        })
    }

    const reiniciarJuego = () => {
        setEmoji('')
        setHistorial([]) // Borra el historial
    }

    return (
        <div>
            <div className="alinhamento-display">
                <div className="container-alinhamento-um">
                    <div className="container-alinhamento-gameExplanation">
                        <img src="Estrela-roxa-forte.svg" alt="Estrela" className='estrela-roxona' />
                        <h1 className='site-name'>StoryMojis</h1>
                        <p className='game-explanation'>
                            StoryMojis es un juego creativo donde al presionar un botón, aparece un emoji aleatorio.
                            Usa el emoji como inspiración para contar historias o dar rienda suelta a tu imaginación.
                        </p>

                        <img src="Estrela-roxa-clara.svg" alt="Estrela" className='estrela-roxinha' />

                        <div className="alinhamento-button-mobile">
                            {historial.length < 5 ? (
                                <button onClick={randomEmoji} className='button-game'>Jugar</button>
                            ) : (
                                <button onClick={reiniciarJuego} className='button-game reiniciar'>Reiniciar</button>
                            )}
                        </div>

                    </div>
                </div>

                <div className="container-sem-display">
                    <div className="moji-story-container">
                        <div className='moji-story-alinhamento'>{emoji}</div>
                    </div>

                    <div className="historico-emojis-container">
                        <h2>Histórico de emojis:</h2>
                        <p className='emojis-historico'>{historial.join(' ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryMojis;

