## Dictionnaire de Données


## Table USER

**Description :** Table centralisée pour tous les utilisateurs du système (propriétaires et vétérinaires)

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique de l'utilisateur (UUID) | 550e8400-e29b-41d4-a716-446655440000 |
| first_name | VARCHAR | 100 | NOT NULL | Prénom de l'utilisateur | Jean |
| last_name | VARCHAR | 100 | NOT NULL | Nom de famille de l'utilisateur | Dupont |
| email | VARCHAR | 150 | NOT NULL, UNIQUE | Adresse email | jean.dupont@email.com |
| password | VARCHAR | 255 | NOT NULL | Mot de passe hashé | $2y$10$92IXUNpkjO0rOQ5byMi.Ye... |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création du compte | 2024-01-15 14:30:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2024-11-18 10:20:00 |

---

## Table ROLES

**Description :** Table des rôles disponibles dans le système

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique du rôle (UUID) | a1b2c3d4-e5f6-7890-abcd-ef1234567890 |
| label | VARCHAR | 50 | NOT NULL, UNIQUE | Nom du rôle | VETERINAIRE |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création | 2023-01-01 00:00:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2023-01-01 00:00:00 |

**Valeurs prédéfinies :**
- PROPRIETAIRE
- VETERINAIRE

---

## Table USER_ROLES (Table pivot)

**Description :** Association entre utilisateurs et rôles (relation Many-to-Many)

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| user_ID | VARCHAR | 36 | PK, FK(USER), NOT NULL, INDEX | Référence vers USER | 550e8400-e29b-41d4-a716-446655440000 |
| role_ID | VARCHAR | 36 | PK, FK(ROLES), NOT NULL | Référence vers ROLES | a1b2c3d4-e5f6-7890-abcd-ef1234567890 |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date d'attribution du rôle | 2024-01-15 14:30:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2024-01-15 14:30:00 |

---

## Table ANIMAL

**Description :** Animaux enregistrés dans le système

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique de l'animal (UUID) | 7c9e6679-7425-40de-944b-e07fc1f90ae7 |
| owner_ID | VARCHAR | 36 | FK(USER), NOT NULL, INDEX | Référence au propriétaire (USER) | 550e8400-e29b-41d4-a716-446655440000 |
| breed_ID | VARCHAR | 36 | FK(BREED), NOT NULL, INDEX | Référence à la race (BREED) | 8f14e45f-ceea-467a-9b59-4a130aa136c0 |
| name | VARCHAR | 100 | NOT NULL | Nom de l'animal | Max |
| age | INT | - | NULL | Âge de l'animal en années | 5 |
| allergies | TEXT | - | NULL | Liste des allergies connues de l'animal | Allergie aux protéines de bœuf, pollen |
| image_path | VARCHAR | 500 | NULL | Chemin de stockage de la photo de l'animal | /uploads/animals/2024/11/max_photo.jpg |
| is_up_to_date | BOOLEAN | - | NOT NULL, DEFAULT TRUE | Vaccins à jour | TRUE |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date d'enregistrement | 2022-03-20 11:45:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2024-10-05 16:30:00 |

---


## Table SPECIES (Espèce)

**Description :** Espèces d'animaux (Chien, Chat, etc.)

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique de l'espèce (UUID) | 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d |
| label | VARCHAR | 100 | NOT NULL, UNIQUE | Nom de l'espèce | Chien |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création | 2023-01-01 00:00:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2023-01-01 00:00:00 |

**Valeurs prédéfinies :**
- Chien
- Chat
- Oiseaux
- Reptiles

---

## Table BREED (Race)

**Description :** Races d'animaux disponibles, liées à une espèce

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique de la race (UUID) | 8f14e45f-ceea-467a-9b59-4a130aa136c0 |
| species_ID | VARCHAR | 36 | FK(SPECIES), NOT NULL, INDEX | Référence vers SPECIES | 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d |
| label | VARCHAR | 100 | NOT NULL, UNIQUE(species_ID, label) | Nom de la race | Labrador |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création | 2023-01-01 00:00:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2023-01-01 00:00:00 |

---

## Table VACCIN

**Description :** Types de vaccins disponibles

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique du vaccin (UUID) | d789e456-12ab-34cd-56ef-789012345678 |
| label | VARCHAR | 150 | NOT NULL, UNIQUE | Nom du vaccin | Vaccin antirabique (Rage) |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création | 2023-01-01 00:00:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2023-01-01 00:00:00 |

---

## Table SPECIES_VACCIN (Table pivot)

**Description :** Association entre espèces et vaccins  (relation Many-to-Many). Définit quels vaccins sont obligatoires ou recommandés pour chaque espèce.

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| species_ID | VARCHAR | 36 | PK, FK(SPECIES), NOT NULL, INDEX | Référence vers SPECIES | 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d |
| vaccin_ID | VARCHAR | 36 | PK, FK(VACCIN), NOT NULL | Référence vers VACCIN | d789e456-12ab-34cd-56ef-789012345678 |
| label | VARCHAR | 100 | NULL | Description ou note spécifique | Obligatoire pour sortie du territoire |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création | 2023-01-01 00:00:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2023-01-01 00:00:00 |

---

## Table BREED_VACCIN (Table pivot)

**Description :** Association entre races et vaccins spécifiques (relation Many-to-Many). Définit les vaccins particuliers recommandés pour certaines races en complément des vaccins de l'espèce.

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| breed_ID | VARCHAR | 36 | PK, FK(BREED), NOT NULL, INDEX | Référence vers BREED | 8f14e45f-ceea-467a-9b59-4a130aa136c0 |
| vaccin_ID | VARCHAR | 36 | PK, FK(VACCIN), NOT NULL | Référence vers VACCIN | d789e456-12ab-34cd-56ef-789012345678 |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création | 2023-01-01 00:00:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2023-01-01 00:00:00 |

