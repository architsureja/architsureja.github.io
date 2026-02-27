---
title: The Ultimate System Design Roadmap & Cheat Sheet
date: Oct 30, 2023
readTime: 25 min read
excerpt: An exhaustive, roadmap-style guide to System Design interviews. From DNS and Load Balancers to DB Sharding, Streaming, and Fault Tolerance. Use this as your definitive cheat sheet.
tags: System Design, Interview, Architecture, Roadmap, Cheat Sheet
---

## 🚀 The Ultimate System Design Interview Cheat Sheet

A comprehensive roadmap and cheat sheet to tackle System Design interviews. This guide is designed to simulate the depth required to architect large-scale, distributed systems, drawing inspiration from comprehensive resources like `roadmap.sh`.

---

## 1. The Internet & Networking Basics

Before designing a system, you must understand how users reach it.

### DNS (Domain Name System)
*   **What it is:** The phonebook of the internet. Translates human-readable domain names (google.com) to IP addresses (142.250.190.46).
*   **How it works:** Recursive Resolvers -> Root Name Servers -> TLD Name Servers -> Authoritative Name Servers.
*   **Routing Policies:** Latency-based, Geolocation-based, Weighted Round Robin.

### OSI Model & Protocols
*   **Layer 4 (Transport):**
    *   **TCP:** Reliable, ordered, error-checked delivery. (Used for Web, Email, File Transfer). *Slower due to handshake.*
    *   **UDP:** Connectionless, no guarantee of delivery or order. (Used for Video Streaming, Gaming, VoIP). *Fast but lossy.*
*   **Layer 7 (Application):**
    *   **HTTP/1.1:** Keep-alive connections, but suffers from Head-of-Line blocking.
    *   **HTTP/2:** Multiplexing over a single TCP connection, server push.
    *   **HTTP/3:** Uses QUIC (over UDP) to eliminate TCP head-of-line blocking, faster handshakes.

---

## 2. Infrastructure & Delivery

### CDNs (Content Delivery Networks)
*   **What it is:** A globally distributed network of proxy servers deployed in multiple data centers.
*   **Why use it:** Reduces latency by serving static assets (HTML, CSS, JS, Images, Videos) from a server geographically closest to the user. Reduces load on the origin server.
*   **Types:**
    *   *Push CDN:* You explicitly upload content to the CDN. Best for small-traffic or content that rarely changes.
    *   *Pull CDN:* CDN grabs content from the origin server upon the first request and caches it. Best for heavy-traffic apps.

### Load Balancers (LBs)
*   **What it is:** Distributes incoming network traffic across a group of backend servers.
*   **Why use it:** Prevents any single server from becoming a bottleneck, ensuring high availability and reliability.
*   **L4 vs L7 Load Balancing:**
    *   *Layer 4 (Network):* Routes traffic based on IP and Port. Extremely fast, doesn't inspect the payload.
    *   *Layer 7 (Application):* Routes traffic based on the contents of the HTTP request (e.g., URL path, cookies, headers). Allows for smarter routing (e.g., `/video` to video servers).
*   **Algorithms:** Round Robin, Least Connections, IP Hash (useful for sticky sessions).

### API Gateways
*   **What it is:** A server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to the back-end service, and then passing the response back to the requester.
*   **Features:** Authentication, Rate Limiting, SSL Termination, Request Routing, Response Composition (GraphQL-like behavior for REST).

---

## 3. Communication Patterns (APIs)

*   **REST (Representational State Transfer)**
    *   **Best For:** Standard CRUD apps, public-facing APIs where caching is easy.
    *   **Pros:** Stateless, easily cacheable via HTTP verbs, universal standard.
    *   **Cons:** Over-fetching/Under-fetching data; requires multiple sequential calls for complex views.
*   **GraphQL**
    *   **Best For:** Mobile apps (saving bandwidth), complex data models where the client needs flexibility.
    *   **Pros:** Single endpoint, clients request *exactly* what they need, strongly typed schema.
    *   **Cons:** Shifts complexity to the backend (resolving complex queries), caching at the network tier is very difficult.
