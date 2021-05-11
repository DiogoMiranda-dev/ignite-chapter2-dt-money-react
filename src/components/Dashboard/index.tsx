import { Summary } from '../Summary';
import { TransactionsTables } from '../TransactionsTables';
import { Container } from './styled';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTables />
    </Container>
  );
}
