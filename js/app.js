/* ==========================================================================
   1. CURRICULUM DATA MODEL — APPLIED COMPUTER SCIENCE & AI ENGINEERING
   ========================================================================== */
const ROADMAP = [
  {
    sem: 1,
    title: "Computer Science & Python Foundations",
    unlockTitle: "CS Foundations Specialist",
    badgeIcon: "fa-terminal",
    badgeBg: "#2563EB",
    resources: "Python Docs · CS50 · LeetCode Algorithms",
    weeks: [
      {
        w: 1,
        title: "Python Syntax, Variables & Control Flow",
        resource: "Python Official Docs & CS50P",
        type: "odd",
        challenge: "Python Basics Kata — Solve 5 introductory logic & conditional problems.",
        video: 'Devlog #1 — "My journey into Computer Science & AI Engineering"',
        what: "Master basic Python syntax, data types (integers, floats, strings, booleans), conditional branching (if/elif/else), and loop structures (for, while).",
        why: "Python is the primary lingua franca for computer science, modern data pipelines, machine learning, and AI engineering.",
        when: "~15 hours total time commitment.",
        where: "Python Docs & CS50's Introduction to Programming with Python.",
        how: "1. Complete CS50P Problem Set 0 and 1.\n2. Write scripts handling conditional flow and loop iterations.\n3. Publish Devlog #1 detailing your development environment setup."
      },
      {
        w: 2,
        title: "Data Structures: Lists, Dictionaries & Sets",
        resource: "Python Data Structures Guide",
        type: "even",
        asn: "CLI Data Processor — Parse and Filter Structured Lists/Dicts",
        blog: 'Blog Post #1 — "Choosing the Right Python Data Structure"',
        what: "In-depth understanding of built-in data structures: Lists, Tuples, Dictionaries, and Sets. Memory layouts, mutation, and list comprehensions.",
        why: "Selecting efficient data structures directly impacts algorithm execution efficiency and memory footprint.",
        when: "~15 hours total time commitment.",
        where: "Python Standard Library Documentation & Real Python Guides.",
        how: "1. Build a CLI data parser that aggregates and formats JSON data.\n2. Practice list comprehensions and dictionary mappings.\n3. Publish Blog Post #1 comparing computational complexity across data structures."
      },
      {
        w: 3,
        title: "Algorithmic Thinking & Big-O Complexity",
        resource: "MIT 6.0001 / LeetCode",
        type: "odd",
        challenge: "Complexity Analysis Katas — Benchmark time & space complexity of 5 functions.",
        video: 'Devlog #2 — "Demystifying Big-O Time and Space Complexity"',
        what: "Asymptotic analysis, Big-O notation (O(1), O(log n), O(n), O(n log n), O(n²)), time-space tradeoffs, and execution profiling.",
        why: "Essential for designing scalable algorithms that perform well under high data throughput.",
        when: "~16 hours total time commitment.",
        where: "MIT OpenCourseWare 6.0001 & Big-O Cheat Sheet.",
        how: "1. Profile execution speed of linear vs binary search scripts.\n2. Calculate space complexity for iterative vs recursive functions.\n3. Record Devlog #2 explaining Big-O notation."
      },
      {
        w: 4,
        title: "Functional Programming & Recursion",
        resource: "Real Python Functional",
        type: "even",
        asn: "Recursive File System Analyzer Brief",
        blog: 'Guidebook Chapter #1 — "Recursion and Call Stack Mechanics"',
        what: "First-class functions, pure functions, lambda expressions, map/filter/reduce, call stack dynamics, base cases, and recursion trees.",
        why: "Recursion and functional paradigms provide clean models for parsing tree structures and recursive algorithms.",
        when: "~16 hours total time commitment.",
        where: "Python Functional Programming Modules.",
        how: "1. Build a recursive directory traveler parsing nested directories.\n2. Refactor procedural loops using map() and filter().\n3. Publish Guidebook Chapter #1 on stack frame recursion."
      },
      {
        w: 5,
        title: "Object-Oriented Programming (OOP) Principles",
        resource: "OOP in Python Guide",
        type: "odd",
        challenge: "OOP Design Challenge — Implement Encapsulation, Inheritance & Polymorphism.",
        video: 'Devlog #3 — "Designing Clean Class Architectures in Python"',
        what: "Object-oriented design: Classes, objects, instantiation, encapsulation (`__init__`), inheritance, method overriding, and magic methods (`__str__`, `__repr__`).",
        why: "OOP provides modular encapsulation essential for engineering large enterprise applications and AI frameworks.",
        when: "~16 hours total time commitment.",
        where: "Real Python OOP Guides & GeeksforGeeks Python OOP.",
        how: "1. Design an object-oriented class hierarchy for a simulated entity pipeline.\n2. Override Python magic methods for clean string representation.\n3. Record Devlog #3 walking through OOP principles."
      },
      {
        w: 6,
        title: "Midterm Project — Code Labs",
        resource: "Midterm Project Brief",
        type: "midterm",
        video: "Midterm Project Showcase & Code Walkthrough",
        what: "Synthesize Python fundamentals, data structures, Big-O efficiency, and OOP design to build a standalone CLI application.",
        why: "Validates core software foundations and readiness for complex data systems.",
        when: "~20 hours dedicated project sprint.",
        where: "GitHub Repository & Python Package CLI.",
        how: "1. Select one of the project options and implement the architecture.\n2. Profile execution speed and ensure zero runtime errors.\n3. Record a video walkthrough demonstrating your CLI tool.",
        projectOptions: [
          {
            id: "s1_m_opt1",
            title: "Option A: Autonomous Task Scheduler & Queue Profiler",
            desc: "Build a priority task queue engine using custom data structures, measuring time complexity across sorting algorithms.",
            pdfBrief: "../assets/project-briefs/cs_sem1_midterm_option_a.pdf"
          },
          {
            id: "s1_m_opt2",
            title: "Option B: Object-Oriented Simulation Engine",
            desc: "Create an interactive CLI simulation modeling agent behavior and environment interactions using OOP design patterns.",
            pdfBrief: "../assets/project-briefs/cs_sem1_midterm_option_b.pdf"
          },
          {
            id: "s1_m_opt3",
            title: "Option C: Log File Parser & Analytics CLI",
            desc: "Develop a recursive file processor that ingests server log files and computes real-time performance metrics.",
            pdfBrief: "../assets/project-briefs/cs_sem1_midterm_option_c.pdf"
          }
        ],
        aiPrompt: "Act as a Computer Science Professor. Generate 3 original algorithmic project ideas matching Python OOP, Data Structures, and Big-O complexity."
      },
      {
        w: 7,
        title: "Linear Data Structures: Stacks, Queues & Linked Lists",
        resource: "Problem Solving with Algorithms & Data Structures",
        type: "odd",
        challenge: "Custom Linked List Challenge — Implement Singly & Doubly Linked Lists.",
        video: 'Devlog #4 — "Building Stacks and Queues from Scratch"',
        what: "Implementing Stacks (LIFO), Queues (FIFO), Deques, Singly Linked Lists, and Doubly Linked Lists without external libraries.",
        why: "Understanding low-level memory allocation and pointer references builds strong computer science foundations.",
        when: "~15 hours total time commitment.",
        where: "Runestone Academy Algorithms & Python Standard Library `collections.deque`.",
        how: "1. Implement custom Node and LinkedList classes with insert, delete, and search methods.\n2. Implement a stack-based undo/redo buffer.\n3. Record Devlog #4 demonstrating custom memory node linking."
      },
      {
        w: 8,
        title: "Non-Linear Structures: Trees & Hash Tables",
        resource: "Algorithms by Robert Sedgewick",
        type: "even",
        asn: "Binary Search Tree (BST) & Hash Map Engine",
        blog: 'Guidebook Chapter #2 — "Trees, Hash Collisions & Indexing"',
        what: "Binary Trees, Binary Search Trees (BST), Tree Traversals (In-order, Pre-order, Post-order), Hash Tables, Collision Resolution (Chaining vs Open Addressing).",
        why: "Hash tables and trees underpin modern databases, search engines, and index structures.",
        when: "~16 hours total time commitment.",
        where: "Introduction to Algorithms (CLRS) & GeeksforGeeks Trees.",
        how: "1. Build a Binary Search Tree with lookup, insertion, and deletion logic.\n2. Implement a simple Hash Map handling key collisions.\n3. Publish Guidebook Chapter #2 on search tree dynamics."
      },
      {
        w: 9,
        title: "Sorting & Searching Algorithms",
        resource: "LeetCode / HackerRank",
        type: "odd",
        challenge: "Sorting Benchmark — Implement & compare MergeSort, QuickSort, and BubbleSort.",
        video: 'Devlog #5 — "MergeSort vs QuickSort Execution Benchmarks"',
        what: "Divide-and-conquer strategy, MergeSort, QuickSort, HeapSort, Binary Search, and benchmark comparisons across varying data distributions.",
        why: "Sorting algorithms are fundamental primitives in algorithmic engineering and data processing.",
        when: "~16 hours total time commitment.",
        where: "Visualgo Algorithm Visualizations & LeetCode.",
        how: "1. Implement MergeSort and QuickSort recursively.\n2. Benchmark execution times against Python's native Timsort on arrays up to 100k items.\n3. Record Devlog #5 explaining pivot selection."
      },
      {
        w: 10,
        title: "File I/O, Serialization & Exception Management",
        resource: "Python Docs File I/O",
        type: "even",
        asn: "Robust Data Serialization Pipeline (JSON / CSV / Pickle)",
        blog: 'Guidebook Chapter #3 — "Error Handling & Data Persistence Patterns"',
        what: "Context managers (`with` statements), exception hierarchy, custom error handling, file streams, JSON, CSV, and binary serialization (`pickle`).",
        why: "Reliable applications must handle unexpected input failures and persist data cleanly.",
        when: "~15 hours total time commitment.",
        where: "Python Context Managers Documentation.",
        how: "1. Build a resilient file ingestion system with custom try/except error classes.\n2. Validate and serialize raw datasets into clean JSON format.\n3. Publish Guidebook Chapter #3 on exception management patterns."
      },
      {
        w: 11,
        title: "Memory Management & Python Internals",
        resource: "CPython Internals Book",
        type: "odd",
        challenge: "Memory Profiling Challenge — Profile memory allocation & garbage collection.",
        video: 'Devlog #6 — "How Python Manages Memory Under the Hood"',
        what: "CPython execution engine, Bytecode compilation, Reference Counting, Garbage Collection, GIL (Global Interpreter Lock), and memory profiling (`sys.getsizeof`, `tracemalloc`).",
        why: "Understanding runtime memory mechanisms allows optimization for high-concurrency AI workloads.",
        when: "~15 hours total time commitment.",
        where: "Real Python CPython Guides & Python `tracemalloc` docs.",
        how: "1. Profile memory allocation of large data structures using `tracemalloc`.\n2. Inspect bytecode using Python's `dis` module.\n3. Record Devlog #6 detailing reference counting."
      },
      {
        w: 12,
        title: "Final Project & Special Quest",
        resource: "Capstone Week",
        type: "final",
        blog: 'Guidebook Chapter #4 — "Computer Science Fundamentals in Practice"',
        specialQuest: "Special Quest Gate: Submit 1 Open-Source PR or Algorithmic Benchmark to unlock your CS Foundations Specialist Certificate.",
        specialQuestLinks: [
          { name: "LeetCode 75 Study Plan", url: "https://leetcode.com/studyplan/leetcode-75/" },
          { name: "Python Open Source Repositories", url: "https://github.com/topics/python" }
        ],
        what: "Build, profile, and test a complete algorithmic engine utilizing OOP, custom data structures, and optimized search/sort routines.",
        why: "Demonstrates overall computational problem-solving proficiency.",
        when: "~22 hours dedicated project sprint.",
        where: "GitHub Repository & PyPI CLI package.",
        how: "1. Build and test your final Semester 1 project.\n2. Publish your codebase to GitHub with complete README documentation.\n3. Fulfill your Special Quest requirement.\n4. Write Guidebook Chapter #4 summarizing CS foundations."
      }
    ]
  },
  {
    sem: 2,
    title: "Software Engineering & Backend Systems",
    unlockTitle: "Software Systems Engineer",
    badgeIcon: "fa-server",
    badgeBg: "#059669",
    resources: "FastAPI · PostgreSQL · Docker · System Design",
    weeks: [
      {
        w: 13,
        title: "Advanced Python & AsyncIO Concurrency",
        resource: "Python AsyncIO Docs",
        type: "odd",
        challenge: "Async Crawler Katas — Fetch multi-endpoint data concurrently with `asyncio`.",
        video: 'Devlog #7 — "Asynchronous Programming in Python with AsyncIO"',
        what: "Event loops, coroutines, `async`/`await` syntax, `aiohttp`, concurrent task execution (`asyncio.gather`), and threading vs multiprocessing tradeoffs.",
        why: "High-throughput API microservices and AI pipelines rely heavily on asynchronous I/O performance.",
        when: "~16 hours total time commitment.",
        where: "Python AsyncIO Official Documentation.",
        how: "1. Build an asynchronous web scraper fetching multi-source data concurrently.\n2. Measure execution speedup compared to synchronous requests.\n3. Record Devlog #7 explaining event loop execution."
      },
      {
        w: 14,
        title: "Relational Databases & SQL Schema Design",
        resource: "PostgreSQL Tutorial",
        type: "even",
        asn: "Normalized Relational Schema & Complex Query Suite",
        blog: 'Guidebook Chapter #5 — "SQL Relational Modeling & Indexing"',
        what: "Relational modeling, ER diagrams, 1NF/2NF/3NF normalization, SQL DDL/DML, JOIN operations, aggregation functions, and indexing strategies in PostgreSQL.",
        why: "Relational databases deliver structural integrity and complex query capabilities required by enterprise backend systems.",
        when: "~16 hours total time commitment.",
        where: "Postgres Documentation & SQL Zoo.",
        how: "1. Model a normalized schema for an event ingestion backend.\n2. Write SQL scripts for table generation and complex multi-JOIN queries.\n3. Publish Guidebook Chapter #5 on database indexing."
      },
      {
        w: 15,
        title: "ORMs & Database Migrations (SQLAlchemy & Alembic)",
        resource: "SQLAlchemy 2.0 Docs",
        type: "odd",
        challenge: "ORM Modeling Challenge — Build relationships & Alembic database migrations.",
        video: 'Devlog #8 — "SQLAlchemy 2.0 & Alembic Migrations"',
        what: "Object-Relational Mapping (ORM), declarative models, relationships (one-to-many, many-to-many), lazy vs eager loading, and migration management via Alembic.",
        why: "ORMs bridge application code objects with database schemas safely while maintaining version-controlled schema migrations.",
        when: "~15 hours total time commitment.",
        where: "SQLAlchemy Official Documentation & Alembic Tutorials.",
        how: "1. Define ORM models with SQLAlchemy 2.0.\n2. Execute schema migrations using Alembic commands.\n3. Record Devlog #8 detailing ORM mapping strategies."
      },
      {
        w: 16,
        title: "Building REST APIs with FastAPI",
        resource: "FastAPI Official Tutorial",
        type: "even",
        asn: "Production FastAPI Web Service Brief",
        blog: 'Guidebook Chapter #6 — "Designing Production-Ready REST APIs"',
        what: "FastAPI architecture, automatic OpenAPI/Swagger documentation, Pydantic request/response schemas, path parameters, query parameters, and dependency injection.",
        why: "FastAPI is the standard Python web framework for ultra-fast REST APIs and ML model deployment.",
        when: "~16 hours total time commitment.",
        where: "FastAPI Official Documentation.",
        how: "1. Build a full CRUD REST API using FastAPI and Pydantic validation models.\n2. Test API routes using Swagger UI.\n3. Publish Guidebook Chapter #6 on API endpoint design."
      },
      {
        w: 17,
        title: "Authentication & Authorization (JWT & Security)",
        resource: "FastAPI Security Docs",
        type: "odd",
        challenge: "OAuth2 & JWT Auth Challenge — Secure API endpoints with bearer tokens.",
        video: 'Devlog #9 — "Implementing Secure JWT Authentication in FastAPI"',
        what: "Password hashing (`passlib`/`bcrypt`), JSON Web Tokens (JWT), OAuth2 password flow, role-based access control (RBAC), and authorization middleware.",
        why: "Securing backend API routes and protecting user records is a critical prerequisite for production deployments.",
        when: "~16 hours total time commitment.",
        where: "FastAPI OAuth2 Guide & JWT.io.",
        how: "1. Add secure user signup and login endpoints returning signed JWT tokens.\n2. Create protected routes enforcing role-based permissions.\n3. Record Devlog #9 verifying endpoint security."
      },
      {
        w: 18,
        title: "Midterm Project — Code Labs",
        resource: "Backend Midterm",
        type: "midterm",
        video: "Midterm API Showcase & Live Demo",
        what: "Architect and deploy a high-performance RESTful microservice featuring FastAPI, PostgreSQL, SQLAlchemy ORM, and JWT authentication.",
        why: "Validates backend systems engineering capability.",
        when: "~20 hours dedicated project sprint.",
        where: "Render / Railway & GitHub.",
        how: "1. Build and deploy your FastAPI backend microservice to cloud hosting.\n2. Document API endpoints with Swagger UI.\n3. Record a video walkthrough demonstrating live API operations.",
        projectOptions: [
          {
            id: "s2_m_opt1",
            title: "Option A: Real-Time Telemetry & Data Processing API",
            desc: "Develop a multi-endpoint async API ingesting high-frequency sensor streams with PostgreSQL storage.",
            pdfBrief: "../assets/project-briefs/cs_sem2_midterm_option_a.pdf"
          },
          {
            id: "s2_m_opt2",
            title: "Option B: Authenticated Microservice Gateway",
            desc: "Build a secure authentication & resource distribution API with role-based JWT permissions.",
            pdfBrief: "../assets/project-briefs/cs_sem2_midterm_option_b.pdf"
          }
        ],
        aiPrompt: "Act as a Lead Systems Architect. Generate 3 REST API project briefs using FastAPI, PostgreSQL, and JWT auth."
      },
      {
        w: 19,
        title: "Distributed Systems & Task Queues (Redis & Celery)",
        resource: "Celery Official Docs",
        type: "odd",
        challenge: "Asynchronous Worker Challenge — Offload background tasks to Celery/Redis.",
        video: 'Devlog #10 — "Background Task Offloading with Celery & Redis"',
        what: "Distributed task queues, message brokers (Redis), asynchronous background workers (Celery), scheduled tasks (Celery Beat), and task status monitoring.",
        why: "Long-running computational tasks and AI inferences must be decoupled from client API response cycles.",
        when: "~16 hours total time commitment.",
        where: "Celery Project Docs & Redis Documentation.",
        how: "1. Integrate Redis and Celery into your FastAPI application.\n2. Offload heavy computational jobs to background workers.\n3. Record Devlog #10 demonstrating async task queue execution."
      },
      {
        w: 20,
        title: "Containerization with Docker & Docker Compose",
        resource: "Docker Docs",
        type: "even",
        asn: "Multi-Container Application Brief (FastAPI + Postgres + Redis)",
        blog: 'Guidebook Chapter #7 — "Containerizing Python Microservices with Docker"',
        what: "Containerization concepts, Dockerfiles, image optimization, multi-stage builds, Docker Compose orchestration, volume persistence, and container networking.",
        why: "Docker ensures reproducible environment execution across development, staging, and production servers.",
        when: "~16 hours total time commitment.",
        where: "Docker Official Guides & Docker Compose Documentation.",
        how: "1. Write Dockerfiles for FastAPI and Celery worker services.\n2. Orchestrate multi-container architecture using `docker-compose.yml`.\n3. Publish Guidebook Chapter #7 detailing containerization workflows."
      },
      {
        w: 21,
        title: "Linux Systems Programming & Bash Automation",
        resource: "Linux Command Line Book",
        type: "odd",
        challenge: "Shell Scripting Challenge — Build a system health & backup CLI script.",
        video: 'Devlog #11 — "Linux Systems Administration & Bash Automation"',
        what: "Linux environment commands, file system permissions (`chmod`, `chown`), process management (`htop`, `systemctl`), environment variable configurations, and Bash shell scripting.",
        why: "Servers and cloud environments execute on Linux distribution kernels.",
        when: "~15 hours total time commitment.",
        where: "Linux Foundation Courses & SS64 Command Reference.",
        how: "1. Write a Bash automation script to backup PostgreSQL databases automatically.\n2. Configure systemd service files to manage background processes.\n3. Record Devlog #11 profiling Linux server operations."
      },
      {
        w: 22,
        title: "Automated Testing & CI/CD with PyTest",
        resource: "PyTest Documentation",
        type: "even",
        asn: "Test Suite & GitHub Actions CI Pipeline Setup",
        blog: 'Guidebook Chapter #8 — "Test-Driven Development in Python"',
        what: "Unit testing, integration testing, PyTest fixtures, test coverage metrics (`pytest-cov`), mocking external dependencies, and GitHub Actions CI pipelines.",
        why: "Automated test suites guarantee code quality and prevent software regressions.",
        when: "~16 hours total time commitment.",
        where: "PyTest Docs & GitHub Actions Workflow Documentation.",
        how: "1. Write 10 unit and integration tests covering your API endpoints.\n2. Set up `.github/workflows/ci.yml` to run PyTest automatically on pull requests.\n3. Publish Guidebook Chapter #8 on TDD strategies."
      },
      {
        w: 23,
        title: "System Design & Architecture Patterns",
        resource: "System Design Primer",
        type: "odd",
        challenge: "Architecture Blueprint Challenge — Design a scalable microservice system.",
        video: 'Devlog #12 — "System Design Principles for High Availability"',
        what: "Monolith vs Microservices, Load Balancing, Caching strategies, Database Sharding/Replication, and CAP Theorem.",
        why: "Critical for engineering software infrastructure capable of supporting millions of concurrent requests.",
        when: "~16 hours total time commitment.",
        where: "System Design Primer GitHub Repo.",
        how: "1. Draft a System Design blueprint document for a high-traffic AI data ingestion platform.\n2. Diagram component communication and caching layers.\n3. Record Devlog #12 detailing system design choices."
      },
      {
        w: 24,
        title: "Final Project & Special Quest",
        resource: "Semester 2 Capstone",
        type: "final",
        blog: 'Guidebook Chapter #9 — "Building Scalable Backend Infrastructure"',
        specialQuest: "Special Quest Gate: Deploy your multi-container application live on cloud hosting to claim the Software Systems Engineer title.",
        specialQuestLinks: [
          { name: "Render Cloud Hosting", url: "https://render.com/" },
          { name: "Railway App Infrastructure", url: "https://railway.app/" }
        ],
        what: "Deploy a production-ready, containerized microservice suite with live database persistence, background worker queues, and automated CI/CD pipelines.",
        why: "Proves enterprise backend systems proficiency.",
        when: "~22 hours dedicated project sprint.",
        where: "Cloud Host & GitHub.",
        how: "1. Complete and launch your multi-container Docker application.\n2. Configure live cloud domain endpoints and test security.\n3. Fulfill your Special Quest requirement.\n4. Write Guidebook Chapter #9 summarizing backend system engineering."
      }
    ]
  },
  {
    sem: 3,
    title: "Data Science & Machine Learning Engineering",
    unlockTitle: "Machine Learning Engineer",
    badgeIcon: "fa-brain",
    badgeBg: "#0891B2",
    resources: "NumPy · Pandas · Scikit-Learn · PyTorch",
    weeks: [
      {
        w: 25,
        title: "Mathematics for AI: Linear Algebra & Vectors",
        resource: "Khan Academy / 3Blue1Brown",
        type: "odd",
        challenge: "NumPy Vector Katas — Implement matrix multiplication & dot products from scratch.",
        video: 'Devlog #13 — "Linear Algebra for Machine Learning Visualized"',
        what: "Vectors, Matrices, Dot Products, Matrix Multiplication, Matrix Inversion, Eigenvalues, Eigenvectors, and Vector spaces using Python and NumPy.",
        why: "Linear algebra forms the core mathematical foundation for neural network operations and data transformations.",
        when: "~16 hours total time commitment.",
        where: "3Blue1Brown Essence of Linear Algebra & NumPy Documentation.",
        how: "1. Implement custom matrix multiplication algorithms in pure Python and compare speed to `numpy.dot`.\n2. Compute vector projections and eigenvalues.\n3. Record Devlog #13 explaining matrix operations in AI."
      },
      {
        w: 26,
        title: "Probability & Applied Statistics for ML",
        resource: "StatQuest with Josh Starmer",
        type: "even",
        asn: "Statistical Data Profiler Brief",
        blog: 'Guidebook Chapter #10 — "Probability Distributions in Machine Learning"',
        what: "Probability distributions (Normal, Binomial, Poisson), Mean/Variance/Standard Deviation, Hypothesis Testing, p-values, Bayes' Theorem, and Maximum Likelihood Estimation.",
        why: "Statistical foundations allow machine learning engineers to validate data distributions and model metrics correctly.",
        when: "~16 hours total time commitment.",
        where: "StatQuest ML Videos & Scipy Stats Docs.",
        how: "1. Conduct statistical hypothesis tests on sample datasets using `scipy.stats`.\n2. Compute probability densities and confidence intervals.\n3. Publish Guidebook Chapter #10 on applied probability."
      },
      {
        w: 27,
        title: "Data Wrangling with Pandas & NumPy",
        resource: "Pandas Official Documentation",
        type: "odd",
        challenge: "Data Cleaning Challenge — Clean messy real-world datasets with Pandas.",
        video: 'Devlog #14 — "High-Speed Data Wrangling with Pandas"',
        what: "DataFrames, Series, missing value imputation, indexing/slicing, data merging/joining, `groupby` aggregations, and feature transformations.",
        why: "Data cleaning and manipulation represent over 70% of a Machine Learning Engineer's daily workflow.",
        when: "~15 hours total time commitment.",
        where: "Pandas User Guide & Kaggle Data Wrangling Courses.",
        how: "1. Clean and transform a corrupted multi-table CSV dataset using Pandas.\n2. Perform aggregation operations across categorical variables.\n3. Record Devlog #14 demonstrating Pandas indexing tricks."
      },
      {
        w: 28,
        title: "Exploratory Data Analysis (EDA) & Visualization",
        resource: "Seaborn & Matplotlib Tutorials",
        type: "even",
        asn: "Full EDA Report & Insight Dashboard",
        blog: 'Guidebook Chapter #11 — "Visualizing Feature Correlations & Anomalies"',
        what: "Data visualization using Matplotlib and Seaborn: Histograms, Scatter plots, Box plots, Heatmaps, Feature correlation analysis, and Outlier detection.",
        why: "EDA exposes underlying patterns, anomalies, and feature relationships before model training.",
        when: "~16 hours total time commitment.",
        where: "Seaborn Official Documentation & Matplotlib Guides.",
        how: "1. Execute a full exploratory data analysis on a public machine learning dataset.\n2. Generate heatmaps highlighting feature correlations.\n3. Publish Guidebook Chapter #11 documenting visual data discovery."
      },
      {
        w: 29,
        title: "Supervised Learning: Regression Models",
        resource: "Scikit-Learn Documentation",
        type: "odd",
        challenge: "Linear Regression from Scratch — Implement Gradient Descent optimization.",
        video: 'Devlog #15 — "Coding Linear Regression & Gradient Descent from Scratch"',
        what: "Linear Regression, Multiple Linear Regression, Cost Functions (MSE/RMSE), Gradient Descent optimization algorithm, Regularization (Ridge/Lasso).",
        why: "Regression models form the foundational baseline for continuous variable estimation.",
        when: "~16 hours total time commitment.",
        where: "Scikit-Learn Supervised Learning Docs & Andrew Ng ML Course.",
        how: "1. Implement Gradient Descent optimization for linear regression in pure Python/NumPy.\n2. Train Ridge and Lasso regression models using Scikit-Learn.\n3. Record Devlog #15 explaining cost function minimization."
      },
      {
        w: 30,
        title: "Midterm Project — Code Labs",
        resource: "ML Midterm Project",
        type: "midterm",
        video: "Midterm ML Pipeline Showcase",
        what: "Build an end-to-end Machine Learning data pipeline: Data Cleaning, Feature Engineering, EDA, and Model Training for continuous variable prediction.",
        why: "Validates practical ML data pipeline development skills.",
        when: "~20 hours dedicated project sprint.",
        where: "Kaggle / GitHub & Jupyter Notebook.",
        how: "1. Build and train your continuous variable regression model on a public dataset.\n2. Evaluate model performance using cross-validation metrics.\n3. Record a video walkthrough explaining feature selection and evaluation."
      },
      {
        w: 31,
        title: "Supervised Learning: Classification Models",
        resource: "Scikit-Learn Classification",
        type: "odd",
        challenge: "Classifier Comparison Challenge — Benchmark Logistic Regression, SVMs & Decision Trees.",
        video: 'Devlog #16 — "Evaluating Classifiers: Confusion Matrix & ROC-AUC"',
        what: "Logistic Regression, Decision Trees, Random Forests, Support Vector Machines (SVM), Confusion Matrices, Precision, Recall, F1-Score, and ROC-AUC curves.",
        why: "Classification algorithms power critical tasks such as spam detection, risk evaluation, and medical diagnostics.",
        when: "~16 hours total time commitment.",
        where: "Scikit-Learn Classifier Documentation.",
        how: "1. Train Logistic Regression, Random Forest, and SVM classifiers on a binary dataset.\n2. Plot ROC-AUC curves and compare F1-scores.\n3. Record Devlog #16 demonstrating confusion matrix analysis."
      },
      {
        w: 32,
        title: "Unsupervised Learning & Dimensionality Reduction",
        resource: "Scikit-Learn Unsupervised",
        type: "even",
        asn: "Clustering & Customer Segmentation Pipeline Brief",
        blog: 'Guidebook Chapter #12 — "Unsupervised Clustering & PCA Dimensionality Reduction"',
        what: "K-Means Clustering, Hierarchical Clustering, DBSCAN, Principal Component Analysis (PCA), and T-SNE for feature space reduction.",
        why: "Unsupervised learning discovers hidden patterns in unlabeled data distributions.",
        when: "~16 hours total time commitment.",
        where: "Scikit-Learn Unsupervised Learning Tutorials.",
        how: "1. Perform K-Means clustering and find the optimal cluster count using the Elbow method.\n2. Reduce dataset dimensions using PCA and plot results.\n3. Publish Guidebook Chapter #12 on feature dimension reduction."
      },
      {
        w: 33,
        title: "Model Evaluation & Hyperparameter Tuning",
        resource: "Scikit-Learn Model Selection",
        type: "odd",
        challenge: "Hyperparameter Optimization Challenge — Run GridSearch & RandomizedSearch CV.",
        video: 'Devlog #17 — "Optimizing ML Models with GridSearchCV & Bayesian Tuning"',
        what: "K-Fold Cross-Validation, Stratified Sampling, Overfitting vs Underfitting (Bias-Variance Tradeoff), GridSearchCV, RandomizedSearchCV, and Optuna.",
        why: "Systematic hyperparameter tuning unlocks optimal performance without model overfitting.",
        when: "~15 hours total time commitment.",
        where: "Scikit-Learn Tuning Guides & Optuna Docs.",
        how: "1. Execute 5-fold cross-validation across multiple model architectures.\n2. Optimize hyperparameters using `GridSearchCV` and `Optuna`.\n3. Record Devlog #17 breaking down bias-variance trade-offs."
      },
      {
        w: 34,
        title: "Introduction to Neural Networks & Perceptrons",
        resource: "Deep Learning Specialization",
        type: "even",
        asn: "Single-Layer Perceptron Implementation from Scratch",
        blog: 'Guidebook Chapter #13 — "Artificial Neural Networks & Backpropagation Mechanics"',
        what: "Biological vs Artificial Neurons, Single-Layer Perceptrons, Multi-Layer Perceptrons (MLP), Activation Functions (Sigmoid, ReLU, Tanh), Forward Propagation, and Backpropagation.",
        why: "Neural networks serve as the foundational building blocks for modern deep learning and AI models.",
        when: "~16 hours total time commitment.",
        where: "DeepLearning.AI & Michael Nielsen's Neural Networks Book.",
        how: "1. Code a simple Multi-Layer Perceptron from scratch using NumPy.\n2. Implement forward propagation, MSE loss, and backpropagation step-by-step.\n3. Publish Guidebook Chapter #13 on backpropagation mathematics."
      },
      {
        w: 35,
        title: "Deep Learning Frameworks: PyTorch Core",
        resource: "PyTorch Official Tutorials",
        type: "odd",
        challenge: "PyTorch Neural Net Challenge — Build & train a PyTorch MLP classifier.",
        video: 'Devlog #18 — "Building Neural Networks with PyTorch Tensors & Autograd"',
        what: "PyTorch ecosystem: Tensors, `torch.autograd`, `nn.Module`, Loss functions, Optimizers (`Adam`, `SGD`), DataLoaders, and GPU acceleration (`cuda`/`mps`).",
        why: "PyTorch is the premier industry-standard research and production framework for modern Deep Learning.",
        when: "~16 hours total time commitment.",
        where: "PyTorch Official Learning Portal.",
        how: "1. Build a PyTorch model training loop using `nn.Module` and custom `DataLoader` objects.\n2. Train the model on GPU/MPS hardware acceleration.\n3. Record Devlog #18 explaining PyTorch's computational graph."
      },
      {
        w: 36,
        title: "Final Project & Special Quest",
        resource: "Semester 3 Capstone",
        type: "final",
        blog: 'Guidebook Chapter #14 — "From Data to Production ML Models"',
        specialQuest: "Special Quest Gate: Publish a working ML Model notebook or dataset on Kaggle / Hugging Face to unlock the Machine Learning Engineer title.",
        specialQuestLinks: [
          { name: "Kaggle Datasets & Models", url: "https://www.kaggle.com/" },
          { name: "Hugging Face Hub", url: "https://huggingface.co/" }
        ],
        what: "Train, tune, and evaluate an enterprise Machine Learning model suite utilizing Scikit-Learn or PyTorch, deployed as an inference API.",
        why: "Demonstrates complete Machine Learning engineering capability.",
        when: "~22 hours dedicated project sprint.",
        where: "GitHub & Kaggle / Hugging Face.",
        how: "1. Complete and evaluate your machine learning prediction project.\n2. Export model artifacts (`.onnx` or `.pkl`) and deploy an inference endpoint.\n3. Fulfill your Special Quest requirement.\n4. Write Guidebook Chapter #14 summarizing practical ML pipelines."
      }
    ]
  },
  {
    sem: 4,
    title: "Applied AI Engineering & LLMs",
    unlockTitle: "AI Systems Engineer",
    badgeIcon: "fa-robot",
    badgeBg: "#7C3AED",
    resources: "PyTorch · Hugging Face · LangChain / LlamaIndex · MLOps",
    weeks: [
      {
        w: 37,
        title: "Convolutional Neural Networks (CNNs) & Computer Vision",
        resource: "PyTorch Vision Tutorials",
        type: "odd",
        challenge: "CNN Image Classification Challenge — Build a PyTorch CNN for image recognition.",
        video: 'Devlog #19 — "Convolutional Layers & Feature Maps Visualized"',
        what: "Computer vision fundamentals: Convolutional layers, Pooling (Max/Avg), Stride, Padding, Transfer Learning with ResNet/EfficientNet, and Image augmentation (`torchvision`).",
        why: "CNNs enable computer vision applications, automated image analysis, and visual AI perception.",
        when: "~16 hours total time commitment.",
        where: "Stanford CS231n & PyTorch Vision Guides.",
        how: "1. Train a CNN image classifier using PyTorch and `torchvision` models.\n2. Fine-tune a pre-trained ResNet architecture using transfer learning.\n3. Record Devlog #19 demonstrating feature map extraction."
      },
      {
        w: 38,
        title: "Sequence Modeling & Recurrent Neural Networks (RNNs)",
        resource: "PyTorch Sequence Models",
        type: "even",
        asn: "Time-Series Forecasting / Sequence Modeling Brief",
        blog: 'Guidebook Chapter #15 — "RNNs, LSTMs & Sequence Processing Mechanics"',
        what: "Sequential data modeling: Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM) networks, Gated Recurrent Units (GRU), and time-series forecasting.",
        why: "Sequence models handle temporal distributions, financial time-series data, and text processing sequences.",
        when: "~16 hours total time commitment.",
        where: "PyTorch NLP & Sequence Documentation.",
        how: "1. Implement an LSTM sequence model for temporal data prediction.\n2. Compare LSTM model performance against standard RNNs.\n3. Publish Guidebook Chapter #15 on sequence gradient retention."
      },
      {
        w: 39,
        title: "Transformer Architecture & Self-Attention Mechanics",
        resource: "Illustrated Transformer by Jay Alammar",
        type: "odd",
        challenge: "Self-Attention Implementation Challenge — Code scaled dot-product attention in PyTorch.",
        video: 'Devlog #20 — "Understanding Self-Attention & The Transformer Architecture"',
        what: "Transformer architecture deep dive: Scaled Dot-Product Attention, Multi-Head Attention, Positional Encoding, Encoder-Decoder structures, and Query/Key/Value matrix projections.",
        why: "Transformers represent the core architectural breakthrough powering modern Large Language Models and Generative AI.",
        when: "~18 hours total time commitment.",
        where: "Jay Alammar's Blog & 'Attention Is All You Need' Paper.",
        how: "1. Implement scaled dot-product attention in PyTorch from scratch.\n2. Build a minimal Multi-Head Attention module.\n3. Record Devlog #20 walking through attention projection matrices."
      },
      {
        w: 40,
        title: "Natural Language Processing (NLP) with Hugging Face",
        resource: "Hugging Face Course",
        type: "even",
        asn: "NLP Text Classification & Sentiment Analysis Pipeline",
        blog: 'Guidebook Chapter #16 — "Leveraging Hugging Face Transformers for NLP"',
        what: "Hugging Face ecosystem: `transformers` library, Tokenization (BPE, WordPiece), Pre-trained models (BERT, RoBERTa), Text Classification, and Model Fine-tuning (`Trainer` API).",
        why: "Hugging Face provides the industry ecosystem for utilizing and fine-tuning open-source NLP models.",
        when: "~16 hours total time commitment.",
        where: "Hugging Face Official Course (huggingface.co/course).",
        how: "1. Tokenize text data using Hugging Face AutoTokenizers.\n2. Fine-tune a pre-trained BERT model for text classification using the Hugging Face `Trainer` API.\n3. Publish Guidebook Chapter #16 on NLP tokenization strategies."
      },
      {
        w: 41,
        title: "Large Language Models (LLMs) & Prompt Engineering",
        resource: "DeepLearning.AI ChatGPT Prompt Engineering",
        type: "odd",
        challenge: "Structured Output Challenge — Enforce JSON schema responses from LLMs.",
        video: 'Devlog #21 — "Advanced Prompt Engineering & Structured LLM Outputs"',
        what: "LLM principles, System vs User prompts, Few-shot learning, Chain-of-Thought (CoT) prompting, Function Calling, and Structured JSON output parsing (Instructor / Pydantic).",
        why: "Prompt engineering and structured schema output extraction are required for reliable agentic integration.",
        when: "~15 hours total time commitment.",
        where: "OpenAI API Docs & Anthropic Claude Cookbook.",
        how: "1. Build an LLM pipeline enforcing strict JSON output schemas using Pydantic.\n2. Implement Chain-of-Thought prompt templates.\n3. Record Devlog #21 demonstrating structured schema enforcement."
      },
      {
        w: 42,
        title: "Midterm Project — Code Labs",
        resource: "AI Midterm Project",
        type: "midterm",
        video: "Midterm AI Application Showcase",
        what: "Build an interactive AI web application integrating FastAPI, Hugging Face Transformers, or LLM APIs to deliver intelligent user capabilities.",
        why: "Validates applied AI engineering skills.",
        when: "~20 hours dedicated project sprint.",
        where: "Vercel / Render & GitHub.",
        how: "1. Build and deploy your AI web application.\n2. Connect backend AI models to a fast client interface.\n3. Record a video demo showcasing live model inference."
      },
      {
        w: 43,
        title: "Retrieval-Augmented Generation (RAG) & Vector DBs",
        resource: "LangChain / LlamaIndex Documentation",
        type: "even",
        asn: "Enterprise Knowledge Base RAG Application Brief",
        blog: 'Guidebook Chapter #17 — "RAG Systems Architecture & Vector Embeddings"',
        what: "Retrieval-Augmented Generation (RAG), Vector Embeddings (`text-embedding-3`), Vector Databases (ChromaDB, Pinecone, Qdrant), Chunking strategies, and Semantic Search.",
        why: "RAG enables LLMs to query custom private domain documentation without expensive model retrain cycles.",
        when: "~16 hours total time commitment.",
        where: "LangChain & LlamaIndex Official Guides.",
        how: "1. Ingest PDF documentation, chunk text, and compute vector embeddings.\n2. Store vectors in ChromaDB and execute semantic similarity search.\n3. Publish Guidebook Chapter #17 detailing RAG indexing architecture."
      },
      {
        w: 44,
        title: "Fine-Tuning Open Source LLMs (LoRA & QLoRA)",
        resource: "Hugging Face PEFT Docs",
        type: "odd",
        challenge: "LoRA Fine-Tuning Challenge — Fine-tune Llama / Mistral model on custom instructions.",
        video: 'Devlog #22 — "Fine-Tuning Llama 3 with QLoRA & PEFT"',
        what: "Parameter-Efficient Fine-Tuning (PEFT), Low-Rank Adaptation (LoRA), Quantization (4-bit/8-bit QLoRA), SFTTrainer, and Dataset Preparation for instruction tuning.",
        why: "Fine-tuning custom open-source models delivers domain-specific intelligence with lower inference latency.",
        when: "~18 hours total time commitment.",
        where: "Hugging Face PEFT Documentation & Unsloth AI Guides.",
        how: "1. Prepare a custom instruction-following JSON dataset.\n2. Fine-tune an open-source model (e.g., Llama/Mistral) using QLoRA.\n3. Record Devlog #22 comparing pre and post fine-tuning responses."
      },
      {
        w: 45,
        title: "AI Agents, Tool Calling & Multi-Agent Frameworks",
        resource: "LangGraph / CrewAI Docs",
        type: "even",
        asn: "Autonomous AI Research Agent Engine Brief",
        blog: 'Guidebook Chapter #18 — "Building Autonomous Multi-Agent Workflows"',
        what: "Autonomous AI Agents, ReAct (Reasoning + Acting) loops, Tool Calling, State Graphs (LangGraph), and Multi-Agent Orchestration.",
        why: "AI agents execute multi-step analytical reasoning and invoke external tools autonomously to complete complex goals.",
        when: "~16 hours total time commitment.",
        where: "LangGraph Documentation & CrewAI Tutorials.",
        how: "1. Build a multi-agent research workflow using LangGraph.\n2. Equip agents with web search and calculator execution tools.\n3. Publish Guidebook Chapter #18 on stateful agent graph design."
      },
      {
        w: 46,
        title: "MLOps: Model Deployment, Monitoring & MLflow",
        resource: "MLflow Documentation",
        type: "odd",
        challenge: "MLOps Pipeline Challenge — Log experiments & serve model via Triton / vLLM.",
        video: 'Devlog #23 — "MLOps: Experiment Tracking with MLflow & vLLM Serving"',
        what: "MLOps lifecycle, Model Registry, Experiment Tracking (MLflow, WandB), Model Serving (vLLM, Triton), API monitoring, and Model Drift detection.",
        why: "MLOps bridges AI research models with stable, monitored production infrastructure.",
        when: "~16 hours total time commitment.",
        where: "MLflow Official Docs & vLLM Guides.",
        how: "1. Log hyperparameter search runs and artifacts using MLflow.\n2. Deploy an optimized inference server using vLLM or FastAPI.\n3. Record Devlog #23 demonstrating real-time model monitoring."
      },
      {
        w: 47,
        title: "Capstone Sprint 1 — AI Systems Architecture Plan",
        resource: "Capstone Architecture Guide",
        type: "odd",
        challenge: "System Blueprint — Design Flagship AI Engineering System Architecture.",
        video: 'Devlog #24 — "Flagship AI Capstone: Systems Architecture & Schema Design"',
        what: "Executing Capstone Sprint 1: Formulating technical specification documents, dynamic RAG pipelines, data ingestion workflows, and UI component integration.",
        why: "Ensures comprehensive system architecture planning before final production deployment.",
        when: "~20 hours dedicated project sprint.",
        where: "GitHub Repository & System Architecture Specs.",
        how: "1. Define system schema, database models, RAG vector index structures, and API routes.\n2. Implement core backend AI engine pipelines.\n3. Record Devlog #24 presenting your AI system blueprint."
      },
      {
        w: 48,
        title: "Capstone Launch & Special Quest",
        resource: "Capstone Launch",
        type: "final",
        blog: 'Guidebook Chapter #19 — "My Journey to AI Systems Engineer"',
        specialQuest: "Special Quest Gate: Deploy your Flagship AI System live to production cloud infrastructure to graduate and earn your AI Systems Engineer title!",
        specialQuestLinks: [
          { name: "Hugging Face Spaces Deployment", url: "https://huggingface.co/spaces" },
          { name: "Vercel Cloud Platform", url: "https://vercel.com/" }
        ],
        what: "Deploy your Flagship Applied AI System (combining RAG, fine-tuned models, vector storage, and an interactive interface) live to production servers.",
        why: "Marks overall graduation and confirms AI Systems Engineer credential status.",
        when: "~25 hours final sprint.",
        where: "Live Cloud Deployment & GitHub.",
        how: "1. Complete final model optimization, load testing, and live web deployment.\n2. Submit public demo links and GitHub repository documentation.\n3. Fulfill your final Special Quest requirement.\n4. Publish Guidebook Chapter #19 summarizing your learning pathway."
      }
    ]
  }
];

