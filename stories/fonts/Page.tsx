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
        <div>
          <h1 className="fnt-subtitle">Biblioteca de Fontes</h1>
          

          <p className="fnt-showroom">Para garantir consistência visual e reforçar a identidade da sua marca, este pacote de fontes foi preparado para ser facilmente integrado via CDN.
          Você encontrará abaixo exemplos de uso, variações de peso, estilo e as respectivas declarações CSS que podem ser copiadas diretamente para seu projeto.
          <br/><br/>
          As fontes são carregadas de forma otimizada, sem a necessidade de instalação local, facilitando a aplicação tanto em ambientes de desenvolvimento quanto em produção.

          </p>
        </div>
        <section>
            <h2 className="fnt-subtitle regular">
              Roboto Regular
            </h2>

            <div className="fnt-codeBox medium">
              {`https://cdnexamples.blob.core.windows.net/storybook/cdn/fonts/assets/Roboto-Bold.ttf`}
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
              {`https://cdnexamples.blob.core.windows.net/storybook/cdn/fonts/assets/Roboto-Medium.ttf`}
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
              {`https://cdnexamples.blob.core.windows.net/storybook/cdn/fonts/assets/Roboto-Regular.ttf`}
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
