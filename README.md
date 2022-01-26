# Mon Impact Transport

Application web et API permettant de comparer la consommation en CO2e de différents modes de transport.

https://monimpacttransport.fr/

https://api.monimpacttransport.fr/beta/getEmissionsPerDistance

## Application Web

### Développement

`yarn` pour installer l'application

`yarn start` pour lancer l'application sur [http://localhost:3000](http://localhost:3000)

### Déploiement

Hébergement via Netlify. Il suffit de push sur ce repo (branche master) pour déployer.

## API

Retourne la liste des modes de transport avec leur impact calculé pour une distance (paramètre **km**) donnée.

### Exemples

https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km=250

https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km=250&filter=smart&fields=emoji,description

https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km=250&transportations=4,9,7

### Paramètres

**Number** (défaut: **1**)
Distance en km utilisée pour le calcul de l'impact des modes de transport

---

**filter**: String (défaut : **auto**)
Mode de filtrage (n'est pas pris en compte si le paramètre **transportations** est défini)

Valeurs possibles :

- **smart** : renvoie les modes de transport pertinents pour la distance (pas d'avion en dessous de 500km par exemple)
- **all** : renvoie les modes de transport dont l'impact est connu.

---

**transportations**: Number[]
ID des modes de transport à retourner, séparé par des virgules

---

**ignoreRadiativeForcing**: Boolean (défaut: **false**)
Si **true** l'api ignore l'impact des trainées ([forçage radiatif](https://fr.wikipedia.org/wiki/For%C3%A7age_radiatif)) dans son calcul de l'impact de l'avion

---

**fields**: String[] (défaut: **id, name, emissions**)
Détermine la liste des champs retournés par l'api.

Valeurs possibles :

- **id** (toujours retourné)
- **source**
- **name** (toujours retourné)
- **emoji**
- **description**
- **carpool**
- **emissions** (toujours retourné)
- **display**
