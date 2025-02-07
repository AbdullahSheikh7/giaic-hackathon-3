# Furniture E-Commerce Marketplace Plan

## Step 1: Choose Your Marketplace Type

**Chosen Marketplace Type:** General E-Commerce

### Primary Purpose:

The primary purpose of this marketplace is to provide a convenient platform where customers can explore and purchase high-quality furniture. The marketplace will provide a wide range of furnitures including living room, bedroom, dining, office, and outdoor.

---

## Step 2: Define Your Business Goals

### What Problem Does Your Marketplace Aim to Solve?

Our marketplace addresses the following problems:

1. **Lack of Variety:** Customers often struggle to find a single platform with diverse furniture options.
2. **Delivery Issues:** Delayed or unreliable delivery services affect customer satisfaction.

### Who is Your Target Audience?

Homeowners, renters, and office managers, interior designers and businesses looking for furnitures purchases.

### What Products or Services Will You Offer?

- **Products:**
  - Living room furniture: Sofas, coffee tables, TV stands.
  - Dining furniture: Tables, chairs, bar stools.
  - Office furniture: Desks, ergonomic chairs, storage units.
  - Outdoor furniture: Patio sets, lounge chairs.
- **Services:**
  - Free delivery for orders above a certain value.
  - Assembly and installation services.

### What Will Set Your Marketplace Apart?

- **Speed:** Fast delivery within 2-3 days for in-stock items.
- **Affordability:** Competitive pricing with installment payment options.
- **Sustainability:** Eco-friendly materials and partnerships with sustainable furniture brands.

---

## Step 3: Create a Data Schema

### Entities in the Marketplace:

1. **Products**
2. **Orders**
3. **Customers**
4. **Delivery Zones**
5. **Shipments**
6. **Payments**

### Relationships Between Entities:

```text
    [Order] ←---→ [Customer]
     ↑  ↓
     | [Product]
     |
 [Shipment] ---→ [Delivery Zone]
```

### Key Fields for Each Entity:

#### Products:

- **ID:** Unique identifier for each product.
- **Name:** Product name (e.g., "Modern Sofa Set").
- **Price:** Cost per unit.
- **Stock:** Quantity available.
- **Category:** Product classification (e.g., Living Room, Bedroom).
- **Tags:** Keywords for searchability (e.g., "wooden, modern, affordable").

#### Orders:

- **Order ID:** Unique identifier for each order.
- **Customer ID:** Unique Identifier of the customer.
- **Product Details:** List of products, quantities, and prices.
- **Status:** Order status (e.g., Pending, Shipped, Delivered).
- **Timestamp:** Date and time of order placement.

#### Customers:

- **Customer ID:** Unique identifier.
- **Name:** Full name of the customer.
- **Contact Info:** Phone number and email address.
- **Address:** Delivery address.
- **Order History:** List of past orders.

#### Delivery Zones:

- **Zone Name:** Identifier for the delivery zone.
- **Coverage Area:** Postal codes or regions served.
- **Assigned Drivers:** Details of delivery personnel.

#### Shipments:

- **Shipment ID:** Unique identifier for tracking shipments.
- **Order ID:** Linked order.
- **Status:** Current status (e.g., In Transit, Delivered).
- **Delivery Date:** Expected or actual delivery date.

#### Payments:

- **Payment ID:** Unique identifier for each transaction.
- **Order ID:** Linked order.
- **Amount:** Total payment amount.
- **Status:** Payment status (e.g., Paid, Pending).
- **Method:** Payment method (e.g., Credit Card, PayPal).

---
