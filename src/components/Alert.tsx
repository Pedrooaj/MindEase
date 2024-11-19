import Alert from 'react-bootstrap/Alert';


// Podemos tambem passar um tipo generio como interface ao inves de um objeto
const Alerta: React.FC<{children: React.ReactNode, variant: string }> = ({ children, variant }) => {
  return (
    <>
        <Alert variant={variant}>
          { children }
        </Alert>
    </>
  );
}

export default Alerta;