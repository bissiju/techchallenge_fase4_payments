export async function payWithQRCode(QRCode, bill) {
  if (
    QRCode &&
    typeof QRCode == 'string' &&
    typeof bill == 'number'
  ) {
    return Math.random() > 0.5;
  } else {
    throw new Error('missing required parameters');
  }
}
