import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="px-4 md:px-0 md:w-3/4">
          <div className="bg-gray-300 rounded-md my-4">
            <h3 className="md:text-2xl font-bold bg-gray-400 m-0 rounded-t-md px-3 py-2">
              Difference between SQL and NoSQL
            </h3>
            <div className="text-xs md:text-base px-3 py-5">
              <ul className="px-6 list-disc">
                <li>
                  SQL databases are relational, NoSQL databases are
                  non-relational.
                </li>
                <li>
                  SQL databases use structured query language and have a
                  predefined schema. NoSQL databases have dynamic schemas for
                  unstructured data.
                </li>
                <li>
                  SQL databases are vertically scalable, while NoSQL databases
                  are horizontally scalable.
                </li>
                <li>
                  SQL databases are table-based, while NoSQL databases are
                  document, key-value, graph, or wide-column stores.
                </li>
                <li>
                  SQL databases are better for multi-row transactions, while
                  NoSQL is better for unstructured data like documents or JSON.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-300 rounded-md my-4">
            <h3 className="md:text-2xl font-bold bg-gray-400 m-0 rounded-t-md px-3 py-2">
              What is JWT, and how does it work?
            </h3>
            <p className="text-xs md:text-base px-3 py-5">
              JSON Web Token is a proposed Internet standard for creating data
              with optional signature and/or optional encryption whose payload
              holds JSON that asserts some number of claims. The tokens are
              signed either using a private secret or a public/private key.
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key. User's Client
              uses the JWT to access protected resources by passing the JWT in
              HTTP Authorization header. Resource server then verifies the
              authenticity of the token using the secret salt/ public key.
            </p>
          </div>
          <div className="bg-gray-300 rounded-md my-4">
            <h3 className="md:text-2xl font-bold bg-gray-400 m-0 rounded-t-md px-3 py-2">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="text-xs md:text-base px-3 py-5">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. On the other
              hand, NodeJS is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
          </div>
          <div className="bg-gray-300 rounded-md my-4">
            <h3 className="md:text-2xl font-bold bg-gray-400 m-0 rounded-t-md px-3 py-2">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="text-xs md:text-base px-3 py-5">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
