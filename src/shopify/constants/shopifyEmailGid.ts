export const shopifyEmailGid = [
  {
    id: 'gid://shopify/CustomerNotificationSetting/order_confirmation',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Order confirmation',
    description:
      'Sent automatically to the customer after they place their order.',
    editEmailTemplatePath: '/admin/email_templates/order_confirmation/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/order_edited',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Order edited',
    description:
      'Sent to the customer after their order is edited (if you select this option).',
    editEmailTemplatePath: '/admin/email_templates/order_edited/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/order_invoice',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Order invoice',
    description:
      'Sent to the customer when the order has an outstanding balance.',
    editEmailTemplatePath: '/admin/email_templates/order_invoice/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/order_cancelled',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Order cancelled',
    description:
      'Sent automatically to the customer if their order is cancelled (if you select this option).',
    editEmailTemplatePath: '/admin/email_templates/order_cancelled/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/refund_notification',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Order refund',
    description:
      'Sent automatically to the customer if their order is refunded (if you select this option).',
    editEmailTemplatePath: '/admin/email_templates/refund_notification/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/draft_order_invoice',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Draft order invoice',
    description:
      'Sent to the customer when a draft order invoice is created. You can edit this email invoice before you send it.\n',
    editEmailTemplatePath: '/admin/email_templates/draft_order_invoice/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/buy_online',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Abandoned POS checkout',
    description:
      'Sent to the customer when you email their cart from POS. Includes a link to buy online.\n',
    editEmailTemplatePath: '/admin/email_templates/buy_online/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/abandoned_checkout_notification',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Abandoned checkout',
    description:
      'Sent to the customer if they leave checkout before they buy the items in their cart. Configure options in "<a href="/admin/settings/checkout">checkout settings</a>".\n',
    editEmailTemplatePath:
      '/admin/email_templates/abandoned_checkout_notification/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/ready_for_pickup',
    groupName: 'pickup',
    groupDisplayName: 'Local pickup',
    displayName: 'Ready for pickup',
    description:
      'Sent to the customer manually through Point of Sale or admin. Lets the customer know their order is ready to be picked up.',
    editEmailTemplatePath: '/admin/email_templates/ready_for_pickup/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/pickup_receipt',
    groupName: 'pickup',
    groupDisplayName: 'Local pickup',
    displayName: 'Picked up',
    description: 'Sent to the customer when the order is marked as picked up.',
    editEmailTemplatePath: '/admin/email_templates/pickup_receipt/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/pos_exchange_receipt',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'POS exchange receipt',
    description:
      'Sent to the customer after they complete an exchange in person and want to be emailed a receipt.',
    editEmailTemplatePath: '/admin/email_templates/pos_exchange_receipt/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/exchange_v2_receipt',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'POS exchange V2 receipt',
    description:
      'Sent to the customer after they complete an exchange V2 in person and want to be emailed a receipt.',
    editEmailTemplatePath: '/admin/email_templates/exchange_v2_receipt/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/gift_card_notification',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Gift card created',
    description:
      'Sent automatically to the customer when you issue or fulfill a gift card.',
    editEmailTemplatePath: '/admin/email_templates/gift_card_notification/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/failed_payment_processing',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Payment error',
    description:
      'Sent automatically to the customer if their payment can’t be processed during checkout.',
    editEmailTemplatePath:
      '/admin/email_templates/failed_payment_processing/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/pending_payment_failure',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Pending payment error',
    description:
      'Sent automatically to the customer if their pending payment can\'t be processed after they have checked out. Learn more about <a href="https://help.shopify.com/manual/orders/manage-orders/alt_payments_pending" target="_blank">pending payments</a>.',
    editEmailTemplatePath:
      '/admin/email_templates/pending_payment_failure/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/pending_payment_success',
    groupName: 'order',
    groupDisplayName: 'Orders',
    displayName: 'Pending payment success',
    description:
      'Sent automatically to the customer when their pending payment is successfully processed after they have checked out. Learn more about <a href="https://help.shopify.com/manual/orders/manage-orders/alt_payments_pending" target="_blank">pending payments</a>.',
    editEmailTemplatePath:
      '/admin/email_templates/pending_payment_success/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/fulfillment_request',
    groupName: 'shipping',
    groupDisplayName: 'Shipping',
    displayName: 'Fulfillment request',
    description:
      'Sent automatically to a third-party fulfillment service provider when order items are fulfilled.',
    editEmailTemplatePath: '/admin/email_templates/fulfillment_request/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/shipping_confirmation',
    groupName: 'shipping',
    groupDisplayName: 'Shipping',
    displayName: 'Shipping confirmation',
    description:
      'Sent automatically to the customer when their order is fulfilled (if you select this option).',
    editEmailTemplatePath: '/admin/email_templates/shipping_confirmation/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/shipping_update',
    groupName: 'shipping',
    groupDisplayName: 'Shipping',
    displayName: 'Shipping update',
    description:
      'Sent automatically to the customer if their fulfilled order’s tracking number is updated (if you select this option).\n',
    editEmailTemplatePath: '/admin/email_templates/shipping_update/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/shipment_out_for_delivery',
    groupName: 'shipping',
    groupDisplayName: 'Shipping',
    displayName: 'Out for delivery',
    description:
      'Sent to the customer automatically after orders with tracking information are out for delivery.',
    editEmailTemplatePath:
      '/admin/email_templates/shipment_out_for_delivery/edit',
    suppressible: true,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/local_out_for_delivery',
    groupName: 'local_delivery',
    groupDisplayName: 'Local delivery',
    displayName: 'Local order out for delivery',
    description:
      'Sent to the customer when their local order is out for delivery.',
    editEmailTemplatePath: '/admin/email_templates/local_out_for_delivery/edit',
    suppressible: true,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/local_delivered',
    groupName: 'local_delivery',
    groupDisplayName: 'Local delivery',
    displayName: 'Local order delivered',
    description: 'Sent to the customer when their local order is delivered.',
    editEmailTemplatePath: '/admin/email_templates/local_delivered/edit',
    suppressible: true,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/local_missed_delivery',
    groupName: 'local_delivery',
    groupDisplayName: 'Local delivery',
    displayName: 'Local order missed delivery',
    description: 'Sent to the customer when they miss a local delivery.',
    editEmailTemplatePath: '/admin/email_templates/local_missed_delivery/edit',
    suppressible: true,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/shipment_delivered',
    groupName: 'shipping',
    groupDisplayName: 'Shipping',
    displayName: 'Delivered',
    description:
      'Sent to the customer automatically after orders with tracking information are delivered.',
    editEmailTemplatePath: '/admin/email_templates/shipment_delivered/edit',
    suppressible: true,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/customer_marketing_confirmation',
    groupName: 'email_marketing',
    groupDisplayName: 'Email marketing',
    displayName: 'Customer marketing confirmation',
    description:
      'Sent to the customer automatically when they sign up for email marketing (if email double opt-in is enabled).',
    editEmailTemplatePath:
      '/admin/email_templates/customer_marketing_confirmation/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/customer_account_activate',
    groupName: 'customer',
    groupDisplayName: 'Customer',
    displayName: 'Customer account invite',
    description:
      'Sent to the customer with account activation instructions. You can edit this email before you send it.',
    editEmailTemplatePath:
      '/admin/email_templates/customer_account_activate/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/customer_account_welcome',
    groupName: 'customer',
    groupDisplayName: 'Customer',
    displayName: 'Customer account welcome',
    description:
      'Sent automatically to the customer when they complete their account activation.',
    editEmailTemplatePath:
      '/admin/email_templates/customer_account_welcome/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/customer_account_reset',
    groupName: 'customer',
    groupDisplayName: 'Customer',
    displayName: 'Customer account password reset',
    description:
      'Sent automatically to the customer when they ask to reset their accounts password.',
    editEmailTemplatePath: '/admin/email_templates/customer_account_reset/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/contact_buyer',
    groupName: 'customer',
    groupDisplayName: 'Customer',
    displayName: 'Contact customer',
    description:
      'Sent to the customer when you contact them from the orders or customers page. You can edit this email before you send it.',
    editEmailTemplatePath: '/admin/email_templates/contact_buyer/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/return_created',
    groupName: 'return',
    groupDisplayName: 'Returns',
    displayName: 'Return instructions',
    description:
      'Sent automatically to the customer when you create a return. Includes instructions as well as a return label, if applicable.',
    editEmailTemplatePath: '/admin/email_templates/return_created/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
  {
    id: 'gid://shopify/CustomerNotificationSetting/return_label_notification',
    groupName: 'return',
    groupDisplayName: 'Returns',
    displayName: 'Return label',
    description: 'Sent to the customer after creating a return label.',
    editEmailTemplatePath:
      '/admin/email_templates/return_label_notification/edit',
    suppressible: false,
    suppressed: false,
    __typename: 'CustomerNotificationSetting',
  },
];
