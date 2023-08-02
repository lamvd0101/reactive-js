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

  /**
   * Setup view model
   */
  private setup() {
    this.key = randomKey();
    store.dispatch(setViewModelKey(this.key));
  }

  // === Public methods ===
  /**
   * Destroy view model from store.
   * To optimize store size.
   */
  destroy(): void {
    store.dispatch(removeViewModelKey(this.key));
  }

  /**
   * Manually trigger re-render component.
   */
  triggerRender() {
    store.dispatch(setViewModelKey(this.key));
  }
}