/* Helper function to extract all parallel roadmap items per week */
function getQuestItemsForWeek(wObj) {
  const list = [];

  list.push({
    tag: "CORE MODULE STUDY",
    title: `Read & Master: ${wObj.title}`,
    desc: `Primary Resource: ${wObj.resource}. Complete assigned documentation, video modules, and syntax exercises.`
  });

  if (wObj.type === "odd") {
    list.push({
      tag: "TECHNICAL CHALLENGE",
      title: `Challenge: ${wObj.challenge}`,
      desc: "Complete hands-on coding exercises, layout puzzles, or algorithmic katas in your local dev environment."
    });
  } else if (wObj.type === "even") {
    list.push({
      tag: "ASSIGNMENT BRIEF",
      title: `Assignment: ${wObj.asn}`,
      desc: "Build and commit a functional project brief to your public GitHub repository."
    });
  } else if (wObj.type === "midterm") {
    list.push({
      tag: "MIDTERM PROJECT SPRINT",
      title: `Midterm Project Sprint: ${wObj.title}`,
      desc: "Synthesize all concepts learned so far into a complete deployed project from the available project options."
    });
  } else if (wObj.type === "final") {
    list.push({
      tag: "FLAGSHIP CAPSTONE SPRINT",
      title: `Capstone Final Sprint: ${wObj.title}`,
      desc: "Build, polish, test, and launch your major milestone capstone application live to the web."
    });
  }

  if (wObj.video) {
    list.push({
      tag: "DEVLOG / PROOF OF WORK",
      title: `Record & Publish: ${wObj.video}`,
      desc: "Ship a 2-minute devlog video demoing what you built, explaining key code snippets, and sharing your journey."
    });
  }

  if (wObj.blog) {
    list.push({
      tag: "TECHNICAL WRITING / BLOG",
      title: `Publish Article: ${wObj.blog}`,
      desc: "Write and publish a technical blog post or guidebook chapter documenting your technical learnings."
    });
  }

  if (wObj.specialQuest) {
    list.push({
      tag: "SPECIAL QUEST",
      title: `${wObj.specialQuest}`,
      desc: "Must fulfill 1 free career/community action item from verified sources to clear the semester gate."
    });
  }

  return list;
}

