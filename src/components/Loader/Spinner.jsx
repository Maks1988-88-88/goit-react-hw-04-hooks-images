import Loader from 'react-loader-spinner';
import s from 'components/Loader/Spinner.module.css';


function Spinner() {
  return (
    <div className={s.spinnerWrapper}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000}
      />
    </div>
  );
}

export default Spinner;
