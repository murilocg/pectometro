class LoadingActions {
  SHOW = 'LOADING/SHOW';
  HIDE = 'LOADING/HIDE';
  show = () => ({
    type: this.SHOW,
    open: true
  });
  hide = () => ({
    type: this.HIDE,
    open: false
  });
}

export default new LoadingActions();