/* Helper function to fetch week data by week number */
function getWeekData(weekNum) {
  for (const sem of ROADMAP) {
    const found = sem.weeks.find((w) => w.w === weekNum);
    if (found) return found;
  }
  return ROADMAP[0].weeks[0];
}

/* ==========================================================================
   2. APPLICATION STATE ENGINE
   ========================================================================== */
const DEFAULT_STATE = {
  user: {
    name: "Developer",
    titles: [],
    earnedBalanceLogs: {},
    shown70Popups: [],
    shown100Popups: []
  },
  startDate: new Date().toISOString(),
  currentTheme: "light",
  activeWeekSelected: 1,
  questStates: {}
};

let state = JSON.parse(localStorage.getItem("HCA_LMS_STATE_V3")) || DEFAULT_STATE;
if (!state.startDate) state.startDate = new Date().toISOString();
if (!state.user.shown70Popups) state.user.shown70Popups = [];
if (!state.user.shown100Popups) state.user.shown100Popups = [];
if (!state.user.name) state.user.name = "Developer";

function saveState() {
  localStorage.setItem("HCA_LMS_STATE_V3", JSON.stringify(state));
  renderApp();
}

/* ==========================================================================
   3. TIMESTAMPS & DEADLINES GENERATOR
   ========================================================================== */
