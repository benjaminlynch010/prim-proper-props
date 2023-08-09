-- CREATE DATABASE "prim-proper-props"

CREATE TABLE guests (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "kidsMeal" BOOLEAN DEFAULT FALSE
);

INSERT INTO guests ("name", "kidsMeal")
VALUES ('Edan', false), ('Dane', false), ('Winnie', true);