---

## Table CONSULTATION

**Description :** Consultations vétérinaires effectuées sur les animaux

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique de la consultation (UUID) | a3bb189e-8bf9-3888-9912-ace4e6543002 |
| animal_ID | VARCHAR | 36 | FK(ANIMAL), NOT NULL, INDEX | Référence vers ANIMAL | 7c9e6679-7425-40de-944b-e07fc1f90ae7 |
| veterinaire_ID | VARCHAR | 36 | FK(USER), NOT NULL, INDEX | Référence vers USER (vétérinaire) | 6ba7b810-9dad-11d1-80b4-00c04fd430c8 |
| date | DATETIME | - | NOT NULL | Date et heure de la consultation | 2024-11-15 14:00:00 |
| motif | TEXT | - | NOT NULL | Raison de la consultation | Vaccination annuelle et contrôle général |
| diagnostic | TEXT | - | NULL | Diagnostic établi par le vétérinaire | Animal en bonne santé, vaccins à jour |
| traitement | TEXT | - | NULL | Traitement prescrit | Antiparasitaire (1 comprimé/mois pendant 3 mois) |
| observations | TEXT | - | NULL | Observations complémentaires | Légère surcharge pondérale, recommandation de régime |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création de l'enregistrement | 2024-11-15 14:30:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2024-11-15 14:30:00 |

---

## Table VACCINATION

**Description :** Vaccinations administrées aux animaux lors de consultations

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique de la vaccination (UUID) | c56a4180-65aa-42ec-a945-5fd21dec0538 |
| animal_ID | VARCHAR | 36 | FK(ANIMAL), NOT NULL, INDEX | Référence vers ANIMAL | 7c9e6679-7425-40de-944b-e07fc1f90ae7 |
| vaccin_ID | VARCHAR | 36 | FK(VACCIN), NOT NULL, INDEX | Référence vers VACCIN | d789e456-12ab-34cd-56ef-789012345678 |
| consultation_ID | VARCHAR | 36 | FK(CONSULTATION), NOT NULL, INDEX | Référence vers CONSULTATION | a3bb189e-8bf9-3888-9912-ace4e6543002 |
| date_administration | DATE | - | NOT NULL | Date d'administration du vaccin | 2024-11-15 |
| date_rappel | DATE | - | NULL, INDEX | Date prévue pour le rappel | 2025-11-15 |
| numero_lot | VARCHAR | 100 | NULL | Numéro de lot du vaccin | LOT2024-VR-0156 |
| observations | TEXT | - | NULL | Observations complémentaires | Aucune réaction adverse observée |
| est_effectue | BOOLEAN | - | NOT NULL, DEFAULT TRUE | Statut de réalisation | TRUE |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date de création de l'enregistrement | 2024-11-15 14:15:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2024-11-15 14:15:00 |

---

## Table DOCUMENT

**Description :** Documents médicaux associés aux consultations

| Attribut | Type | Taille | Contrainte | Description | Exemple |
|----------|------|--------|------------|-------------|---------|
| ID | VARCHAR | 36 | PK, NOT NULL | Identifiant unique du document (UUID) | b4962a84-6cdb-4d3a-9c5f-123456789abc |
| consultation_ID | VARCHAR | 36 | FK(CONSULTATION), NOT NULL, INDEX | Référence vers CONSULTATION | a3bb189e-8bf9-3888-9912-ace4e6543002 |
| chemin_fichier | VARCHAR | 500 | NOT NULL | Chemin de stockage du fichier | /uploads/documents/2024/11/radio_max_20241115.pdf |
| type_fichier | VARCHAR | 50 | NOT NULL | Type/extension du fichier (pdf, jpg, etc.) | pdf |
| created_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Date d'upload | 2024-11-15 14:35:00 |
| updated_at | DATETIME | - | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | Date de dernière modification | 2024-11-15 14:35:00 |

---

## Schéma des Relations

### Relations principales

**USER (1) ← POSSEDE → (n) ANIMAL**
- Un propriétaire peut avoir plusieurs animaux
- Un animal appartient à un seul propriétaire

**USER (1) ← REALISE → (n) CONSULTATION**
- Un vétérinaire peut effectuer plusieurs consultations
- Une consultation est réalisée par un seul vétérinaire

**ANIMAL (1) ← FAIT L'OBJET DE → (n) CONSULTATION**
- Un animal peut avoir plusieurs consultations
- Une consultation concerne un seul animal

**CONSULTATION (1) ← CONTIENT → (n) VACCINATION**
- Une consultation peut inclure plusieurs vaccinations
- Une vaccination appartient obligatoirement à une consultation

**CONSULTATION (1) ← CONTIENT → (n) DOCUMENT**
- Une consultation peut avoir plusieurs documents
- Un document appartient à une seule consultation

**SPECIES (1) ← CONCERNE → (n) BREED**
- Une espèce peut avoir plusieurs races
- Une race appartient à une seule espèce

**BREED (1) ← APPARTIENT A → (n) ANIMAL**
- Une race peut concerner plusieurs animaux
- Un animal appartient à une seule race

### Relations Many-to-Many (tables pivot)

**USER (n) ← USER_ROLES → (n) ROLES**
- Un utilisateur peut avoir plusieurs rôles
- Un rôle peut être attribué à plusieurs utilisateurs

**SPECIES (n) ← SPECIES_VACCIN → (n) VACCIN**
- Une espèce peut avoir plusieurs vaccins recommandés
- Un vaccin peut être recommandé pour plusieurs espèces

**BREED (n) ← BREED_VACCIN → (n) VACCIN**
- Une race peut avoir des vaccins spécifiques
- Un vaccin peut être spécifique à plusieurs races
