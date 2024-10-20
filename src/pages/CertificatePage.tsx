
import { useNavigate } from 'react-router-dom';
import CertificateForm from '../components/CertificateForm';
import Generalquestions from '@/components/Generalquestions';

export default function CertificatePage() {
  const navigate = useNavigate();

  const handleFormSubmit = (submittedName: string) => {
    navigate('/generate', { state: { name: submittedName } });
  };

  return (
    <div className=''>
      <CertificateForm onSubmit={handleFormSubmit} />
      <Generalquestions />
    </div>
  );
}
