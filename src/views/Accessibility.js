import React from 'react'

import MagicLink from 'components/base/MagicLink'

export default function Accessibility() {
  return (
    <>
      <h1>Déclaration d’accessibilité</h1>
      <p>
        L’ADEME s’engage à rendre ses sites internet accessibles conformément à
        l’article 47 de la loi n° 2005-102 du 11 février 2005.
        <br />
        La présente déclaration d’accessibilité s’applique au site Mon Impact
        Transport.
      </p>
      <h2>État de conformité</h2>
      <p>
        Le site Mon Impact Transport (https://monimpacttransport.fr/) est
        partiellement conforme avec le référentiel général d’amélioration de
        l’accessibilité, RGAA version 4.1, en raison des non-conformités
        énumérées dans la section « Résultats des tests ».
      </p>
      <h2>Résultats des tests</h2>
      <p>
        L’audit de conformité réalisé le 18/02/2022 par la société Access42
        révèle que le site est conforme à 70,59 % au RGAA version 4.1.
      </p>
      <h3>Contenus inaccessibles</h3>
      <p>
        Les contenus listés ci-dessous ne sont pas accessibles pour les raisons
        suivantes.
      </p>
      <h4>Non-conformités</h4>
      <ul>
        <li>
          Des fonctionnalités JavaScript ne sont pas compatibles avec
          les technologies d’assistance (notamment des fenêtres modales, un
          slider, des combobox et une zone qui s’affiche et qui se masque) ;
        </li>
        <li> Des pages contiennent des erreurs de code source ;</li>
        <li>
          Des pages ont une hiérarchie de titres non pertinente (titres
          manquants ou mal définis) ;
        </li>
        <li>Des suites d’éléments ne sont pas structurées avec des listes ;</li>
        <li>
          Des indications visuelles de prise de focus ne sont pas suffisamment
          contrastées ou sont désactivées ;
        </li>
        <li>
          Certains contenus additionnels apparaissant au survol ou à la prise de
          focus ne sont pas contrôlables par l’utilisateur ;
        </li>
        <li>
          Des champs de formulaires n'ont pas d'étiquette correctement liée ou
          pas d’étiquette pertinente ;
        </li>
        <li>
          Des boutons de formulaire ont un intitulé qui n’est pas pertinent ;
        </li>
        <li>
          Des aides à la saisie sont absentes ou non pertinentes pour les champs
          qui attendent un format particulier et des champs obligatoires ne sont
          pas correctement indiqués ;
        </li>
        <li>
          Certains champs de formulaire qui attendent une donnée personnelle de
          l'utilisateur ne sont pas identifiés ;
        </li>
        <li> Les zones principales des pages sont mal définies ;</li>
        <li>
          Il manque un lien d’accès rapide au contenu principal des pages ;
        </li>
        <li>
          Des pages présentent des problèmes dans le parcours de tabulation.
        </li>
      </ul>
      <h2>Établissement de cette déclaration d’accessibilité</h2>
      <p>Cette déclaration a été établie le 27/05/2022.</p>
      <h3>Technologies utilisées pour la réalisation du site</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <h3>
        Agents utilisateurs, technologies d’assistance et outils utilisés pour
        vérifier l’accessibilité
      </h3>
      <p>
        Les tests des pages web ont été effectués avec les combinaisons de
        navigateurs web et lecteurs d’écran suivants :
      </p>
      <ul>
        <li>Firefox 97 et NVDA 2021.3 ;</li>
        <li>Firefox 97 et JAWS 2020 ;</li>
        <li>Safari 15.0 et VoiceOver (macOS Big Sur, version 11.6) ;</li>
        <li>Chrome 96.0 et TalkBack (Android natif 10.0).</li>
      </ul>
      <p>
        La vérification de l’accessibilité est le résultat de tests manuels,
        assistés par des outils (feuilles CSS dédiés, extensions HeadingsMaps et
        WebDeveloper Toolbar, Color Contrast Analyser).
      </p>
      <h3>Pages du site ayant fait l’objet de la vérification de conformité</h3>
      <ul>
        <li>Accueil : https://monimpacttransport.fr/</li>
        <li>Itinéraire : https://monimpacttransport.fr/itineraire</li>
        <li>Télétravail : https://monimpacttransport.fr/teletravail</li>
      </ul>
      <h2>Retour d’information et contact</h2>
      <p>
        Il est important de rappeler qu’en vertu de l’article 11 de la loi de
        février 2005 :
        <br />
        « la personne handicapée a droit à la compensation des conséquences de
        son handicap, quels que soient l’origine et la nature de sa déficience,
        son âge ou son mode de vie. »
        <br />
        L’ADEME s'engage à prendre les moyens nécessaires afin de donner accès,
        dans un délai raisonnable, aux informations et fonctionnalités
        recherchées par la personne handicapée, que le contenu fasse l'objet
        d'une dérogation ou non. L’ADEME invite les personnes qui
        rencontreraient des difficultés à la contacter (rgaa@ademe.fr) afin
        qu’une assistance puisse être apportée (alternative accessible,
        information et contenu donnés sous une autre forme).
      </p>
      <h2>Voies de recours</h2>
      <p>
        Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à
        un contenu ou une fonctionnalité du site, que vous nous le signalez et
        que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes
        en droit de faire parvenir vos doléances ou une demande de saisine au
        Défenseur des droits. Plusieurs moyens sont à votre disposition :
      </p>
      <ul>
        <li>
          <MagicLink to='https://formulaire.defenseurdesdroits.fr/defenseur/code/afficher.php?ETAPE=informations'>
            un formulaire de contact
          </MagicLink>{' '}
          ;
        </li>
        <li>
          <MagicLink to='www.defenseurdesdroits.fr/office/'>
            la liste du ou des délégués de votre région
          </MagicLink>{' '}
          avec leurs informations de contact direct ;
        </li>
        <li>un numéro de téléphone : 09 69 39 00 00 ;</li>
        <li>
          une adresse postale (courrier gratuit, sans affranchissement) : Le
          Défenseur des droits - Libre réponse 71120 - 75342 Paris CEDEX 07.
        </li>
      </ul>
    </>
  )
}
