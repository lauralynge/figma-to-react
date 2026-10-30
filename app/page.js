import PillModal from "@/components/PillModal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Laws of UX</h1>
      <div className={styles.pills}>
        <Pill type="primary">Primær</Pill>
        <Pill type="secondary">Sekundær</Pill>
      </div>
      {/* A closed <dialog> is hidden. Give it isOpen to see it in step 1.1. From step 1.2, PillModal opens it. */}
      <PillModal
        type="primary"
        label="Hick's Law"
        title="Hick's Law"
        text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
      />
      <PillModal
        type="secondary"
        label="Fitts's Law"
        title="Fitts's Law"
        text="Jo længere væk et mål er, jo længere tid tager det at nå det."
        showSeparator={false}
      />
      <PillModal
        type="primary"
        label="Jakobs's Law"
        title="Jakobs's Law"
        text="Brugere forventer, at dit produkt fungerer som andre produkter, de allerede kender."
        showSeparator={true}
      />
    </main>
  );
}
