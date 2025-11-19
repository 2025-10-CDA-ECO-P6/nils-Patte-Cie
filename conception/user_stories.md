## User Stories

### Fonctionnalités Vétérinaire

#### US-00 : Créer une consultation

**En tant que** vétérinaire  **Je veux** pouvoir créer une consultation  **Afin de** enregistrer les informations médicales de l'animal

**Critères d'acceptation :**
- Je peux sélectionner l'animal dans la liste ou via la barre de recherche
- Je peux saisir la date, le motif, le diagnostic, le traitement et les observations
- La consultation est enregistrée et visible dans l'historique de l'animal

---

#### US-01 : Consulter l'historique médical d'un animal

**En tant que** vétérinaire **Je veux** pouvoir accéder à l'historique d'un animal  **Afin de** connaître son suivi médical complet

**Critères d'acceptation :**
- Je vois toutes les consultations antérieures triées par dates
- Je vois les vaccinations effectuées avec les dates de rappels
- Je peux consulter les documents médicaux associés

---

#### US-02 : Administrer un vaccin

**En tant que** vétérinaire  **Je veux** pouvoir enregistrer une vaccination  **Afin de** mettre à jour le carnet de santé d'un animal

**Critères d'acceptation :**
- Je peux choisir le vaccin dans une liste prédéfinie
- Je peux saisir la date d'administration
- La date de rappel est calculée automatiquement selon le type de vaccin
- Je peux lier la vaccination à une consultation existante
- La vaccination est visible dans l'historique de l'animal

---

#### US-03 : Modifier une consultation

**En tant que** vétérinaire  **Je veux** pouvoir modifier une consultation existante  **Afin de** corriger ou compléter les informations

**Critères d'acceptation :**
- Je peux accéder à mes consultations passées
- Je peux modifier : diagnostic, traitement, observations
- Les modifications sont datées
- Seul le vétérinaire ayant créé la consultation peut la modifier

---

#### US-04 : Gérer les informations d'un animal

**En tant que** vétérinaire  **Je veux** consulter et mettre à jour les informations d'un animal **Afin de** maintenir un dossier patient précis

**Critères d'acceptation :**
- Je peux modifier le poids, le statut de stérilisation, le statut actif/inactif (avec une date)
- Les modifications sont datées

---

#### US-05 : Rechercher un animal ou un propriétaire

**En tant que** vétérinaire  **Je veux** rechercher rapidement un animal ou un propriétaire  **Afin d'** accéder à son dossier médical

**Critères d'acceptation :**
- Je peux rechercher par nom d'animal, nom de propriétaire, ou numéro
- Je peux cliquer sur un résultat pour ouvrir le dossier complet
- La recherche fonctionne même avec des fautes de frappe mineures

---

#### US-06 : Consulter mon planning

**En tant que** vétérinaire  **Je veux** voir la liste de mes consultations  **Afin de** organiser mon emploi du temps

**Critères d'acceptation :**
- Je vois toutes mes consultations triées par date
- Je peux filtrer par période (aujourd'hui, cette semaine, ce mois)
- Je vois les informations essentielles : animal, propriétaire, motif

---

### Fonctionnalités Propriétaire

#### US-07 : Créer un compte propriétaire

**En tant que** nouveau client  **Je veux** créer un compte  **Afin de** gérer les informations de mes animaux

**Critères d'acceptation :**
- Je peux m'inscrire avec : nom, prénom, email, téléphone, adresse
- Je reçois un email de confirmation
- Mon compte est actif après confirmation
- Je peux me connecter avec mes identifiants

---

#### US-08 : Enregistrer un animal

**En tant que** propriétaire  **Je veux** ajouter un nouvel animal à mon compte  **Afin de** suivre sa santé

**Critères d'acceptation :**
- Je peux saisir : nom, date de naissance, sexe, race, espèce
- Je peux indiquer s'il est stérilisé
- L'animal est associé à mon compte
- Je peux me connecter avec mes identifiants
- Je peux enregistrer plusieurs animaux

---

#### US-09 : Consulter le dossier médical de mon animal

**En tant que** propriétaire  **Je veux** consulter l'historique médical de mon animal  **Afin de** suivre son état de santé

**Critères d'acceptation :**
- Je vois toutes les consultations passées avec dates et motifs
- Je vois les vaccinations avec les prochaines dates de rappel
- Je peux télécharger les documents médicaux
- Je ne peux voir que mes propres animaux

---

#### US-10 : Modifier mes informations personnelles

**En tant que** propriétaire  **Je veux** pouvoir modifier mes informations personnelles  **Afin de** maintenir mes coordonnées à jour

**Critères d'acceptation :**
- Je peux modifier : téléphone, email, adresse
- Les modifications sont enregistrées immédiatement
- Mon historique et mes animaux restent inchangés

---

#### US-11 : Recevoir des notifications de rappel

**En tant que** propriétaire  **Je veux** être notifié des rappels de vaccination  **Afin de** ne pas oublier les rendez-vous importants

**Critères d'acceptation :**
- Je reçois un email/SMS 1 mois avant la date de rappel
- Je reçois un SMS 1 semaine avant la date de rappel
- Je peux configurer mes préférences de notification
- Les notifications mentionnent l'animal concerné et le type de vaccin

---

#### US-12 : Consulter la liste de mes animaux

**En tant que** propriétaire  **Je veux** voir tous mes animaux sur un tableau de bord  **Afin d'** avoir une vue d'ensemble

**Critères d'acceptation :**
- Je vois une carte par animal
- Je vois les informations essentielles
- Je peux cliquer sur un animal pour voir son dossier complet
- Les notifications mentionnent l'animal concerné et le type de vaccin
- Les animaux décédés sont marqués visuellement mais restent accessibles

---
