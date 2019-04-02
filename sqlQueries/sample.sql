DROP TABLE minerales;

CREATE TABLE minerales
(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR (50) UNIQUE NOT NULL,
  surname VARCHAR (50) NOT NULL,
  email VARCHAR (355) UNIQUE NOT NULL
);

ALTER TABLE minerales OWNER to postgres;


INSERT INTO minerales (name, surname, email) VALUES ('Rolando', 'Andrade','rolandoandradefernandez@gmail.com');

SELECT * FROM minerales;