function getWeekDeadlineText(weekNum) {
  const startMs = new Date(state.startDate).getTime();
  const weekEndMs = startMs + weekNum * 7 * 24 * 60 * 60 * 1000;
  const nowMs = Date.now();
  const diffMs = weekEndMs - nowMs;

  if (diffMs <= 0) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-clock"></i> Deadline Passed</span>`;
  }

  const daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (daysLeft < 2) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-fire"></i> ${daysLeft}d ${hoursLeft}h left</span>`;
  }
  return `<span class="deadline-badge"><i class="fa-solid fa-clock"></i> ${daysLeft}d ${hoursLeft}h left</span>`;
}

function getSemesterDeadlineText(semNum) {
  const startMs = new Date(state.startDate).getTime();
  const semEndMs = startMs + semNum * 12 * 7 * 24 * 60 * 60 * 1000;
  const nowMs = Date.now();
  const diffMs = semEndMs - nowMs;

  if (diffMs <= 0) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-clock"></i> Semester Ended</span>`;
  }

  const weeksLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  const daysLeft = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));

  return `<span class="deadline-badge"><i class="fa-solid fa-calendar"></i> ${weeksLeft}w ${daysLeft}d left</span>`;
}

/* ==========================================================================
   4. PROGRESSION & UNLOCK LOGIC ENGINE
   ========================================================================== */
