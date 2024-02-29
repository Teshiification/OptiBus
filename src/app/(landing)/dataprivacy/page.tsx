import React from 'react';

const DataPrivacyPage = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4 dark:text-gray-300 select-text">
        <h1 className="text-2xl font-bold mb-4">
          Datenschutzrichtlinie für die Stammdatenverwaltungssoftware von
          OptiBus Reisebusunternehmen
        </h1>
        <p>
          <h2>Einführung</h2>
          OptiBus Reisebusunternehmen (nachfolgend "das Unternehmen")
          verpflichtet sich zum Schutz der Privatsphäre und personenbezogenen
          Daten seiner Kunden und Geschäftspartner. Diese Datenschutzrichtlinie
          beschreibt, wie das Unternehmen personenbezogene Daten in Zusammenhang
          mit seiner Stammdatenverwaltungssoftware gemäß den Anforderungen der
          Datenschutz-Grundverordnung (DSGVO) der Europäischen Union verarbeitet
          und schützt.
        </p>
        <p>
          <h2>Verantwortlichkeit für die Datenverarbeitung</h2>
          Das Unternehmen ist für die Verarbeitung personenbezogener Daten im
          Rahmen seiner Stammdatenverwaltungssoftware verantwortlich und stellt
          sicher, dass alle Mitarbeiter, die Zugriff auf diese Daten haben, die
          Datenschutzrichtlinien und -verfahren des Unternehmens einhalten.
        </p>
        <p>
          <h2>Zweck der Datenverarbeitung</h2>
          Die Stammdatenverwaltungssoftware wird genutzt, um
          Kundeninformationen, Buchungsdaten, Reiserouten und andere relevante
          Informationen im Zusammenhang mit den Dienstleistungen des
          Unternehmens zu verwalten. Die Verarbeitung personenbezogener Daten
          erfolgt ausschließlich zum Zweck der Vertragserfüllung,
          Kundenbetreuung, Buchungsabwicklung und internen Verwaltung.
        </p>
        <p>
          <h2>Arten der verarbeiteten Daten</h2>
          Die Stammdatenverwaltungssoftware kann folgende Arten von
          personenbezogenen Daten enthalten:
          <ul>
            <li>
              Name, Adresse, Kontaktinformationen der Kunden und
              Geschäftspartner
            </li>
            <li>Reisedaten, Buchungsinformationen, Präferenzen</li>
            <li>
              Gegebenenfalls besondere Kategorien personenbezogener Daten gemäß
              Artikel 9 DSGVO, wie gesundheitliche Einschränkungen oder
              besondere Bedürfnisse im Zusammenhang mit der Reise
            </li>
          </ul>
        </p>
        <p>
          <h2>Rechtsgrundlage für die Datenverarbeitung</h2>
          Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage einer
          oder mehrerer der folgenden Rechtsgrundlagen gemäß Artikel 6 DSGVO:
          <ul>
            <li>
              Die Verarbeitung ist zur Erfüllung eines Vertrags erforderlich,
              dessen Vertragspartei die betroffene Person ist.
            </li>
            <li>
              Die Verarbeitung ist zur Erfüllung rechtlicher Verpflichtungen
              erforderlich, denen das Unternehmen unterliegt.
            </li>
            <li>
              Die betroffene Person hat ihre Einwilligung zur Verarbeitung ihrer
              personenbezogenen Daten für einen oder mehrere bestimmte Zwecke
              gegeben.
            </li>
          </ul>
        </p>
        <p>
          <h2>Sicherheitsmaßnahmen</h2>
          Das Unternehmen ergreift angemessene technische und organisatorische
          Maßnahmen, um die Sicherheit und Vertraulichkeit der personenbezogenen
          Daten zu gewährleisten. Dazu gehören unter anderem
          Zugriffsbeschränkungen, Verschlüsselungstechnologien, Schulungen der
          Mitarbeiter und regelmäßige Überprüfungen der Sicherheitsmaßnahmen.
        </p>
        <p>
          <h2>Datenweitergabe an Dritte</h2>
          Das Unternehmen gibt personenbezogene Daten nur an Dritte weiter, wenn
          dies zur Erfüllung der Vertragsleistung oder gesetzlicher
          Verpflichtungen erforderlich ist. Dritte, die Zugriff auf
          personenbezogene Daten haben, sind vertraglich verpflichtet, die
          Datenschutzstandards des Unternehmens einzuhalten.
        </p>
        <p>
          <h2>Aufbewahrung von Daten</h2>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die
          Erfüllung der festgelegten Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies vorschreiben. Nach Ablauf der
          Aufbewahrungsfristen werden die Daten sicher gelöscht oder
          anonymisiert.
        </p>
        <p>
          <h2>Rechte der betroffenen Personen</h2>
          Gemäß der DSGVO haben betroffene Personen bestimmte Rechte in Bezug
          auf ihre personenbezogenen Daten, einschließlich des Rechts auf
          Auskunft, Berichtigung, Löschung und Widerspruch gegen die
          Verarbeitung. Betroffene Personen können diese Rechte ausüben, indem
          sie sich an das Unternehmen wenden.
        </p>
        <p>
          <h2>Änderungen dieser Datenschutzrichtlinie</h2>
          Das Unternehmen behält sich das Recht vor, diese Datenschutzrichtlinie
          jederzeit zu ändern oder zu aktualisieren, um rechtlichen,
          technologischen oder geschäftlichen Anforderungen gerecht zu werden.
          Jegliche Änderungen werden auf der Unternehmenswebsite veröffentlicht.
        </p>
        <div>
          <h2>Kontakt</h2>
          Für Fragen oder Anliegen bezüglich dieser Datenschutzrichtlinie oder
          der Verarbeitung personenbezogener Daten durch das Unternehmen können
          betroffene Personen sich an folgende Kontaktadresse wenden:
          <address className="font-medium">
            OptiBus Reisebusunternehmen Datenschutzbeauftragter: Max Mustermann
            Musterstraße 123 12345 Musterstadt Email:{' '}
            <a href="mailto:datenschutz@optibus-reisebusunternehmen.com">
              datenschutz@optibus-reisebusunternehmen.com
            </a>
          </address>
        </div>
        <p className="mt-4">
          Diese Datenschutzrichtlinie wurde zuletzt am 20.01.2024 aktualisiert.
        </p>
      </div>
    </div>
  );
};

export default DataPrivacyPage;