*   **gRPC**
    *   **Best For:** Microservice-to-microservice internal communication.
    *   **Pros:** Uses HTTP/2 and Protobufs (binary, compressed), heavily typed, extremely fast and efficient, supports streaming.
    *   **Cons:** Not natively browser compatible, difficult to debug manually (it's binary, not JSON text).
*   **WebSockets vs Server-Sent Events (SSE)**
    *   *WebSockets:* Full-duplex (bi-directional), real-time (Chat apps, multiplayer games). Stateful, harder to scale.
    *   *SSE:* Half-duplex (server-to-client only), real-time (Stock tickers, live score updates). Runs over standard HTTP.

---

## 4. Databases (The Hardest Choice)

### Relational (SQL) - PostgreSQL, MySQL
*   **Best For:** Structured data, strict relationships, transactions needing ACID compliance (Atomicity, Consistency, Isolation, Durability).
*   **Pros:** Data integrity, complex JOIN queries.
*   **Cons:** Hard to scale horizontally (Scale-out); usually requires vertical scaling (Scale-up) or complex Sharding.

### NoSQL Data Stores
*   **Key-Value (Redis, DynamoDB, Memcached)**
    *   **Best For:** Caching, session management, user preferences, shopping carts.
    *   **Pros:** Blazing fast O(1) lookups, simple horizontal scaling.
*   **Document (MongoDB, CouchDB)**
    *   **Best For:** Semi-structured data, evolving schemas, catalogs, CMS.
    *   **Pros:** Flexible schema (JSON/BSON), easy object mapping. Data belonging together is stored together.
*   **Wide-Column (Cassandra, HBase)**
    *   **Best For:** Massive write-heavy workloads, time-series data, huge datasets needing high availability.
    *   **Pros:** Extremely fast and scalable writes, decentralized architecture (no single point of failure).
    *   **Cons:** Complex data modeling (you must model around your queries, not your relationships).
*   **Graph (Neo4j)**
    *   **Best For:** Highly connected data, recommendation engines, social networks, fraud detection.
    *   **Pros:** Traversing relationships is extremely fast compared to SQL JOINs.

### Database Scaling Techniques
*   **Replication (Master-Slave):** Master takes writes, Slaves take reads. Improves read throughput and availability.
*   **Partitioning / Sharding:** Splitting a large database horizontally across multiple servers.
    *   *Pros:* Allows endless scaling.
    *   *Cons:* Complex to implement. JOINs across shards are painfully slow; dealing with uneven data distribution ("celebrity problem").
*   **Consistent Hashing:** Used to distribute data across partitioned servers evenly. When a server is added or removed, it minimizes the amount of data that needs to be moved.

---

## 5. Storage Paradigms

*   **Block Storage (AWS EBS):** Data stored in raw blocks. Best for databases, filesystems attached to a single VM. Fast and reliable but local to the compute instance.
*   **File Storage (AWS EFS):** A shared file system that can be mounted by multiple servers simultaneously (like an office network drive).
*   **Object Storage (AWS S3):** Data stored as objects with metadata in a flat structure. Best for unstructured data like images, videos, backups. Highly scalable and cheap, but not meant for rapid, incremental edits.

---

## 6. Asynchronous Processing & Decoupling

*   **Message Queues (RabbitMQ, Amazon SQS)**
    *   **Concept:** Point-to-point. A message is produced, put in a queue, and consumed by exactly *one* worker, then deleted.
    *   **Use when:** Task offloading (background video encoding, sending emails), decoupling services to handle traffic spikes.
*   **Event Streams (Apache Kafka, Amazon Kinesis)**
    *   **Concept:** Publish/Subscribe log. Events are appended to an immutable log. Multiple independent consumer groups can read the same event at their own pace.
    *   **Use when:** Real-time analytics, event sourcing architectures, when an action (e.g., "User Registered") needs to trigger multiple different downstream systems (Email system, Analytics system, Billing system).

---

## 7. Caching Strategy

Caching sits between your application and the database to drastically reduce latency and DB load.
*   **Location:** Client -> CDN -> Load Balancer -> Distributed Cache (Redis) -> Database.
*   **Strategies:**
    *   *Cache-Aside:* App checks cache. If miss, app queries DB, then writes to cache. (Common, resilient to cache failure).
    *   *Read-Through:* Cache sits in front of DB. App queries cache. If miss, *cache* fetches from DB and returns to app.
    *   *Write-Through:* App writes to cache, which immediately writes to DB. Writes are slower, reads are fast and always consistent.
    *   *Write-Behind (Write-Back):* App writes to cache. Cache asynchronously writes to DB. Fast writes, but risk of data loss if cache crashes before syncing.
*   **Eviction:** LRU (Least Recently Used), LFU (Least Frequently Used), TTL (Time To Live).

---

## 8. Resilience & Fault Tolerance

*   **Redundancy / No SPOF:** Every component must have a backup (multi-AZ deployments).
*   **Circuit Breaker:** If a downstream service fails repeatedly, trip the circuit to stop sending requests. Give the failing service time to recover, and fallback gracefully for the user.
*   **Rate Limiting:** Protect APIs from abuse (DDoS) or noisy neighbors. Algorithms: Token Bucket, Leaking Bucket, Fixed Window, Sliding Window Log.
*   **Idempotency:** Designing operations so they can be retried safely without negative side effects (e.g., charging a payment multiple times due to a network timeout). Use idempotency keys.
*   **Graceful Degradation:** If Netflix's personalized recommendation engine goes down, you should still be able to watch a video or browse popular titles.

---

## 9. Core System Design Theorems

*   **CAP Theorem:** In a distributed data store, you can only guarantee two of three:
    1.  *Consistency:* Every read receives the most recent write or an error.
    2.  *Availability:* Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
    3.  *Partition Tolerance:* The system continues to operate despite an arbitrary number of messages being dropped/delayed by the network.
    *   *Conclusion:* Because network partitions (P) are unavoidable, you must choose between Consistency (CP - banking systems) and Availability (AP - social media feeds).
*   **PACELC Theorem:** An extension of CAP. It states that *else* (E), even when the system is running normally in the absence of partitions, one has to choose between latency (L) and consistency (C).

---

## 💡 The 45-Minute Interview Blueprint

1.  **Requirements Exploration (5-10 mins):** Do NOT start designing immediately. Clarify Functional (what does it do?) and Non-Functional (scale, SLA, read/write ratio) requirements.
2.  **Back-of-the-envelope Estimations (5 mins):** Calculate expected QPS (Queries Per Second), peak QPS, Storage limits, and Bandwidth to justify your architecture.
3.  **High-Level Design (10 mins):** Draw the core components. Map out the critical path (Client -> LB -> App Server -> Cache -> DB).
4.  **Deep Dive & Bottlenecks (15-20 mins):** The most important part. Answer: How does this scale? Where is the database bottleneck? Do we shard? How do we handle a region failure? Talk out loud about the tradeoffs of your choices.
5.  **Wrap Up / Edge Cases (5 mins):** Mention analytics, monitoring, logging, alerting, and CI/CD if time permits.

---

## 10. Real-World Architecture Breakdowns

To truly master system design, studying real-world architectural blueprints is essential. Below is a collection of high-level designs for some of the most common interview questions and industry standards. 

*(Note: The following architectural diagrams are AI-generated representations based on industry best practices.)*

### 1. Scalable Chat Infrastructure (500M+ DAU)
![Chat Service](/system-design/Chat%20Service.jpg)
**Key Takeaways:** Uses a WebSocket Gateway for persistent bi-directional connections. A Redis/ZooKeeper session map links users to their specific active gateway. A Cassandra NoSQL database handles the massive write throughput of individual messages, while Kafka asynchronously processes push notifications. 

### 2. Dasher Dispatch & Matching System (Food Delivery)
![Dasher Dispatch](/system-design/Dasher%20Dispatch%20&%20Matching%20System.jpg)
**Key Takeaways:** Real-time location ingestion uses WebSockets. The dispatching engine needs sub-millisecond geospatial lookups, solved by storing geohashes in a Redis cluster. Distributed message queues decouple state transitions (Order Created -> Offer -> Accepted).

### 3. Distributed Job Scheduler (FAANG Level)
![Job Scheduler](/system-design/JobSchedular.jpg)
**Key Takeaways:** Utilizes a metadata DB (PostgreSQL) for ACID compliance on job states. Redis distributed locks prevent double-dispatching (Idempotency). Kafka acts as a buffer to smooth out burst traffic before passing tasks to auto-scaling worker nodes.

### 4. YouTube Video Platform
![YouTube Clone](/system-design/Youtube.jpg)
**Key Takeaways:** Split into distinct read and write paths. Uploads go directly to an S3 raw bucket via pre-signed URLs to avoid bottlenecking API servers. Video transcoding is handled asynchronously by workers. Crucially, the read path leverages Global CDNs to serve edge-cached chunks, meaning 99% of read traffic never hits the origin database.

### 5. News Feed System
![Feed System](/system-design/feed%20system.jpg)
**Key Takeaways:** A hybrid approach for Timeline generation. Uses Graph Databases (Neo4j) for deep relationship traversal (friends-of-friends). "Fan-out on write" pushes new posts to the Redis caches of active followers instantly, while inactive users have their feeds generated via "Fan-out on read".

### 6. Instagram (Photo Sharing App)
![Instagram Design](/system-design/instagram.jpg)
**Key Takeaways:** Heavy reliance on Object Storage (S3) for immutable media blobs with CDNs in front. A distinct Metadata Database (Sharded PostgreSQL) links users to their media URIs. Cassandra is introduced for high-write-throughput components like likes and view counts where eventual consistency is acceptable.

### 7. Kafka Distributed Event Streaming
![Kafka Architecture](/system-design/kafka.jpg)
**Key Takeaways:** A deep dive into Kafka's internals. It relies on sequential disk I/O (append-only logs) for extreme speed. Partitions allow parallel processing, and ZooKeeper/Quorum handles broker leader election. Consumer groups enable multiple independent services to read the exact same event stream at their own pace.

### 8. Global Leaderboard System
![Leaderboard System](/system-design/leaderboard.jpg)
**Key Takeaways:** A classic use case for Redis Sorted Sets (`ZSET`), allowing O(log N) updates and range queries for rankings. Relational databases act as the source of truth, but the read-heavy ranking queries are served entirely from in-memory caches.

### 9. E-Commerce Order System
![Order System](/system-design/order_system.jpg)
**Key Takeaways:** Focused on transaction integrity. Inventory decrements and payment authorizations must act as a single atomic transaction or utilize the Saga Pattern across microservices to prevent overselling.

### 10. Payment Gateway System
![Payment System](/system-design/payment_system.jpg)
**Key Takeaways:** Emphasizes exact-once processing. Idempotency keys are mandatory to prevent double-charging during network timeouts. Relies heavily on ACID compliant relational databases and extensive audit logging for compliance and reconciliation.

### 11. Distributed Rate Limiter
![Rate Limiter](/system-design/rate%20limittor.jpg)
**Key Takeaways:** Placed right behind the API Gateway. Often uses Redis to store counters (e.g., Token Bucket or Sliding Window Log algorithms). Must be extremely low latency and highly available, failing *open* (allowing traffic) if the limiter itself goes down to prevent complete application outages.

### 12. Restaurant Menu / Catalog Service
![Restaurant Menu](/system-design/resturant_menu.jpg)
**Key Takeaways:** A read-heavy system where data rarely changes. An ideal candidate for a Document DB (MongoDB) due to the hierarchical nature of menus (Categories -> Items -> Modifiers), fronted by aggressive caching (Redis) and CDNs for images.

### 13. High-Frequency Stock Exchange
![Stock Exchange](/system-design/stockExchange.jpg)
**Key Takeaways:** Optimizes for microsecond latency. Often bypasses standard HTTP/JSON entirely in favor of UDP multicasting and binary protocols. Core matching engines (Order Books) reside completely in memory, with state asynchronously backed up to disk via event sourcing (LMAX Architecture).

### 14. Distributed Web Crawler
![Web Crawler](/system-design/webcrawler.jpg)
**Key Takeaways:** Breadth-first search architecture. A massive URL frontier queue manages unvisited links. Bloom Filters are absolutely essential to quickly verify if an HTML page or URL has already been processed without doing an expensive database lookup. 

### 15. ZooKeeper / Consensus Algorithm
![ZooKeeper](/system-design/zookeeper.jpg)
**Key Takeaways:** The backbone of distributed coordination. Used for service discovery, distributed locking, and configuration management. Relies on consensus algorithms (like ZAB or Paxos) to ensure that a cluster of nodes agrees on the current state and handles leader elections when nodes fail.

### 16. Serverless App / Job Scheduler (Alternate)
![Opal App](/system-design/Untitled%20Opal%20app-saved.jpg)
**Key Takeaways:** Another variant of distributed task coordination focusing on Cloud-native components and decoupled scaling strategies between producers and consumer worker groups.