function calculateSemesterProgress(semNum) {
  const semData = ROADMAP.find((s) => s.sem === semNum);
  let totalItems = 0;
  let completedItems = 0;

  semData.weeks.forEach((w) => {
    const qList = getQuestItemsForWeek(w);
    const qStates = state.questStates[w.w] || qList.map(() => 0);
    totalItems += qList.length;
    completedItems += qStates.filter((s) => s === 1).length;
  });

  return {
    total: totalItems,
    completed: completedItems,
    pct: totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0
  };
}

function calculateOverallProgress() {
  let total = 0;
  let completed = 0;
  for (let s = 1; s <= 4; s++) {
    const p = calculateSemesterProgress(s);
    total += p.total;
    completed += p.completed;
  }
  return {
    total: total,
    completed: completed,
    pct: total > 0 ? Math.round((completed / total) * 100) : 0
  };
}

function getWeekUnlockStatus(weekNum) {
  if (weekNum === 1) return true;

  const currentSemNum = Math.ceil(weekNum / 12);
  const isFirstWeekOfSemester = (weekNum - 1) % 12 === 0;

  if (isFirstWeekOfSemester && currentSemNum > 1) {
    const prevSemProgress = calculateSemesterProgress(currentSemNum - 1);
    if (prevSemProgress.pct >= 70) {
      return true;
    }
  }

  const prevWeekQuests = state.questStates[weekNum - 1] || [];
  const prevWeekExpectedCount = getQuestItemsForWeek(getWeekData(weekNum - 1)).length;
  if (prevWeekQuests.length < prevWeekExpectedCount) return false;
  return prevWeekQuests.every((st) => st === 1 || st === 2);
}

