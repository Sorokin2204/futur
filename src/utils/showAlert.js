import { useDispatch } from 'react-redux';
import { closeAlert, openAlert } from '../redux/slices/alertSlice';
import rootStore from '../redux/store';

export const showAlert = (type, text) => {
  rootStore.dispatch(closeAlert());
  rootStore.dispatch(
    openAlert({
      type,
      text,
    }),
  );
  setTimeout(() => {
    rootStore.dispatch(closeAlert());
  }, 3000);
};
