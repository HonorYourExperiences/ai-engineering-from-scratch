import { loadCardFiles } from '../src/exporters/loadCards';
import { validateWonderCard } from '../src/validators/cardValidator';

const cards = await loadCardFiles();
const issues = cards.flatMap(({ file, card }) => validateWonderCard(card, file));

for (const issue of issues) {
  const prefix = issue.level === 'error' ? 'ERROR' : 'WARN';
  console.log(`${prefix} ${issue.file}: ${issue.message}`);
}

const errors = issues.filter((issue) => issue.level === 'error');
if (errors.length > 0) {
  process.exitCode = 1;
} else {
  console.log(`Validated ${cards.length} WonderCard JSON files with ${issues.length} warning(s).`);
}