function checkMilestonesAndTriggers() {
  ROADMAP.forEach((s) => {
    const p = calculateSemesterProgress(s.sem);

    if (p.pct >= 70 && !state.user.titles.includes(s.unlockTitle)) {
      state.user.titles.push(s.unlockTitle);
    }

    if (p.pct >= 70 && !state.user.shown70Popups.includes(s.sem)) {
      state.user.shown70Popups.push(s.sem);
      triggerCongratsModal(s.sem, 70);
    }

    if (p.pct === 100 && !state.user.shown100Popups.includes(s.sem)) {
      state.user.shown100Popups.push(s.sem);
      triggerCongratsModal(s.sem, 100);
    }
  });
}

function getCurrentTitle() {
  if (state.user.titles.length === 0) return "Aspiring Engineer";
  return state.user.titles[state.user.titles.length - 1];
}

function countCompletedProjects() {
  let count = 0;
  ROADMAP.forEach((s) => {
    s.weeks.forEach((w) => {
      if (w.type === "midterm" || w.type === "final") {
        const qStates = state.questStates[w.w] || [];
        if (qStates.some((st) => st === 1)) count++;
      }
    });
  });
  return count;
}

function countShippedContent() {
  let count = 0;
  ROADMAP.forEach((s) => {
    s.weeks.forEach((w) => {
      const qStates = state.questStates[w.w] || [];
      count += qStates.filter((st) => st === 1).length;
    });
  });
  return count;
}

function toggleQuestState(weekNum, questIdx) {
  if (!state.questStates[weekNum]) {
    const expectedLength = getQuestItemsForWeek(getWeekData(weekNum)).length;
    state.questStates[weekNum] = new Array(expectedLength).fill(0);
  }

  const currentVal = state.questStates[weekNum][questIdx] || 0;
  const nextVal = (currentVal + 1) % 3;
  state.questStates[weekNum][questIdx] = nextVal;

  saveState();
}

/* ==========================================================================
   5. RENDER FUNCTIONS
   ========================================================================== */
function renderApp() {
  checkMilestonesAndTriggers();
  document.documentElement.setAttribute("data-theme", state.currentTheme);

  setTimeout(() => {
    const l = document.getElementById("loader");
    if (l) l.classList.add("hidden");
  }, 300);

  document.getElementById("sidebar-user-name").innerText = state.user.name;
  document.getElementById("dash-user-name").innerText = state.user.name;
  document.getElementById("profile-name-input").value = state.user.name;
  document.getElementById("sidebar-avatar-initial").innerText = state.user.name.charAt(0).toUpperCase();
  document.getElementById("profile-avatar-large").innerText = state.user.name.charAt(0).toUpperCase();

  const currentTitle = getCurrentTitle();
  document.getElementById("sidebar-user-title").innerText = currentTitle;
  document.getElementById("dash-user-title").innerText = currentTitle;

  const isDark = state.currentTheme === "dark";
  document.getElementById("theme-icon").innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  document.getElementById("theme-text").innerText = isDark ? "Light mode" : "Dark mode";

  renderDashboard();
  renderLearnPathway();
  renderQuests();
  renderAccountBook();
  renderMyCourse();
  renderProfile();
}

function updateUserName(newName) {
  if (newName.trim()) {
    state.user.name = newName.trim();
    saveState();
  }
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
  saveState();
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
  const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (activeNav) activeNav.classList.add("active");

  document.querySelectorAll(".tab-pane").forEach((el) => el.classList.remove("active"));
  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) targetPane.classList.add("active");

  const titleMap = {
    dashboard: ["Dashboard", "Track your progress, active deadlines, and learning consistency"],
    learn: ["Learning Pathway", "Explore weekly modules, requirements, and execution plans"],
    quests: ["Weekly Quests", "Mark off completed items, challenges, and public devlog deliverables"],
    accountbook: ["Account Book", "Track your accountability targets against logged earnings"],
    schedule: ["Schedule & Routine", "Daily and weekly time investment structures"],
    mycourse: ["My Course", "Full course syllabus, semester titles, and certificates"],
    profile: ["Student Profile", "Manage your titles, display name, and export progress cards"]
  };

  if (titleMap[tabId]) {
    document.getElementById("page-heading").innerText = titleMap[tabId][0];
    document.getElementById("page-subheading").innerText = titleMap[tabId][1];
  }
}

document.querySelectorAll(".nav-item button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tab = e.currentTarget.parentElement.getAttribute("data-tab");
    switchTab(tab);
  });
});

