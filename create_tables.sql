CREATE TABLE IF NOT EXISTS books(

  isbn NUMERIC PRIMARY KEY UNIQUE,
  name VARCHAR(128) NOT NULL,
  author VARCHAR(128) NOT NULL,
  pages NUMERIC NOT NULL,
  copies NUMERIC NOT NULL
);

