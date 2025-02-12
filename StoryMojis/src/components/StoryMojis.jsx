import React, { useState } from 'react'
import './StoryMojis.css'

function StoryMojis() {

    const emojis = ['💀', '👻', '🎶', '🐈‍⬛', '🐾', '🕸️', '🕷️', '🫂', '🔮', '🎤', '🎸', '🎹', '⛓️', '🩼', '💣', '🎥', '📼', '🏴‍☠️', '🏳️', '🌋']

    const [emoji, setEmoji] = useState('')

    const randomEmoji = () => {
        const randomIndex = Math.floor(Math.random() * emojis.length)
        setEmoji(emojis[randomIndex])
    }

    return (
        <div>
            <div className="container-alinhamento-um">
                <div className="container-alinhamento-gameExplanation">
                    <h1 className='site-name'>StoryMojis</h1>

                    <p className='game-explanation'>StoryMojis es un juego creativo donde al presionar un botón, aparece un emoji aleatorio.
                        Usa el emoji como inspiración para contar historias o dar rienda suelta a tu imaginación.
                    </p>

                    <button onClick={randomEmoji} className='button-game'>Jugar</button>
                </div>
            </div>
            <div>{emoji}</div>
        </div>
    )
}

export default StoryMojis
