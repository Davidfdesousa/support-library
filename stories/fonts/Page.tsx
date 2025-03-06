import React from "react";

import { Header } from "../components/Header";
import "../page.css";

type User = { name: string };

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />
      <div className='storybook-page'>
        <section>
            <h2 className="fnt-subtitle regular">
              Roboto Regular
            </h2>

            <div className="fnt-codeBox medium">
              {`.your-style{
              font-family: 'Roboto';
              font-weight: 500;
              font-style: normal;
              }`}
            </div>

          <div className="fnt-showroom regular">
            <p style={{ marginBottom: 8, fontSize: "14px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "18px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "24px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "36px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </section>

        <section>
            <h2 className="fnt-subtitle medium">
              Roboto Medium
            </h2>

            <div className="fnt-codeBox medium">
              {`.your-style{
              font-family: 'Roboto';
              font-weight: bold;
              font-style: normal;
              }`}
            </div>

          <div className="fnt-showroom medium">
            <p style={{ marginBottom: 8, fontSize: "14px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "18px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "24px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "36px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </section>

        <section>
            <h2 className="fnt-subtitle bold">
              Roboto Bold
            </h2>

            <div className="fnt-codeBox medium">
              {`.your-style{
              font-family: 'Roboto';
              font-weight: bold;
              font-style: normal;
              }`}
            </div>

          <div className="fnt-showroom bold">
            <p style={{ marginBottom: 8, fontSize: "14px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "18px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "24px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ marginBottom: 8, fontSize: "36px" }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};
