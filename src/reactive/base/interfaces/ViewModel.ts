export interface ViewModel<T = any> {
  /**
   * This is an unique key of view model. It will be used to save to redux store.
   */
  key: string;

  /**
   * This is a data of view. It will trigger re-rendering of view when it changes.
   * A view model was merged from a business data and a view data.
   */
  data: T;

  /**
   * This method will be called when the view model was destroyed.
   */
  destroy(): void;

  /**
   * This method will trigger re-rendering of view.
   */
  triggerRender: () => void;
}
