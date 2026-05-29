import aerospaceEngineer from '../data/career/aerospace-engineer.json';
import { CareerWonderCard } from './components/CareerWonderCard';
import type { WonderCardData } from './types';

export default function App() {
  return (
    <main className="studio-shell">
      <section className="studio-intro">
        <p>Editable-first WonderCards Studio</p>
        <h1>Aerospace Engineer Career Edition</h1>
      </section>
      <CareerWonderCard card={aerospaceEngineer as WonderCardData} />
    </main>
  );
}
