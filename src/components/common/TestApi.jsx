import { idDupCheck } from '../../apis/auth';

export default function TestApi() {
  const idDup = () => {
    const jsonData = { email: 'test@test.com' };
    idDupCheck(jsonData).then(response => {
      if (response.status === 200) {
        console.log(response);
      } else if (response.status === 400) {
        console.log(response);
      }
    });
  };
  return (
    <>
      <h1>Test</h1>
      <button type="button" onClick={idDup}>
        test
      </button>
    </>
  );
}
