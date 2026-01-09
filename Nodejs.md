1. Node.js Architecture

Node.js follows an event-driven, non-blocking, single-threaded architecture.
Instead of creating a new thread for every request, Node.js efficiently handles many requests using the Event Loop.

Key Characteristics:

=>Single main thread
=>Asynchronous execution
=>High performance for I/O-heavy applications
=>Uses callbacks, promises, and async/await

2. JavaScript Engine (V8)

=>V8 is the JavaScript engine developed by Google.
=>It converts JavaScript code into machine code.
=>Enables fast execution of JS code in Node.js.
=>Role of V8 Parses JavaScript ocmpiles it to native machine code executes the code efficiently

3. Node.js Core APIs

Node.js Core APIs are built-in modules provided by Node.js.

Examples:

fs → File system
http → Create servers
path → Handle file paths
crypto → Cryptographic functions

Purpose:

=>Provide system-level functionality
=>Allow JS to interact with OS features

4. Native Bindings

Native bindings act as a bridge between JavaScript and C/C++ code. They allow Node.js to access low-level system operations.

Why Needed?

JavaScript alone cannot access OS internals
Native bindings enable high-performance operations

5. Event Loop

The Event Loop is the heart of Node.js.

Function:

Continuously checks:

Is there a task to execute?
Is the call stack empty?

Why Important?

Enables non-blocking execution
Handles thousands of concurrent requests efficiently

6. libuv, What is libuv?

libuv is a C library used by Node.js.
It provides asynchronous I/O operations.

Why Node.js Needs libuv?

JavaScript is single-threaded
libuv handles background operations
Ensures Node.js works across platforms (Windows, Linux, macOS)
Responsibilities of libuv
Event Loop implementation
Thread pool management
Async file and network operations
Timers and signals

7. Thread Pool
What is a Thread Pool?

A group of background threads managed by libuv
Default size: 4 threads

Why Node.js Uses a Thread Pool?

To execute blocking operations
Prevents main thread from getting blocked
Operations Handled by Thread Pool
File system operations (fs)
Cryptography functions
DNS lookup
Compression tasks

8. Worker Threads, What Are Worker Threads?

Worker threads allow running JavaScript in parallel threads andIntroduced for CPU-intensive tasks

Why Worker Threads Are Needed:

=>Main thread is single-threaded
=>Heavy computations block the event loop
=>Worker threads prevent performance issues

Examples:

setTimeout
setInterval
setImmediate
I/O callbacks

2. Micro Task Queue

Contains high-priority tasks.

Examples:

Promise.then()
Promise.catch()
queueMicrotask()
Execution Priority
Call Stack
Micro Task Queue
Macro Task Queue

👉 Microtasks always execute before macrotasks

Conclusion:

Node.js combines:

V8 for fast JavaScript execution
libuv for asynchronous operations
Event Loop for non-blocking behavior
Thread Pool & Worker Threads for performance optimization
This architecture makes Node.js ideal for scalable and high-performance server applications.