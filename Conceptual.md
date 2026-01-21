Database Fundamentals – Conceptual Understanding
1. Why is db.json not suitable as a database for real projects?

db.json is a file-based storage system, not a real database. It is useful only for learning, testing, or small demo applications.

Limitations of file-based storage:

Performance:
In db.json, the entire file must be read and rewritten for every operation. As data grows, read and write operations become very slow.

Scalability:
File-based storage cannot handle large amounts of data or multiple users efficiently. It does not support scaling when the application grows.

Reliability:
If the file gets corrupted or the system crashes during a write operation, data can be permanently lost. There is no automatic recovery mechanism.

Because of these limitations, db.json is not suitable for real-world or production-level applications.

2. Ideal characteristics of a database system (apart from storage)

A good database system provides much more than just data storage. The ideal characteristics include:

Performance

A database should retrieve and update data quickly, even when handling large volumes of data and complex queries.

Concurrency

Multiple users should be able to access and modify data at the same time without conflicts or data corruption.

Reliability

The database should ensure data is always available and protected, even during system failures or crashes.

Data Integrity

The database must maintain accurate and consistent data using constraints like primary keys, foreign keys, and validations.

Scalability

A database should support growth in data size and number of users without a major drop in performance.

Fault Tolerance

The system should recover from failures using backups, replication, and transaction logs to prevent data loss.

3. Types of databases and their use cases

There are mainly two types of databases based on data structure and usage.

1️⃣ Relational Databases (SQL)

Relational databases store data in tables with rows and columns and use structured schemas.

Examples: MySQL, PostgreSQL, Oracle, SQL Server

Use cases:

Banking systems

E-commerce applications

Student management systems

Applications requiring strong data consistency

Relational databases are ideal when data relationships are important and strict validation is required.

2️⃣ Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats like documents, key-value pairs, or graphs.

Examples: MongoDB, Firebase, Redis

Use cases:

Social media platforms

Real-time chat applications

Big data and analytics

Applications with frequently changing data structures

NoSQL databases are preferred for high scalability and flexible data models.