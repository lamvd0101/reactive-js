import {randomKey} from '../../../utils/key';
import {removeViewModelKey, setViewModelKey} from '../../reducer';
import {store} from '../../store';
import type {ViewModel} from '../interfaces/ViewModel';

export class ViewModelClass<T = any> implements ViewModel<T> {
  key: string;
  data: T;

  constructor() {
    this.setup();
  }

  private setup() {
    this.key = randomKey();
    store.dispatch(setViewModelKey(this.key));
  }

  // === Public methods ===
  destroy(): void {
    store.dispatch(removeViewModelKey(this.key));
  }

  triggerRender() {
    store.dispatch(setViewModelKey(this.key));
  }
}
