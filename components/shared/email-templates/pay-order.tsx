interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Заказ, #{orderId}!</h1>
    
    <p>
      Оплатите заказ на сумму {totalAmount} р. Перейдите
      <a href={paymentUrl}> по этой ссылке для заказа.</a>
    </p>
  </div>
);
