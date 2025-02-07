### Marketplace Technical Foundation - Furniture Store eCommerce

---

#### **1. System Architecture Overview**

##### **Architecture Diagram**

```text
[Frontend (Next.js)]
     |
[Sanity CMS] ←--- [Product Data API]
     |
[Third-Party API] ---> [Shipment Tracking API]
     |
[Payment Gateway]
```

#### **2. Key Workflows**

##### **Workflow 1: User Registration**

1. User signup with provider or email details.
2. Data is sent to Sanity CMS and stored in the `customers` schema.

##### **Workflow 2: Product Browsing**

1. User visits the homepage or product categories.
2. Sanity CMS API fetches product details (e.g., furniture type, dimensions, price).
3. Products are displayed dynamically on the frontend.

##### **Workflow 3: Order Placement**

1. User adds furniture items to the cart and proceeds to checkout.
2. Order details (e.g., product, customer ID, payment status) are sent to Sanity CMS.
3. Payment is processed via a payment gateway.
4. Confirmation details are stored in Sanity CMS.

##### **Workflow 4: Shipment Tracking**

1. Order status updates are fetched via a third-party API.
2. Shipment details (e.g., status, delivery estimate) are displayed in the user's order history.

---

#### **3. API Endpoints**

| **Endpoint**            | **Method** | **Purpose**                                   |
| ----------------------- | ---------- | --------------------------------------------- |
| `/products`             | GET        | Fetch all furniture details                   |
| `/products`             | POST       | Add a new product                             |
| `/products/id`          | GET        | Fetch product with that `id`                  |
| `/orders`               | GET        | Fetch all orders                              |
| `/orders`               | POST       | Create a new order                            |
| `/orders/customer`      | GET        | Fetch all orders of `customer`                |
| `/orders/customer/id`   | GET        | Fetch order with the `customer` and `id`      |
| `/shipment`             | GET        | Track order shipment                          |
| `/shipment`             | POST       | New shipment                                  |
| `/shipment/customer`    | GET        | Track all shipment orders of `customer`       |
| `/shipment/customer/id` | GET        | Track order shipment with `customer` and `id` |

---