/* DASHBOARD */
function renderDashboard() {
  const overall = calculateOverallProgress();
  document.getElementById("full-course-progress-bar").style.width = `${overall.pct}%`;
  document.getElementById("full-course-progress-text").innerText = `${overall.pct}%`;
  document.getElementById("full-course-items-text").innerText = `${overall.completed} / ${overall.total} quest items complete`;

  const currentSemNum = Math.min(4, Math.ceil(state.activeWeekSelected / 12));
  const semProgress = calculateSemesterProgress(currentSemNum);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);

  document.getElementById("dash-sem-num").innerText = currentSemNum;
  document.getElementById("dash-sem-name").innerText = semData.title;
  document.getElementById("current-sem-progress-bar").style.width = `${semProgress.pct}%`;
  document.getElementById("current-sem-progress-text").innerText = `${semProgress.pct}%`;
  document.getElementById("dash-sem-deadline-badge").innerHTML = getSemesterDeadlineText(currentSemNum);

  const weekObj = getWeekData(state.activeWeekSelected);
  document.getElementById("dash-week-title").innerText = `Week ${weekObj.w}: ${weekObj.title}`;
  document.getElementById("dash-week-deadline").innerHTML = getWeekDeadlineText(weekObj.w);

  const qListContainer = document.getElementById("dash-quest-list");
  qListContainer.innerHTML = "";
  const quests = getQuestItemsForWeek(weekObj);
  const qStates = state.questStates[weekObj.w] || quests.map(() => 0);

  quests.forEach((q, idx) => {
    const st = qStates[idx] || 0;
    const div = document.createElement("div");
    div.className = "quest-item";
    div.setAttribute("data-state", st);
    div.onclick = () => toggleQuestState(weekObj.w, idx);
    div.innerHTML = `
          <div class="quest-checkbox">${st === 1 ? '<i class="fa-solid fa-check"></i>' : st === 2 ? '<i class="fa-solid fa-xmark"></i>' : ""}</div>
          <div class="quest-content">
            <div class="quest-tag">${q.tag}</div>
            <div class="quest-title">${q.title}</div>
          </div>
          <span style="font-size:0.75rem; font-weight:700; color:${st === 1 ? "var(--sage)" : st === 2 ? "var(--rust)" : "var(--ink-dim)"};">
            ${st === 1 ? "Done" : st === 2 ? "Incomplete" : "Pending"}
          </span>
        `;
    qListContainer.appendChild(div);
  });

  document.getElementById("dash-portfolio-count").innerText = `${countCompletedProjects()} / 8`;
  document.getElementById("dash-content-count").innerText = `${countShippedContent()} / ${overall.total}`;

  const titlesContainer = document.getElementById("dash-titles-list");
  if (state.user.titles.length === 0) {
    titlesContainer.innerText = "None yet — reach 70% in Semester 1 to earn your first title.";
  } else {
    titlesContainer.innerHTML = state.user.titles
      .map(
        (t) =>
          `<span style="display:inline-flex; align-items:center; gap:0.4rem; background:var(--surface2); padding:0.3rem 0.6rem; border-radius:8px; margin-right:0.4rem; margin-bottom:0.4rem; font-size:0.85rem;"><i class="fa-solid fa-award" style="color:var(--gold);"></i> ${t}</span>`
      )
      .join("");
  }
}

/* LEARN PATHWAY */
function renderLearnPathway() {
  const currentSemNum = Math.ceil(state.activeWeekSelected / 12);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);
  document.getElementById("learn-sem-title").innerText = `Semester ${semData.sem} – ${semData.title}`;

  const semBtnContainer = document.getElementById("sem-switcher-buttons");
  semBtnContainer.innerHTML = "";
  ROADMAP.forEach((s) => {
    const btn = document.createElement("button");
    btn.className = `week-chip ${s.sem === currentSemNum ? "active" : ""}`;
    btn.innerText = `Semester ${s.sem}`;
    btn.onclick = () => {
      state.activeWeekSelected = (s.sem - 1) * 12 + 1;
      saveState();
    };
    semBtnContainer.appendChild(btn);
  });

  const container = document.getElementById("pathway-nodes-container");
  container.innerHTML = "";

  semData.weeks.forEach((w) => {
    const isUnlocked = getWeekUnlockStatus(w.w);
    const isActive = w.w === state.activeWeekSelected;
    const qStates = state.questStates[w.w] || [];
    const isCompleted = qStates.length > 0 && qStates.every((s) => s === 1);

    const node = document.createElement("div");
    node.className = `pathway-week-node ${isUnlocked ? "unlocked" : "locked"} ${isActive ? "active-week" : ""}`;

    node.onclick = () => {
      if (isUnlocked) openWeekDrawer(w.w);
    };

    node.innerHTML = `
          <div class="node-left">
            <div class="node-number">${isUnlocked ? (isCompleted ? '<i class="fa-solid fa-check"></i>' : w.w) : '<i class="fa-solid fa-lock"></i>'}</div>
            <div class="node-details">
              <h4>Week ${w.w}: ${w.title}</h4>
              <p>${w.resource}</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.3rem;">
            ${isUnlocked ? getWeekDeadlineText(w.w) : ""}
            ${
              !isUnlocked
                ? `<span class="node-status-badge badge-locked"><i class="fa-solid fa-lock"></i> Locked</span>`
                : isCompleted
                  ? `<span class="node-status-badge badge-done">Completed</span>`
                  : `<span class="node-status-badge badge-active">View Details &rsaquo;</span>`
            }
          </div>
        `;
    container.appendChild(node);
  });
}

function openWeekDrawer(weekNum) {
  const wObj = getWeekData(weekNum);
  const semNum = Math.ceil(weekNum / 12);

  document.getElementById("drawer-week-tag").innerText = `SEMESTER ${semNum} · WEEK ${wObj.w}`;
  document.getElementById("drawer-week-title").innerText = wObj.title;

  const body = document.getElementById("drawer-body-content");
  body.innerHTML = "";

  // WHAT Section
  const whatSec = document.createElement("div");
  whatSec.className = "drawer-section";
  whatSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-circle-info"></i> WHAT (Overview & Topics Covered)</div>
    <h3>${wObj.title}</h3>
    <p style="margin-top:0.4rem; line-height:1.6;">${wObj.what}</p>
  `;
  body.appendChild(whatSec);

  // WHY Section
  const whySec = document.createElement("div");
  whySec.className = "drawer-section";
  whySec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-lightbulb"></i> WHY (Career Relevance & Impact)</div>
    <p style="line-height:1.6;">${wObj.why}</p>
  `;
  body.appendChild(whySec);

  // WHEN Section
  const whenSec = document.createElement("div");
  whenSec.className = "drawer-section";
  whenSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-clock"></i> WHEN (Commitment & Schedule)</div>
    <p style="line-height:1.6;">${wObj.when}</p>
    <div style="margin-top:0.5rem;">Deadline status: ${getWeekDeadlineText(wObj.w)}</div>
  `;
  body.appendChild(whenSec);

  // WHERE Section
  const whereSec = document.createElement("div");
  whereSec.className = "drawer-section";
  whereSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-location-dot"></i> WHERE (Learning Material & Resources)</div>
    <p>Primary Resource: <strong>${wObj.resource}</strong></p>
    <p style="margin-top:0.3rem;">References: ${wObj.where}</p>
  `;
  body.appendChild(whereSec);

  // HOW Section
  const howSec = document.createElement("div");
  howSec.className = "drawer-section";
  howSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-list-check"></i> HOW (Action Plan & Execution)</div>
    <p style="white-space: pre-line; line-height:1.6;">${wObj.how}</p>
  `;
  body.appendChild(howSec);

  if (wObj.projectOptions && wObj.projectOptions.length > 0) {
    const projSec = document.createElement("div");
    projSec.className = "drawer-section";
    projSec.style.borderColor = "var(--gold)";

    let optionsHTML = `
      <div class="drawer-section-title"><i class="fa-solid fa-diagram-project"></i> PROJECT BRIEFS & OPTIONS (Choose 1)</div>
      <p style="font-size:0.85rem; color:var(--ink-dim); margin-bottom:1rem;">Select one of the project options below:</p>
      <div style="display:flex; flex-direction:column; gap:0.75rem;">
    `;

    wObj.projectOptions.forEach((opt) => {
      optionsHTML += `
        <div style="background:var(--surface); border:1px solid var(--line); padding:1rem; border-radius:10px;">
          <h4 style="color:var(--plum); font-size:0.95rem;">${opt.title}</h4>
          <p style="font-size:0.82rem; color:var(--ink-dim); margin:0.3rem 0 0.6rem 0;">${opt.desc}</p>
        </div>
      `;
    });

    optionsHTML += `</div>`;

    if (wObj.aiPrompt) {
      optionsHTML += `
        <div style="margin-top:1.25rem; padding-top:1rem; border-top:1px dashed var(--line);">
          <div style="font-size:0.8rem; font-weight:800; color:var(--gold); margin-bottom:0.4rem;">
            <i class="fa-solid fa-robot"></i> AI PROJECT IDEA GENERATOR PROMPT
          </div>
          <div style="position:relative; background:var(--surface2); padding:0.85rem; border-radius:8px; border:1px solid var(--line); font-size:0.8rem; color:var(--ink); font-family:monospace; line-height:1.4;">
            ${wObj.aiPrompt}
          </div>
        </div>
      `;
    }

    projSec.innerHTML = optionsHTML;
    body.appendChild(projSec);
  }

  if (wObj.specialQuest) {
    const sqSec = document.createElement("div");
    sqSec.className = "drawer-section";
    sqSec.style.borderColor = "var(--sage)";
    sqSec.innerHTML = `
      <div class="drawer-section-title" style="color:var(--sage);"><i class="fa-solid fa-star"></i> SPECIAL QUEST (Semester Gate)</div>
      <p style="font-size:0.9rem; font-weight:700; color:var(--ink);">${wObj.specialQuest}</p>
    `;
    body.appendChild(sqSec);
  }

  const ctaDiv = document.createElement("div");
  ctaDiv.style.marginTop = "0.5rem";
  ctaDiv.innerHTML = `<button class="btn-primary" style="width:100%;" onclick="jumpToQuestsFromDrawer(${wObj.w})">Open Quests Checklist for Week ${wObj.w} &rsaquo;</button>`;
  body.appendChild(ctaDiv);

  document.getElementById("week-drawer-overlay").classList.add("open");
}

function closeWeekDrawer() {
  document.getElementById("week-drawer-overlay").classList.remove("open");
}

function jumpToQuestsFromDrawer(weekNum) {
  state.activeWeekSelected = weekNum;
  saveState();
  closeWeekDrawer();
  switchTab("quests");
}

/* QUESTS TAB */
function renderQuests() {
  const weekBar = document.getElementById("quests-week-bar");
  weekBar.innerHTML = "";

  for (let w = 1; w <= 48; w++) {
    const isUnlocked = getWeekUnlockStatus(w);
    const chip = document.createElement("div");
    chip.className = `week-chip ${w === state.activeWeekSelected ? "active" : ""} ${!isUnlocked ? "disabled" : ""}`;
    chip.innerText = `W${w}`;
    if (isUnlocked) {
      chip.onclick = () => {
        state.activeWeekSelected = w;
        saveState();
      };
    }
    weekBar.appendChild(chip);
  }

  const weekObj = getWeekData(state.activeWeekSelected);
  const currentSemNum = Math.ceil(weekObj.w / 12);

  document.getElementById("quest-header-sem").innerText = `SEMESTER ${currentSemNum} · WEEK ${weekObj.w}`;
  document.getElementById("quest-header-title").innerText = weekObj.title;
  document.getElementById("quest-header-resource").innerText = `Resource: ${weekObj.resource}`;
  document.getElementById("quest-header-deadline").innerHTML = getWeekDeadlineText(weekObj.w);

  const questsContainer = document.getElementById("quest-items-container");
  questsContainer.innerHTML = "";

  const quests = getQuestItemsForWeek(weekObj);
  const qStates = state.questStates[weekObj.w] || quests.map(() => 0);

  quests.forEach((q, idx) => {
    const st = qStates[idx] || 0;
    const item = document.createElement("div");
    item.className = "quest-item";
    item.setAttribute("data-state", st);
    item.onclick = () => toggleQuestState(weekObj.w, idx);

    item.innerHTML = `
          <div class="quest-checkbox">${st === 1 ? '<i class="fa-solid fa-check"></i>' : st === 2 ? '<i class="fa-solid fa-xmark"></i>' : ""}</div>
          <div class="quest-content">
            <div class="quest-tag">${q.tag}</div>
            <div class="quest-title">${q.title}</div>
            <div class="quest-desc">${q.desc}</div>
          </div>
          <span style="font-size:0.8rem; font-weight:700; color:${st === 1 ? "var(--sage)" : st === 2 ? "var(--rust)" : "var(--ink-dim)"};">
            ${st === 1 ? "Done" : st === 2 ? "Incomplete" : "Mark"}
          </span>
        `;
    questsContainer.appendChild(item);
  });
}

/* ACCOUNT BOOK TAB */
function renderAccountBook() {
  const targetPerMonth = 400;
  let totalExpected = 11 * targetPerMonth;
  let totalLogged = 0;

  const select = document.getElementById("log-month-select");
  select.innerHTML = "";
  for (let m = 1; m <= 11; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    opt.innerText = `Month ${m}`;
    select.appendChild(opt);
  }

  const tbody = document.getElementById("account-log-tbody");
  tbody.innerHTML = "";

  for (let m = 1; m <= 11; m++) {
    const logged =
      state.user.earnedBalanceLogs[m] !== undefined
        ? Number(state.user.earnedBalanceLogs[m])
        : null;
    if (logged !== null) totalLogged += logged;

    const target = targetPerMonth;
    const balance = logged !== null ? logged - target : -target;

    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td><strong>Month ${m}</strong></td>
          <td>$${target}</td>
          <td>${logged !== null ? `$${logged}` : '<span style="color:var(--ink-dim)">Not logged</span>'}</td>
          <td style="font-weight:700; color: ${balance >= 0 ? "var(--sage)" : "var(--rust)"}">
            ${balance >= 0 ? `+$${balance}` : `-$${Math.abs(balance)}`}
          </td>
        `;
    tbody.appendChild(tr);
  }

  const netBalance = totalLogged - totalExpected;
  const balEl = document.getElementById("account-running-balance");
  balEl.innerText = netBalance >= 0 ? `+$${netBalance}` : `-$${Math.abs(netBalance)}`;
  balEl.className = `balance-amount ${netBalance >= 0 ? "positive" : "negative"}`;
}

