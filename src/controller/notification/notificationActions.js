class NotificationActions {
  SEND = 'NOTIFICATION/SEND';
  CLOSE = 'NOTIFICATION/CLOSE';
  send = notification => ({
    type: this.SEND,
    notification: { open: true, ...notification }
  });
  close = () => ({
    type: this.CLOSE,
    notification: { open: false, messagem: '', tipo: undefined }
  });
}

export default new NotificationActions();
