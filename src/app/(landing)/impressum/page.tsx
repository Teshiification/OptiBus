import React from 'react';

const ImpressumPage = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4 select-text">
        <h1 className="text-2xl font-bold mb-4">Impressum</h1>
        <p>
          Verantwortlich für den Inhalt:
          <br />
          OptiBus Reisebusunternehmen GmbH
          <br />
          Musterstraße 123
          <br />
          12345 Musterstadt
          <br />
          Deutschland
        </p>
        <p>
          Vertreten durch:
          <br />
          Geschäftsführer: Max Mustermann
        </p>
        <p>
          Kontakt:
          <br />
          Telefon: +49 (0)123 456789
          <br />
          E-Mail:{' '}
          <a href="mailto:info@optibusreisebusunternehmen.com">
            info@optibusreisebusunternehmen.com
          </a>
        </p>
        <p>
          Registrierung:
          <br />
          Handelsregister: Amtsgericht Musterstadt
          <br />
          Registernummer: HRB 12345
        </p>
        <p>
          Umsatzsteuer-ID:
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          <br />
          DE123456789
        </p>
        <p>
          Aufsichtsbehörde:
          <br />
          Verkehrsamt Musterstadt
          <br />
          Musterstraße 456
          <br />
          12345 Musterstadt
          <br />
          Deutschland
        </p>
        <p>
          Streitschlichtung:
          <br />
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
        <p>
          Haftungshinweis:
          <br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <p>
          Copyright-Hinweis:
          <br />
          Alle Inhalte dieser Website, einschließlich Texte, Grafiken, Logos,
          Bilder und Software, sind urheberrechtlich geschützt. Eine
          Vervielfältigung oder Verwendung ohne ausdrückliche Zustimmung des
          Unternehmens ist nicht gestattet.
        </p>
        <p className="mt-4">
          Dieses Impressum wurde zuletzt am [Datum] aktualisiert.
        </p>
      </div>
    </div>
  );
};

export default ImpressumPage;