function handleLogEarning(e) {
  e.preventDefault();
  const month = document.getElementById("log-month-select").value;
  const amount = document.getElementById("log-amount-input").value;
  if (month && amount !== "") {
    state.user.earnedBalanceLogs[month] = Number(amount);
    saveState();
    document.getElementById("log-amount-input").value = "";
  }
}

/* MY COURSE TAB */
function renderMyCourse() {
  const container = document.getElementById("semester-cards-container");
  container.innerHTML = "";

  ROADMAP.forEach((s) => {
    const p = calculateSemesterProgress(s.sem);
    const isUnlocked = getWeekUnlockStatus((s.sem - 1) * 12 + 1);

    const card = document.createElement("div");
    card.className = `semester-card ${!isUnlocked ? "locked" : ""}`;
    card.innerHTML = `
          <div style="display:flex; justify-space-between; align-items:flex-start; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem; font-weight:700; color:var(--gold); text-transform:uppercase;">SEMESTER ${s.sem}</span>
              <h3 class="brand-font" style="font-size:1.3rem;">${s.title}</h3>
            </div>
            <div>${getSemesterDeadlineText(s.sem)}</div>
          </div>
          <p style="font-size:0.85rem; color:var(--ink-dim); margin-bottom:1rem;">
            Title Unlock: <strong style="color:var(--gold);"><i class="fa-solid ${s.badgeIcon}"></i> ${s.unlockTitle}</strong>
          </p>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width:${p.pct}%"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--ink-dim); margin-top:0.4rem;">
            <span>${p.pct}% Completed</span>
            <span>${p.completed}/${p.total} Quests</span>
          </div>
        `;
    container.appendChild(card);
  });
}

/* PROFILE TAB */
function renderProfile() {
  const titlesList = document.getElementById("profile-titles-list");
  titlesList.innerHTML = "";

  if (state.user.titles.length === 0) {
    titlesList.innerHTML = `<span style="font-size:0.85rem; color:var(--ink-dim);">No titles unlocked yet. Reach 70% in any semester to claim its title!</span>`;
  } else {
    state.user.titles.forEach((title) => {
      const semObj = ROADMAP.find((s) => s.unlockTitle === title);
      const icon = semObj ? semObj.badgeIcon : "fa-award";
      const bg = semObj ? semObj.badgeBg : "#2563EB";

      const badge = document.createElement("div");
      badge.className = "title-badge";
      badge.style.background = bg;
      badge.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${title}</span>`;
      titlesList.appendChild(badge);
    });
  }

  const encouragementText = document.getElementById("badge-encouragement-text");
  const nextSem = ROADMAP.find((s) => !state.user.titles.includes(s.unlockTitle));
  if (nextSem) {
    encouragementText.innerText = `Reach 70% in Semester ${nextSem.sem} to earn "${nextSem.unlockTitle}" proudly!`;
  } else {
    encouragementText.innerText = `Master Systems Engineer! You have unlocked all titles in the Applied CS & AI Engineering Pathway!`;
  }
}

function triggerCongratsModal(semNum, pct) {
  const modal = document.getElementById("congrats-modal-overlay");
  const semData = ROADMAP.find((s) => s.sem === semNum);
  const title = document.getElementById("modal-title");
  const msg = document.getElementById("modal-message");

  if (pct === 70) {
    title.innerText = `Title Unlocked: ${semData.unlockTitle}!`;
    msg.innerText = `Congratulations! You hit 70% in Semester ${semNum} (${semData.title}) and officially unlocked the title of ${semData.unlockTitle}!`;
  } else if (pct === 100) {
    title.innerText = `Semester ${semNum} Mastered!`;
    msg.innerText = `Incredible work! You achieved 100% completion in Semester ${semNum} (${semData.title})!`;
  }
  modal.classList.add("open");
}

function closeCongratsModal() {
  document.getElementById("congrats-modal-overlay").classList.remove("open");
}

function resetAllProgress() {
  if (confirm("Are you sure you want to reset all progress? This action cannot be undone.")) {
    localStorage.removeItem("HCA_LMS_STATE_V3");
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    state.startDate = new Date().toISOString();
    saveState();
  }
}

function generateAchievementCard() {
  const canvas = document.getElementById("card-canvas");
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 2000, 2000);
  grad.addColorStop(0, "#0F172A");
  grad.addColorStop(1, "#1E1B4B");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2000, 2000);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 90px 'Space Grotesk', sans-serif";
  ctx.fillText("HUMANITARIAN CODE ACADEMY", 150, 220);

  ctx.fillStyle = "#F59E0B";
  ctx.font = "bold 65px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("APPLIED COMPUTER SCIENCE & AI ENGINEERING", 150, 320);

  ctx.fillStyle = "#E2E8F0";
  ctx.font = "bold 110px 'Space Grotesk', sans-serif";
  ctx.fillText(state.user.name, 150, 500);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "50px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`Current Rank: ${getCurrentTitle()}`, 150, 580);

  const overall = calculateOverallProgress();
  ctx.fillStyle = "#10B981";
  ctx.font = "bold 140px 'Space Grotesk', sans-serif";
  ctx.fillText(`${overall.pct}%`, 150, 800);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "45px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`Overall Program Progress (${overall.completed} / ${overall.total} Quests)`, 150, 870);

  const link = document.createElement("a");
  link.download = `${state.user.name.replace(/\s+/g, "_")}_AI_Achievement.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});
