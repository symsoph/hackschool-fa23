import styles from './CardComponent.module.css';

// Create a functional component that will display game history
// Remember to return one top-level div, and nest the rest of your elements inside of it
// It should take in props for the sentence, correctChars, incorrectChars, wpm, and time
// Export your GameHistory component!

//could have pasted NavBar component
const CardComponent = ({sentence, correctCharacters, incorrectCharacters, wpm, time}) =>
{
    return (
        <div className={styles.card}>
        <p className={styles.cardContent}>
            <b>Sentence: {sentence}</b>
            </p>
        <p className={styles.cardContent}>
            <b>CorrectCharacters: {correctCharacters}</b>
        </p>
        <p className={styles.cardContent}>
            <b>IncorrectCharacters: {incorrectCharacters}</b>
        </p>
        <p className={styles.cardContent}>
            <b>WordsPerMin: {wpm}</b>
        </p>
        <p className={styles.cardContent}>
            <b>Time: {time}</b>
        </p>
        </div> 
    );

};

export default CardComponent;
