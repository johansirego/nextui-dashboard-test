import type {NextPage} from 'next';

const Accounts: NextPage = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h1>Accounts Page</h1>
      <p>This is a simplified placeholder page.</p>
    </main>
  );
};

export default Accounts;
